/*
 * Copyright (c) 2025 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { AppProvider, LYThemeProvider } from 'liberty-core';
import AppContent from './components/AppContent';
import { getModules } from './data/modules';
import { getApplications } from './data/applications';


export function App() {

  return (
    <AppProvider
      getModules={getModules}
      getApplications={getApplications}
    >
      <LYThemeProvider>
        <AppContent />
      </LYThemeProvider>
    </AppProvider>
  );
}

