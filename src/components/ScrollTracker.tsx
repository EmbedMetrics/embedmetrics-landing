import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";

const DEFAULT_THRESHOLDS = [25, 50, 75, 90, 100];

interface ScrollTrackerProps {
  thresholds?: number[]; // Scroll depth thresholds to track (0-100)
}

export function ScrollTracker({
  thresholds = DEFAULT_THRESHOLDS,
}: ScrollTrackerProps) {
  const { trackScrollDepth } = useAnalytics();
  const trackedThresholds = useRef<Set<number>>(new Set());
  const rafId = useRef<number | null>(null);
  const { pathname } = useLocation(); // SPA-safe reset

  useEffect(() => {
    const onScroll = () => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => {
        const docEl = document.documentElement;
        const body = document.body;
        const scrollTop =
          window.scrollY || docEl.scrollTop || body.scrollTop || 0;
        const fullHeight = Math.max(
          docEl.scrollHeight,
          body.scrollHeight,
          docEl.offsetHeight,
          body.offsetHeight
        );
        const viewport = window.innerHeight;
        const docHeight = Math.max(0, fullHeight - viewport);

        if (docHeight === 0) {
          // For short pages, emit 100% scroll depth once
          if (!trackedThresholds.current.has(100)) {
            trackedThresholds.current.add(100);
            trackScrollDepth(100);
          }
          return;
        }

        const pct = Math.min(100, Math.round((scrollTop / docHeight) * 100));
        thresholds.forEach((t) => {
          if (pct >= t && !trackedThresholds.current.has(t)) {
            trackedThresholds.current.add(t);
            trackScrollDepth(t);
          }
        });
      });
    };

    const onResize = () => {
      trackedThresholds.current.clear();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    onScroll(); // in case user lands mid-page via anchor

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [thresholds, trackScrollDepth]);

  useEffect(() => {
    trackedThresholds.current.clear(); // clear on any route change
    // Immediately evaluate current scroll depth for mid-anchor landings
    requestAnimationFrame(() => window.dispatchEvent(new Event("scroll")));
  }, [pathname]);

  // This component doesn't render anything
  return null;
}
