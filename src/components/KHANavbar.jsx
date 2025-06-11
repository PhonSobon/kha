import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@heroui/react";

const navText = {
  EN: {
    home: "Khmer Heirs Association",
    feature: "Feature",
    about: "About Us",
    contact: "Contact Us",
  },
  KH: {
    home: "សមាគមទាយាទខ្មែរ",
    feature: "លក្ខណៈពិសេស",
    about: "អំពីពួកយើង",
    contact: "ទំនាក់ទំនង",
  },
};

export const KHALogo = () => {
  return (
    <div className="flex items-center">
      <img src="/images/logo.png" alt="KHA Logo" className="w-10 h-10 mr-2" />
    </div>
  );
};

export default function KHANavbar({ lang, setLang }) {
  return (
    <Navbar className="bg-[#28308f] text-white fixed top-0 left-0 w-full h-16 z-50 px-10 py-2 flex justify-between items-center">
      <NavbarBrand>
        <KHALogo />
        <p className="font-bold text-white tracking-wide font-siemreap">
          {navText[lang].home}
        </p>
      </NavbarBrand>
      <NavbarContent className="flex gap-8" justify="center">
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white hover:underline"
          >
            {navText[lang].feature}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white hover:underline"
          >
            {navText[lang].about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            color="foreground"
            href="#"
            className="text-white hover:underline"
          >
            {navText[lang].contact}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="flex items-center">
          <button
            className={`px-2 font-semibold flex items-center ${
              lang === "EN" ? "underline" : ""
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
          <span className="mx-1">|</span>
          <button
            className={`px-2 font-semibold flex items-center ${
              lang === "KH" ? "underline" : ""
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
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
