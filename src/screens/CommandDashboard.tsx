// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Command Dashboard
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface CommandDashboardProps {}

export function CommandDashboard(props: CommandDashboardProps) {
  return (
    <>
      {/* SideNavBar (Shared Component) */}
      <nav className="fixed left-0 top-0 h-full w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant flex flex-col p-unit gap-base z-40">
      {/* Header */}
      <div className="px-unit py-gutter mb-gutter flex items-center gap-gutter border-b border-outline-variant">
      <div className="w-10 h-10 rounded bg-surface-variant flex items-center justify-center border border-outline-variant overflow-hidden shrink-0">
      <img alt="Command Operator Profile" className="w-full h-full object-cover" data-alt="A close-up portrait of a serious military or emergency response operator in a dark, high-tech command center. Subtle blue light reflects on their face, conveying a tense, focused mood typical of high-stakes environments." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCVzj9raCSIPFq8fCrtECl36nnym-1qafCXFirRDmD-EN7a87o4f28buMh4sjbzG2UeiTpEkB10KJtjm-Naa9M3Xz0ULUdvdaILix15t0dSSb81dOED9zTh8i8vxKcy3NrtY2ldKUlTozcA9cr_l04aEZZrT1HZHmB4FO6Z9J--S_G4NfbwSWls_itdNacTBP3Z8ajFIY4mAHxxROjHQlTeGfsSiTSvWRLXWZnSu3buej1Ianz0dW7rzZ_Bu0xhj4aVklOVqmwyjyI" />
      </div>
      <div className="flex flex-col">
      <span className="font-headline-sm text-headline-sm font-bold text-primary">HQ Alpha</span>
      <span className="font-label-md text-label-md text-on-surface-variant">Sector 7 Command</span>
      </div>
      </div>
      {/* Navigation Links */}
      <div className="flex flex-col gap-base flex-1">
      {/* Active Tab: Dashboard */}
      <a className="flex items-center gap-unit px-gutter py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80 transition-opacity" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>dashboard</span>
                      Dashboard
                  </a>
      {/* Inactive Tab: Insights */}
      <a className="flex items-center gap-unit px-gutter py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80" href="#">
      <span className="material-symbols-outlined">monitoring</span>
                      Insights
                  </a>
      {/* Inactive Tab: Settings */}
      <a className="flex items-center gap-unit px-gutter py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md cursor-pointer active:opacity-80 mt-auto" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
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
      <input className="bg-surface-container border border-outline-variant text-on-surface font-body-md text-body-md rounded pl-10 pr-4 py-1.5 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary w-64 placeholder:text-outline transition-colors" placeholder="Search incidents..." type="text" />
      </div>
      {/* Trailing Icon Actions */}
      <button aria-label="Notifications" className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button aria-label="Account" className="w-8 h-8 flex items-center justify-center rounded text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 transition-transform">
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
      <button className="bg-primary-container text-on-primary-container hover:bg-primary border border-primary-container font-label-md text-label-md px-gutter h-10 rounded inline-flex items-center justify-center gap-unit transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background cursor-pointer shadow-[0_0_15px_rgba(37,99,235,0.2)]">
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
      <span className="font-display-lg text-display-lg text-on-surface">24</span>
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
      <span className="font-display-lg text-display-lg text-on-surface">1,402</span>
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
      <span className="font-display-lg text-display-lg text-on-surface">4m 12s</span>
      <span className="font-label-md text-label-md text-primary flex items-center"><span className="material-symbols-outlined text-[14px]">arrow_downward</span> 2%</span>
      </div>
      </div>
      </div>
      {/* Filters Section */}
      <div className="bg-surface border border-outline-variant rounded-lg p-unit flex flex-wrap gap-gutter items-center justify-between">
      <div className="flex items-center gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant pl-2">Status:</span>
      <div className="flex border border-outline-variant rounded overflow-hidden">
      <button className="px-4 py-1.5 bg-surface-variant text-on-surface font-label-md text-label-md border-r border-outline-variant">Active</button>
      <button className="px-4 py-1.5 bg-surface text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md border-r border-outline-variant transition-colors">Pending</button>
      <button className="px-4 py-1.5 bg-surface text-on-surface-variant hover:bg-surface-container-high font-label-md text-label-md transition-colors">Resolved</button>
      </div>
      </div>
      <div className="flex items-center gap-2">
      <span className="font-label-md text-label-md text-on-surface-variant">Severity:</span>
      <div className="flex gap-2">
      <button className="px-3 py-1 rounded border border-error bg-error/10 text-error font-label-md text-label-md flex items-center gap-1 hover:bg-error/20 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span> Critical
                              </button>
      <button className="px-3 py-1 rounded border border-tertiary bg-tertiary/10 text-tertiary font-label-md text-label-md flex items-center gap-1 hover:bg-tertiary/20 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span> High
                              </button>
      <button className="px-3 py-1 rounded border border-primary bg-primary/10 text-primary font-label-md text-label-md flex items-center gap-1 hover:bg-primary/20 transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> Medium
                              </button>
      <button className="px-3 py-1 rounded border border-outline-variant bg-surface-container text-on-surface-variant font-label-md text-label-md flex items-center gap-1 hover:bg-surface-variant transition-colors">
      <span className="w-1.5 h-1.5 rounded-full bg-outline"></span> Low
                              </button>
      </div>
      </div>
      <div className="flex-1 flex justify-end">
      <button className="p-1.5 rounded border border-outline-variant bg-surface text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors">
      <span className="material-symbols-outlined" style={{fontSize: "18px"}}>filter_list</span>
      </button>
      </div>
      </div>
      {/* Data Grid (Incident Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-gutter">
      {/* Incident Card: Critical */}
      <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col relative overflow-hidden hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-error"></div>
      <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
      <span className="font-mono-data text-mono-data text-on-surface-variant">INC-9942</span>
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container border border-outline-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
      <span className="font-label-md text-label-md text-on-surface">Active</span>
      </span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">schedule</span> 12m ago
                              </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 pr-4">Industrial Chemical Spill</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Large scale toxic leak reported at primary manufacturing sector. Immediate evacuation protocol initiated.</p>
      <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-outline-variant/50">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">location_on</span> Sector 4, Dist 9
                                  </span>
      <span className="font-label-md text-label-md text-error uppercase">Critical</span>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded border border-surface bg-primary/20 flex items-center justify-center text-[10px] font-bold text-primary" title="Hazmat Unit">HZ</div>
      <div className="w-6 h-6 rounded border border-surface bg-error/20 flex items-center justify-center text-[10px] font-bold text-error" title="Medical Unit">MD</div>
      <div className="w-6 h-6 rounded border border-surface bg-surface-variant flex items-center justify-center text-[10px] font-bold text-on-surface-variant">+3</div>
      </div>
      <span className="font-label-md text-label-md text-primary group-hover:underline">View Details</span>
      </div>
      </div>
      </div>
      {/* Incident Card: High */}
      <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col relative overflow-hidden hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-tertiary"></div>
      <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
      <span className="font-mono-data text-mono-data text-on-surface-variant">INC-9941</span>
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container border border-outline-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-tertiary"></span>
      <span className="font-label-md text-label-md text-on-surface">Active</span>
      </span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">schedule</span> 45m ago
                              </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 pr-4">Multi-Vehicle Collision</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Major pileup on interstate. Multiple entrapments reported. Traffic blocked in both directions.</p>
      <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-outline-variant/50">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">location_on</span> Highway 101, MM 42
                                  </span>
      <span className="font-label-md text-label-md text-tertiary uppercase">High</span>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded border border-surface bg-error/20 flex items-center justify-center text-[10px] font-bold text-error" title="Medical Unit">MD</div>
      <div className="w-6 h-6 rounded border border-surface bg-secondary/20 flex items-center justify-center text-[10px] font-bold text-secondary" title="Police Unit">PD</div>
      </div>
      <span className="font-label-md text-label-md text-primary group-hover:underline">View Details</span>
      </div>
      </div>
      </div>
      {/* Incident Card: Medium */}
      <div className="bg-surface border border-outline-variant rounded-lg p-gutter flex flex-col relative overflow-hidden hover:bg-surface-container-low transition-colors cursor-pointer group">
      <div className="absolute left-0 top-0 bottom-0 w-1 bg-primary"></div>
      <div className="flex justify-between items-start mb-3">
      <div className="flex items-center gap-2">
      <span className="font-mono-data text-mono-data text-on-surface-variant">INC-9938</span>
      <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-surface-container border border-outline-variant">
      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
      <span className="font-label-md text-label-md text-on-surface">Active</span>
      </span>
      </div>
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[14px]">schedule</span> 1h 12m ago
                              </span>
      </div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-2 pr-4">Structural Fire - Commercial</h3>
      <p className="font-body-md text-body-md text-on-surface-variant mb-4 line-clamp-2">Two-story warehouse fire. Currently contained but requires ongoing suppression efforts.</p>
      <div className="mt-auto flex flex-col gap-2 pt-3 border-t border-outline-variant/50">
      <div className="flex items-center justify-between">
      <span className="font-label-md text-label-md text-on-surface-variant flex items-center gap-1">
      <span className="material-symbols-outlined text-[16px]">location_on</span> Industrial Park, B-Block
                                  </span>
      <span className="font-label-md text-label-md text-primary uppercase">Medium</span>
      </div>
      <div className="flex items-center justify-between">
      <div className="flex -space-x-2">
      <div className="w-6 h-6 rounded border border-surface bg-tertiary/20 flex items-center justify-center text-[10px] font-bold text-tertiary" title="Fire Unit">FD</div>
      </div>
      <span className="font-label-md text-label-md text-primary group-hover:underline">View Details</span>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
