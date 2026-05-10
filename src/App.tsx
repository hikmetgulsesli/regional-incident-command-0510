/**
 * App shell: screen routing, global overlays, demo data seeding,
 * and test-surface exposure via window.app.
 */

import { useEffect, lazy, Suspense } from 'react';
import { useAppContext } from './contexts/AppContext';
import type { Incident, Unit, Resource } from './types/domain';

// Lazy-load screen components to keep initial bundle light
const CommandDashboard = lazy(() =>
  import('./screens/CommandDashboard').then((m) => ({ default: m.CommandDashboard }))
);
const NoActiveIncidents = lazy(() =>
  import('./screens/NoActiveIncidents').then((m) => ({ default: m.NoActiveIncidents }))
);
const OperationalInsights = lazy(() =>
  import('./screens/OperationalInsights').then((m) => ({ default: m.OperationalInsights }))
);
const SystemSettings = lazy(() =>
  import('./screens/SystemSettings').then((m) => ({ default: m.SystemSettings }))
);
const SystemErrorRecovery = lazy(() =>
  import('./screens/SystemErrorRecovery').then((m) => ({ default: m.SystemErrorRecovery }))
);
const IncidentDetailSummary = lazy(() =>
  import('./screens/IncidentDetailSummary').then((m) => ({ default: m.IncidentDetailSummary }))
);
const NewIncidentReport = lazy(() =>
  import('./screens/NewIncidentReport').then((m) => ({ default: m.NewIncidentReport }))
);
const AccountProfile = lazy(() =>
  import('./screens/AccountProfile').then((m) => ({ default: m.AccountProfile }))
);

const DEMO_INCIDENTS: Incident[] = [
  {
    id: 'inc-001',
    title: 'Hazardous Material Spill',
    location: 'Sector 7 Processing Facility - Main Containment Wing',
    severity: 'critical',
    status: 'active',
    reportedAt: '2024-05-10T09:15:00Z',
    updatedAt: '2024-05-10T14:32:00Z',
    description:
      'A 200-gallon industrial solvent tank ruptured in the main containment wing. Evacuation perimeter established at 500 meters. HAZMAT team en route.',
    assignedUnits: ['unit-001', 'unit-002'],
    evidenceCount: 12,
    residentReports: 8,
  },
  {
    id: 'inc-002',
    title: 'Multi-Vehicle Collision on Highway 14',
    location: 'Highway 14, KM 42, Westbound Lane',
    severity: 'high',
    status: 'active',
    reportedAt: '2024-05-10T11:45:00Z',
    updatedAt: '2024-05-10T13:10:00Z',
    description:
      'Four-vehicle pileup with two commercial trucks. Three injuries reported, one critical. Traffic diverted to alternate route.',
    assignedUnits: ['unit-003'],
    evidenceCount: 5,
    residentReports: 15,
  },
  {
    id: 'inc-003',
    title: 'Severe Weather Warning - Flash Flood',
    location: 'Downtown District, Riverfront Area',
    severity: 'high',
    status: 'pending',
    reportedAt: '2024-05-10T12:00:00Z',
    updatedAt: '2024-05-10T12:00:00Z',
    description:
      'National Weather Service issued flash flood warning for downtown riverfront. Sandbagging stations activated. Residents advised to evacuate low-lying areas.',
    assignedUnits: [],
    evidenceCount: 2,
    residentReports: 22,
  },
  {
    id: 'inc-004',
    title: 'Power Grid Failure - Northeast Substation',
    location: 'Northeast Substation, Grid Node 7B',
    severity: 'medium',
    status: 'resolved',
    reportedAt: '2024-05-09T18:30:00Z',
    updatedAt: '2024-05-10T06:15:00Z',
    description:
      'Transformer failure caused localized outage affecting 4,200 residents. Backup generators deployed. Grid restored at 06:00.',
    assignedUnits: ['unit-004'],
    evidenceCount: 7,
    residentReports: 4,
  },
];

const DEMO_UNITS: Unit[] = [
  {
    id: 'unit-001',
    name: 'HAZMAT Alpha',
    type: 'Hazardous Materials',
    status: 'en_route',
    location: 'Sector 7 - 2.3 KM out',
    lastUpdate: '2024-05-10T14:30:00Z',
  },
  {
    id: 'unit-002',
    name: 'Fire Rescue 7',
    type: 'Fire & Rescue',
    status: 'on_scene',
    location: 'Sector 7 Processing Facility',
    lastUpdate: '2024-05-10T14:25:00Z',
  },
  {
    id: 'unit-003',
    name: 'Traffic Control East',
    type: 'Traffic',
    status: 'on_scene',
    location: 'Highway 14, KM 42',
    lastUpdate: '2024-05-10T13:05:00Z',
  },
  {
    id: 'unit-004',
    name: 'Engineering Response',
    type: 'Infrastructure',
    status: 'returning',
    location: 'Northeast Substation',
    lastUpdate: '2024-05-10T06:10:00Z',
  },
];

