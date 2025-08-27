import React, { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { useAnalytics } from "../hooks/useAnalytics";

interface ExitIntentTrackerProps {
  threshold?: number; // Distance from top edge to trigger exit intent (in pixels)
}

export function ExitIntentTracker({ threshold = 50 }: ExitIntentTrackerProps) {
  const { trackExitIntent } = useAnalytics();
  const firedThisView = useRef(false);
  const rafId = useRef<number | null>(null);
  const { pathname } = useLocation();

  useEffect(() => {
    firedThisView.current = false;
  }, [pathname]); // reset only on page change

  useEffect(() => {
    const onLeave = (e: MouseEvent) => {
      if (e.clientY <= threshold && !firedThisView.current) {
        firedThisView.current = true;
        trackExitIntent();
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const rel = (e as any).relatedTarget || (e as any).toElement;
      if (!rel && e.clientY <= threshold && !firedThisView.current) {
        firedThisView.current = true;
        trackExitIntent();
      }
    };

    const debounced = (e: MouseEvent) => {
      if (rafId.current) cancelAnimationFrame(rafId.current);
      rafId.current = requestAnimationFrame(() => onLeave(e));
    };

    document.addEventListener("mouseleave", debounced);
    document.addEventListener("mouseout", onMouseOut);
    return () => {
      document.removeEventListener("mouseleave", debounced);
      document.removeEventListener("mouseout", onMouseOut);
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };
  }, [threshold, trackExitIntent]);

  // This component doesn't render anything
  return null;
}
