// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Command Dashboard
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState, useMemo } from 'react';
import { useAppContext } from '../contexts/AppContext';
import type { Incident, IncidentStatus, Severity } from '../types/domain';

interface CommandDashboardProps {}

export function CommandDashboard(props: CommandDashboardProps) {
  const { state, dispatch } = useAppContext();
  const [statusFilter, setStatusFilter] = useState<IncidentStatus | 'all'>('all');
  const [severityFilter, setSeverityFilter] = useState<Severity | 'all'>('all');
  const [localSearch, setLocalSearch] = useState(state.searchQuery);

  const handleNavigate = (screen: 'dashboard' | 'insights' | 'settings' | 'new-incident' | 'profile' | 'incident-detail') => {
    dispatch({ type: 'NAVIGATE', screen });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    dispatch({ type: 'SET_SEARCH', query: e.target.value });
  };

  const handleViewDetails = (id: string) => {
    dispatch({ type: 'SELECT_INCIDENT', id });
    handleNavigate('incident-detail');
  };

  const profile = state.profile;

  // Compute metrics from state
  const activeIncidents = useMemo(
    () => state.incidents.filter((i) => i.status === 'active' || i.status === 'escalated' || i.status === 'pending'),
    [state.incidents]
  );

  const totalPersonnel = state.units.length;

  // Avg response time in seconds (placeholder calculation: 4m 12s baseline, adjusted by active count)
  const avgResponseSeconds = useMemo(() => {
    if (activeIncidents.length === 0) return 252; // 4m 12s
    const base = 240;
    const variance = Math.min(activeIncidents.length * 12, 120);
    return base + variance;
  }, [activeIncidents.length]);

  const formatDuration = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m}m ${s.toString().padStart(2, '0')}s`;
  };

  // Filter incidents
  const filteredIncidents = useMemo(() => {
    let result = state.incidents;
    if (localSearch.trim()) {
      const q = localSearch.toLowerCase();
      result = result.filter(
        (i) =>
          i.title.toLowerCase().includes(q) ||
          i.location.toLowerCase().includes(q) ||
          i.id.toLowerCase().includes(q)
      );
    }
    if (statusFilter !== 'all') {
      result = result.filter((i) => i.status === statusFilter);
    }
    if (severityFilter !== 'all') {
      result = result.filter((i) => i.severity === severityFilter);
    }
    return result;
  }, [state.incidents, localSearch, statusFilter, severityFilter]);

  const getSeverityColor = (severity: Severity) => {
    switch (severity) {
      case 'critical':
        return 'bg-error';
      case 'high':
        return 'bg-tertiary';
      case 'medium':
        return 'bg-primary';
      case 'low':
        return 'bg-outline';
      default:
        return 'bg-outline';
    }
  };

  const getSeverityTextColor = (severity: Severity) => {
    switch (severity) {
      case 'critical':
        return 'text-error';
      case 'high':
        return 'text-tertiary';
      case 'medium':
        return 'text-primary';
      case 'low':
        return 'text-on-surface-variant';
      default:
        return 'text-on-surface-variant';
    }
  };

  const getStatusDotColor = (status: IncidentStatus) => {
    switch (status) {
      case 'active':
        return 'bg-error';
      case 'escalated':
        return 'bg-tertiary';
      case 'pending':
        return 'bg-primary';
      case 'resolved':
        return 'bg-[#4ade80]';
      default:
        return 'bg-outline';
    }
  };

  const timeAgo = (iso: string) => {
    const diff = Date.now() - new Date(iso).getTime();
    const minutes = Math.floor(diff / 60000);
    if (minutes < 1) return 'Just now';
    if (minutes < 60) return `${minutes}m ago`;
    const hours = Math.floor(minutes / 60);
    if (hours < 24) return `${hours}h ${minutes % 60}m ago`;
    return `${Math.floor(hours / 24)}d ago`;
  };

  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant flex flex-col p-unit gap-base z-40">
        {/* Header */}
        <div className="px-unit py-gutter mb-gutter flex items-center gap-gutter border-b border-outline-variant">
          <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant overflow-hidden shrink-0">
            <span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-bold text-primary">{profile.name || 'HQ Alpha'}</span>
            <span className="font-label-md text-label-md text-on-surface-variant">{profile.sector || 'Sector 7 Command'}</span>
          </div>
        </div>
        {/* Navigation Links */}
        <div className="flex flex-col gap-base flex-1">
          {/* Active Tab: Dashboard */}
          <button
            className="flex items-center gap-unit px-gutter py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80 transition-opacity"
            onClick={() => handleNavigate('dashboard')}
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
            Dashboard
          </button>
          {/* Inactive Tab: Insights */}
          <button
            className="flex items-center gap-unit px-gutter py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80"
            onClick={() => handleNavigate('insights')}
          >
            <span className="material-symbols-outlined">monitoring</span>
            Insights
          </button>
          {/* Inactive Tab: Settings */}
          <button
            className="flex items-center gap-unit px-gutter py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80 mt-auto"
            onClick={() => handleNavigate('settings')}
          >
            <span className="material-symbols-outlined">settings</span>
            Settings
          </button>
        </div>
      </nav>
      {/* Main Content Area */}
      <div className="ml-64 flex-1 flex flex-col h-full bg-background relative overflow-hidden">
        {/* TopAppBar (Shared Component) */}
        <header className="flex justify-between items-center w-full px-gutter h-touch-target z-50 bg-surface dark:bg-surface border-b border-outline-variant shrink-0">
          <div className="flex items-center gap-gutter">
            <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface tracking-tight">Regional Incident Command</span>
          </div>
          <div className="flex items-center gap-gutter">
            {/* Search Bar (on_right logic) */}
            <div className="relative hidden md:flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant pointer-events-none" style={{fontSize: "18px"}}>search</span>
              <input
                className="bg-surface-container border border-outline-variant text-on-surface font-body-md text-body-md rounded pl-10 pr-4 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder:text-outline transition-colors"
                placeholder="Search incidents..."
                type="text"
                value={localSearch}
                onChange={handleSearchChange}
              />
            </div>
            {/* Trailing Icon Actions */}
            <button
              aria-label="Notifications"
              className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform"
              onClick={() => dispatch({ type: 'SHOW_TOAST', message: 'No new notifications.', toastType: 'info' })}
            >
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <button
              aria-label="Account"
              className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform"
              onClick={() => dispatch({ type: 'TOGGLE_PROFILE', open: true })}
            >
              <span className="material-symbols-outlined">account_circle</span>
            </button>
          </div>
        </header>
        {/* Scrollable Canvas */}
        <main className="flex-1 overflow-y-auto p-container-padding flex flex-col gap-container-padding">
          {/* Page Header & Global Actions */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-gutter">
            <div>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-base">Situation Overview</h1>
              <p className="font-body-md text-body-md text-on-surface-variant">Live telemetry and active response dispatch.</p>
            </div>
            <button
              className="bg-primary-container text-on-primary-container hover:bg-primary border border-primary-container font-label-md text-label-md px-gutter h-10 rounded inline-flex items-center justify-center gap-unit transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.2)]"
              onClick={() => handleNavigate('new-incident')}
            >
              <span className="material-symbols-outlined" style={{fontSize: "18px"}}>add</span>
              Create Incident
            </button>
          </div>
          {/* Asymmetric Bento Grid - Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
            {/* Stat 1: Active Incidents (Emphasis) */}
            <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute right-0 top-0 w-32 h-32 bg-error/10 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-110"></div>
              <div className="flex justify-between items-start mb-4 relative z-10">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Incidents</span>
                <span className="material-symbols-outlined text-error">warning</span>
              </div>
              <div className="flex items-baseline gap-2 relative z-10">
                <span className="font-display-lg text-display-lg text-on-surface">{activeIncidents.length}</span>
                <span className="font-label-md text-label-md text-error flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_upward</span> 12%</span>
              </div>
            </div>
            {/* Stat 2: Personnel Deployed */}
            <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Personnel</span>
                <span className="material-symbols-outlined text-primary">group</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-display-lg text-on-surface">{totalPersonnel}</span>
                <span className="font-label-md text-label-md text-on-surface-variant">Active units</span>
              </div>
            </div>
            {/* Stat 3: Response Time */}
            <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col justify-between relative overflow-hidden">
              <div className="flex justify-between items-start mb-4">
                <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Response Time</span>
                <span className="material-symbols-outlined text-secondary">timer</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="font-display-lg text-display-lg text-on-surface">{formatDuration(avgResponseSeconds)}</span>
                <span className="font-label-md text-label-md text-primary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2%</span>
              </div>
            </div>
          </div>
          {/* Filters Section */}
          <div className="bg-surface border border-outline-variant rounded-lg p-unit flex flex-wrap gap-gutter items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="font-label-md text-label-md text-on-surface-variant pl-2">Status:</span>
              <div className="flex border border-outline-variant rounded overflow-hidden">
                <button
                  className={`px-4 py-1.5 font-label-md text-label-md border-r border-outline-variant transition-colors ${statusFilter === 'active' ? 'bg-surface-variant text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container-high'}`}
                  onClick={() => setStatusFilter(statusFilter === 'active' ? 'all' : 'active')}
                >
                  Active
                </button>
                <button
                  className={`px-4 py-1.5 font-label-md text-label-md border-r border-outline-variant transition-colors ${statusFilter === 'pending' ? 'bg-surface-variant text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container-high'}`}
                  onClick={() => setStatusFilter(statusFilter === 'pending' ? 'all' : 'pending')}
                >
                  Pending
                </button>
                <button
                  className={`px-4 py-1.5 font-label-md text-label-md transition-colors ${statusFilter === 'resolved' ? 'bg-surface-variant text-on-surface' : 'bg-surface text-on-surface-variant hover:bg-surface-container-high'}`}
                  onClick={() => setStatusFilter(statusFilter === 'resolved' ? 'all' : 'resolved')}
                >
                  Resolved
                </button>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-label-md text-label-md text-on-surface-variant">Severity:</span>
              <div className="flex gap-2">
                <button
                  className={`px-3 py-1 rounded border font-label-md text-label-md flex items-center gap-1 transition-colors ${severityFilter === 'critical' ? 'border-error bg-error/10 text-error' : 'border-error bg-error/10 text-error hover:bg-error/20'}`}
                  onClick={() => setSeverityFilter(severityFilter === 'critical' ? 'all' : 'critical')}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Critical
                </button>
                <button
                  className={`px-3 py-1 rounded border font-label-md text-label-md flex items-center gap-1 transition-colors ${severityFilter === 'high' ? 'border-tertiary bg-tertiary/10 text-tertiary' : 'border-tertiary bg-tertiary/10 text-tertiary hover:bg-tertiary/20'}`}
                  onClick={() => setSeverityFilter(severityFilter === 'high' ? 'all' : 'high')}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> High
                </button>
                <button
                  className={`px-3 py-1 rounded border font-label-md text-label-md flex items-center gap-1 transition-colors ${severityFilter === 'medium' ? 'border-primary bg-primary/10 text-primary' : 'border-primary bg-primary/10 text-primary hover:bg-primary/20'}`}
                  onClick={() => setSeverityFilter(severityFilter === 'medium' ? 'all' : 'medium')}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Medium
                </button>
                <button
                  className={`px-3 py-1 rounded border font-label-md text-label-md flex items-center gap-1 transition-colors ${severityFilter === 'low' ? 'border-outline-variant bg-surface-container text-on-surface' : 'border-outline-variant bg-surface-container text-on-surface-variant hover:bg-surface-variant'}`}
                  onClick={() => setSeverityFilter(severityFilter === 'low' ? 'all' : 'low')}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Low
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-end">
              <button
                className="p-1.5 rounded border border-outline-variant bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors"
                onClick={() => { setStatusFilter('all'); setSeverityFilter('all'); setLocalSearch(''); dispatch({ type: 'SET_SEARCH', query: '' }); }}
                aria-label="Clear filters"
              >
                <span className="material-symbols-outlined" style={{fontSize: "18px"}}>filter_list</span>
              </button>
            </div>
          </div>
          {/* Data Grid (Incident Cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
            {filteredIncidents.length === 0 ? (
              <div className="col-span-full flex flex-col items-center justify-center py-16 text-on-surface-variant">
                <span className="material-symbols-outlined text-[48px] mb-4">search_off</span>
                <p className="font-body-md text-body-md">No incidents match the current filters.</p>
                <button
                  className="mt-4 px-4 py-2 rounded bg-primary-container text-on-primary-container font-label-md text-label-md hover:brightness-110 transition-colors"
                  onClick={() => { setStatusFilter('all'); setSeverityFilter('all'); setLocalSearch(''); dispatch({ type: 'SET_SEARCH', query: '' }); }}
                >
                  Clear Filters
                </button>
              </div>
            ) : (
              filteredIncidents.map((incident) => (
                <div
                  key={incident.id}
                  className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col relative overflow-hidden hover:bg-surface-container-low transition-colors cursor-pointer group"
                  onClick={() => handleViewDetails(incident.id)}
                >
                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${getSeverityColor(incident.severity)}`}></div>
                  <div className="flex justify-between items-start mb-3">
                    <div className="flex items-center gap-2">
                      <span className="font-mono-data text-mono-data text-on-surface-variant">{incident.id.toUpperCase()}</span>
                      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container border border-outline-variant">
                        <span className={`w-1.5 h-1.5 rounded-full ${getStatusDotColor(incident.status)}`}></span>
                        <span className="font-label-md text-label-md text-on-surface capitalize">{incident.status}</span>
                      </span>
                    </div>
                    <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                      <span className="material-symbols-outlined text-[14px]">schedule</span> {timeAgo(incident.updatedAt)}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 pr-4">{incident.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">{incident.description}</p>
                  <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-outline-variant/50">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[16px]">location_on</span> {incident.location}
                      </span>
                      <span className={`font-label-md text-label-md uppercase ${getSeverityTextColor(incident.severity)}`}>{incident.severity}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex -space-x-2">
                        {incident.assignedUnits.slice(0, 3).map((unitId, idx) => {
                          const unit = state.units.find((u) => u.id === unitId);
                          const initials = unit ? unit.name.split(' ').map((w) => w[0]).join('').slice(0, 2).toUpperCase() : unitId.slice(-2).toUpperCase();
                          const colorClass = idx === 0 ? 'bg-primary/20 text-primary' : idx === 1 ? 'bg-error/20 text-error' : 'bg-secondary/20 text-secondary';
                          return (
                            <div key={unitId} className={`w-6 h-6 rounded border border-surface ${colorClass} flex items-center justify-center text-[10px] font-bold`} title={unit?.name || unitId}>
                              {initials}
                            </div>
                          );
                        })}
                        {incident.assignedUnits.length > 3 && (
                          <div className="w-6 h-6 rounded border border-surface bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">
                            +{incident.assignedUnits.length - 3}
                          </div>
                        )}
                      </div>
                      <span className="font-label-md text-label-md text-primary group-hover:underline">View Details</span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </main>
      </div>
    </>
  );
}
