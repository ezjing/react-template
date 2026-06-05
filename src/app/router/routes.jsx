import React from 'react';

import { HomePage, LoginPage, SampleListPage } from './lazyPages';

const Lazy = ({ Page }) => (
  <React.Suspense fallback={<div>Loading...</div>}>
    <Page />
  </React.Suspense>
);

export const routes = [
  { path: '/', element: <Lazy Page={HomePage} /> },
  { path: '/login', element: <Lazy Page={LoginPage} /> },
  { path: '/sample-list', element: <Lazy Page={SampleListPage} /> },
];
