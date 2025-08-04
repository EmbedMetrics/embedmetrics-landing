import React from "react";
import { useCalCom } from "../hooks/useCalCom";

export default function Booker() {
  useCalCom();

  return (
    <button
      data-cal-namespace="embedmetrics-demo"
      data-cal-link="yuriy-plakosh/embedmetrics-demo"
      data-cal-config='{"layout":"month_view"}'
      className="bg-indigo-600 text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-indigo-700 transition cursor-pointer"
    >
      Book a Demo
    </button>
  );
}
