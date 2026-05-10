// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Operational Insights
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface OperationalInsightsProps {}

export function OperationalInsights(props: OperationalInsightsProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden md:flex flex-col h-full w-64 bg-surface-container dark:bg-surface-container border-r border-outline-variant p-unit gap-base fixed left-0 top-0 z-40 pt-[calc(theme(spacing.touch-target)+theme(spacing.container-padding))]">
      <div className="px-gutter mb-6">
      <div className="flex items-center gap-3 mb-2">
      <img alt="Command Operator Profile" className="w-10 h-10 rounded-full object-cover border border-outline-variant" data-alt="A close-up, highly professional headshot of a tactical operations commander in a dark, high-tech command center environment. The lighting is dramatic, with cool blue monitor glows reflecting on their face, conveying intense focus and authority. The aesthetic is gritty yet polished, fitting a high-stakes, mission-critical corporate UI." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSb8q3dObn4VmQRtn99YMi03qNc6LMpXdDtDN-1XglSBOrB5APhHhAoDOmNG6WYwI0R3sVV2bGlz8zalbVSfNEiJ7Pg9DFL154ZhiKJJC70lC7ZrzXlwx2y_fp-8ZKxZiI9lJ0jmaX2joO_v4kwm3Id7Sav_LAsrv_eUW5BidT8mPzZKD2ztejayu3kVChQbQYS9j5mUp0dYi1joV5c4GRON-F7QOR7CVHDBrb2lXxGP4l2bZyO7MvlOPbTX6vOhRT9J_MBisfrjo" />
      <div>
      <div className="font-headline-sm text-headline-sm font-bold text-primary">HQ Alpha</div>
      <div className="font-label-md text-label-md text-on-surface-variant">Sector 7 Command</div>
      </div>
      </div>
      </div>
      <a className="flex items-center gap-3 px-gutter py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all active:opacity-80" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>dashboard</span>
      <span className="font-label-md text-label-md">Dashboard</span>
      </a>
      <a className="flex items-center gap-3 px-gutter py-3 rounded-lg bg-secondary-container text-on-secondary-container transition-all active:opacity-80" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>monitoring</span>
      <span className="font-label-md text-label-md">Insights</span>
      </a>
      <a className="flex items-center gap-3 px-gutter py-3 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all active:opacity-80" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 0"}}>settings</span>
      <span className="font-label-md text-label-md">Settings</span>
      </a>
      </nav>
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col md:ml-64 relative">
      {/* TopAppBar */}
      <header className="flex justify-between items-center w-full px-gutter h-touch-target z-50 bg-surface dark:bg-surface border-b border-outline-variant sticky top-0">
      <div className="flex items-center gap-4">
      <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface md:hidden">RIC</div>
      <div className="font-headline-md text-headline-md font-bold text-on-surface dark:text-on-surface hidden md:block">Regional Incident Command</div>
      </div>
      <div className="flex items-center gap-2">
      <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95">
      <span className="material-symbols-outlined">search</span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95 relative">
      <span className="material-symbols-outlined">notifications</span>
      <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
      </button>
      <button className="p-2 rounded-full text-on-surface-variant hover:bg-surface-container-high transition-colors cursor-pointer active:scale-95">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      {/* Insights Canvas */}
      <main className="flex-1 overflow-y-auto p-container-padding bg-background">
      <div className="mb-8 flex justify-between items-end">
      <div>
      <h1 className="font-display-lg text-display-lg text-on-surface mb-2">Performance Insights</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Real-time metrics and historical trend analysis for Sector 7.</p>
      </div>
      <div className="flex gap-2">
      <button className="flex items-center gap-2 px-4 py-2 rounded glass-panel text-on-surface-variant hover:bg-surface-variant/50 transition-colors font-label-md text-label-md">
      <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                              Last 30 Days
                          </button>
      <button className="flex items-center gap-2 px-4 py-2 rounded bg-primary-container text-white hover:bg-primary-container/90 transition-colors font-label-md text-label-md">
      <span className="material-symbols-outlined text-[18px]">download</span>
                              Export Report
                          </button>
      </div>
      </div>
      {/* KPI Summary Cards (Bento Grid Top Row) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {/* KPI 1 */}
      <div className="glass-panel p-6 rounded-lg relative overflow-hidden group">
      <div className="absolute top-0 left-0 w-1 h-full bg-primary-container"></div>
      <div className="flex justify-between items-start mb-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Total Incidents</div>
      <span className="material-symbols-outlined text-primary-container">warning</span>
      </div>
      <div className="font-display-lg text-display-lg text-on-surface mb-1">1,248</div>
      <div className="flex items-center gap-1 text-tertiary-fixed-dim font-mono-data text-mono-data">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>
      <span>+12.4% vs last mo</span>
      </div>
      </div>
      {/* KPI 2 */}
      <div className="glass-panel p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-secondary"></div>
      <div className="flex justify-between items-start mb-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Avg Response Time</div>
      <span className="material-symbols-outlined text-secondary">timer</span>
      </div>
      <div className="font-display-lg text-display-lg text-on-surface mb-1">4m 12s</div>
      <div className="flex items-center gap-1 text-[#4ade80] font-mono-data text-mono-data">
      <span className="material-symbols-outlined text-[16px]">trending_down</span>
      <span>-0.5% vs last mo</span>
      </div>
      </div>
      {/* KPI 3 */}
      <div className="glass-panel p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-tertiary-fixed-dim"></div>
      <div className="flex justify-between items-start mb-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Active Units</div>
      <span className="material-symbols-outlined text-tertiary-fixed-dim">local_police</span>
      </div>
      <div className="font-display-lg text-display-lg text-on-surface mb-1">84/100</div>
      <div className="flex items-center gap-1 text-on-surface-variant font-mono-data text-mono-data">
      <span className="material-symbols-outlined text-[16px] text-tertiary-fixed-dim">info</span>
      <span>Near capacity threshold</span>
      </div>
      </div>
      {/* KPI 4 */}
      <div className="glass-panel p-6 rounded-lg relative overflow-hidden">
      <div className="absolute top-0 left-0 w-1 h-full bg-[#4ade80]"></div>
      <div className="flex justify-between items-start mb-4">
      <div className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">Resolution Rate</div>
      <span className="material-symbols-outlined text-[#4ade80]">check_circle</span>
      </div>
      <div className="font-display-lg text-display-lg text-on-surface mb-1">94.2%</div>
      <div className="flex items-center gap-1 text-[#4ade80] font-mono-data text-mono-data">
      <span className="material-symbols-outlined text-[16px]">trending_up</span>
      <span>+2.1% vs last mo</span>
      </div>
      </div>
      </div>
      {/* Complex Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Trend Line Chart Area */}
      <div className="lg:col-span-2 glass-panel rounded-lg p-6 flex flex-col h-[400px]">
      <div className="flex justify-between items-center mb-6 border-b border-outline-variant pb-4">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Incident Trends</h2>
      <p className="font-label-md text-label-md text-on-surface-variant mt-1">Volume vs Capacity over time</p>
      </div>
      <button className="p-2 hover:bg-surface-variant rounded transition-colors text-on-surface-variant">
      <span className="material-symbols-outlined">more_vert</span>
      </button>
      </div>
      {/* Faux Line Chart Visualization */}
      <div className="flex-1 relative w-full h-full border-l border-b border-outline-variant pl-2 pb-2 mt-4">
      {/* Y-Axis Labels */}
      <div className="absolute -left-8 top-0 font-mono-data text-mono-data text-on-surface-variant text-xs">500</div>
      <div className="absolute -left-8 top-1/2 font-mono-data text-mono-data text-on-surface-variant text-xs">250</div>
      <div className="absolute -left-6 bottom-0 font-mono-data text-mono-data text-on-surface-variant text-xs">0</div>
      {/* Grid Lines */}
      <div className="absolute top-1/2 w-full border-t border-outline-variant border-dashed opacity-50"></div>
      <div className="absolute top-1/4 w-full border-t border-outline-variant border-dashed opacity-30"></div>
      <div className="absolute top-3/4 w-full border-t border-outline-variant border-dashed opacity-30"></div>
      {/* Faux Line (SVG) */}
      <svg className="w-full h-full absolute inset-0 pl-2 pb-2" preserveAspectRatio="none" viewBox="0 0 100 100">
      {/* Trend Area */}
      <path d="M0 80 Q 20 60, 40 70 T 80 40 T 100 30 L 100 100 L 0 100 Z" fill="url(#gradient-primary)" opacity="0.1"></path>
      {/* Trend Line */}
      <path d="M0 80 Q 20 60, 40 70 T 80 40 T 100 30" fill="none" stroke="#2563eb" strokeWidth="2"></path>
      {/* Capacity Line */}
      <path d="M0 50 L 100 50" fill="none" stroke="#ffb596" strokeDasharray="2,2" strokeWidth="1"></path>
      {/* Data Points */}
      <circle cx="40" cy="70" fill="#1E293B" r="1.5" stroke="#2563eb" strokeWidth="1"></circle>
      <circle cx="80" cy="40" fill="#1E293B" r="1.5" stroke="#2563eb" strokeWidth="1"></circle>
      <circle cx="100" cy="30" fill="#1E293B" r="1.5" stroke="#2563eb" strokeWidth="1"></circle>
      <defs>
      <linearGradient id="gradient-primary" x1="0" x2="0" y1="0" y2="1">
      <stop offset="0%" stopColor="#2563eb"></stop>
      <stop offset="100%" stopColor="#2563eb" stopOpacity="0"></stop>
      </linearGradient>
      </defs>
      </svg>
      {/* X-Axis Labels */}
      <div className="absolute -bottom-6 left-0 font-mono-data text-mono-data text-on-surface-variant text-xs">Week 1</div>
      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 font-mono-data text-mono-data text-on-surface-variant text-xs">Week 2</div>
      <div className="absolute -bottom-6 right-0 font-mono-data text-mono-data text-on-surface-variant text-xs">Week 4</div>
      </div>
      </div>
      {/* Right Column Stack */}
      <div className="flex flex-col gap-6">
      {/* Resource Allocation (Faux Pie Chart) */}
      <div className="glass-panel rounded-lg p-6 flex-1">
      <div className="flex justify-between items-center mb-6">
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Resource Allocation</h2>
      <span className="material-symbols-outlined text-on-surface-variant text-[20px]">pie_chart</span>
      </div>
      <div className="flex items-center justify-center h-[180px] relative">
      {/* CSS Faux Donut Chart */}
      <div className="w-32 h-32 rounded-full border-[16px] border-surface-container relative" style={{borderColor: "#2563eb", borderRightColor: "#b4c5ff", borderBottomColor: "#3c4a5e", transform: "rotate(-45deg)"}}></div>
      <div className="absolute inset-0 flex items-center justify-center flex-col">
      <span className="font-display-lg text-headline-md text-on-surface font-bold">100%</span>
      <span className="font-label-md text-[10px] text-on-surface-variant uppercase">Deployed</span>
      </div>
      </div>
      <div className="mt-4 space-y-3">
      <div className="flex justify-between items-center text-body-md font-body-md">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-primary-container"></div>
      <span className="text-on-surface">Patrol Units</span>
      </div>
      <span className="font-mono-data text-on-surface-variant">55%</span>
      </div>
      <div className="flex justify-between items-center text-body-md font-body-md">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-primary"></div>
      <span className="text-on-surface">Tactical</span>
      </div>
      <span className="font-mono-data text-on-surface-variant">25%</span>
      </div>
      <div className="flex justify-between items-center text-body-md font-body-md">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 rounded-sm bg-secondary-container"></div>
      <span className="text-on-surface">Medical</span>
      </div>
      <span className="font-mono-data text-on-surface-variant">20%</span>
      </div>
      </div>
      </div>
      </div>
      </div>
      {/* Regional Response Efficiency (Bar Chart) */}
      <div className="mt-6 glass-panel rounded-lg p-6">
      <div className="flex justify-between items-center mb-6">
      <div>
      <h2 className="font-headline-sm text-headline-sm text-on-surface">Regional Response Efficiency</h2>
      <p className="font-label-md text-label-md text-on-surface-variant mt-1">Average response time (minutes) by district</p>
      </div>
      <div className="flex gap-4">
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-primary-container rounded-sm"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Target Met</span>
      </div>
      <div className="flex items-center gap-2">
      <div className="w-3 h-3 bg-tertiary-fixed-dim rounded-sm"></div>
      <span className="font-label-md text-label-md text-on-surface-variant">Exceeds Target</span>
      </div>
      </div>
      </div>
      <div className="h-[200px] flex items-end justify-between gap-2 mt-8 border-b border-outline-variant pb-2 relative">
      {/* Target Line */}
      <div className="absolute top-[40%] w-full border-t border-tertiary-fixed-dim border-dashed z-10 opacity-70">
      <span className="absolute -top-5 right-0 font-mono-data text-[10px] text-tertiary-fixed-dim">Target: 5m</span>
      </div>
      {/* Faux Bars */}
      <div className="w-full flex justify-center group relative">
      <div className="w-12 chart-bar-1 rounded-t-sm transition-all hover:opacity-80"></div>
      <div className="absolute -bottom-8 font-label-md text-label-md text-on-surface-variant">North</div>
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 font-mono-data text-mono-data text-on-surface bg-surface-container-highest px-2 py-1 rounded transition-opacity">4.2m</div>
      </div>
      <div className="w-full flex justify-center group relative">
      <div className="w-12 chart-bar-2 rounded-t-sm transition-all hover:opacity-80" style={{backgroundColor: "#ffb596"}}></div>
      <div className="absolute -bottom-8 font-label-md text-label-md text-on-surface-variant">South</div>
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 font-mono-data text-mono-data text-on-surface bg-surface-container-highest px-2 py-1 rounded transition-opacity">6.1m</div>
      </div>
      <div className="w-full flex justify-center group relative">
      <div className="w-12 chart-bar-3 rounded-t-sm transition-all hover:opacity-80"></div>
      <div className="absolute -bottom-8 font-label-md text-label-md text-on-surface-variant">East</div>
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 font-mono-data text-mono-data text-on-surface bg-surface-container-highest px-2 py-1 rounded transition-opacity">3.5m</div>
      </div>
      <div className="w-full flex justify-center group relative">
      <div className="w-12 chart-bar-4 rounded-t-sm transition-all hover:opacity-80" style={{backgroundColor: "#ffb596"}}></div>
      <div className="absolute -bottom-8 font-label-md text-label-md text-on-surface-variant">West</div>
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 font-mono-data text-mono-data text-on-surface bg-surface-container-highest px-2 py-1 rounded transition-opacity">7.0m</div>
      </div>
      <div className="w-full flex justify-center group relative">
      <div className="w-12 chart-bar-5 rounded-t-sm transition-all hover:opacity-80"></div>
      <div className="absolute -bottom-8 font-label-md text-label-md text-on-surface-variant">Central</div>
      <div className="absolute -top-8 opacity-0 group-hover:opacity-100 font-mono-data text-mono-data text-on-surface bg-surface-container-highest px-2 py-1 rounded transition-opacity">4.8m</div>
      </div>
      </div>
      <div className="h-8"></div> {/* Spacing for labels */}
      </div>
      </main>
      </div>
    </>
  );
}
