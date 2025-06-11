import React from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";

const navText = {
  EN: { feature: "Feature", about: "About Us", contact: "Contact Us" },
  KH: { feature: "លក្ខណៈពិសេស", about: "អំពីពួកយើង", contact: "ទំនាក់ទំនង" },
};

export default function KHANavbar({ lang, setLang }) {
  return (
    <Navbar className="bg-[#1a237e] text-white fixed top-0 left-0 w-full z-50 px-8 py-2 flex justify-between items-center">
      <NavbarBrand>
        <p className="font-bold text-white tracking-wide">SERVICEBOX</p>
      </NavbarBrand>
      <NavbarContent className="flex gap-8" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white hover:underline">
            {navText[lang].feature}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white hover:underline">
            {navText[lang].about}
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#" className="text-white hover:underline">
            {navText[lang].contact}
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem>
          <button
            className={`px-2 font-semibold ${lang === "EN" ? "underline" : ""}`}
            onClick={() => setLang("EN")}
          >
            English
          </button>
          <span className="mx-1">|</span>
          <button
            className={`px-2 font-semibold ${lang === "KH" ? "underline" : ""}`}
            onClick={() => setLang("KH")}
          >
            Khmer
          </button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}