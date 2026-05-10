// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: System Error Recovery
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SystemErrorRecoveryProps {}

export function SystemErrorRecovery(props: SystemErrorRecoveryProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col bg-surface-container dark:bg-surface-container fixed left-0 top-0 h-full w-64 border-r border-outline-variant z-40 p-unit gap-base">
      <div className="flex items-center gap-3 px-3 py-4 mb-4">
      <div className="w-10 h-10 rounded-full bg-surface-variant flex items-center justify-center overflow-hidden">
      <img alt="Command Operator Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a serious male command operator in a dimly lit, high-tech control room environment. He is wearing a dark, utilitarian uniform. The lighting is moody and cinematic, emphasizing his focused expression and professional demeanor. The overall aesthetic aligns with a dark, mission-critical corporate minimalism style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6uRUdbjZXDLYXQcd7c5bjuS6vDgv3rzF6P5wfyfeLMDpK3ag6apGTybexrzK6EZwaftVWNx_dMt53pg8D7yAJmLhe81OcujWPtFT7SbvVdR9lbYRHHBrOEPtZU6psDTnG-FvqYZggRxr2kofs2gBG-57p8Mn1ghAuIEDP8T0gMMEfUCGl3ajWGc2D1h9bS2ZGvPs3La4eCtUMs8ptyERqAABTn-o4hbTRWnA66mob_mNbFsR5VK-n26rQiZe6hM2cR5FQrqd8bMI" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm font-bold text-primary">HQ Alpha</h2>
      <p className="font-label-md text-label-md text-on-surface-variant">Sector 7 Command</p>
      </div>
      </div>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all active:opacity-80 transition-opacity" href="#">
      <span className="material-symbols-outlined">dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all active:opacity-80 transition-opacity" href="#">
      <span className="material-symbols-outlined">monitoring</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-3 py-3 rounded-lg bg-secondary-container text-on-secondary-container rounded-lg active:opacity-80 transition-opacity" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </nav>
      {/* Main Content Canvas */}
      <div className="flex-1 flex flex-col md:ml-64 relative">
      {/* TopAppBar (Web) / BottomNavBar (Mobile) replacement - App is in Error State, showing TopAppBar for context but maybe disabled search */}
      <header className="hidden md:flex bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center w-full px-gutter h-touch-target z-50">
      <div className="flex items-center gap-4">
      <h1 className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface">Regional Incident Command</h1>
      </div>
      <div className="flex items-center gap-4">
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform" disabled={true}>
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-10 h-10 flex items-center justify-center rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform" disabled={true}>
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Mobile Header (fallback) */}
      <header className="md:hidden flex justify-between items-center bg-surface px-gutter h-touch-target border-b border-outline-variant">
      <h1 className="font-headline-sm text-headline-sm font-bold text-on-surface">HQ Alpha</h1>
      </header>
      <main className="flex-1 overflow-y-auto p-container-padding flex items-center justify-center">
      {/* Error State Card */}
      <div className="bg-surface rounded-xl border border-outline-variant p-8 max-w-lg w-full flex flex-col items-center text-center">
      {/* Icon container with Error styling */}
      <div className="w-20 h-20 rounded-full bg-error-container/20 flex items-center justify-center mb-6">
      <span className="material-symbols-outlined text-[48px] text-error" style={{fontVariationSettings: "'FILL' 1"}}>wifi_off</span>
      </div>
      <h2 className="font-display-lg text-display-lg text-on-surface mb-2">Data Connection Lost</h2>
      <p className="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-md">
                          Unable to synchronize with Regional Command servers. Local cache is preserved, but real-time updates are suspended. Please verify your network uplink or retry the synchronization process.
                      </p>
      {/* Technical Details (Collapsible/Bento style detail) */}
      <div className="w-full bg-surface-container rounded-lg border border-outline-variant p-4 mb-8 text-left flex items-start gap-3">
      <span className="material-symbols-outlined text-outline">terminal</span>
      <div>
      <p className="font-label-md text-label-md text-on-surface-variant mb-1">ERR_SYNC_TIMEOUT</p>
      <p className="font-mono-data text-mono-data text-outline">Last successful sync: 14:02 EST. Payload size: 4.2MB.</p>
      </div>
      </div>
      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full">
      <button className="flex-1 h-touch-target rounded-lg border border-[#334155] bg-transparent text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-surface-container-high transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-background active:scale-95">
      <span className="material-symbols-outlined text-[18px]">delete_sweep</span>
                              Clear App Data &amp; Reset
                          </button>
      <button className="flex-1 h-touch-target rounded-lg bg-primary-container text-white font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-[#1d4ed8] transition-colors focus:outline-none focus:ring-2 focus:ring-[#2563eb] focus:ring-offset-2 focus:ring-offset-background active:scale-95">
      <span className="material-symbols-outlined text-[18px]">sync</span>
                              Retry Sync
                          </button>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
