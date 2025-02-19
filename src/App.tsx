/*
 * Copyright (c) 2025 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { AppProvider, LYThemeProvider } from 'liberty-core';
import AppContent from './components/AppContent';
import { getModules } from './data/modules';
import { getApplications } from './data/applications';
import { getToken } from './data/token';
import { getUser } from './data/user';
import { getMenus } from './data/menus';
import { theme } from './data/theme';


export function App() {

  return (
    <AppProvider
      getModules={getModules}
      getApplications={getApplications}
      getToken={getToken}
      getUser={getUser}
      getMenus={getMenus}
    >
        <LYThemeProvider customTheme={theme}>
          <AppContent />
        </LYThemeProvider>
    </AppProvider>

  );
}

