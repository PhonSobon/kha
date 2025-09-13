"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@heroui/react";
import { useLanguage } from "./LanguageProvider"; // ✅ import from your context
import Link from "next/link";

const navText = {
  EN: {
    home: "KHMER HEIRS ASSOCIATION",
    about: "About Us",
    leader: "KHA Leader",
    education: "Education",
    contact: "Contact Us",
  },
  KH: {
    home: "សមាគមទាយាទខ្មែរ",
    about: "អំពីពួកយើង",
    leader: "ថ្នាក់ដឹកនាំសមាគម",
    education : "ការសិក្សា",
    contact: "ទំនាក់ទំនង",
  },
};

export const KHALogo = () => (
  <div className="flex items-center">
    <Image
      src="/images/Logo/logo.jpg"
      alt="KHA Logo"
      className="w-10 h-10 mr-2 rounded-3xl"
      width={40}
      height={40}
      style={{ objectFit: "cover" }}
    />
  </div>
);

export default function KHANavbar() {
  const { lang, setLang } = useLanguage(); 

  return (
    <Navbar className="bg-[#28308f] font-bold text-white fixed top-0 left-0 w-full h-16 z-50 px-10 py-2 flex justify-between items-center navbar">
      <NavbarBrand>
        <Link href="/" className="flex items-center text-white" aria-label="Home">
          <KHALogo className="px-5 py-6" />
          <p className="px-5 text-white tracking-wide font-siemreap gap-6">
            {navText[lang].home}
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/about" className="text-white">
            {navText[lang].about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/leader" className="text-white">
            {navText[lang].leader}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/education" className="text-white">
            {navText[lang].education}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" className="text-white">
            {navText[lang].contact}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="relative flex items-center bg-amber-500 rounded-full px-1 py-1 w-20 h-9">
            <div
              className={`absolute top-1 left-1 transition-all duration-300 w-7 h-7 rounded-full bg-white shadow ${
                lang === "KH" ? "translate-x-9" : "translate-x-0"
              }`}
              style={{ zIndex: 1 }}
            />
            <button
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                lang === "EN" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => setLang("EN")}
              aria-label="Switch to English"
            >
              <Image
                width={0}
                height={0}
                src="/images/UK.png"
                alt="English"
                className="w-6 h-6 object-cover"
              />
            </button>
            <span className="mx-1" />
            <button
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                lang === "KH" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => setLang("KH")}
              aria-label="Switch to Khmer"
            >
              <Image
                width={0}
                height={0}
                src="/images/cambodia.png"
                alt="Khmer"
                className="w-6 h-6 object-cover"
              />
            </button>
          </div>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
