import React from 'react';

import { ErrorBoundary } from '@/shared/ui/error-boundary/ErrorBoundary';

import { HomePage, LoginPage, SampleListPage } from './lazyPages';

const Lazy = ({ Page }) => (
  <ErrorBoundary>
    <React.Suspense fallback={<div>Loading...</div>}>
      <Page />
    </React.Suspense>
  </ErrorBoundary>
);

export const routes = [
  { path: '/', element: <Lazy Page={HomePage} /> },
  { path: '/login', element: <Lazy Page={LoginPage} /> },
  { path: '/sample-list', element: <Lazy Page={SampleListPage} /> },
];
