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

const key = import.meta.env.VITE_PUBLIC_POSTHOG_KEY;
const host = import.meta.env.VITE_PUBLIC_POSTHOG_HOST;

const app =
  key && host ? (
    <PostHogProvider
      apiKey={key}
      options={{
        api_host: host,
        capture_exceptions: true, // This enables capturing exceptions using Error Tracking, set to false if you don't want this
        debug: import.meta.env.MODE === "development",
        capture_pageview: false, // Disable auto pageview capture to prevent duplicates
        capture_pageleave: false, // Disable auto pageleave capture
        autocapture: false, // Disable autocapture for strictly curated schema
        opt_out_capturing_by_default: true, // Start disabled, opt-in only when DNT is off
        loaded: (ph) => {
          const dnt =
            (typeof navigator !== "undefined" &&
              (navigator.doNotTrack === "1" ||
                navigator.doNotTrack === "yes" || // Firefox legacy
                (navigator as any).msDoNotTrack === "1")) || // IE/Edge legacy
            (typeof window !== "undefined" &&
              (window as any).doNotTrack === "1") ||
            (typeof navigator !== "undefined" &&
              (navigator as any).globalPrivacyControl === true); // GPC

          // Only opt in if privacy signals are OFF and the user hasn't explicitly set a choice already
          if (
            !dnt &&
            !ph.has_opted_out_capturing() &&
            !ph.has_opted_in_capturing()
          ) {
            ph.opt_in_capturing();
          }
        },
      }}
    >
      <BookDemoProvider>
        <HelmetProvider>
          <App />
        </HelmetProvider>
      </BookDemoProvider>
    </PostHogProvider>
  ) : (
    <BookDemoProvider>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </BookDemoProvider>
  );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>{app}</React.StrictMode>
);
