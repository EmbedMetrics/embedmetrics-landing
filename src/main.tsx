/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { EarlyAccessProvider } from "./components/EarlyAccessContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <EarlyAccessProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </EarlyAccessProvider>
  </React.StrictMode>
);
