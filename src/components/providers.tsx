"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import I18nProvider from "./I18nProvider";

export function Providers({ children }) {
  return (
    <I18nProvider>
      <HeroUIProvider>
        {children}
      </HeroUIProvider>
    </I18nProvider>
  );
}
