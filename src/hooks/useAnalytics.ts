import React, { useCallback } from "react";
import { usePostHog } from "posthog-js/react";
import type { PostHog } from "posthog-js";
import { routes } from "../routes";

declare global {
  interface Window {
    posthog?: PostHog;
  }
}

// Internal SPA page tracking
let lastPageName: string | null = null;

// DNT check function
const isDNT = () => {
  return (
    (typeof navigator !== "undefined" &&
      (navigator.doNotTrack === "1" ||
        navigator.doNotTrack === "yes" || // Firefox legacy
        (navigator as any).msDoNotTrack === "1")) || // IE/Edge legacy
    (typeof window !== "undefined" && (window as any).doNotTrack === "1") ||
    (typeof navigator !== "undefined" &&
      (navigator as any).globalPrivacyControl === true) // GPC
  );
};

// Funnel event names - use enum for consistency
export enum FunnelEvents {
  // Page Views
  PAGE_VIEW = "page_view",

  // Engagement
  SCROLL_DEPTH = "scroll_depth",

  // Demo Interest
  CTA_CLICK = "cta_click",
  DEMO_MODAL_OPEN = "demo_modal_open",
  DEMO_FORM_START = "demo_form_start",

  // Conversion
  DEMO_BOOKED = "demo_booked",

  // Content Engagement
  BLOG_READ = "blog_read",
  BLOG_SHARE = "blog_share",

  // Feature Interest
  FEATURE_VIEW = "feature_view",

  // Exit Intent
  EXIT_INTENT = "exit_intent",
}

// Funnel stages for conversion tracking
export enum FunnelStages {
  AWARENESS = "awareness",
  INTEREST = "interest",
  CONSIDERATION = "consideration",
  INTENT = "intent",
  CONVERSION = "conversion",
}

// Custom properties for events
export interface FunnelProperties {
  // Page context
  page_name?: string;
  page_url?: string;
  referrer?: string;
  previous_page?: string;

  // User context
  user_type?: "new" | "returning";
  device_type?: "mobile" | "desktop" | "tablet";

  // Funnel context
  funnel_stage?: FunnelStages;
  funnel_position?: number;

  // Content context
  content_type?:
    | "landing"
    | "about"
    | "blog"
    | "blog-post"
    | "not-found"
    | "pricing"
    | "terms"
    | "privacy";
  content_id?: string;
  post_title?: string;

  // Interaction context
  cta_location?: string;
  cta_text?: string;
  cta_id?: string;
  feature_name?: string;
  scroll_depth?: number;
  is_navigation?: boolean;
  destination_url?: string;
  state?: string;
  share_platform?: "x" | "facebook" | "linkedin" | "copy";
  read_time_minutes?: number;

  // Business context
  company_size?: string;
  industry?: string;

  // UTM parameters
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
}

// Helper functions
function safeGet<T = any>(store: Storage, key: string): T | undefined {
  try {
    const v = store.getItem(key);
    return v ? JSON.parse(v) : undefined;
  } catch {
    return undefined;
  }
}

function safeSet(store: Storage, key: string, val: any) {
  try {
    store.setItem(key, typeof val === "string" ? val : JSON.stringify(val));
  } catch {}
}

function persistFirstUTM() {
  const key = "embedmetrics_first_utm";
  const existing = safeGet<Record<string, string>>(sessionStorage, key);
  if (existing) return existing;

  const keys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_content",
    "utm_term",
  ] as const;
  const qs = new URLSearchParams(window.location.search);
  const first: Record<string, string> = {};

  keys.forEach((k) => {
    const v = qs.get(k);
    if (v) first[k] = v; // only set on first page in session
  });

  // Only persist if there are actual UTM parameters
  if (Object.keys(first).length > 0) {
    safeSet(sessionStorage, key, first);
    return first;
  }
  // No UTMs yet; don't lock storage
  return {};
}

function getDeviceType(): "mobile" | "desktop" | "tablet" {
  if (/Mobi|Android/i.test(navigator.userAgent)) return "mobile";
  return window.innerWidth >= 1024 ? "desktop" : "tablet";
}

function getUserType(): "new" | "returning" {
  const firstSeen = (() => {
    try {
      return localStorage.getItem("embedmetrics_first_seen");
    } catch {
      return null;
    }
  })();
  if (!firstSeen) {
    safeSet(localStorage, "embedmetrics_first_seen", Date.now().toString());
    return "new";
  }
  return "returning";
}

const baseProps = (): Partial<FunnelProperties> => ({
  page_url: window.location.href,
  referrer: document.referrer || undefined,
  device_type: getDeviceType(),
  user_type: getUserType(),
  ...persistFirstUTM(),
});

