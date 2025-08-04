import React from "react";
import { useCalCom } from "../../hooks/useCalCom";

export function BookDemoLink({ children }: { children: React.ReactNode }) {
  useCalCom();

  return (
    <a
      href="#"
      data-cal-namespace="embedmetrics-demo"
      data-cal-link="yuriy-plakosh/embedmetrics-demo"
      data-cal-config='{"layout":"month_view"}'
      style={{
        color: "#6366f1",
        textDecoration: "underline",
        cursor: "pointer",
      }}
    >
      {children}
    </a>
  );
}
