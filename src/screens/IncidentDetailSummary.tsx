// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Incident Detail Summary
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface IncidentDetailSummaryProps {}

export function IncidentDetailSummary(props: IncidentDetailSummaryProps) {
  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 border-r border-outline-variant bg-surface-container dark:bg-surface-container flex flex-col h-full p-unit gap-base z-40 hidden md:flex">
      <div className="px-3 py-4 mb-4 flex items-center gap-3">
      <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden border border-outline-variant flex-shrink-0">
      <img alt="Command Operator Profile" className="w-full h-full object-cover" data-alt="A close up, professional headshot of a tactical command operator in a dimly lit, high-tech control room environment. The lighting is cool, technical blue and dark slate, reflecting the high-stakes, minimalist corporate aesthetic of the interface. The operator looks focused, ensuring the mood is serious and authoritative." src="https://lh3.googleusercontent.com/aida-public/AB6AXuArtfwpgEPHe4QlPfdJl_d4RNoC1LUPlGVeqbDApjptAe7YcjX2laLef-qx56wmJITp8Nyc8YMhNZKCbtgzAzN6w3mMuBNbwcmWIwEc-mwS0TswfFt-EHhmrpkD-Vh_5S5MJYfEYfipBfrNdDKUFZIx1rSQ00o8Y8MokoM74vEaHhVRMhC3A0qZokDspE7ne6onL3EPx2STjx7dtiMnzElNC4zRGCeUJN3wpejVtGFk7y9-favrzTe-WCxPvwZuHFHMyvI88zcKxvQ" />
      </div>
      <div>
      <h2 className="font-headline-sm text-headline-sm font-bold text-primary">HQ Alpha</h2>
      <p className="font-label-md text-label-md text-on-surface-variant">Sector 7 Command</p>
      </div>
      </div>
      <nav className="flex-1 flex flex-col gap-1">
      <a className="flex items-center gap-3 px-3 py-2 bg-secondary-container text-on-secondary-container rounded-lg font-label-md text-label-md transition-all active:opacity-80" href="#">
      <span className="material-symbols-outlined">dashboard</span>
                      Dashboard
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md active:opacity-80" href="#">
      <span className="material-symbols-outlined">monitoring</span>
                      Insights
                  </a>
      <a className="flex items-center gap-3 px-3 py-2 text-on-surface-variant hover:text-on-surface hover:bg-surface-variant/50 transition-all rounded-lg font-label-md text-label-md active:opacity-80" href="#">
      <span className="material-symbols-outlined">settings</span>
                      Settings
                  </a>
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
      <input className="bg-background border border-outline-variant rounded pl-8 pr-3 py-1.5 text-body-md font-body-md text-on-surface placeholder-on-surface-variant focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors w-64 h-8" placeholder="Search..." type="text" />
      </div>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95">
      <span className="material-symbols-outlined">notifications</span>
      </button>
      <button className="w-8 h-8 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high transition-colors rounded-full cursor-pointer active:scale-95">
      <span className="material-symbols-outlined">account_circle</span>
      </button>
      </div>
      </header>
      <main className="flex-1 pt-[60px] p-container-padding flex flex-col gap-gutter">
      <nav className="flex items-center gap-2 font-label-md text-label-md text-on-surface-variant mb-2">
      <a className="hover:text-primary transition-colors" href="#">Dashboard</a>
      <span className="material-symbols-outlined text-[14px]">chevron_right</span>
      <span className="text-on-surface">Incident #INC-8924</span>
      </nav>
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 mb-2">
      <div>
      <div className="flex items-center gap-3 mb-2">
      <span className="font-mono-data text-mono-data text-outline">#INC-8924</span>
      <div className="flex items-center gap-1.5 px-2 py-0.5 border border-outline-variant rounded bg-surface">
      <div className="w-2 h-2 rounded-full bg-error"></div>
      <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Critical</span>
      </div>
      <div className="flex items-center gap-1.5 px-2 py-0.5 border border-outline-variant rounded bg-surface">
      <div className="w-2 h-2 rounded-full bg-primary-container"></div>
      <span className="font-label-md text-label-md text-on-surface uppercase tracking-wider">Active</span>
      </div>
      </div>
      <h1 className="font-display-lg text-display-lg text-on-surface m-0 leading-tight">Hazardous Material Spill</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant mt-1">Sector 7 Processing Facility - Main Containment Wing</p>
      </div>
      <div className="flex items-center gap-3">
      <button className="flex items-center gap-2 px-4 h-touch-target border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-sm">picture_as_pdf</span>
                              Export PDF
                          </button>
      <button className="flex items-center gap-2 px-4 h-touch-target border border-outline-variant rounded text-on-surface font-label-md text-label-md hover:bg-surface-container-high active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-sm">group_add</span>
                              Assign Personnel
                          </button>
      <button className="flex items-center gap-2 px-4 h-touch-target bg-primary-container text-on-primary-container rounded font-label-md text-label-md active:scale-95 transition-all focus:outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background">
      <span className="material-symbols-outlined text-sm">update</span>
                              Update Status
                          </button>
      </div>
      </div>
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-gutter items-start">
      <div className="xl:col-span-8 flex flex-col gap-gutter">
      <div className="bg-surface border border-outline-variant rounded overflow-hidden flex flex-col lg:flex-row h-auto lg:h-80 border-l-4 border-l-error">
      <div className="w-full lg:w-3/5 bg-surface-container-highest relative">
      <img className="w-full h-full object-cover" data-alt="A highly detailed satellite map view of an industrial sector at night, rendered in a dark mode UI aesthetic. The map uses deep navy and slate gray tones, with stark white outlines for roads and building footprints. A glowing red pulse indicator marks the center of a large containment facility, signaling a critical incident. The overall mood is tense, technological, and strictly utilitarian." data-location="Sector 7 Industrial Zone" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9yhuQUXdiyKAX1gOsyB1B-ab00DQ14EEZQqyLEJbeD6heuJfwZJf6ZtDlEJsok_0esMu1j0XUfsIjCyy41zNUc2r28-EmMRa8RK37ibJ8Lk_evgr1JxGOJMBOCoNbdHwcKxOBauCmMX-yZEM8Fh-XcFWfNYPhTowAoeahpDNaWu5W6ObikpDaELU2Lyeggvf7Uq8HfUcIZRsBeO4cYS2knH8Nk_cPDBl16oEdsGy5UG7IHMiMmBz1NGKotWrhFDJyLjU1oiZWBow" />
      <div className="absolute bottom-2 right-2 bg-background/90 px-2 py-1 rounded border border-outline-variant font-mono-data text-mono-data text-on-surface-variant backdrop-blur-sm">
                                      48°52'5"N 2°19'59"E
                                  </div>
      </div>
      <div className="w-full lg:w-2/5 p-4 flex flex-col gap-4 border-t lg:border-t-0 lg:border-l border-outline-variant">
      <div>
      <h3 className="font-headline-sm text-headline-sm text-on-surface mb-3">Incident Overview</h3>
      <p className="font-body-md text-body-md text-on-surface-variant line-clamp-4">Uncontained chemical leak reported in the primary cooling manifold. Secondary containment systems have been engaged but show signs of stress. Immediate evacuation of sub-level 3 complete. Hazmat teams en route.</p>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-auto">
      <div>
      <span className="font-label-md text-label-md text-outline block mb-1">Reported By</span>
      <span className="font-body-md text-body-md text-on-surface">System Auto-Sens</span>
      </div>
      <div>
      <span className="font-label-md text-label-md text-outline block mb-1">Time Elapsed</span>
      <span className="font-mono-data text-mono-data text-error font-bold">01h 42m</span>
      </div>
      <div>
      <span className="font-label-md text-label-md text-outline block mb-1">Est. Impact Area</span>
      <span className="font-mono-data text-mono-data text-on-surface">~2.5 sq miles</span>
      </div>
      <div>
      <span className="font-label-md text-label-md text-outline block mb-1">Wind Vector</span>
      <span className="font-mono-data text-mono-data text-on-surface">NE 14 knots</span>
      </div>
      </div>
      </div>
      </div>
      <div className="bg-surface border border-outline-variant rounded p-4 border-l-4 border-l-primary-container">
      <div className="flex justify-between items-center mb-4 border-b border-outline-variant pb-2">
      <h3 className="font-headline-sm text-headline-sm text-on-surface">Assigned Resources</h3>
      <span className="font-label-md text-label-md text-primary-container cursor-pointer hover:underline">View All Active Units</span>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div className="flex items-center justify-between p-3 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-on-surface-variant">local_fire_department</span>
      <div>
      <div className="font-body-md text-body-md text-on-surface font-bold">Hazmat Alpha</div>
      <div className="font-mono-data text-mono-data text-outline">UNIT-092</div>
      </div>
      </div>
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
      </div>
      <div className="flex items-center justify-between p-3 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-on-surface-variant">medical_services</span>
      <div>
      <div className="font-body-md text-body-md text-on-surface font-bold">Med-Evac 3</div>
      <div className="font-mono-data text-mono-data text-outline">UNIT-114</div>
      </div>
      </div>
      <span className="w-2 h-2 rounded-full bg-primary-container shadow-[0_0_8px_rgba(37,99,235,0.6)]"></span>
      </div>
      <div className="flex items-center justify-between p-3 border border-outline-variant rounded bg-background hover:bg-surface-container-high transition-colors">
      <div className="flex items-center gap-3">
      <span className="material-symbols-outlined text-on-surface-variant">engineering</span>
      <div>
      <div className="font-body-md text-body-md text-on-surface font-bold">Tech Squad Delta</div>
      <div className="font-mono-data text-mono-data text-outline">UNIT-045</div>
      </div>
      </div>
      <span className="w-2 h-2 rounded-full bg-tertiary shadow-[0_0_8px_rgba(255,181,150,0.6)]"></span>
      </div>
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
      <div className="relative">
      <div className="absolute w-3 h-3 rounded-full bg-background border-2 border-primary -left-[31px] top-1 z-10"></div>
      <div className="flex justify-between items-start mb-1">
      <span className="font-label-md text-label-md text-primary">System Update</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">14:05:22 Z</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface">Secondary containment doors locked. Sub-level 3 ventilation purged and sealed.</p>
      </div>
      <div className="relative">
      <div className="absolute w-3 h-3 rounded-full bg-background border-2 border-outline-variant -left-[31px] top-1 z-10"></div>
      <div className="flex justify-between items-start mb-1">
      <span className="font-label-md text-label-md text-on-surface">Resource Assigned</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">13:50:10 Z</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">Hazmat Alpha and Med-Evac 3 dispatched from Station 4.</p>
      </div>
      <div className="relative">
      <div className="absolute w-3 h-3 rounded-full bg-background border-2 border-tertiary -left-[31px] top-1 z-10"></div>
      <div className="flex justify-between items-start mb-1">
      <span className="font-label-md text-label-md text-tertiary">Status Change</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">13:45:00 Z</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">Incident escalated to CRITICAL by Operator HQ-Alpha.</p>
      </div>
      <div className="relative">
      <div className="absolute w-3 h-3 rounded-full bg-background border-2 border-error -left-[31px] top-1 z-10"></div>
      <div className="flex justify-between items-start mb-1">
      <span className="font-label-md text-label-md text-error">Initial Report</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">13:42:15 Z</span>
      </div>
      <p className="font-body-md text-body-md text-on-surface-variant">Automated pressure drop detected in Main Cooling Manifold. Alarm triggered.</p>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
      </div>
    </>
  );
}
