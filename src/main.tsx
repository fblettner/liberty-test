import React from "react";
import ReactDOM from "react-dom/client";
import { LYThemeProvider } from "liberty-core";
import { App } from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <LYThemeProvider>
      <App />
    </LYThemeProvider>
  </React.StrictMode>
);