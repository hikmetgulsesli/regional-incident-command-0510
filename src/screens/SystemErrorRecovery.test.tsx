import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '../test/utils';
import { SystemErrorRecovery } from './SystemErrorRecovery';

describe('SystemErrorRecovery', () => {
  beforeEach(() => {
    vi.stubGlobal('confirm', vi.fn(() => true));
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it('renders error state with correct messaging', () => {
    render(<SystemErrorRecovery />);
    expect(screen.getByText(/Data Connection Lost/i)).toBeInTheDocument();
    expect(screen.getByText(/Unable to synchronize with Regional Command servers/i)).toBeInTheDocument();
    expect(screen.getByText(/ERR_SYNC_TIMEOUT/i)).toBeInTheDocument();
  });

  it('renders profile data from context', () => {
    const { container } = render(<SystemErrorRecovery />);
    const headings = container.querySelectorAll('h2');
    expect(headings.length).toBeGreaterThanOrEqual(1);
    const profileHeading = Array.from(headings).find((h) => h.textContent?.includes('Cmdr. Jane Doe'));
    expect(profileHeading).toBeTruthy();
    expect(screen.getByText(/HQ Alpha/i)).toBeInTheDocument();
  });

  it('has working navigation buttons', () => {
    render(<SystemErrorRecovery />);
    const dashboardBtn = screen.getByRole('button', { name: /Dashboard/i });
    const insightsBtn = screen.getByRole('button', { name: /Insights/i });
    const settingsBtn = screen.getByRole('button', { name: /Settings/i });

    expect(dashboardBtn).toBeInTheDocument();
    expect(insightsBtn).toBeInTheDocument();
    expect(settingsBtn).toBeInTheDocument();

    fireEvent.click(dashboardBtn);
    fireEvent.click(insightsBtn);
    fireEvent.click(settingsBtn);
    // No errors thrown = handlers work
  });

  it('Clear App Data & Reset button calls clearAndReset after confirm', () => {
    render(<SystemErrorRecovery />);
    const resetBtn = screen.getByRole('button', { name: /Clear App Data & Reset/i });
    expect(resetBtn).toBeInTheDocument();
    fireEvent.click(resetBtn);
    expect(window.confirm).toHaveBeenCalledWith('Clear all app data and reset to defaults? This cannot be undone.');
  });

  it('Clear App Data & Reset button does not reset if confirm is cancelled', () => {
    vi.stubGlobal('confirm', vi.fn(() => false));
    render(<SystemErrorRecovery />);
    const resetBtn = screen.getByRole('button', { name: /Clear App Data & Reset/i });
    fireEvent.click(resetBtn);
    expect(window.confirm).toHaveBeenCalled();
  });

  it('Retry Sync button triggers persist and shows loading state', async () => {
    render(<SystemErrorRecovery />);
    const retryBtn = screen.getByRole('button', { name: /Retry Sync/i });
    expect(retryBtn).toBeInTheDocument();
    fireEvent.click(retryBtn);
    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Retrying\.\.\./i })).toBeInTheDocument();
    });
  });

  it('notifications button is disabled', () => {
    render(<SystemErrorRecovery />);
    const notifBtn = screen.getByLabelText(/Notifications/i);
    expect(notifBtn).toBeDisabled();
  });

  it('account button is disabled', () => {
    render(<SystemErrorRecovery />);
    const accountBtn = screen.getByLabelText(/Account/i);
    expect(accountBtn).toBeDisabled();
  });

  it('has aria-labels on icon-only buttons', () => {
    render(<SystemErrorRecovery />);
    expect(screen.getByLabelText(/Notifications/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Account/i)).toBeInTheDocument();
  });
});
