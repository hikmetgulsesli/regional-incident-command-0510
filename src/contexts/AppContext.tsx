/**
 * Global application context with reducer-based state management.
 * Provides app state, dispatch actions, and persistence integration.
 */

import React, { createContext, useContext, useReducer, useEffect, useCallback } from 'react';
import {
  type AppState,
  type Screen,
  type Incident,
  type Unit,
  type Resource,
  type AppSettings,
  type OperatorProfile,
  DEFAULT_SETTINGS,
  DEFAULT_PROFILE,
} from '../types/domain';
import {
  loadState,
  saveState,
  clearStorage,
  isStorageAvailable,
  retrySave,
  type PersistedState,
} from '../utils/storage';

export type Action =
  | { type: 'NAVIGATE'; screen: Screen }
  | { type: 'GO_BACK' }
  | { type: 'SET_INCIDENTS'; incidents: Incident[] }
  | { type: 'ADD_INCIDENT'; incident: Incident }
  | { type: 'UPDATE_INCIDENT'; incident: Incident }
  | { type: 'DELETE_INCIDENT'; id: string }
  | { type: 'SET_UNITS'; units: Unit[] }
  | { type: 'SET_RESOURCES'; resources: Resource[] }
  | { type: 'UPDATE_SETTINGS'; settings: Partial<AppSettings> }
  | { type: 'UPDATE_PROFILE'; profile: Partial<OperatorProfile> }
  | { type: 'SELECT_INCIDENT'; id: string | null }
  | { type: 'SET_SEARCH'; query: string }
  | { type: 'TOGGLE_PROFILE'; open?: boolean }
  | { type: 'SET_STORAGE_ERROR'; error: string | null }
  | { type: 'CLEAR_STORAGE_ERROR' }
  | { type: 'SET_LOADING'; loading: boolean }
  | { type: 'SHOW_TOAST'; message: string; toastType: 'success' | 'error' | 'info' }
  | { type: 'HIDE_TOAST' }
  | { type: 'HYDRATE'; state: PersistedState }
  | { type: 'RESET_APP' };

function reducer(state: AppState, action: Action): AppState {
  switch (action.type) {
    case 'NAVIGATE':
      return {
        ...state,
        previousScreen: state.currentScreen,
        currentScreen: action.screen,
        profileOpen: false,
      };
    case 'GO_BACK':
      return {
        ...state,
        currentScreen: state.previousScreen ?? 'dashboard',
        previousScreen: null,
      };
    case 'SET_INCIDENTS':
      return { ...state, incidents: action.incidents };
    case 'ADD_INCIDENT':
      return { ...state, incidents: [action.incident, ...state.incidents] };
    case 'UPDATE_INCIDENT':
      return {
        ...state,
        incidents: state.incidents.map((i) =>
          i.id === action.incident.id ? action.incident : i
        ),
      };
    case 'DELETE_INCIDENT':
      return {
        ...state,
        incidents: state.incidents.filter((i) => i.id !== action.id),
        selectedIncidentId:
          state.selectedIncidentId === action.id ? null : state.selectedIncidentId,
      };
    case 'SET_UNITS':
      return { ...state, units: action.units };
    case 'SET_RESOURCES':
      return { ...state, resources: action.resources };
    case 'UPDATE_SETTINGS':
      return { ...state, settings: { ...state.settings, ...action.settings } };
    case 'UPDATE_PROFILE':
      return { ...state, profile: { ...state.profile, ...action.profile } };
    case 'SELECT_INCIDENT':
      return { ...state, selectedIncidentId: action.id };
    case 'SET_SEARCH':
      return { ...state, searchQuery: action.query };
    case 'TOGGLE_PROFILE':
      return {
        ...state,
        profileOpen: action.open !== undefined ? action.open : !state.profileOpen,
      };
    case 'SET_STORAGE_ERROR':
      return { ...state, storageError: action.error };
    case 'CLEAR_STORAGE_ERROR':
      return { ...state, storageError: null };
    case 'SET_LOADING':
      return { ...state, isLoading: action.loading };
    case 'SHOW_TOAST':
      return {
        ...state,
        toast: { message: action.message, type: action.toastType },
      };
    case 'HIDE_TOAST':
      return { ...state, toast: null };
    case 'HYDRATE':
      return {
        ...state,
        incidents: action.state.incidents,
        units: action.state.units,
        resources: action.state.resources,
        settings: action.state.settings,
        profile: action.state.profile,
      };
    case 'RESET_APP':
      return {
        ...initialAppState(),
        currentScreen: 'dashboard',
        previousScreen: null,
      };
    default:
      return state;
  }
}

