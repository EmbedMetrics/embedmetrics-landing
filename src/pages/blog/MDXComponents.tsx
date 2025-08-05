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
      className="text-indigo-600 hover:text-indigo-800 underline cursor-pointer"
    >
      {children}
    </a>
  );
}
