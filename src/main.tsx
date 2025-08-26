/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { HelmetProvider } from "react-helmet-async";
import { BookDemoProvider } from "./components/BookDemoContext";
import "./styles/accents.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BookDemoProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BookDemoProvider>
  </React.StrictMode>
);
