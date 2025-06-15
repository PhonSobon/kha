// app/providers.tsx
"use client" 
import {HeroUIProvider} from '@heroui/react'
import React, { useState, useEffect } from "react";
import KHANavbar from './KHANavbar'
import KHAFooter from './KHAFooter'

export function Providers({children}: { children: React.ReactNode }) {
  const [lang, setLang] = useState("EN");
  
  return (
    <HeroUIProvider>
      <KHANavbar lang={lang} setLang={setLang} />
      {children}
      <KHAFooter lang={lang} setLang={setLang} />
    </HeroUIProvider>
  )
}