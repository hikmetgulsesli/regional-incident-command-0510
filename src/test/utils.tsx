import React from 'react';
import { render as rtlRender, type RenderOptions } from '@testing-library/react';
import { AppProvider } from '../contexts/AppContext';

function Wrapper({ children }: { children: React.ReactNode }) {
  return <AppProvider>{children}</AppProvider>;
}

export function render(ui: React.ReactElement, options?: Omit<RenderOptions, 'wrapper'>) {
  return rtlRender(ui, { wrapper: Wrapper, ...options });
}
