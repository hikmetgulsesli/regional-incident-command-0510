import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { AppProvider, useAppContext } from './AppContext';
import { render as customRender } from '../test/utils';

function TestConsumer() {
  const { state, dispatch } = useAppContext();
  return (
    <div>
      <div data-testid="screen">{state.currentScreen}</div>
      <div data-testid="incidents">{state.incidents.length}</div>
      <div data-testid="loading">{state.isLoading ? 'true' : 'false'}</div>
      <div data-testid="error">{state.storageError ?? 'none'}</div>
      <button
        data-testid="navigate"
        onClick={() => dispatch({ type: 'NAVIGATE', screen: 'settings' })}
      >
        Go to Settings
      </button>
      <button
        data-testid="add-incident"
        onClick={() =>
          dispatch({
            type: 'ADD_INCIDENT',
            incident: {
              id: 'inc-test',
              title: 'Test Incident',
              location: 'Test Location',
              severity: 'medium',
              status: 'active',
              reportedAt: '2024-05-10T10:00:00Z',
              updatedAt: '2024-05-10T10:00:00Z',
              description: 'Test description',
              assignedUnits: [],
              evidenceCount: 0,
              residentReports: 0,
            },
          })
        }
      >
        Add Incident
      </button>
    </div>
  );
}

describe('AppContext', () => {
  it('provides default state on mount', () => {
    customRender(<TestConsumer />);
    expect(screen.getByTestId('screen')).toHaveTextContent('dashboard');
    expect(screen.getByTestId('incidents')).toHaveTextContent('0');
    expect(screen.getByTestId('loading')).toHaveTextContent('false');
    expect(screen.getByTestId('error')).toHaveTextContent('none');
  });

  it('navigates between screens', () => {
    customRender(<TestConsumer />);
    fireEvent.click(screen.getByTestId('navigate'));
    expect(screen.getByTestId('screen')).toHaveTextContent('settings');
  });

  it('adds an incident', () => {
    customRender(<TestConsumer />);
    fireEvent.click(screen.getByTestId('add-incident'));
    expect(screen.getByTestId('incidents')).toHaveTextContent('1');
  });

  it('throws when useAppContext is called outside provider', () => {
    // Silence console for this test
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    expect(() => render(<TestConsumer />)).toThrow();
    spy.mockRestore();
  });
});
