import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../test/utils';
import { CommandDashboard } from './CommandDashboard';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { useEffect } from 'react';
import type { Incident, Unit, Resource } from '../types/domain';

const DEMO_INCIDENTS: Incident[] = [
  {
    id: 'inc-001',
    title: 'Hazardous Material Spill',
    location: 'Sector 7 Processing Facility - Main Containment Wing',
    severity: 'critical',
    status: 'active',
    reportedAt: '2024-05-10T09:15:00Z',
    updatedAt: '2024-05-10T14:32:00Z',
    description:
      'A 200-gallon industrial solvent tank ruptured in the main containment wing. Evacuation perimeter established at 500 meters. HAZMAT team en route.',
    assignedUnits: ['unit-001', 'unit-002'],
    evidenceCount: 12,
    residentReports: 8,
  },
  {
    id: 'inc-002',
    title: 'Multi-Vehicle Collision on Highway 14',
    location: 'Highway 14, KM 42, Westbound Lane',
    severity: 'high',
    status: 'active',
    reportedAt: '2024-05-10T11:45:00Z',
    updatedAt: '2024-05-10T13:10:00Z',
    description:
      'Four-vehicle pileup with two commercial trucks. Three injuries reported, one critical. Traffic diverted to alternate route.',
    assignedUnits: ['unit-003'],
    evidenceCount: 5,
    residentReports: 15,
  },
  {
    id: 'inc-003',
    title: 'Severe Weather Warning - Flash Flood',
    location: 'Downtown District, Riverfront Area',
    severity: 'high',
    status: 'pending',
    reportedAt: '2024-05-10T12:00:00Z',
    updatedAt: '2024-05-10T12:00:00Z',
    description:
      'National Weather Service issued flash flood warning for downtown riverfront. Sandbagging stations activated. Residents advised to evacuate low-lying areas.',
    assignedUnits: [],
    evidenceCount: 2,
    residentReports: 22,
  },
  {
    id: 'inc-004',
    title: 'Power Grid Failure - Northeast Substation',
    location: 'Northeast Substation, Grid Node 7B',
    severity: 'medium',
    status: 'resolved',
    reportedAt: '2024-05-09T18:30:00Z',
    updatedAt: '2024-05-10T06:15:00Z',
    description:
      'Transformer failure caused localized outage affecting 4,200 residents. Backup generators deployed. Grid restored at 06:00.',
    assignedUnits: ['unit-004'],
    evidenceCount: 7,
    residentReports: 4,
  },
];

const DEMO_UNITS: Unit[] = [
  {
    id: 'unit-001',
    name: 'HAZMAT Alpha',
    type: 'Hazardous Materials',
    status: 'en_route',
    location: 'Sector 7 - 2.3 KM out',
    lastUpdate: '2024-05-10T14:30:00Z',
  },
  {
    id: 'unit-002',
    name: 'Fire Rescue 7',
    type: 'Fire & Rescue',
    status: 'on_scene',
    location: 'Sector 7 Processing Facility',
    lastUpdate: '2024-05-10T14:25:00Z',
  },
  {
    id: 'unit-003',
    name: 'Traffic Control East',
    type: 'Traffic',
    status: 'on_scene',
    location: 'Highway 14, KM 42',
    lastUpdate: '2024-05-10T13:05:00Z',
  },
  {
    id: 'unit-004',
    name: 'Engineering Response',
    type: 'Infrastructure',
    status: 'returning',
    location: 'Northeast Substation',
    lastUpdate: '2024-05-10T06:10:00Z',
  },
];

const DEMO_RESOURCES: Resource[] = [
  { id: 'res-001', name: 'Emergency Vehicles', type: 'vehicle', quantity: 24, available: 18, health: 92, location: 'Central Depot' },
  { id: 'res-002', name: 'Medical Supplies', type: 'supply', quantity: 450, available: 380, health: 100, location: 'Hospital Alpha' },
  { id: 'res-003', name: 'HAZMAT Suits', type: 'equipment', quantity: 60, available: 45, health: 88, location: 'Sector 7 Station' },
  { id: 'res-004', name: 'Field Communicators', type: 'equipment', quantity: 120, available: 110, health: 95, location: 'Central Depot' },
];

function StateSeeder() {
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({ type: 'SET_INCIDENTS', incidents: DEMO_INCIDENTS });
    dispatch({ type: 'SET_UNITS', units: DEMO_UNITS });
    dispatch({ type: 'SET_RESOURCES', resources: DEMO_RESOURCES });
  }, [dispatch]);
  return null;
}

function renderWithData() {
  return render(
    <AppProvider>
      <StateSeeder />
      <CommandDashboard />
    </AppProvider>
  );
}

describe('CommandDashboard', () => {
  it('renders dashboard with metrics and incident cards from demo data', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Situation Overview')).toBeInTheDocument();
    });
    expect(screen.getByText('Active Incidents')).toBeInTheDocument();
    expect(screen.getByText('Total Personnel')).toBeInTheDocument();
    expect(screen.getByText('Avg Response Time')).toBeInTheDocument();
    expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    expect(screen.getByText('Multi-Vehicle Collision on Highway 14')).toBeInTheDocument();
  });

  it('filters incidents by search query', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const searchInput = screen.getByPlaceholderText('Search incidents...');
    fireEvent.change(searchInput, { target: { value: 'Hazardous' } });
    expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    expect(screen.queryByText('Multi-Vehicle Collision on Highway 14')).not.toBeInTheDocument();
  });

  it('filters incidents by status', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const activeBtn = screen.getByRole('button', { name: /^Active$/ });
    fireEvent.click(activeBtn);
    expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    expect(screen.queryByText('Severe Weather Warning - Flash Flood')).not.toBeInTheDocument();
  });

  it('filters incidents by severity', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const criticalBtn = screen.getByRole('button', { name: /Critical/i });
    fireEvent.click(criticalBtn);
    expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    expect(screen.queryByText('Multi-Vehicle Collision on Highway 14')).not.toBeInTheDocument();
  });

  it('shows empty state when no incidents match filters', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const searchInput = screen.getByPlaceholderText('Search incidents...');
    fireEvent.change(searchInput, { target: { value: 'zzzzzzzzz' } });
    expect(screen.getByText(/No incidents match the current filters/i)).toBeInTheDocument();
  });

  it('clears filters when clear button is clicked', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const searchInput = screen.getByPlaceholderText('Search incidents...');
    fireEvent.change(searchInput, { target: { value: 'zzzzzzzzz' } });
    const clearBtn = screen.getByRole('button', { name: 'Clear Filters' });
    fireEvent.click(clearBtn);
    expect(screen.queryByText(/No incidents match/i)).not.toBeInTheDocument();
  });

  it('Create Incident button is clickable', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Situation Overview')).toBeInTheDocument();
    });
    const createBtn = screen.getByRole('button', { name: /Create Incident/i });
    expect(() => fireEvent.click(createBtn)).not.toThrow();
  });

  it('View Details on card is clickable', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Hazardous Material Spill')).toBeInTheDocument();
    });
    const card = screen.getByText('Hazardous Material Spill').closest('div[class*="bg-surface"]') as HTMLElement;
    expect(() => fireEvent.click(card)).not.toThrow();
  });
});
