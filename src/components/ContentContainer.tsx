/*
 * This file is part of the EmbedMetrics public website.
 * © 2025 Yuriy Plakosh. All rights reserved.
 */

import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentContainer({ children, className = "" }: Props) {
  return (
    <main className={`max-w-[67.5rem] mx-auto px-4 pt-20 pb-16 ${className}`}>
      {children}
    </main>
  );
}
