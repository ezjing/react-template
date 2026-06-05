import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { QueryProvider } from './QueryProvider';
import { StoreProvider } from './StoreProvider';

export function AppProviders({ children }) {
  return (
    <StoreProvider>
      <QueryProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </QueryProvider>
    </StoreProvider>
  );
}
