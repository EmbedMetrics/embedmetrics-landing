import React from "react";
import { useEarlyAccess } from "../../components/EarlyAccessContext";

export function EarlyAccessLink({ children }: { children: React.ReactNode }) {
  const { open } = useEarlyAccess();
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        open();
      }}
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
