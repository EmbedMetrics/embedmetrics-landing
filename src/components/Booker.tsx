import React from "react";
import { useCalCom } from "../hooks/useCalCom";

export default function Booker() {
  useCalCom();

  return (
    <button
      data-cal-namespace="embedmetrics-demo"
      data-cal-link="yuriy-plakosh/embedmetrics-demo"
      data-cal-config='{"layout":"month_view"}'
      className="cursor-pointer bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm hover:shadow-md hover:brightness-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 active:scale-[.98]"
    >
      Book a Demo
    </button>
  );
}
