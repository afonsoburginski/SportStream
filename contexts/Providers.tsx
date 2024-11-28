// providers.tsx
'use client';
import React from 'react';
import { SportsDataProvider } from './SportsDataContext';

export const Providers = ({ children }) => {
  return (
    <SportsDataProvider>
      {children}
    </SportsDataProvider>
  );
};
