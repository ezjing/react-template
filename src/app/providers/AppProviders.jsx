import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { ErrorBoundary } from '@/shared/ui/error-boundary/ErrorBoundary';

import { QueryProvider } from './QueryProvider';
import { StoreProvider } from './StoreProvider';

export function AppProviders({ children }) {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <QueryProvider>
          <BrowserRouter>{children}</BrowserRouter>
        </QueryProvider>
      </StoreProvider>
    </ErrorBoundary>
  );
}
