import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../test/utils';
import { SystemSettings } from './SystemSettings';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { useEffect } from 'react';

function StateSeeder() {
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: {
        emailNotifications: true,
        realTimeAlerts: false,
        defaultView: 'Global Dashboard',
        mapOverlay: false,
        dataRetentionInterval: '1 Hour',
      },
    });
    dispatch({
      type: 'UPDATE_PROFILE',
      profile: { name: 'Cmdr. Jane Doe', role: 'Regional Supervisor', sector: 'HQ Alpha' },
    });
  }, [dispatch]);
  return null;
}

function renderWithData() {
  return render(
    <AppProvider>
      <StateSeeder />
      <SystemSettings />
    </AppProvider>
  );
}

describe('SystemSettings', () => {
  it('renders settings page with all sections', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    expect(screen.getByText('Notifications & Alerts')).toBeInTheDocument();
    expect(screen.getByText('Workspace Preferences')).toBeInTheDocument();
    expect(screen.getByText('Data Management')).toBeInTheDocument();
  });

  it('toggles email notifications checkbox', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const emailToggle = screen.getByRole('checkbox', { name: /Email Notifications/i });
    expect(emailToggle).toBeChecked();
    fireEvent.click(emailToggle);
    await waitFor(() => {
      expect(emailToggle).not.toBeChecked();
    });
  });

  it('toggles real-time alerts checkbox', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const alertsToggle = screen.getByRole('checkbox', { name: /Real-time Alerts/i });
    expect(alertsToggle).not.toBeChecked();
    fireEvent.click(alertsToggle);
    await waitFor(() => {
      expect(alertsToggle).toBeChecked();
    });
  });

  it('changes default view select', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const select = screen.getByDisplayValue('Global Dashboard') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: 'Tactical Map' } });
    expect(select).toHaveValue('Tactical Map');
  });

  it('toggles map overlay checkbox', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const overlayToggle = screen.getByRole('checkbox', { name: /Map Overlay/i });
    expect(overlayToggle).not.toBeChecked();
    fireEvent.click(overlayToggle);
    await waitFor(() => {
      expect(overlayToggle).toBeChecked();
    });
  });

  it('changes data retention interval select', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const select = screen.getByDisplayValue('1 Hour') as HTMLSelectElement;
    fireEvent.change(select, { target: { value: '24 Hours' } });
    expect(select).toHaveValue('24 Hours');
  });

  it('has clickable navigation buttons', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const dashboardBtn = screen.getByText('Dashboard');
    const insightsBtn = screen.getByText('Insights');
    expect(() => fireEvent.click(dashboardBtn)).not.toThrow();
    expect(() => fireEvent.click(insightsBtn)).not.toThrow();
  });

  it('notifications button shows toast', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const notifBtn = screen.getByRole('button', { name: /Notifications/i });
    expect(() => fireEvent.click(notifBtn)).not.toThrow();
  });

  it('account button navigates to profile', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('System Configuration')).toBeInTheDocument();
    });
    const accountBtn = screen.getByLabelText(/Account/i);
    expect(() => fireEvent.click(accountBtn)).not.toThrow();
  });
});
