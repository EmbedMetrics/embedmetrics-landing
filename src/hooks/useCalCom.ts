import { useEffect, useRef } from "react";
import { getCalApi } from "@calcom/embed-react";

export function useCalCom() {
  const initialized = useRef(false);

  useEffect(() => {
    if (initialized.current) return;

    (async function () {
      try {
        const cal = await getCalApi({ namespace: "embedmetrics-demo" });
        cal("ui", {
          cssVarsPerTheme: {
            light: {
              "cal-brand": "#4f46e5",
            },
            dark: {
              "cal-brand": "#4f46e5",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
        initialized.current = true;
      } catch (error) {
        console.warn("Cal.com initialization failed:", error);
      }
    })();
  }, []);
}
