import React, { unstable_Activity } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

const navText = {
  EN: {
    home: "KHMER HEIRS ASSOCIATION",
    event: "Events",
    about: "About Us",
    leader: "KHA Leader",
    contact: "Contact Us",
  },
  KH: {
    home: "សមាគមទាយាទខ្មែរ",
    event: "ព្រឹត្តិការណ៍",
    leader: "ថ្នាក់ដឹកនាំសមាគម",
    about: "អំពីពួកយើង",
    contact: "ទំនាក់ទំនង",
  },
};

export const KHALogo = () => {
  return (
    <div className="flex items-center">
      <img
        src="/images/Logo/logo.jpg"
        alt="KHA Logo"
        className="w-10 h-10 mr-2 rounded-3xl"
      />
    </div>
  );
};

export default function KHANavbar({ lang, setLang }) {
  return (
    <Navbar className="bg-[#28308f] text-white fixed top-0 left-0 w-full h-16 z-50 px-10 py-2 flex justify-between items-center navbar">
      <NavbarBrand>
        <Link
          href="/"
          className="flex items-center text-white "
          aria-label="Home"
        >
        <KHALogo />
        <p className="font-bold text-white tracking-wide font-siemreap ">
          {navText[lang].home}
        </p>
        </Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="/about"
            className="text-white "
          >
            {navText[lang].about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/event"
            className="text-white "
          >
            {navText[lang].event}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="/leader"
            className="text-white "
          >
            {navText[lang].leader}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white "
          >
            {navText[lang].feature}
          </Link>
        </NavbarItem>

        <NavbarItem>
          <Link
            color="foreground"
            href="/contact"
            className="text-white "
          >
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
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${
                lang === "EN" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => setLang("EN")}
              aria-label="Switch to English"
            >
              <img
                src="/images/UK.png"
                alt="English"
                className="w-6 h-6 object-cover"
              />
            </button>
            <span className="mx-1">

            </span>
            <button
              className={`z-10 w-7 h-7 flex items-center justify-center rounded-full transition-colors duration-300 ${
                lang === "KH" ? "bg-white" : "bg-amber-500"
              }`}
              onClick={() => setLang("KH")}
              aria-label="Switch to Khmer"
            >
              <img
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
