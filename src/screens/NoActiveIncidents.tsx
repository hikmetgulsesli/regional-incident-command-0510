// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: No Active Incidents
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';

interface NoActiveIncidentsProps {}

export function NoActiveIncidents(props: NoActiveIncidentsProps) {
  const { state, dispatch } = useAppContext();
  const [localSearch, setLocalSearch] = useState(state.searchQuery);

  const handleNavigate = (screen: 'dashboard' | 'insights' | 'settings' | 'new-incident' | 'profile') => {
    dispatch({ type: 'NAVIGATE', screen });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocalSearch(e.target.value);
    dispatch({ type: 'SET_SEARCH', query: e.target.value });
  };

  const profile = state.profile;

  return (
    <>
      {/* SideNavBar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container border-r border-outline-variant flex flex-col p-unit gap-base z-40 hidden md:flex">
        {/* Header Profile Area */}
        <div className="flex items-center gap-3 px-3 py-4 mb-4 border-b border-outline-variant">
          <div className="h-10 w-10 rounded-full bg-surface-container-highest border border-outline flex items-center justify-center overflow-hidden shrink-0">
            <span className="material-symbols-outlined text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>account_circle</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="font-headline-sm text-headline-sm font-bold text-primary truncate">{profile.name || 'HQ Alpha'}</span>
            <span className="font-label-md text-label-md text-on-surface-variant truncate">{profile.sector || 'Sector 7 Command'}</span>
          </div>
        </div>
        {/* Navigation Links */}
        <nav className="flex flex-col gap-1 w-full flex-1">
          {/* Active Tab (Dashboard) */}
          <button
            className="flex items-center gap-3 px-3 h-touch-target bg-secondary-container text-on-secondary-container rounded-lg active:opacity-80 transition-opacity cursor-pointer"
            onClick={() => handleNavigate('dashboard')}
          >
            <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
            <span className="font-label-md text-label-md">Dashboard</span>
          </button>
          {/* Inactive Tab (Insights) */}
          <button
            className="flex items-center gap-3 px-3 h-touch-target text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg active:opacity-80 cursor-pointer"
            onClick={() => handleNavigate('insights')}
          >
            <span className="material-symbols-outlined">monitoring</span>
            <span className="font-label-md text-label-md">Insights</span>
          </button>
          {/* Inactive Tab (Settings) */}
          <button
            className="flex items-center gap-3 px-3 h-touch-target text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg active:opacity-80 mt-auto cursor-pointer"
            onClick={() => handleNavigate('settings')}
          >
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md text-label-md">Settings</span>
          </button>
        </nav>
      </aside>
      {/* Main Content Column */}
      <div className="flex-1 flex flex-col h-full w-full md:ml-64 overflow-hidden relative">
        {/* TopAppBar */}
        <header className="bg-surface border-b border-outline-variant flex justify-between items-center w-full px-gutter h-touch-target z-50 shrink-0">
          {/* Brand Logo / Product Name */}
          <div className="flex items-center gap-2">
            <div className="md:hidden flex items-center justify-center h-8 w-8 rounded-DEFAULT hover:bg-surface-container-high transition-colors cursor-pointer mr-2">
              <span className="material-symbols-outlined text-on-surface">menu</span>
            </div>
            <h1 className="font-headline-md text-headline-md font-bold text-on-surface">Regional Incident Command</h1>
          </div>
          {/* Right Actions (Search + Trailing Icons) */}
          <div className="flex items-center gap-4">
            {/* Search Bar */}
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-[18px]">search</span>
              <input
                className="bg-surface-container-low border border-outline-variant rounded-DEFAULT h-8 pl-9 pr-3 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-48 lg:w-64"
                placeholder="Search..."
                type="text"
                value={localSearch}
                onChange={handleSearchChange}
              />
            </div>
            {/* Trailing Icons */}
            <div className="flex items-center gap-1">
              <button
                aria-label="Notifications"
                className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors active:scale-95"
                onClick={() => dispatch({ type: 'SHOW_TOAST', message: 'No new notifications.', toastType: 'info' })}
              >
                <span className="material-symbols-outlined text-[20px]">notifications</span>
              </button>
              <button
                aria-label="Account"
                className="h-8 w-8 flex items-center justify-center rounded-DEFAULT text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors active:scale-95 md:hidden"
                onClick={() => handleNavigate('profile')}
              >
                <span className="material-symbols-outlined text-[20px]">account_circle</span>
              </button>
            </div>
          </div>
        </header>
        {/* Canvas Area (Empty State) */}
        <main className="flex-1 flex flex-col items-center justify-center p-container-padding bg-background overflow-y-auto relative z-0">
          {/* Subtle Grid Background Overlay for Technical Vibe */}
          <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: "radial-gradient(circle at center, #c3c6d7 1px, transparent 1px)", backgroundSize: "24px 24px"}}></div>
          {/* Empty State Container (Glassmorphism inspired focal point) */}
          <div className="relative flex flex-col items-center max-w-md text-center p-8 rounded-xl bg-surface-container-low/50 border border-outline-variant/30 backdrop-blur-sm shadow-2xl z-10">
            {/* Glowing Pedestal Graphic */}
            <div className="relative w-24 h-24 mb-6 flex items-center justify-center">
              {/* Outer pulse ring */}
              <div className="absolute inset-0 rounded-full border border-primary-container/20 opacity-50"></div>
              <div className="absolute inset-2 rounded-full border border-primary-container/40 opacity-70"></div>
              {/* Inner solid circle */}
              <div className="absolute inset-4 rounded-full bg-surface-container-highest border border-outline flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.15)]">
                <span className="material-symbols-outlined text-[32px] text-primary" style={{fontVariationSettings: "'wght' 300"}}>radar</span>
              </div>
            </div>
            {/* Messaging */}
            <h2 className="font-display-lg text-display-lg text-on-surface mb-3 tracking-tight">No active incidents found.</h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-sm">
              All monitored sectors are currently operating within nominal parameters. The situational awareness grid is clear.
            </p>
            {/* Call to Action */}
            <button
              className="flex items-center justify-center gap-2 bg-primary-container text-on-primary-container font-label-md text-label-md px-6 py-3 min-w-[180px] h-touch-target rounded-DEFAULT hover:brightness-110 active:scale-95 transition-all outline-none focus-visible:ring-2 focus-visible:ring-primary-container focus-visible:ring-offset-2 focus-visible:ring-offset-background group shadow-[0_4px_14px_0_rgba(37,99,235,0.2)]"
              onClick={() => handleNavigate('new-incident')}
            >
              <span className="material-symbols-outlined text-[18px] group-hover:rotate-90 transition-transform duration-300">add</span>
              Log First Incident
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
