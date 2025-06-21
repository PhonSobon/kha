// app/providers.tsx
"use client" 
import {HeroUIProvider} from '@heroui/react'
import React, { useState, useEffect } from "react";
import KHANavbar from './KHANavbar'
import KHAFooter from './KHAFooter'
import {LanguageProvider}  from './LanguageProvider';

export function Providers({children}: { children: React.ReactNode }) {
  const [lang, setLang] = useState("EN");
  
  return (
    <HeroUIProvider>
      <LanguageProvider>
        <KHANavbar lang={lang} setLang={setLang} />
        {children}
        <KHAFooter lang={lang} setLang={setLang} />
      </LanguageProvider>
    </HeroUIProvider>
  )
}