/**
 * Custom Testing Library render wrapper that injects AppProvider.
 * Use this for any component that depends on AppContext.
 */

import React from 'react';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { AppProvider } from '../contexts/AppContext';

function AllProviders({ children }: { children: React.ReactNode }) {
  return React.createElement(AppProvider, null, children);
}

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return rtlRender(ui, { wrapper: AllProviders, ...options });
}

// Re-export everything from testing-library so consumers can do:
// import { render, screen } from '../test/utils';
export { screen, fireEvent, waitFor, within } from '@testing-library/react';
