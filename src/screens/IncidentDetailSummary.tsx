// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Incident Detail Summary
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import type { Incident, Unit, UnitStatus, IncidentStatus } from '../types/domain';

interface IncidentDetailSummaryProps {}

const STATUS_CYCLE: Record<string, string> = {
  pending: 'active',
  active: 'escalated',
  escalated: 'resolved',
  resolved: 'active',
};

const STATUS_LABELS: Record<string, string> = {
  pending: 'Pending',
  active: 'Active',
  escalated: 'Escalated',
  resolved: 'Resolved',
};

function unitStatusColor(status: UnitStatus): string {
  switch (status) {
    case 'on_scene': return 'bg-primary-container shadow-[0_0_8px_rgba(37,99,235,0.6)]';
    case 'en_route': return 'bg-tertiary shadow-[0_0_8px_rgba(255,181,150,0.6)]';
    case 'dispatched': return 'bg-secondary shadow-[0_0_8px_rgba(185,199,223,0.4)]';
    case 'returning': return 'bg-outline shadow-[0_0_8px_rgba(141,144,160,0.4)]';
    case 'standby': return 'bg-surface-variant';
    default: return 'bg-surface-variant';
  }
}

function formatTimeElapsed(reportedAt: string): string {
  const diffMs = Date.now() - new Date(reportedAt).getTime();
  const diffMin = Math.floor(diffMs / 60000);
  const hours = Math.floor(diffMin / 60);
  const mins = diffMin % 60;
  if (hours > 0) return `${String(hours).padStart(2, '0')}h ${String(mins).padStart(2, '0')}m`;
  return `${mins}m`;
}

function severityColor(severity: string): string {
  switch (severity) {
    case 'critical': return 'bg-error';
    case 'high': return 'bg-tertiary';
    case 'medium': return 'bg-primary';
    case 'low': return 'bg-outline';
    default: return 'bg-outline';
  }
}

function buildTimeline(incident: Incident, units: Unit[]) {
  const events: { time: string; label: string; text: string; color: string }[] = [];
  // Initial report
  events.push({
    time: incident.reportedAt,
    label: 'Initial Report',
    text: incident.description || 'Incident reported.',
    color: 'border-error',
  });
  // Status changes (use updatedAt as a proxy if different from reportedAt)
  if (incident.updatedAt !== incident.reportedAt) {
    events.push({
      time: incident.updatedAt,
      label: 'Status Change',
      text: `Incident status updated to ${STATUS_LABELS[incident.status] || incident.status}.`,
      color: 'border-tertiary',
    });
  }
  // Unit assignments
  incident.assignedUnits.forEach((unitId) => {
    const unit = units.find((u) => u.id === unitId);
    if (unit) {
      events.push({
        time: unit.lastUpdate || incident.updatedAt,
        label: 'Resource Assigned',
        text: `${unit.name} dispatched.`,
        color: 'border-outline-variant',
      });
    }
  });
  // Sort descending
  events.sort((a, b) => new Date(b.time).getTime() - new Date(a.time).getTime());
  return events;
}

