import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { useAppState } from './useAppState';
import { render as customRender } from '../test/utils';

function TestHook() {
  const { state, navigate, addIncident, updateSettings, toggleProfile } = useAppState();
  return (
    <div>
      <div data-testid="screen">{state.currentScreen}</div>
      <div data-testid="profile">{state.profileOpen ? 'open' : 'closed'}</div>
      <div data-testid="email">{state.settings.emailNotifications ? 'on' : 'off'}</div>
      <button data-testid="nav" onClick={() => navigate('insights')}>
        Insights
      </button>
      <button
        data-testid="add"
        onClick={() =>
          addIncident({
            id: 'inc-99',
            title: 'Hook Test',
            location: 'Lab',
            severity: 'low',
            status: 'active',
            reportedAt: '2024-05-10T10:00:00Z',
            updatedAt: '2024-05-10T10:00:00Z',
            description: 'Testing hook',
            assignedUnits: [],
            evidenceCount: 0,
            residentReports: 0,
          })
        }
      >
        Add
      </button>
      <button
        data-testid="toggle-email"
        onClick={() => updateSettings({ emailNotifications: !state.settings.emailNotifications })}
      >
        Toggle Email
      </button>
      <button data-testid="toggle-profile" onClick={() => toggleProfile()}>
        Toggle Profile
      </button>
    </div>
  );
}

describe('useAppState', () => {
  it('navigates', () => {
    customRender(<TestHook />);
    fireEvent.click(screen.getByTestId('nav'));
    expect(screen.getByTestId('screen')).toHaveTextContent('insights');
  });

  it('adds incident', () => {
    customRender(<TestHook />);
    fireEvent.click(screen.getByTestId('add'));
    expect(screen.getByTestId('screen')).toHaveTextContent('dashboard');
  });

  it('toggles setting', () => {
    customRender(<TestHook />);
    expect(screen.getByTestId('email')).toHaveTextContent('on');
    fireEvent.click(screen.getByTestId('toggle-email'));
    expect(screen.getByTestId('email')).toHaveTextContent('off');
  });

  it('toggles profile', () => {
    customRender(<TestHook />);
    expect(screen.getByTestId('profile')).toHaveTextContent('closed');
    fireEvent.click(screen.getByTestId('toggle-profile'));
    expect(screen.getByTestId('profile')).toHaveTextContent('open');
  });
});
