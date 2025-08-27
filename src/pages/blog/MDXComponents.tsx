import React from "react";
import { useCalCom } from "../../hooks/useCalCom";
import { useAnalytics } from "../../hooks/useAnalytics";

export function BookDemoLink({ children }: { children: React.ReactNode }) {
  const { trackCTAClick } = useAnalytics();
  useCalCom();

  return (
    <a
      href="#"
      data-cal-namespace="embedmetrics-demo"
      data-cal-link="yuriy-plakosh/embedmetrics-demo"
      data-cal-config='{"layout":"month_view"}'
      className="text-indigo-600 hover:text-indigo-800 underline cursor-pointer"
      onClick={() =>
        trackCTAClick(
          "blog-content",
          "Book a Demo",
          {
            content_type: "blog-post",
            content_id: window.location.pathname.split("/").pop() || "unknown",
          },
          { send_instantly: true }
        )
      }
    >
      {children}
    </a>
  );
}
