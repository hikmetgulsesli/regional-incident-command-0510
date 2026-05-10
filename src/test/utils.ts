import React from 'react';
import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { AppProvider } from '../contexts/AppContext';

export function render(
  ui: React.ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) {
  return rtlRender(ui, { wrapper: AppProvider, ...options });
}
