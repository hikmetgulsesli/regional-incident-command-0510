/**
 * Convenience hook that exposes typed slices of app state and common actions.
 * Built on top of useAppContext.
 */

import { useCallback } from 'react';
import { useAppContext } from '../contexts/AppContext';
import type { Screen, Incident, Unit, Resource, AppSettings, OperatorProfile } from '../types/domain';

export function useAppState() {
  const { state, dispatch } = useAppContext();

  const navigate = useCallback(
    (screen: Screen) => dispatch({ type: 'NAVIGATE', screen }),
    [dispatch]
  );

  const goBack = useCallback(() => dispatch({ type: 'GO_BACK' }), [dispatch]);

  const setIncidents = useCallback(
    (incidents: Incident[]) => dispatch({ type: 'SET_INCIDENTS', incidents }),
    [dispatch]
  );

  const addIncident = useCallback(
    (incident: Incident) => dispatch({ type: 'ADD_INCIDENT', incident }),
    [dispatch]
  );

  const updateIncident = useCallback(
    (incident: Incident) => dispatch({ type: 'UPDATE_INCIDENT', incident }),
    [dispatch]
  );

  const deleteIncident = useCallback(
    (id: string) => dispatch({ type: 'DELETE_INCIDENT', id }),
    [dispatch]
  );

  const setUnits = useCallback(
    (units: Unit[]) => dispatch({ type: 'SET_UNITS', units }),
    [dispatch]
  );

  const setResources = useCallback(
    (resources: Resource[]) => dispatch({ type: 'SET_RESOURCES', resources }),
    [dispatch]
  );

  const updateSettings = useCallback(
    (settings: Partial<AppSettings>) => dispatch({ type: 'UPDATE_SETTINGS', settings }),
    [dispatch]
  );

  const updateProfile = useCallback(
    (profile: Partial<OperatorProfile>) => dispatch({ type: 'UPDATE_PROFILE', profile }),
    [dispatch]
  );

  const selectIncident = useCallback(
    (id: string | null) => dispatch({ type: 'SELECT_INCIDENT', id }),
    [dispatch]
  );

  const setSearch = useCallback(
    (query: string) => dispatch({ type: 'SET_SEARCH', query }),
    [dispatch]
  );

  const toggleProfile = useCallback(
    (open?: boolean) => dispatch({ type: 'TOGGLE_PROFILE', open }),
    [dispatch]
  );

  const setStorageError = useCallback(
    (error: string | null) => dispatch({ type: 'SET_STORAGE_ERROR', error }),
    [dispatch]
  );

  const clearStorageError = useCallback(
    () => dispatch({ type: 'CLEAR_STORAGE_ERROR' }),
    [dispatch]
  );

  const setLoading = useCallback(
    (loading: boolean) => dispatch({ type: 'SET_LOADING', loading }),
    [dispatch]
  );

  const showToast = useCallback(
    (message: string, toastType: 'success' | 'error' | 'info') =>
      dispatch({ type: 'SHOW_TOAST', message, toastType }),
    [dispatch]
  );

  const hideToast = useCallback(() => dispatch({ type: 'HIDE_TOAST' }), [dispatch]);

  const hydrate = useCallback(
    (saved: { version: number; incidents: Incident[]; units: Unit[]; resources: Resource[]; settings: AppSettings; profile: OperatorProfile }) =>
      dispatch({ type: 'HYDRATE', state: saved }),
    [dispatch]
  );

  const reset = useCallback(() => dispatch({ type: 'RESET_APP' }), [dispatch]);

  return {
    state,
    navigate,
    goBack,
    setIncidents,
    addIncident,
    updateIncident,
    deleteIncident,
    setUnits,
    setResources,
    updateSettings,
    updateProfile,
    selectIncident,
    setSearch,
    toggleProfile,
    setStorageError,
    clearStorageError,
    setLoading,
    showToast,
    hideToast,
    hydrate,
    reset,
  };
}
