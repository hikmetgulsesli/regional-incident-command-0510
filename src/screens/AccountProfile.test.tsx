import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../test/utils';
import { AccountProfile } from './AccountProfile';
import { AppProvider, useAppContext } from '../contexts/AppContext';
import { useEffect } from 'react';

function StateSeeder() {
  const { dispatch } = useAppContext();
  useEffect(() => {
    dispatch({
      type: 'UPDATE_PROFILE',
      profile: { name: 'Cmdr. Jane Doe', role: 'Regional Supervisor', sector: 'HQ Alpha' },
    });
    dispatch({
      type: 'UPDATE_SETTINGS',
      settings: {
        highContrast: false,
        reduceMotion: true,
        largeText: false,
      },
    });
  }, [dispatch]);
  return null;
}

function renderWithData() {
  return render(
    <AppProvider>
      <StateSeeder />
      <AccountProfile />
    </AppProvider>
  );
}

describe('AccountProfile', () => {
  it('renders profile panel with operator data', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    expect(screen.getByText('Cmdr. Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Regional Supervisor')).toBeInTheDocument();
    expect(screen.getByText('Command Sector: HQ Alpha')).toBeInTheDocument();
  });

  it('has a close panel button', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    const closeBtn = screen.getByLabelText(/Close panel/i);
    expect(closeBtn).toBeInTheDocument();
    expect(() => fireEvent.click(closeBtn)).not.toThrow();
  });

  it('toggles high contrast mode', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    const toggleBtn = screen.getByText('High Contrast Mode').closest('div')?.parentElement?.querySelector('button[aria-pressed]') as HTMLButtonElement;
    expect(toggleBtn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(toggleBtn);
    await waitFor(() => {
      expect(toggleBtn).toHaveAttribute('aria-pressed', 'true');
    });
  });

  it('toggles reduce motion', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    const toggleBtn = screen.getByText('Reduce Motion').closest('div')?.parentElement?.querySelector('button[aria-pressed]') as HTMLButtonElement;
    expect(toggleBtn).toHaveAttribute('aria-pressed', 'true');
    fireEvent.click(toggleBtn);
    await waitFor(() => {
      expect(toggleBtn).toHaveAttribute('aria-pressed', 'false');
    });
  });

  it('toggles large text data', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    const toggleBtn = screen.getByText('Large Text Data').closest('div')?.parentElement?.querySelector('button[aria-pressed]') as HTMLButtonElement;
    expect(toggleBtn).toHaveAttribute('aria-pressed', 'false');
    fireEvent.click(toggleBtn);
    await waitFor(() => {
      expect(toggleBtn).toHaveAttribute('aria-pressed', 'true');
    });
  });

  it('has a terminate session button', async () => {
    renderWithData();
    await waitFor(() => {
      expect(screen.getByText('Operator Profile')).toBeInTheDocument();
    });
    const terminateBtn = screen.getByText('Terminate Session');
    expect(terminateBtn).toBeInTheDocument();
    expect(() => fireEvent.click(terminateBtn)).not.toThrow();
  });
});
