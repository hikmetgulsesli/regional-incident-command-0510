import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../test/utils';
import { OperationalInsights } from './OperationalInsights';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { useEffect } from 'react';
import type { Incident, Unit, Resource } from '../types/domain';

const DEMO_INCIDENTS: Incident[] = [
  {
    id: 'inc-001',
    title: 'Hazardous Material Spill',
    location: 'Sector 7 Processing Facility',
    severity: 'critical',
    status: 'active',
    reportedAt: '2024-05-10T09:15:00Z',
    updatedAt: '2024-05-10T14:32:00Z',
    description: 'A 200-gallon industrial solvent tank ruptured.',
    assignedUnits: ['unit-001'],
    evidenceCount: 12,
    residentReports: 8,
  },
  {
    id: 'inc-002',
    title: 'Multi-Vehicle Collision',
    location: 'Highway 14, KM 42',
    severity: 'high',
    status: 'active',
    reportedAt: '2024-05-10T11:45:00Z',
    updatedAt: '2024-05-10T13:10:00Z',
    description: 'Four-vehicle pileup.',
    assignedUnits: ['unit-003'],
    evidenceCount: 5,
    residentReports: 15,
  },
  {
    id: 'inc-003',
    title: 'Flash Flood Warning',
    location: 'Downtown District',
    severity: 'high',
    status: 'pending',
    reportedAt: '2024-05-10T12:00:00Z',
    updatedAt: '2024-05-10T12:00:00Z',
    description: 'Flash flood warning issued.',
    assignedUnits: [],
    evidenceCount: 2,
    residentReports: 22,
  },
  {
    id: 'inc-004',
    title: 'Power Grid Failure',
    location: 'Northeast Substation',
    severity: 'medium',
    status: 'resolved',
    reportedAt: '2024-05-09T18:30:00Z',
    updatedAt: '2024-05-10T06:15:00Z',
    description: 'Transformer failure.',
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
    location: 'Sector 7',
    lastUpdate: '2024-05-10T14:30:00Z',
  },
  {
    id: 'unit-002',
    name: 'Fire Rescue 7',
    type: 'Fire & Rescue',
    status: 'on_scene',
    location: 'Sector 7',
    lastUpdate: '2024-05-10T14:25:00Z',
  },
  {
    id: 'unit-003',
    name: 'Traffic Control East',
    type: 'Traffic',
    status: 'on_scene',
    location: 'Highway 14',
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
      <OperationalInsights />
    </AppProvider>
  );
}

describe('OperationalInsights', () => {
  it('renders insights page with KPI cards', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    expect(screen.getByText('Total Incidents')).toBeInTheDocument();
    expect(screen.getByText('Avg Response Time')).toBeInTheDocument();
    expect(screen.getByText('Active Units')).toBeInTheDocument();
    expect(screen.getByText('Resolution Rate')).toBeInTheDocument();
  });

  it('displays computed metrics from demo data', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    // 4 demo incidents total
    expect(screen.getByText('4')).toBeInTheDocument();
    // 1 resolved out of 4 = 25.0%
    expect(screen.getByText('25.0%')).toBeInTheDocument();
    // 3 active units out of 4
    expect(screen.getByText('3/4')).toBeInTheDocument();
  });

  it('toggles time range when time range button is clicked', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    const rangeBtn = screen.getByRole('button', { name: /Last 30 Days/i });
    fireEvent.click(rangeBtn);
    expect(screen.getByRole('button', { name: /Last 7 Days/i })).toBeInTheDocument();
  });

  it('export report button is clickable', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    const exportBtn = screen.getByRole('button', { name: /Export Report/i });
    expect(() => fireEvent.click(exportBtn)).not.toThrow();
  });

  it('navigation buttons are clickable', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    // Use getByText since icon text contributes to accessible name
    const dashboardBtn = screen.getByText('Dashboard');
    const settingsBtn = screen.getByText('Settings');
    expect(() => fireEvent.click(dashboardBtn)).not.toThrow();
    expect(() => fireEvent.click(settingsBtn)).not.toThrow();
  });

  it('renders district bar chart labels', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Performance Insights')).toBeInTheDocument();
    });
    expect(screen.getByText('North')).toBeInTheDocument();
    expect(screen.getByText('South')).toBeInTheDocument();
    expect(screen.getByText('East')).toBeInTheDocument();
    expect(screen.getByText('West')).toBeInTheDocument();
    expect(screen.getByText('Central')).toBeInTheDocument();
  });
});
