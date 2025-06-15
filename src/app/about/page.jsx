"use client";
import React, { useState, useEffect } from "react";
import KHANavbar from "../../components/KHANavbar";

export default function page() {
  const [lang, setLang] = useState("EN");
  return (
    <div>
      <KHANavbar lang={lang} setLang={setLang} />
      {/* Add your content here */}
      page
    </div>
  )
}
