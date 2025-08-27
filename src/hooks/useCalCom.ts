import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";
import { useAnalytics } from "./useAnalytics";

// Module-level singleton + dedupe store
const CAL_NS = "embedmetrics-demo";
let CAL_SUBSCRIBED = false;
const DEMO_FIRED: { open: boolean; start: boolean; complete: boolean } =
  (typeof window !== "undefined" && (window as any).__emDemoFired) ||
    ((typeof window !== "undefined" &&
      ((window as any).__emDemoFired = {
        open: false,
        start: false,
        complete: false,
      })) as any) || { open: false, start: false, complete: false };
let modalOpenedAt: number | null = null;
let lastStep: string | undefined = undefined;
let closeLogged = false;

export function useCalCom() {
  const initialized = useRef(false);
  const removeMessageLogger = useRef<(() => void) | undefined>(undefined);
  const { trackDemoInterest } = useAnalytics();

  useEffect(() => {
    if (initialized.current) return;

    (async function () {
      try {
        const cal = await getCalApi({ namespace: CAL_NS });

        // UI setup (existing behavior)
        cal("ui", {
          cssVarsPerTheme: {
            light: { "cal-brand": "#4f46e5" },
            dark: { "cal-brand": "#4f46e5" },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });

        // Subscribe only once across the app
        if (!CAL_SUBSCRIBED) {
          const debug = (...args: any[]) => {
            if (import.meta.env.DEV) console.debug("[Cal]", ...args);
          };

          const on = (action: string, cb: (payload?: any) => void) => {
            try {
              (cal as any)("on", { action, callback: cb });
              debug("subscribed", action);
            } catch {}
          };

          // Prefer explicit 'open' if available
          const markOpen = (source: string) => {
            if (!DEMO_FIRED.open) {
              DEMO_FIRED.open = true;
              DEMO_FIRED.complete = false; // reset conversion gate for a fresh attempt
              closeLogged = false;
              modalOpenedAt = Date.now();
              trackDemoInterest("modal_open");
              debug(`demo_modal_open sent (${source})`);
            }
          };
          on("open", () => markOpen("open"));

          // Fallback: link is ready
          on("linkReady", () => markOpen("linkReady"));

          // Booking complete
          const handleComplete = (payload?: any) => {
            debug("booking complete", payload);
            if (!DEMO_FIRED.complete) {
              DEMO_FIRED.complete = true;
              trackDemoInterest("form_complete", {
                destination_url:
                  payload?.data?.bookingUrl ||
                  payload?.data?.videoCallUrl ||
                  undefined,
              });
              debug("demo_form_complete sent");
            }
          };
          on("bookingSuccessfulV2", handleComplete);
          on("bookingSuccessful", handleComplete);

          // Dev: wildcard listener to discover events
          if (import.meta.env.DEV) {
            on("*", (evt: any) => {
              try {
                const type = evt?.detail?.type ?? evt?.type ?? "(unknown)";
                const data = evt?.detail?.data ?? evt?.data ?? {};
                debug("*", { type, keys: Object.keys(data || {}) });
              } catch (e) {
                debug("*", evt);
              }
            });
          }

          // Infer open/start/close + lastStep from postMessage
          const messageLogger = (e: MessageEvent) => {
            if (typeof e.data !== "object") return;
            try {
              const url = new URL(e.origin || "");
              const host = url.hostname.toLowerCase();
              const allowed = host === "cal.com" || host.endsWith(".cal.com");
              if (!allowed) return;
            } catch {
              return;
            }
            const type = (e.data as any)?.type as string | undefined;
            if (import.meta.env.DEV) console.debug("[Cal.com message]", e.data);

            if (type === "__iframeReady") markOpen("__iframeReady");

            if (type === "navigatedToBooker" || type === "__routeChanged") {
              lastStep = type;
              if (!DEMO_FIRED.start) {
                DEMO_FIRED.start = true;
                trackDemoInterest("form_start");
                if (import.meta.env.DEV)
                  debug("demo_form_start sent", { source: type });
              }
            }

            if (type === "__closeIframe") {
              // emit close only once per cycle and only if user didn't complete
              if (!DEMO_FIRED.complete && DEMO_FIRED.open && !closeLogged) {
                closeLogged = true;
                const duration_ms = modalOpenedAt
                  ? Date.now() - modalOpenedAt
                  : undefined;
                trackDemoInterest("modal_close", {
                  started: DEMO_FIRED.start || false,
                  last_step: lastStep,
                  duration_ms,
                });
                if (import.meta.env.DEV) debug("demo_modal_close sent");
              }
              // reset for a fresh attempt
              DEMO_FIRED.open = false;
              DEMO_FIRED.start = false;
              modalOpenedAt = null;
              lastStep = undefined;
            }
          };
          window.addEventListener("message", messageLogger);
          removeMessageLogger.current = () =>
            window.removeEventListener("message", messageLogger);

          CAL_SUBSCRIBED = true;
        }

        initialized.current = true;
      } catch (error) {
        console.warn("Cal.com initialization failed:", error);
      }
    })();

    // Intentionally keep the global message listener for the lifetime of the app.
    // Removing it while keeping CAL_SUBSCRIBED=true would drop subsequent events after remounts.
  }, [trackDemoInterest]);
}