export function useAnalytics() {
  const posthog = usePostHog();

  // Track page views with funnel context
  const trackPageView = useCallback(
    (pageName: string, properties?: Partial<FunnelProperties>) => {
      if (isDNT()) return; // Early return if DNT is on

      // Fall back to global PostHog if hook isn't ready yet
      const client = posthog ?? window.posthog;

      // Add lightweight context for better analytics queries
      const extras: Partial<FunnelProperties> = {};
      if (pageName === "blog-post") {
        const m = window.location.pathname.match(/^\/blog\/([^\/?#]+)/);
        if (m?.[1]) {
          extras.content_type = "blog-post"; // ← fix
          extras.content_id = m[1]; // slug
        }
      } else if (pageName === "not-found") {
        extras.content_type = "not-found";
        extras.content_id = window.location.pathname; // missing path
      }

      client?.capture(FunnelEvents.PAGE_VIEW, {
        page_name: pageName,
        funnel_stage: getFunnelStage(pageName),
        previous_page: lastPageName || undefined,
        ...baseProps(),
        ...extras,
        ...properties,
      });

      // Update internal SPA page tracking
      lastPageName = pageName;
    },
    [posthog]
  );

  // Track CTA clicks
  type CaptureOptions = Parameters<PostHog["capture"]>[2];

  const trackCTAClick = useCallback(
    (
      ctaLocation: string,
      ctaText: string,
      properties?: Partial<FunnelProperties>,
      options?: CaptureOptions
    ) => {
      if (isDNT()) return; // Early return if DNT is on

      const page = getCurrentPageName();
      posthog?.capture(
        FunnelEvents.CTA_CLICK,
        {
          cta_location: ctaLocation,
          cta_text: ctaText,
          cta_id: `${ctaLocation}:${ctaText}`
            .normalize("NFKD")
            .toLowerCase()
            .replace(/[^a-z0-9:-]+/g, "-") // collapse non-word
            .replace(/-+/g, "-") // collapse multiple dashes
            .replace(/(^-|-$)/g, ""), // trim leading/trailing dashes
          page_name: page,
          funnel_stage: getFunnelStage(page),
          ...baseProps(),
          ...properties,
        },
        options
      );
    },
    [posthog]
  );

  // Track demo interest
  const trackDemoInterest = useCallback(
    (
      action: "modal_open" | "form_start" | "form_complete",
      properties?: Partial<FunnelProperties>
    ) => {
      if (isDNT()) return; // Early return if DNT is on

      const eventName =
        action === "modal_open"
          ? FunnelEvents.DEMO_MODAL_OPEN
          : action === "form_start"
          ? FunnelEvents.DEMO_FORM_START
          : FunnelEvents.DEMO_BOOKED;

      posthog?.capture(eventName, {
        page_name: getCurrentPageName(),
        funnel_stage: FunnelStages.INTENT,
        ...baseProps(),
        ...properties,
      });
    },
    [posthog]
  );

  // Track scroll depth
  const trackScrollDepth = useCallback(
    (depth: number) => {
      if (isDNT()) return; // Early return if DNT is on

      posthog?.capture(FunnelEvents.SCROLL_DEPTH, {
        scroll_depth: depth,
        page_name: getCurrentPageName(),
        funnel_stage: getFunnelStage(getCurrentPageName()),
        ...baseProps(),
      });
    },
    [posthog]
  );

  // Track blog engagement
  const trackBlogEngagement = useCallback(
    (
      action: "read" | "share",
      blogSlug: string,
      properties?: Partial<FunnelProperties>,
      options?: CaptureOptions // ← add this
    ) => {
      if (isDNT()) return; // Early return if DNT is on

      const eventName =
        action === "read" ? FunnelEvents.BLOG_READ : FunnelEvents.BLOG_SHARE;

      posthog?.capture(
        eventName,
        {
          content_type: "blog-post", // ← change from "blog" for consistency
          content_id: blogSlug,
          page_name: getCurrentPageName(),
          funnel_stage: FunnelStages.CONSIDERATION,
          ...baseProps(),
          ...properties,
        },
        options // ← pass through
      );
    },
    [posthog]
  );

  // Track feature interest
  const trackFeatureInterest = useCallback(
    (featureName: string, properties?: Partial<FunnelProperties>) => {
      if (isDNT()) return; // Early return if DNT is on

      posthog?.capture(FunnelEvents.FEATURE_VIEW, {
        feature_name: featureName,
        page_name: getCurrentPageName(),
        funnel_stage: getFunnelStage(getCurrentPageName()),
        ...baseProps(),
        ...properties, // ← add this
      });
    },
    [posthog]
  );

  // Track exit intent
  const trackExitIntent = useCallback(
    (properties?: Partial<FunnelProperties>) => {
      if (isDNT()) return; // Early return if DNT is on

      posthog?.capture(FunnelEvents.EXIT_INTENT, {
        page_name: getCurrentPageName(),
        funnel_stage: getFunnelStage(getCurrentPageName()),
        ...baseProps(),
        ...properties,
      });
    },
    [posthog]
  );

  // Helper functions
  const normalize = (p: string) => (p === "/" ? "/" : p.replace(/\/+$/, ""));

  const getCurrentPageName = (): string => {
    const path = normalize(window.location.pathname);

    // Find matching route
    const route =
      routes.find((route) => {
        const routePath = normalize(route.path);
        if (routePath.includes(":")) {
          // Handle dynamic routes like /blog/:slug
          const routePathParts = routePath.split("/");
          const currentPathParts = path.split("/");

          if (routePathParts.length !== currentPathParts.length) return false;

          return routePathParts.every((part, index) => {
            if (part.startsWith(":")) return true; // Dynamic parameter
            return part === currentPathParts[index];
          });
        }
        return routePath !== "*" && routePath === path; // ignore wildcard here
      }) ?? routes.find((r) => r.path === "*"); // fallback

    return route?.pageName || "unknown";
  };

  const getFunnelStage = (pageName: string): FunnelStages => {
    switch (pageName) {
      case "landing":
        return FunnelStages.AWARENESS;
      case "about":
        return FunnelStages.INTEREST;
      case "blog":
      case "blog-post":
        return FunnelStages.CONSIDERATION;
      default:
        return FunnelStages.AWARENESS;
    }
  };

  return {
    trackPageView,
    trackCTAClick,
    trackDemoInterest,
    trackScrollDepth,
    trackBlogEngagement,
    trackFeatureInterest,
    trackExitIntent,
    getCurrentPageName,
    posthog,
  };
}
