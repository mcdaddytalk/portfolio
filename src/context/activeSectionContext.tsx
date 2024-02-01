"use client";

import type { ActiveSectionContextProviderProps, ActiveSectionContextType, SectionName } from "@/lib/types";
import React, { useState, createContext, useContext, useMemo } from "react";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: Readonly<ActiveSectionContextProviderProps>) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // we need to keep track of this to disable the observer temporarily when user clicks on a link

  const value = useMemo(() => {
    return {
      activeSection,
      setActiveSection,
      timeOfLastClick,
      setTimeOfLastClick,
    };
  }, [activeSection, setActiveSection, timeOfLastClick, setTimeOfLastClick]);

  return (
    <ActiveSectionContext.Provider
      value={value}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider"
    );
  }

  return context;
}