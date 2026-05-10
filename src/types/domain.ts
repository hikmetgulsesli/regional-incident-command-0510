/**
 * Domain types for Regional Incident Command.
 * Every persisted record includes id, createdAt, and updatedAt.
 */

export type Severity = 'critical' | 'high' | 'medium' | 'low';
export type IncidentStatus = 'active' | 'resolved' | 'pending' | 'escalated';
export type UnitStatus = 'dispatched' | 'en_route' | 'on_scene' | 'returning' | 'standby';
export type ResourceType = 'vehicle' | 'equipment' | 'personnel' | 'supply';

export interface Incident {
  id: string;
  title: string;
  location: string;
  severity: Severity;
  status: IncidentStatus;
  reportedAt: string;
  updatedAt: string;
  description: string;
  assignedUnits: string[];
  evidenceCount: number;
  residentReports: number;
}

export interface Unit {
  id: string;
  name: string;
  type: string;
  status: UnitStatus;
  location: string;
  lastUpdate: string;
}

export interface Resource {
  id: string;
  name: string;
  type: ResourceType;
  quantity: number;
  available: number;
  health: number; // 0-100
  location: string;
}

export interface AppSettings {
  emailNotifications: boolean;
  smsAlerts: boolean;
  autoDispatch: boolean;
  dataRetentionDays: number;
  highContrast: boolean;
  reduceMotion: boolean;
  largeText: boolean;
}

export interface OperatorProfile {
  name: string;
  role: string;
  sector: string;
  avatarUrl?: string;
}

export type Screen =
  | 'dashboard'
  | 'insights'
  | 'settings'
  | 'incident-detail'
  | 'new-incident'
  | 'error-recovery'
  | 'profile';

export interface AppState {
  currentScreen: Screen;
  previousScreen: Screen | null;
  incidents: Incident[];
  units: Unit[];
  resources: Resource[];
  settings: AppSettings;
  profile: OperatorProfile;
  searchQuery: string;
  selectedIncidentId: string | null;
  profileOpen: boolean;
  storageError: string | null;
  isLoading: boolean;
  toast: { message: string; type: 'success' | 'error' | 'info' } | null;
}

export const DEFAULT_SETTINGS: AppSettings = {
  emailNotifications: true,
  smsAlerts: false,
  autoDispatch: false,
  dataRetentionDays: 90,
  highContrast: false,
  reduceMotion: false,
  largeText: false,
};

export const DEFAULT_PROFILE: OperatorProfile = {
  name: 'Cmdr. Jane Doe',
  role: 'Regional Supervisor',
  sector: 'HQ Alpha',
};

export const STORAGE_KEY = 'regional-incident-command-v1';
export const STORAGE_VERSION = 1;
