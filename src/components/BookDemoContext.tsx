import React, { createContext, useContext } from "react";
import Booker from "./Booker";

const BookDemoContext = createContext<{ open: () => void }>({
  open: () => {},
});

export function BookDemoProvider({ children }: { children: React.ReactNode }) {
  return (
    <BookDemoContext.Provider value={{ open: () => {} }}>
      {children}
    </BookDemoContext.Provider>
  );
}

export function useBookDemo() {
  return useContext(BookDemoContext);
}
