"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Image,
} from "@heroui/react";
import { useTranslation } from "react-i18next";
import Link from "next/link";

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
  const { t, i18n } = useTranslation("common");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOrgDropdownOpen, setIsOrgDropdownOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const menuRef = useRef(null);
  const orgDropdownRef = useRef(null);

  // Check login status
  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
      if (
        orgDropdownRef.current &&
        !orgDropdownRef.current.contains(event.target)
      ) {
        setIsOrgDropdownOpen(false);
      }
    }

    if (isMenuOpen || isOrgDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen, isOrgDropdownOpen]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/";
  };

  return (
    <div ref={menuRef} className="relative">
      <Navbar className="bg-[#28308f] font-bold text-white fixed top-0 left-0 w-full h-14 sm:h-16 z-50 px-2 sm:px-4 md:px-6 lg:px-10 py-2 flex justify-between items-center navbar">
        <NavbarBrand>
          <Link
            href="/"
            className="flex items-center text-white"
            aria-label="Home"
          >
            <KHALogo className="px-2 sm:px-3 md:px-5 py-4 sm:py-6" />
            <p className="px-2 sm:px-3 md:px-5 text-white tracking-wide font-siemreap gap-2 sm:gap-4 md:gap-6 text-xs sm:text-sm md:text-base lg:text-lg">
              {t("navigation.home")}
            </p>
          </Link>
        </NavbarBrand>

        <NavbarContent
          className="hidden sm:flex gap-4 md:gap-6 lg:gap-8"
          justify="center"
        >
          <NavbarItem>
            <div ref={orgDropdownRef} className="relative">
              <button
                onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                className="text-white text-sm md:text-base hover:text-blue-200 transition-colors flex items-center gap-1"
              >
                {t("navigation.organization", "Organization")}
                <svg
                  className={`w-4 h-4 transition-transform ${
                    isOrgDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isOrgDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50">
                  <Link
                    href="/about"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsOrgDropdownOpen(false)}
                  >
                    {t("navigation.about")}
                  </Link>
                  <Link
                    href="/member"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsOrgDropdownOpen(false)}
                  >
                    {t("navigation.members", "Members")}
                  </Link>
                  <Link
                    href="/announcements"
                    className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors text-sm"
                    onClick={() => setIsOrgDropdownOpen(false)}
                  >
                    {t("navigation.announcements", "Announcements")}
                  </Link>
                </div>
              )}
            </div>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/leader"
              className="text-white text-sm md:text-base hover:text-blue-200 transition-colors"
            >
              {t("navigation.leader")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/education"
              className="text-white text-sm md:text-base hover:text-blue-200 transition-colors"
            >
              {t("navigation.education")}
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              href="/contact"
              className="text-white text-sm md:text-base hover:text-blue-200 transition-colors"
            >
              {t("navigation.contact")}
            </Link>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            className="text-white p-2 hover:bg-blue-600 rounded-md transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <NavbarContent justify="end" className="hidden sm:flex gap-4">
          {/* Login/Logout Button */}
          <NavbarItem>
            {isLoggedIn ? (
              // <button
              //   onClick={handleLogout}
              //   className="text-white text-sm md:text-base hover:text-red-200 transition-colors px-3 py-1 rounded-md hover:bg-red-600/20"
              // >
              //   {t('auth.logout')}
              // </button>
              <div
                className="w-9 h-9 rounded-full overflow-hidden cursor-pointer bg-amber-300"
                onClick={handleLogout}
              >
                <Image src="/images/member/moeurnsovanara.jpg" alt="profile"></Image>
              </div>
            ) : (
              <Link
                href="/login"
                className="text-white text-sm md:text-base hover:text-blue-200 transition-colors px-3 py-1 rounded-md hover:bg-blue-600/20"
              >
                {t("auth.login")}
              </Link>
            )}
          </NavbarItem>

          {/* Language Switcher */}
          <NavbarItem>
            <div className="relative flex items-center bg-amber-500 rounded-full px-1 py-1 w-16 sm:w-18 md:w-20 h-7 sm:h-8 md:h-9">
              <div
                className={`absolute top-0.5 sm:top-1 left-0.5 sm:left-1 transition-all duration-300 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 rounded-full bg-white shadow ${
                  i18n.language === "kh"
                    ? "translate-x-6 sm:translate-x-7 md:translate-x-9"
                    : "translate-x-0"
                }`}
                style={{ zIndex: 1 }}
              />
              <button
                className={`z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                  i18n.language === "en" ? "bg-white" : "bg-amber-500"
                }`}
                onClick={() => {
                  i18n.changeLanguage("en");
                  localStorage.setItem("lang", "en");
                }}
                aria-label="Switch to English"
              >
                <Image
                  width={16}
                  height={16}
                  src="/images/UK.png"
                  alt="English"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
                />
              </button>
              <span className="mx-0.5 sm:mx-1" />
              <button
                className={`z-10 w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                  i18n.language === "kh" ? "bg-white" : "bg-amber-500"
                }`}
                onClick={() => {
                  i18n.changeLanguage("kh");
                  localStorage.setItem("lang", "kh");
                }}
                aria-label="Switch to Khmer"
              >
                <Image
                  width={16}
                  height={16}
                  src="/images/cambodia.png"
                  alt="Khmer"
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 object-cover"
                />
              </button>
            </div>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
          <div className="sm:hidden absolute top-full left-0 w-full bg-[#28308f] shadow-lg border-t border-blue-600 animate-in slide-in-from-top-2 duration-200">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Navigation Links */}
              <div className="space-y-3">
                <div>
                  <button
                    onClick={() => setIsOrgDropdownOpen(!isOrgDropdownOpen)}
                    className="w-full text-left text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600 flex items-center justify-between"
                  >
                    <span>{t("navigation.organization", "Organization")}</span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        isOrgDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {isOrgDropdownOpen && (
                    <div className="pl-4 mt-2 space-y-2">
                      <Link
                        href="/about"
                        className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsOrgDropdownOpen(false);
                        }}
                      >
                        {t("navigation.about")}
                      </Link>
                      <Link
                        href="/member"
                        className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsOrgDropdownOpen(false);
                        }}
                      >
                        {t("navigation.members", "Members")}
                      </Link>
                      <Link
                        href="/announcements"
                        className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsOrgDropdownOpen(false);
                        }}
                      >
                        {t("navigation.announcements", "Announcements")}
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  href="/leader"
                  className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.leader")}
                </Link>
                <Link
                  href="/education"
                  className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.education")}
                </Link>
                <Link
                  href="/contact"
                  className="block text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t("navigation.contact")}
                </Link>
              </div>

              {/* Mobile Login/Logout */}
              <div className="pt-4 border-t border-blue-600">
                {isLoggedIn ? (
                  <button
                    onClick={handleLogout}
                    className="block w-full text-white hover:text-red-200 transition-colors py-2 px-3 rounded-md hover:bg-red-600 text-center"
                  >
                    {t("auth.logout")}
                  </button>
                ) : (
                  <Link
                    href="/login"
                    className="block w-full text-white hover:text-blue-200 transition-colors py-2 px-3 rounded-md hover:bg-blue-600 text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {t("auth.login")}
                  </Link>
                )}
              </div>

              {/* Mobile Language Switcher */}
              <div className="pt-4 border-t border-blue-600">
                <div className="flex items-center justify-center">
                  <div className="relative flex items-center bg-amber-500 rounded-full px-1 py-1 w-20 h-9">
                    <div
                      className={`absolute top-1 left-1 transition-all duration-300 w-7 h-7 rounded-full bg-white shadow ${
                        i18n.language === "kh"
                          ? "translate-x-9"
                          : "translate-x-0"
                      }`}
                      style={{ zIndex: 1 }}
                    />
                    <button
                      className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                        i18n.language === "en" ? "bg-white" : "bg-amber-500"
                      }`}
                      onClick={() => {
                        i18n.changeLanguage("en");
                        localStorage.setItem("lang", "en");
                      }}
                      aria-label="Switch to English"
                    >
                      <Image
                        width={16}
                        height={16}
                        src="/images/UK.png"
                        alt="English"
                        className="w-4 h-4 object-cover"
                      />
                    </button>
                    <span className="mx-1" />
                    <button
                      className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 cursor-pointer ${
                        i18n.language === "kh" ? "bg-white" : "bg-amber-500"
                      }`}
                      onClick={() => {
                        i18n.changeLanguage("kh");
                        localStorage.setItem("lang", "kh");
                      }}
                      aria-label="Switch to Khmer"
                    >
                      <Image
                        width={16}
                        height={16}
                        src="/images/cambodia.png"
                        alt="Khmer"
                        className="w-4 h-4 object-cover"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </Navbar>
    </div>
  );
}
