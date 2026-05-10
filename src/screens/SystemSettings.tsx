// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Settings
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useAppContext } from '../contexts/AppContext';

interface SystemSettingsProps {}

export function SystemSettings(props: SystemSettingsProps) {
  const { state, dispatch, clearAndReset } = useAppContext();
  const settings = state.settings;

  const handleNavigate = (screen: 'dashboard' | 'insights' | 'settings' | 'profile') => {
    dispatch({ type: 'NAVIGATE', screen });
  };

  const handleToggle = (key: keyof typeof settings) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: { [key]: !settings[key] },
    });
  };

  const handleSelectChange = (key: keyof typeof settings, value: string) => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: { [key]: value },
    });
  };

  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant p-unit gap-base fixed left-0 top-0">
        <div className="px-gutter py-4 mb-4 border-b border-outline-variant">
          <h1 className="font-headline-sm text-headline-sm font-bold text-primary">HQ Alpha</h1>
          <p className="font-label-md text-label-md text-on-surface-variant">Sector 7 Command</p>
        </div>
        <button
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg cursor-pointer active:opacity-80 transition-opacity"
          onClick={() => handleNavigate('dashboard')}
        >
          <span className="material-symbols-outlined" data-icon="dashboard">dashboard</span>
          <span className="font-label-md text-label-md">Dashboard</span>
        </button>
        <button
          className="flex items-center gap-3 px-4 py-3 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg cursor-pointer active:opacity-80 transition-opacity"
          onClick={() => handleNavigate('insights')}
        >
          <span className="material-symbols-outlined" data-icon="monitoring">monitoring</span>
          <span className="font-label-md text-label-md">Insights</span>
        </button>
        <button
          className="flex items-center gap-3 px-4 py-3 bg-secondary-container text-on-secondary-container rounded-lg cursor-pointer active:opacity-80 transition-opacity"
          onClick={() => handleNavigate('settings')}
        >
          <span className="material-symbols-outlined" data-icon="settings" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
          <span className="font-label-md text-label-md">Settings</span>
        </button>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 h-full overflow-hidden">
        {/* TopAppBar */}
        <header className="flex justify-between items-center w-full px-gutter h-touch-target z-50 bg-surface dark:bg-surface border-b border-outline-variant">
          <div className="flex items-center gap-4">
            <span className="md:hidden material-symbols-outlined text-on-surface cursor-pointer" data-icon="menu">menu</span>
            <span className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">Regional Incident Command</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              aria-label="Notifications"
              className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95 transition-transform flex items-center justify-center"
              onClick={() => dispatch({ type: 'SHOW_TOAST', message: 'No new notifications.', toastType: 'info' })}
            >
              <span className="material-symbols-outlined" data-icon="notifications">notifications</span>
            </button>
            <button
              aria-label="Account"
              className="p-2 text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95 transition-transform flex items-center justify-center"
              onClick={() => handleNavigate('profile')}
            >
              <span className="material-symbols-outlined" data-icon="account_circle">account_circle</span>
            </button>
          </div>
        </header>
        {/* Canvas */}
        <main className="flex-1 overflow-y-auto p-container-padding bg-[#0F172A]">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="mb-8">
              <h2 className="font-display-lg text-display-lg text-on-surface mb-2">System Configuration</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant">Manage your workspace preferences, notification rules, and data retention policies.</p>
            </div>
            {/* Settings Modules */}
            <div className="grid grid-cols-1 gap-6">
              {/* Notifications Module */}
              <section className="bg-surface border border-[#334155] rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-[#334155] bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="notifications_active">notifications_active</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Notifications &amp; Alerts</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Email Notifications</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Receive daily digests and critical incident reports via email.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.emailNotifications}
                        className="sr-only peer"
                        onChange={() => handleToggle('emailNotifications')}
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                    </label>
                  </div>
                  <hr className="border-[#334155]" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Real-time Alerts</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Enable push notifications for priority 1 and 2 incidents.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.smsAlerts}
                        className="sr-only peer"
                        onChange={() => handleToggle('smsAlerts')}
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                    </label>
                  </div>
                </div>
              </section>
              {/* Workspace Module */}
              <section className="bg-surface border border-[#334155] rounded-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-[#334155] bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary" data-icon="desktop_windows">desktop_windows</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Workspace Preferences</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Default View</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Select the initial dashboard view upon login.</p>
                    </div>
                    <select
                      className="bg-[#0F172A] border border-[#334155] text-on-surface font-body-md rounded-DEFAULT px-4 py-2 focus:ring-primary-container focus:border-primary-container w-full sm:w-48 outline-none"
                      onChange={(e) => handleSelectChange('defaultView', e.target.value)}
                      value={settings.defaultView}
                    >
                      <option>Tactical Map</option>
                      <option>Global Dashboard</option>
                      <option>Incident List</option>
                    </select>
                  </div>
                  <hr className="border-[#334155]" />
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Map Overlay</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Display terrain and sector grid lines by default on map views.</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        checked={settings.mapOverlay}
                        className="sr-only peer"
                        onChange={() => handleToggle('mapOverlay')}
                        type="checkbox"
                        value=""
                      />
                      <div className="w-11 h-6 bg-surface-variant peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-on-surface after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-container"></div>
                    </label>
                  </div>
                </div>
              </section>
              {/* Data Management Module */}
              <section className="bg-surface border border-[#334155] rounded-lg overflow-hidden border-l-4 border-l-error">
                <div className="px-6 py-4 border-b border-[#334155] bg-surface-container-low flex items-center gap-3">
                  <span className="material-symbols-outlined text-error" data-icon="database">database</span>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Data Management</h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-on-surface">Data Persistence Intervals</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Determine how long local cache is retained before forced sync.</p>
                    </div>
                    <select
                      className="bg-[#0F172A] border border-[#334155] text-on-surface font-body-md rounded-DEFAULT px-4 py-2 focus:ring-primary-container focus:border-primary-container w-full sm:w-48 outline-none"
                      onChange={(e) => handleSelectChange('dataRetentionInterval', e.target.value)}
                      value={settings.dataRetentionInterval}
                    >
                      <option>15 Minutes</option>
                      <option>1 Hour</option>
                      <option>12 Hours</option>
                      <option>24 Hours</option>
                    </select>
                  </div>
                  <hr className="border-[#334155]" />
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <h4 className="font-body-lg text-body-lg font-semibold text-error">Clear Local Storage</h4>
                      <p className="font-body-md text-body-md text-on-surface-variant mt-1">Warning: This will clear all unsynced drafts and require re-authentication.</p>
                    </div>
                    <button
                      className="px-6 py-2 bg-transparent border border-[#334155] text-error font-label-md text-label-md rounded-DEFAULT hover:bg-error-container/20 hover:border-error transition-colors focus:ring-2 focus:ring-error focus:ring-offset-2 focus:ring-offset-[#0F172A] outline-none h-touch-target flex items-center justify-center whitespace-nowrap"
                      onClick={() => {
                        if (typeof window !== 'undefined' && window.confirm('Are you sure you want to clear all local data? This action cannot be undone.')) {
                          clearAndReset();
                        }
                      }}
                    >
                      Clear Storage
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
