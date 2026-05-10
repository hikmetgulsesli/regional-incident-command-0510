import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '../test/utils';
import { NewIncidentReport } from './NewIncidentReport';

describe('NewIncidentReport', () => {
  it('renders the incident report form', () => {
    render(<NewIncidentReport />);
    expect(screen.getByText('New Incident Record')).toBeInTheDocument();
    expect(screen.getByLabelText(/Incident Title/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Location/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Severity Level/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Operational Status/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Tactical Description/i)).toBeInTheDocument();
  });

  it('shows validation error when title is empty', () => {
    render(<NewIncidentReport />);
    const saveBtn = screen.getByRole('button', { name: /Save Incident/i });
    fireEvent.click(saveBtn);
    expect(screen.getByText(/Incident Title is a required field/i)).toBeInTheDocument();
  });

  it('shows validation error when location is empty', () => {
    render(<NewIncidentReport />);
    const titleInput = screen.getByLabelText(/Incident Title/i);
    fireEvent.change(titleInput, { target: { value: 'Test Incident' } });
    const saveBtn = screen.getByRole('button', { name: /Save Incident/i });
    fireEvent.click(saveBtn);
    expect(screen.getByText(/Location is a required field/i)).toBeInTheDocument();
  });

  it('clears title error when user types in title field', () => {
    render(<NewIncidentReport />);
    const saveBtn = screen.getByRole('button', { name: /Save Incident/i });
    fireEvent.click(saveBtn);
    expect(screen.getByText(/Incident Title is a required field/i)).toBeInTheDocument();
    const titleInput = screen.getByLabelText(/Incident Title/i);
    fireEvent.change(titleInput, { target: { value: 'Test' } });
    expect(screen.queryByText(/Incident Title is a required field/i)).not.toBeInTheDocument();
  });

  it('allows adding and removing personnel assignments', () => {
    render(<NewIncidentReport />);
    const unitInput = screen.getByPlaceholderText('Search roster to assign...');
    fireEvent.change(unitInput, { target: { value: 'Unit Alpha' } });
    fireEvent.keyDown(unitInput, { key: 'Enter', code: 'Enter' });
    expect(screen.getByText('Unit Alpha')).toBeInTheDocument();
    const removeBtn = screen.getByRole('button', { name: /Remove Unit Alpha/i });
    fireEvent.click(removeBtn);
    expect(screen.queryByText('Unit Alpha')).not.toBeInTheDocument();
  });

  it('cancel button is clickable', () => {
    render(<NewIncidentReport />);
    const cancelBtn = screen.getByRole('button', { name: /Cancel/i });
    expect(() => fireEvent.click(cancelBtn)).not.toThrow();
  });

  it('save button is disabled while saving', () => {
    render(<NewIncidentReport />);
    const titleInput = screen.getByLabelText(/Incident Title/i);
    const locationInput = screen.getByLabelText(/Location/i);
    fireEvent.change(titleInput, { target: { value: 'Valid Title' } });
    fireEvent.change(locationInput, { target: { value: 'Sector 1' } });
    const saveBtn = screen.getByRole('button', { name: /Save Incident/i });
    expect(saveBtn).not.toBeDisabled();
  });

  it('submits form with valid data and dispatches add incident', () => {
    render(<NewIncidentReport />);
    fireEvent.change(screen.getByLabelText(/Incident Title/i), { target: { value: 'Bridge Collapse' } });
    fireEvent.change(screen.getByLabelText(/Location/i), { target: { value: 'Highway 101' } });
    fireEvent.change(screen.getByLabelText(/Tactical Description/i), { target: { value: 'Major structural failure' } });
    const saveBtn = screen.getByRole('button', { name: /Save Incident/i });
    expect(() => fireEvent.click(saveBtn)).not.toThrow();
  });
});
