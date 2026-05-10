/**
 * localStorage persistence with versioning, error handling, retry, and clear.
 * Storage schema is versioned; corrupt JSON shows a visible error state.
 */

import {
  type AppState,
  type AppSettings,
  type OperatorProfile,
  type Incident,
  type Unit,
  type Resource,
  STORAGE_KEY,
  STORAGE_VERSION,
} from '../types/domain';

export interface PersistedState {
  version: number;
  incidents: Incident[];
  units: Unit[];
  resources: Resource[];
  settings: AppSettings;
  profile: OperatorProfile;
}

export class StorageError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'StorageError';
  }
}

function safeStringify(data: unknown): string {
  try {
    return JSON.stringify(data);
  } catch (e) {
    throw new StorageError('Failed to serialize application state.');
  }
}

function safeParse(raw: string): unknown {
  try {
    return JSON.parse(raw);
  } catch (e) {
    throw new StorageError('Stored data is corrupt and cannot be parsed.');
  }
}

function validateShape(data: unknown): data is PersistedState {
  if (typeof data !== 'object' || data === null) return false;
  const d = data as Record<string, unknown>;
  return (
    typeof d.version === 'number' &&
    Array.isArray(d.incidents) &&
    Array.isArray(d.units) &&
    Array.isArray(d.resources) &&
    typeof d.settings === 'object' &&
    typeof d.profile === 'object'
  );
}

/**
 * Load persisted state from localStorage.
 * Returns null if nothing is stored.
 * Throws StorageError if data is corrupt or version mismatch.
 */
export function loadState(): PersistedState | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return null;

  const parsed = safeParse(raw);

  if (!validateShape(parsed)) {
    throw new StorageError('Stored data structure is invalid.');
  }

  if (parsed.version !== STORAGE_VERSION) {
    throw new StorageError(
      `Storage version mismatch: expected ${STORAGE_VERSION}, found ${parsed.version}.`
    );
  }

  return parsed;
}

/**
 * Save state to localStorage.
 * Throws StorageError on serialization or quota failure.
 */
export function saveState(state: PersistedState): void {
  const payload = safeStringify(state);
  try {
    localStorage.setItem(STORAGE_KEY, payload);
  } catch (e) {
    if (e instanceof Error && e.name === 'QuotaExceededError') {
      throw new StorageError('Storage quota exceeded. Clear app data to continue.');
    }
    throw new StorageError('Failed to write to localStorage.');
  }
}

/**
 * Retry save with exponential backoff (for transient storage failures).
 * Returns true if successful, false if all retries exhausted.
 */
export async function retrySave(state: PersistedState, maxAttempts = 3): Promise<boolean> {
  for (let attempt = 1; attempt <= maxAttempts; attempt++) {
    try {
      saveState(state);
      return true;
    } catch (e) {
      if (attempt === maxAttempts) return false;
      const delay = Math.min(1000 * Math.pow(2, attempt - 1), 4000);
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  return false;
}

/**
 * Clear all persisted application data.
 */
export function clearStorage(): void {
  localStorage.removeItem(STORAGE_KEY);
}

/**
 * Check if localStorage is available (not disabled by browser policy).
 */
export function isStorageAvailable(): boolean {
  try {
    const test = '__storage_test__';
    localStorage.setItem(test, test);
    localStorage.removeItem(test);
    return true;
  } catch {
    return false;
  }
}
