"use client";
import { HeroUIProvider } from "@heroui/react";
import React from "react";
import { LanguageProvider } from "./LanguageProvider";

export function Providers({ children }) {
  return (
    <HeroUIProvider>
      <LanguageProvider>{children}</LanguageProvider>
    </HeroUIProvider>
  );
}