export function IncidentDetailSummary(props: IncidentDetailSummaryProps) {
  const { state, dispatch } = useAppContext();
  const [localSearch, setLocalSearch] = useState(state.searchQuery);

  const incident = useMemo(() => {
    if (!state.selectedIncidentId) return null;
    return state.incidents.find((i) => i.id === state.selectedIncidentId) ?? null;
  }, [state.incidents, state.selectedIncidentId]);

  const assignedUnits = useMemo(() => {
    if (!incident) return [];
    return incident.assignedUnits
      .map((uid) => state.units.find((u) => u.id === uid))
      .filter((u): u is Unit => u !== undefined);
  }, [incident, state.units]);

  const timeline = useMemo(() => {
    if (!incident) return [];
    return buildTimeline(incident, state.units);
  }, [incident, state.units]);

  const handleNavigate = (screen: 'dashboard' | 'insights' | 'settings' | 'profile') => {
    dispatch({ type: 'NAVIGATE', screen });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    dispatch({ type: 'SET_SEARCH', query: e.target.value });
  };

  const handleExportPDF = () => {
    dispatch({ type: 'SHOW_TOAST', message: 'Exporting incident report to PDF...', toastType: 'info' });
  };

  const handleAssignPersonnel = () => {
    dispatch({ type: 'SHOW_TOAST', message: 'Personnel assignment panel opened.', toastType: 'info' });
  };

  const handleUpdateStatus = () => {
    if (!incident) return;
    const nextStatus = (STATUS_CYCLE[incident.status] || 'active') as IncidentStatus;
    const updated: Incident = { ...incident, status: nextStatus, updatedAt: new Date().toISOString() };
    dispatch({ type: 'UPDATE_INCIDENT', incident: updated });
    dispatch({ type: 'SHOW_TOAST', message: `Status updated to ${STATUS_LABELS[nextStatus] || nextStatus}.`, toastType: 'success' });
  };

  const handleGoBack = () => {
    dispatch({ type: 'GO_BACK' });
  };

  const profile = state.profile;

  // If no incident selected, show a minimal fallback that navigates back
  if (!incident) {
    return (
      <div className="flex-1 flex flex-col md:ml-64 w-full md:w-[calc(100%-16rem)] items-center justify-center bg-background text-on-surface">
        <span className="material-symbols-outlined text-[48px] text-on-surface-variant mb-4">warning</span>
        <h2 className="font-display-lg text-display-lg mb-2">No Incident Selected</h2>
        <p className="font-body-lg text-body-lg text-on-surface-variant mb-6">Select an incident from the dashboard to view details.</p>
        <button
          className="flex items-center gap-2 px-4 h-touch-target bg-primary-container text-on-primary-container rounded font-label-md text-label-md active:scale-95 transition-all"
          onClick={handleGoBack}
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-outline-variant bg-surface-container dark:bg-surface-container flex flex-col h-full p-unit gap-base z-40 hidden md:flex">
        <div className="px-3 py-4 mb-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant flex-shrink-0">
            <img alt="Command Operator Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuArtfwpgEPHe4QlPfdJl_d4RNoC1LUPlGVeqbDApjptAe7YcjX2laLef-qx56wmJITp8Nyc8YMhNZKCbtgzAzN6w3mMuBNbwcmWIwEc-mwS0TswfFt-EHhmrpkD-Vh_5S5MJYfEYfipBfrNdDKUFZIx1rSQ00o8Y8MokoM74vEaHhVRMhC3A0qZokDspE7ne6onL3EPx2STjx7dtiMnzElNC4zRGCeUJN3wpejVtGFk7y9-favrzTe-WCxPvwZuHFHMyvI88zcKxvQ" />
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm font-bold text-primary">{profile.name || 'HQ Alpha'}</h2>
            <p className="font-label-md text-label-md text-on-surface-variant">{profile.sector || 'Sector 7 Command'}</p>
          </div>
        </div>
        <nav className="flex-1 flex flex-col gap-1">
          <button
            className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md transition-all active:opacity-80 cursor-pointer"
            onClick={() => handleNavigate('dashboard')}
          >
            <span className="material-symbols-outlined">dashboard</span>
            Dashboard
          </button>
          <button
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md active:opacity-80 cursor-pointer"
            onClick={() => handleNavigate('insights')}
          >
            <span className="material-symbols-outlined">monitoring</span>
            Insights
          </button>
          <button
            className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md active:opacity-80 cursor-pointer"
            onClick={() => handleNavigate('settings')}
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </nav>
      </aside>
      <div className="flex-1 flex flex-col md:ml-64 w-full md:w-[calc(100%-16rem)]">
        <header className="fixed md:w-[calc(100%-16rem)] w-full top-0 border-b border-outline-variant bg-surface dark:bg-surface flex justify-between items-center px-gutter h-touch-target z-50">
          <div className="flex items-center gap-2">
            <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">Regional Incident Command</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-2 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm">search</span>
              <input
                className="bg-background border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-md font-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-64 h-8"
                placeholder="Search..."
                type="text"
                value={localSearch}
                onChange={handleSearchChange}
              />
            </div>
            <button
              aria-label="Notifications"
              className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95"
              onClick={() => dispatch({ type: 'SHOW_TOAST', message: 'No new notifications.', toastType: 'info' })}
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              aria-label="Account"
              className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95"
              onClick={() => handleNavigate('profile')}
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>
        <main className="flex-1 pt-[60px] p-container-padding flex flex-col gap-gutter">
          <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-2">
            <button
              className="hover:text-primary transition-colors cursor-pointer"
              onClick={handleGoBack}
            >
              Dashboard
            </button>
            <span className="material-symbols-outlined text-[14px]">chevron_right</span>
            <span className="text-on-surface">Incident #{incident.id}</span>
          </nav>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-2">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="font-mono-data text-mono-data text-outline">#{incident.id}</span>
                <div className="flex items-center gap-1.5 px-2 py-0.5 border border-outline-variant rounded bg-surface">
                  <div className={`w-2 h-2 rounded-full ${severityColor(incident.severity)}`}></div>
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">{incident.severity}</span>
                </div>
                <div className="flex items-center gap-1.5 px-2 py-0.5 border border-outline-variant rounded bg-surface">
                  <div className="w-2 h-2 rounded-full bg-primary-container"></div>
                  <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">{STATUS_LABELS[incident.status] || incident.status}</span>
                </div>
              </div>
              <h1 className="font-display-lg text-display-lg text-on-surface m-0 leading-tight">{incident.title}</h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">{incident.location}</p>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="flex items-center gap-2 px-4 h-touch-target border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                onClick={handleExportPDF}
              >
                <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                Export PDF
              </button>
              <button
                className="flex items-center gap-2 px-4 h-touch-target border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                onClick={handleAssignPersonnel}
              >
                <span className="material-symbols-outlined text-sm">group_add</span>
                Assign Personnel
              </button>
              <button
                className="flex items-center gap-2 px-4 h-touch-target bg-primary-container text-on-primary-container rounded font-label-md text-label-md active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background"
                onClick={handleUpdateStatus}
              >
                <span className="material-symbols-outlined text-sm">update</span>
                Update Status
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
            <div className="xl:col-span-8 flex flex-col gap-gutter">
              <div className="bg-surface border border-outline-variant rounded overflow-hidden flex flex-col lg:flex-row h-auto lg:h-80 border-l-4 border-l-error">
                <div className="w-full lg:w-3/5 bg-surface-container-highest relative">
                  <img
                    className="w-full h-full object-cover"
                    alt="Incident location satellite view"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9yhuQUXdiyKAX1gOsyB1B-ab00DQ14EEZQqyLEJbeD6heuJfwZJf6ZtDlEJsok_0esMu1j0XUfsIjCyy41zNUc2r28-EmMRa8RK37ibJ8Lk_evgr1JxGOJMBOCoNbdHwcKxOBauCmMX-yZEM8Fh-XcFWfNYPhTowAoeahpDNaWu5W6ObikpDaELU2Lyeggvf7Uq8HfUcIZRsBeO4cYS2knH8Nk_cPDBl16oEdsGy5UG7IHMiMmBz1NGKotWrhFDJyLjU1oiZWBow"
                  />
                  <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-1 rounded border border-outline-variant font-mono-data text-mono-data text-on-surface-variant backdrop-blur-sm">
                    48°52'5"N 2°19'59"E
                  </div>
                </div>
                <div className="w-full lg:w-2/5 p-4 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-outline-variant">
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Incident Overview</h3>
                    <p className="font-body-md text-body-md text-on-surface-variant line-clamp-4">{incident.description}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-auto">
                    <div>
                      <span className="font-label-md text-label-md text-outline block mb-1">Reported By</span>
                      <span className="font-body-md text-body-md text-on-surface">System Auto-Sens</span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-outline block mb-1">Time Elapsed</span>
                      <span className="font-mono-data text-mono-data text-error font-bold">{formatTimeElapsed(incident.reportedAt)}</span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-outline block mb-1">Evidence Items</span>
                      <span className="font-mono-data text-mono-data text-on-surface">{incident.evidenceCount}</span>
                    </div>
                    <div>
                      <span className="font-label-md text-label-md text-outline block mb-1">Resident Reports</span>
                      <span className="font-mono-data text-mono-data text-on-surface">{incident.residentReports}</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-surface border border-outline-variant rounded p-4 border-l-4 border-l-primary-container">
                <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Assigned Resources</h3>
                  <span
                    className="font-label-md text-label-md text-primary-container cursor-pointer hover:underline"
                    onClick={() => dispatch({ type: 'NAVIGATE', screen: 'dashboard' })}
                    role="button"
                  >
                    View All Active Units
                  </span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {assignedUnits.length === 0 && (
                    <div className="col-span-full font-body-md text-body-md text-on-surface-variant">No units assigned yet.</div>
                  )}
                  {assignedUnits.map((unit) => (
                    <div key={unit.id} className="flex items-center justify-between p-3 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors">
                      <div className="flex items-center gap-3">
                        <span className="material-symbols-outlined text-on-surface-variant">
                          {unit.type.toLowerCase().includes('fire') ? 'local_fire_department' :
                           unit.type.toLowerCase().includes('med') ? 'medical_services' :
                           unit.type.toLowerCase().includes('haz') ? 'science' :
                           unit.type.toLowerCase().includes('traffic') ? 'traffic' :
                           unit.type.toLowerCase().includes('infra') ? 'engineering' :
                           'local_police'}
                        </span>
                        <div>
                          <div className="font-body-md text-body-md text-on-surface font-bold">{unit.name}</div>
                          <div className="font-mono-data text-mono-data text-outline">{unit.id.toUpperCase()}</div>
                        </div>
                      </div>
                      <span className={`w-2 h-2 rounded-full ${unitStatusColor(unit.status)}`}></span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="xl:col-span-4 bg-surface border border-outline-variant rounded flex flex-col h-full max-h-[800px]">
              <div className="p-4 border-b border-outline-variant flex justify-between items-center bg-surface-container-low">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">Timeline of Events</h3>
                <span className="material-symbols-outlined text-on-surface-variant text-sm">filter_list</span>
              </div>
              <div className="p-4 flex-1 overflow-y-auto">
                <div className="relative pl-6 border-l border-outline ml-3 flex flex-col gap-6">
                  {timeline.length === 0 && (
                    <div className="font-body-md text-body-md text-on-surface-variant">No timeline events yet.</div>
                  )}
                  {timeline.map((event, idx) => (
                    <div key={idx} className="relative">
                      <div className={`absolute w-3 h-3 rounded-full bg-background border-2 ${event.color} -left-[31px] top-1 z-10`}></div>
                      <div className="flex justify-between items-start mb-1">
                        <span className={`font-label-md text-label-md ${event.color.replace('border-', 'text-')}`}>{event.label}</span>
                        <span className="font-mono-data text-mono-data text-on-surface-variant">
                          {new Date(event.time).toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' })} Z
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-on-surface-variant">{event.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
