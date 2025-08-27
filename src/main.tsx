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
import { PostHogProvider } from "posthog-js/react";
import "./styles/accents.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <PostHogProvider
      apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
      options={{
        api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
        defaults: '2025-05-24',
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
        debug: import.meta.env.MODE === "development",
      }}
    >
      <BookDemoProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BookDemoProvider>
    </PostHogProvider>
  </React.StrictMode>
);