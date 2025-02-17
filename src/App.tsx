/*
 * Copyright (c) 2025 NOMANA-IT and/or its affiliates.
 * All rights reserved. Use is subject to license terms.
 * *
 */
import { AppProvider } from 'liberty-core';
import AppContent from './components/AppContent';


export function App() {

  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

