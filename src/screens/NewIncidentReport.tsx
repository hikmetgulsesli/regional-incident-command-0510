// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: New Incident Report
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface NewIncidentReportProps {}

export function NewIncidentReport(props: NewIncidentReportProps) {
  return (
    <>
      {/* Task-focused layout: Suppressed Navigation Shell */}
      <main className="w-full max-w-2xl bg-surface-container rounded-lg border border-outline-variant shadow-lg flex flex-col overflow-hidden">
      {/* Form Header */}
      <header className="px-6 py-5 border-b border-outline-variant bg-surface-container-low flex items-center gap-3">
      <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>edit_document</span>
      <div>
      <h1 className="font-headline-md text-headline-md text-on-surface">Edit Incident Record</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Update critical details for ongoing operational logs.</p>
      </div>
      </header>
      {/* Form Body */}
      <form className="flex flex-col gap-6 p-6">
      {/* Field: Incident Title (Error State Demo) */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-error flex items-center justify-between" htmlFor="incident_title">
      <span>Incident Title <span className="text-error">*</span></span>
      </label>
      <div className="relative">
      <input className="w-full bg-surface-container-lowest border border-error text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md focus:outline-none focus:ring-1 focus:ring-error focus:border-error transition-colors" id="incident_title" placeholder="Enter formal incident designation" type="text" value="" />
      <span className="material-symbols-outlined absolute right-3 top-2.5 text-error text-[20px] pointer-events-none">error</span>
      </div>
      <div className="flex items-start gap-1 mt-0.5">
      <span className="font-label-md text-label-md text-error">Incident Title is a required field.</span>
      </div>
      </div>
      {/* Field: Location */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_location">
                          Location <span className="text-error">*</span>
      </label>
      <div className="relative group">
      <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] group-focus-within:text-primary transition-colors">location_on</span>
      <input className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT pl-10 pr-3 py-2.5 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors" id="incident_location" placeholder="Enter precise location coordinates" type="text" value="Sector 7G, Industrial Quadrant" />
      </div>
      </div>
      {/* Grid for shorter fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Field: Severity Level */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_severity">Severity Level</label>
      <div className="relative">
      <select className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer" id="incident_severity">
      <option value="critical">Critical (Level 1)</option>
      <option selected={true} value="high">High (Level 2)</option>
      <option value="medium">Medium (Level 3)</option>
      <option value="low">Low (Level 4)</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      {/* Field: Status (Bonus implicit field for CRUD context) */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_status">Operational Status</label>
      <div className="relative">
      <select className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer" id="incident_status">
      <option selected={true} value="active">Active / Ongoing</option>
      <option value="contained">Contained</option>
      <option value="resolved">Resolved</option>
      </select>
      <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">arrow_drop_down</span>
      </div>
      </div>
      </div>
      {/* Field: Personnel Assignment (Simulated Multi-select) */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant">Personnel Assignment</label>
      <div className="w-full bg-surface-container-lowest border border-outline-variant rounded-DEFAULT p-1.5 flex flex-wrap gap-1.5 items-center focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
      {/* Assigned Personnel Pill 1 */}
      <div className="flex items-center gap-1 bg-surface-variant text-on-surface pl-2 pr-1 py-1 rounded-full border border-outline-variant">
      <span className="material-symbols-outlined text-[14px] text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
      <span className="font-label-md text-label-md">Cmdr. Shepard</span>
      <button className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-surface-container-highest p-0.5 ml-0.5" type="button">close</button>
      </div>
      {/* Assigned Personnel Pill 2 */}
      <div className="flex items-center gap-1 bg-surface-variant text-on-surface pl-2 pr-1 py-1 rounded-full border border-outline-variant">
      <span className="material-symbols-outlined text-[14px] text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
      <span className="font-label-md text-label-md">Lt. Vansen</span>
      <button className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-surface-container-highest p-0.5 ml-0.5" type="button">close</button>
      </div>
      {/* Input for adding more */}
      <input className="flex-1 bg-transparent border-none text-on-surface font-body-md text-body-md focus:outline-none focus:ring-0 min-w-[150px] px-2 py-1 placeholder-on-surface-variant/50" placeholder="Search roster to assign..." type="text" />
      </div>
      </div>
      {/* Field: Description */}
      <div className="flex flex-col gap-1.5">
      <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_description">Tactical Description</label>
      <textarea className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y" id="incident_description" placeholder="Provide detailed tactical situation report, initial response actions, and hazard assessment..." rows={4}></textarea>
      </div>
      </form>
      {/* Form Actions */}
      <footer className="px-6 py-4 border-t border-outline-variant bg-surface-container-low flex items-center justify-end gap-3 mt-auto">
      <button className="h-touch-target px-5 rounded-DEFAULT border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset-2 focus:ring-offset-background" type="button">
                      Cancel
                  </button>
      <button className="h-touch-target px-6 rounded-DEFAULT bg-primary-container text-on-primary-container font-label-md text-label-md hover:brightness-110 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-sm flex items-center gap-2" type="button">
      <span className="material-symbols-outlined text-[18px]">save</span>
                      Save Incident
                  </button>
      </footer>
      </main>
    </>
  );
}
