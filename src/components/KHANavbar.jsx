"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

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
  const { t } = useTranslation(); // translation function
  const router = useRouter();
  const { locale, locales, pathname, asPath, query } = router;

  // Language toggle handler
  const changeLanguage = (lng) => {
    router.push({ pathname, query }, asPath, { locale: lng });
  };

  return (
    <Navbar className="bg-[#28308f] font-bold text-white fixed top-0 left-0 w-full h-16 z-50 px-10 py-2 flex justify-between items-center navbar">
      <NavbarBrand>
        <Link href="/" locale={locale} className="flex items-center text-white" aria-label="Home">
          <KHALogo />
          <p className="px-5 text-white tracking-wide font-siemreap gap-6">
            {t("home")}
          </p>
        </Link>
      </NavbarBrand>

      <NavbarContent className="flex gap-8" justify="center">
        <NavbarItem>
          <Link href="/about" locale={locale} className="text-white">
            {t("about")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/leader" locale={locale} className="text-white">
            {t("leader")}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link href="/contact" locale={locale} className="text-white">
            {t("contact")}
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <div className="relative flex items-center bg-amber-500 rounded-full px-1 py-1 w-20 h-9">
            <div
              className={`absolute top-1 left-1 transition-all duration-300 w-7 h-7 rounded-full bg-white shadow ${
                locale === "kh" ? "translate-x-9" : "translate-x-0"
              }`}
              style={{ zIndex: 1 }}
            />
            <button
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${
                locale === "en" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => changeLanguage("en")}
              aria-label="Switch to English"
            >
              <Image
                width={24}
                height={24}
                src="/images/UK.png"
                alt="English"
                className="w-6 h-6 object-cover"
              />
            </button>
            <span className="mx-1" />
            <button
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${
                locale === "kh" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => changeLanguage("kh")}
              aria-label="Switch to Khmer"
            >
              <Image
                width={24}
                height={24}
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
