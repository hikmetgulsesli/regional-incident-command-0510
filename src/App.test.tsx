import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { AppProvider } from './contexts/AppContext';
import App from './App';

describe('App shell', () => {
  it('renders loading state initially', () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );
    expect(screen.getByText(/loading command interface/i)).toBeInTheDocument();
  });

  it('exposes window.app after mount', async () => {
    render(
      <AppProvider>
        <App />
      </AppProvider>
    );

    // Wait for hydration to finish
    await screen.findByText(/Regional Incident Command/i, {}, { timeout: 3000 });

    const app = (window as unknown as Record<string, unknown>).app as {
      renderToText: () => string;
    };
    expect(app).toBeDefined();
    expect(typeof app.renderToText).toBe('function');

    const text = JSON.parse(app.renderToText());
    expect(text.screen).toBe('dashboard');
    expect(text.loading).toBe(false);
    expect(text.incidentCount).toBeGreaterThan(0);
  });
});
