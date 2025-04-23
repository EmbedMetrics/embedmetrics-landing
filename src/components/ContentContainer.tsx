import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export default function ContentContainer({ children, className = "" }: Props) {
  return (
    <main className={`max-w-4xl mx-auto px-4 pt-20 pb-16 ${className}`}>
      {children}
    </main>
  );
}
