// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: New Incident Report
//
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from 'react';
import { useAppContext } from '../contexts/AppContext';
import type { Severity, IncidentStatus } from '../types/domain';

interface NewIncidentReportProps {}

export function NewIncidentReport(props: NewIncidentReportProps) {
  const { dispatch } = useAppContext();
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [severity, setSeverity] = useState<Severity>('high');
  const [status, setStatus] = useState<IncidentStatus>('active');
  const [description, setDescription] = useState('');
  const [assignedUnits, setAssignedUnits] = useState<string[]>([]);
  const [unitInput, setUnitInput] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [saving, setSaving] = useState(false);

  const validate = () => {
    const nextErrors: Record<string, string> = {};
    if (!title.trim()) {
      nextErrors.title = 'Incident Title is a required field.';
    }
    if (!location.trim()) {
      nextErrors.location = 'Location is a required field.';
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleAddUnit = () => {
    const trimmed = unitInput.trim();
    if (!trimmed) return;
    if (!assignedUnits.includes(trimmed)) {
      setAssignedUnits([...assignedUnits, trimmed]);
    }
    setUnitInput('');
  };

  const handleRemoveUnit = (unit: string) => {
    setAssignedUnits(assignedUnits.filter((u) => u !== unit));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddUnit();
    }
  };

  const handleSave = () => {
    if (!validate()) return;
    setSaving(true);
    const now = new Date().toISOString();
    const incident = {
      id: `inc-${Date.now()}`,
      title: title.trim(),
      location: location.trim(),
      severity,
      status,
      reportedAt: now,
      updatedAt: now,
      description: description.trim(),
      assignedUnits,
      evidenceCount: 0,
      residentReports: 0,
    };
    dispatch({ type: 'ADD_INCIDENT', incident });
    dispatch({ type: 'SHOW_TOAST', message: 'Incident reported successfully.', toastType: 'success' });
    dispatch({ type: 'NAVIGATE', screen: 'dashboard' });
    setSaving(false);
  };

  const handleCancel = () => {
    dispatch({ type: 'GO_BACK' });
  };

  return (
    <>
      {/* Task-focused layout: Suppressed Navigation Shell */}
      <main className="w-full max-w-2xl bg-surface-container rounded-lg border border-outline-variant shadow-lg flex flex-col overflow-hidden mx-auto mt-8">
        {/* Form Header */}
        <header className="px-6 py-5 border-b border-outline-variant bg-surface-container-low flex items-center gap-3">
          <span className="material-symbols-outlined text-primary text-[28px]" style={{fontVariationSettings: "'FILL' 1"}}>edit_document</span>
          <div>
            <h1 className="font-headline-md text-headline-md text-on-surface">New Incident Record</h1>
            <p className="font-body-md text-body-md text-on-surface-variant">Create a new incident for operational logs.</p>
          </div>
        </header>
        {/* Form Body */}
        <form className="flex flex-col gap-6 p-6" onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
          {/* Field: Incident Title */}
          <div className="flex flex-col gap-1.5">
            <label className={`font-label-md text-label-md flex items-center justify-between ${errors.title ? 'text-error' : 'text-on-surface-variant'}`} htmlFor="incident_title">
              <span>Incident Title <span className="text-error">*</span></span>
            </label>
            <div className="relative">
              <input
                className={`w-full bg-surface-container-lowest border ${errors.title ? 'border-error focus:ring-error focus:border-error' : 'border-outline-variant focus:ring-primary focus:border-primary'} text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md focus:outline-none focus:ring-1 transition-colors`}
                id="incident_title"
                placeholder="Enter formal incident designation"
                type="text"
                value={title}
                onChange={(e) => { setTitle(e.target.value); if (errors.title) { const { title: _, ...rest } = errors; setErrors(rest); } }}
              />
              {errors.title && (
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-error text-[20px] pointer-events-none">error</span>
              )}
            </div>
            {errors.title && (
              <div className="flex items-start gap-1 mt-0.5">
                <span className="font-label-md text-label-md text-error">{errors.title}</span>
              </div>
            )}
          </div>
          {/* Field: Location */}
          <div className="flex flex-col gap-1.5">
            <label className={`font-label-md text-label-md ${errors.location ? 'text-error' : 'text-on-surface-variant'}`} htmlFor="incident_location">
              Location <span className="text-error">*</span>
            </label>
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-3 top-2.5 text-on-surface-variant text-[20px] group-focus-within:text-primary transition-colors">location_on</span>
              <input
                className={`w-full bg-surface-container-lowest border ${errors.location ? 'border-error focus:ring-error focus:border-error' : 'border-outline-variant focus:ring-primary focus:border-primary'} text-on-surface rounded-DEFAULT pl-10 pr-3 py-2.5 font-body-md text-body-md focus:outline-none focus:ring-1 transition-colors`}
                id="incident_location"
                placeholder="Enter precise location coordinates"
                type="text"
                value={location}
                onChange={(e) => { setLocation(e.target.value); if (errors.location) { const { location: _, ...rest } = errors; setErrors(rest); } }}
              />
            </div>
            {errors.location && (
              <span className="font-label-md text-label-md text-error">{errors.location}</span>
            )}
          </div>
          {/* Grid for shorter fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Field: Severity Level */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_severity">Severity Level</label>
              <div className="relative">
                <select
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                  id="incident_severity"
                  value={severity}
                  onChange={(e) => setSeverity(e.target.value as Severity)}
                >
                  <option value="critical">Critical (Level 1)</option>
                  <option value="high">High (Level 2)</option>
                  <option value="medium">Medium (Level 3)</option>
                  <option value="low">Low (Level 4)</option>
                </select>
                <span className="material-symbols-outlined absolute right-3 top-2.5 text-on-surface-variant text-[20px] pointer-events-none">arrow_drop_down</span>
              </div>
            </div>
            {/* Field: Status */}
            <div className="flex flex-col gap-1.5">
              <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_status">Operational Status</label>
              <div className="relative">
                <select
                  className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md appearance-none focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors cursor-pointer"
                  id="incident_status"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as IncidentStatus)}
                >
                  <option value="active">Active / Ongoing</option>
                  <option value="pending">Pending</option>
                  <option value="escalated">Escalated</option>
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
              {assignedUnits.map((unit) => (
                <div key={unit} className="flex items-center gap-1 bg-surface-variant text-on-surface pl-2 pr-1 py-1 rounded-full border border-outline-variant">
                  <span className="material-symbols-outlined text-[14px] text-on-surface-variant" style={{fontVariationSettings: "'FILL' 1"}}>person</span>
                  <span className="font-label-md text-label-md">{unit}</span>
                  <button
                    className="material-symbols-outlined text-[16px] text-on-surface-variant hover:text-error transition-colors rounded-full hover:bg-surface-container-highest p-0.5 ml-0.5"
                    type="button"
                    onClick={() => handleRemoveUnit(unit)}
                    aria-label={`Remove ${unit}`}
                  >
                    close
                  </button>
                </div>
              ))}
              <input
                className="flex-1 bg-transparent border-none text-on-surface font-body-md text-body-md focus:outline-none focus:ring-0 min-w-[150px] px-2 py-1 placeholder-on-surface-variant/50"
                placeholder="Search roster to assign..."
                type="text"
                value={unitInput}
                onChange={(e) => setUnitInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
          </div>
          {/* Field: Description */}
          <div className="flex flex-col gap-1.5">
            <label className="font-label-md text-label-md text-on-surface-variant" htmlFor="incident_description">Tactical Description</label>
            <textarea
              className="w-full bg-surface-container-lowest border border-outline-variant text-on-surface rounded-DEFAULT px-3 py-2.5 font-body-md text-body-md focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-y"
              id="incident_description"
              placeholder="Provide detailed tactical situation report, initial response actions, and hazard assessment..."
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>
        </form>
        {/* Form Actions */}
        <footer className="px-6 py-4 border-t border-outline-variant bg-surface-container-low flex items-center justify-end gap-3 mt-auto">
          <button
            className="h-touch-target px-5 rounded-DEFAULT border border-outline-variant text-on-surface font-label-md text-label-md hover:bg-surface-container-highest transition-colors active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-outline-variant focus:ring-offset-2 focus:ring-offset-background"
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
          <button
            className="h-touch-target px-6 rounded-DEFAULT bg-primary-container text-on-primary-container font-label-md text-label-md hover:brightness-110 transition-all active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background shadow-sm flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            type="button"
            onClick={handleSave}
            disabled={saving}
          >
            <span className="material-symbols-outlined text-[18px]">save</span>
            {saving ? 'Saving...' : 'Save Incident'}
          </button>
        </footer>
      </main>
    </>
  );
}
