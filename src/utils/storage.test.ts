import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import {
  loadState,
  saveState,
  retrySave,
  clearStorage,
  isStorageAvailable,
  StorageError,
} from './storage';
import { STORAGE_KEY, STORAGE_VERSION } from '../types/domain';

const validState = {
  version: STORAGE_VERSION,
  incidents: [],
  units: [],
  resources: [],
  settings: {
    emailNotifications: true,
    smsAlerts: false,
    autoDispatch: false,
    dataRetentionDays: 90,
    highContrast: false,
    reduceMotion: false,
    largeText: false,
    defaultView: 'Global Dashboard',
    mapOverlay: false,
    dataRetentionInterval: '1 Hour',
  },
  profile: { name: 'Cmdr. Test', role: 'Tester', sector: 'Test Sector' },
};

describe('storage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  afterEach(() => {
    localStorage.clear();
  });

  it('returns null when nothing is stored', () => {
    expect(loadState()).toBeNull();
  });

  it('saves and loads valid state', () => {
    saveState(validState);
    const loaded = loadState();
    expect(loaded).toEqual(validState);
  });

  it('throws StorageError for corrupt JSON', () => {
    localStorage.setItem(STORAGE_KEY, 'not-json');
    expect(() => loadState()).toThrow(StorageError);
  });

  it('throws StorageError for invalid shape', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ version: 1, incidents: 'bad' }));
    expect(() => loadState()).toThrow(StorageError);
  });

  it('throws StorageError for version mismatch', () => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...validState, version: 99 })
    );
    expect(() => loadState()).toThrow(StorageError);
  });

  it('clears storage', () => {
    saveState(validState);
    clearStorage();
    expect(loadState()).toBeNull();
  });

  it('detects storage availability', () => {
    expect(isStorageAvailable()).toBe(true);
  });

  it('retrySave succeeds on first attempt', async () => {
    const ok = await retrySave(validState);
    expect(ok).toBe(true);
    expect(loadState()).toEqual(validState);
  });

  it('retrySave exhausts retries on persistent failure', async () => {
    // Simulate quota error by stubbing Storage.prototype.setItem
    const original = Storage.prototype.setItem;
    let callCount = 0;
    Storage.prototype.setItem = function (...args: Parameters<typeof original>) {
      callCount++;
      const err = new Error('QuotaExceededError');
      err.name = 'QuotaExceededError';
      throw err;
    };
    const ok = await retrySave(validState, 2);
    expect(ok).toBe(false);
    expect(callCount).toBe(2);
    Storage.prototype.setItem = original;
  });
});