const DEMO_RESOURCES: Resource[] = [
  { id: 'res-001', name: 'Emergency Vehicles', type: 'vehicle', quantity: 24, available: 18, health: 92, location: 'Central Depot' },
  { id: 'res-002', name: 'Medical Supplies', type: 'supply', quantity: 450, available: 380, health: 100, location: 'Hospital Alpha' },
  { id: 'res-003', name: 'HAZMAT Suits', type: 'equipment', quantity: 60, available: 45, health: 88, location: 'Sector 7 Station' },
  { id: 'res-004', name: 'Field Communicators', type: 'equipment', quantity: 120, available: 110, health: 95, location: 'Central Depot' },
];

function ScreenLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-4">
        <div className="w-10 h-10 border-4 border-primary-container border-t-transparent rounded-full animate-spin" />
        <span className="font-label-md text-label-md text-on-surface-variant">Loading command interface...</span>
      </div>
    </div>
  );
}

export default function App() {
  const { state, dispatch } = useAppContext();

  // Seed demo data on first load if storage was empty
  useEffect(() => {
    if (state.isLoading) return;
    if (state.incidents.length === 0 && state.units.length === 0 && state.resources.length === 0) {
      dispatch({ type: 'SET_INCIDENTS', incidents: DEMO_INCIDENTS });
      dispatch({ type: 'SET_UNITS', units: DEMO_UNITS });
      dispatch({ type: 'SET_RESOURCES', resources: DEMO_RESOURCES });
    }
  }, [state.isLoading, state.incidents.length, state.units.length, state.resources.length, dispatch]);

  // Expose deterministic state for smoke / final-test gates
  useEffect(() => {
    (window as unknown as Record<string, unknown>).app = {
      state,
      dispatch,
      renderToText: () =>
        JSON.stringify({
          screen: state.currentScreen,
          incidentCount: state.incidents.length,
          unitCount: state.units.length,
          resourceCount: state.resources.length,
          storageError: state.storageError,
          loading: state.isLoading,
          profileOpen: state.profileOpen,
          searchQuery: state.searchQuery,
        }),
    };
  }, [state, dispatch]);

  if (state.isLoading) {
    return <ScreenLoader />;
  }

  // If there is a fatal storage error and user is on error-recovery, show it.
  // Otherwise let the normal screen routing decide.
  const screen = state.currentScreen;

  return (
    <div className="min-h-screen bg-background text-on-background" data-setfarm-root="app">
      <Suspense fallback={<ScreenLoader />}>
        {screen === 'dashboard' && (
          state.incidents.filter((i) => i.status === 'active' || i.status === 'pending' || i.status === 'escalated').length > 0
            ? <CommandDashboard />
            : <NoActiveIncidents />
        )}
        {screen === 'insights' && <OperationalInsights />}
        {screen === 'settings' && <SystemSettings />}
        {screen === 'error-recovery' && <SystemErrorRecovery />}
        {screen === 'incident-detail' && <IncidentDetailSummary />}
        {screen === 'new-incident' && <NewIncidentReport />}
        {screen === 'profile' && <AccountProfile />}
      </Suspense>

      {/* Global Toast */}
      {state.toast && (
        <div className="fixed top-4 right-4 z-[100] toast-enter">
          <div
            className={`px-4 py-3 rounded-lg shadow-lg border font-body-md text-body-md flex items-center gap-2 ${
              state.toast.type === 'error'
                ? 'bg-error-container border-error text-on-error-container'
                : state.toast.type === 'success'
                ? 'bg-primary-container border-primary text-white'
                : 'bg-surface-container border-outline-variant text-on-surface'
            }`}
          >
            <span className="material-symbols-outlined">
              {state.toast.type === 'error' ? 'error' : state.toast.type === 'success' ? 'check_circle' : 'info'}
            </span>
            {state.toast.message}
          </div>
        </div>
      )}

      {/* Global Storage Error Banner (non-blocking) */}
      {state.storageError && screen !== 'error-recovery' && (
        <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-[100] w-[calc(100%-2rem)] max-w-xl">
          <div className="bg-error-container border border-error rounded-lg px-4 py-3 shadow-lg flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-on-error-container font-body-md text-body-md">
              <span className="material-symbols-outlined">warning</span>
              <span className="truncate">{state.storageError}</span>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => dispatch({ type: 'CLEAR_STORAGE_ERROR' })}
                className="px-3 py-1.5 rounded text-sm font-medium text-on-error-container hover:bg-error/20 transition-colors cursor-pointer"
              >
                Dismiss
              </button>
              <button
                onClick={() => dispatch({ type: 'NAVIGATE', screen: 'error-recovery' })}
                className="px-3 py-1.5 rounded text-sm font-medium bg-error text-on-error hover:bg-error/90 transition-colors cursor-pointer"
              >
                Recovery
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
