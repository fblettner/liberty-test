import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { worker } from "./mock/browser";

async function enableMocking() {
  if (import.meta.env.MODE === "development") {
    await worker.start({
      serviceWorker: { url: "/liberty-core/mockServiceWorker.js" },
      onUnhandledRequest: "bypass",
      quiet: true,
    });
  }
}

// Wait for MSW to start before rendering the app
enableMocking().then(() => {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});