function initialAppState(): AppState {
  return {
    currentScreen: 'dashboard',
    previousScreen: null,
    incidents: [],
    units: [],
    resources: [],
    settings: { ...DEFAULT_SETTINGS },
    profile: { ...DEFAULT_PROFILE },
    searchQuery: '',
    selectedIncidentId: null,
    profileOpen: false,
    storageError: null,
    isLoading: true,
    toast: null,
  };
}

function toPersistedState(state: AppState): PersistedState {
  return {
    version: 1,
    incidents: state.incidents,
    units: state.units,
    resources: state.resources,
    settings: state.settings,
    profile: state.profile,
  };
}

interface AppContextValue {
  state: AppState;
  dispatch: React.Dispatch<Action>;
  persist: () => Promise<boolean>;
  clearAndReset: () => void;
}

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialAppState());

  // Hydrate from storage on mount
  useEffect(() => {
    if (!isStorageAvailable()) {
      dispatch({
        type: 'SET_STORAGE_ERROR',
        error: 'localStorage is not available. Data will not persist across sessions.',
      });
      dispatch({ type: 'SET_LOADING', loading: false });
      return;
    }

    try {
      const saved = loadState();
      if (saved) {
        dispatch({ type: 'HYDRATE', state: saved });
      }
    } catch (e) {
      const message = e instanceof Error ? e.message : 'Failed to load saved data.';
      dispatch({ type: 'SET_STORAGE_ERROR', error: message });
    } finally {
      dispatch({ type: 'SET_LOADING', loading: false });
    }
  }, []);

  // Auto-persist whenever state changes (debounced)
  useEffect(() => {
    if (state.isLoading) return;

    const timer = setTimeout(() => {
      if (!isStorageAvailable()) return;
      retrySave(toPersistedState(state)).catch(() => {
        dispatch({
          type: 'SET_STORAGE_ERROR',
          error: 'Auto-save failed. Changes may not persist.',
        });
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [state.incidents, state.units, state.resources, state.settings, state.profile]);

  const persist = useCallback(async (): Promise<boolean> => {
    if (!isStorageAvailable()) {
      dispatch({
        type: 'SET_STORAGE_ERROR',
        error: 'localStorage is not available. Cannot persist data.',
      });
      return false;
    }
    const ok = await retrySave(toPersistedState(state));
    if (ok) {
      dispatch({ type: 'CLEAR_STORAGE_ERROR' });
      dispatch({ type: 'SHOW_TOAST', message: 'Data saved successfully.', toastType: 'success' });
    } else {
      dispatch({ type: 'SET_STORAGE_ERROR', error: 'Failed to persist data after multiple retries.' });
    }
    return ok;
  }, [state]);

  const clearAndReset = useCallback(() => {
    clearStorage();
    dispatch({ type: 'RESET_APP' });
    dispatch({ type: 'SHOW_TOAST', message: 'App data cleared. Starting fresh.', toastType: 'info' });
  }, []);

  return (
    <AppContext.Provider value={{ state, dispatch, persist, clearAndReset }}>
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext(): AppContextValue {
  const ctx = useContext(AppContext);
  if (!ctx) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return ctx;
}
