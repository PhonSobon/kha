"use client";
import React from "react";
import { FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "./LanguageProvider"; // ✅ import context

const content = {
  EN: {
    name: "Khmer Heirs Association",
    address:
      "No. 82ឈ, Dirt Road, Group 2, Borey 100 Khnang Village, Teuk Thla Commune, Russey Keo District, Phnom Penh",
    about: "About",
    leader: "KHA Leader",
    contact: "Contact",
    addressLabel: "Address",
    links: "Links",
  },
  KH: {
    name: "សមាគមទាយាទខ្មែរ",
    address:
      "អាសយដ្ឋាន៖ អាគារ ៨២ឈ ផ្លូវលំ ក្រុមទី២ ភូមិបូរី១០០ខ្នង សង្កាត់ទឹកថ្លា ខណ្ឌឬស្សីកែវ រាជធានីភ្នំពេញ",
    about: "អំពីយើង",
    leader: "ប្រធានសមាគម",
    contact: "ទំនាក់ទំនង",
    addressLabel: "អាសយដ្ឋាន",
    links: "តំណភ្ជាប់",
  },
};

const FACEBOOK_LINK = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK;
const EMAIL_LINK = process.env.NEXT_PUBLIC_EMAIL_LINK;

export default function KHAFooter() {
  const { lang } = useLanguage(); // ✅ get lang from global context
  const t = content[lang] || content.EN;

  return (
    <footer className="bg-[#1a237e] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 items-center">
        {/* Logo & Name */}
        <div className="flex flex-col items-start">
          <div className="flex items-center gap-3 mb-2">
            <Image
              src="/logo.png"
              alt="KHA Logo"
              width={40}
              height={40}
              className="rounded-3xl shadow bg-white"
            />
            <span className="font-bold text-lg">{t.name}</span>
          </div>
        </div>

        {/* Address */}
        <div>
          <span className="font-bold">{t.addressLabel}</span>
          <ul className="mt-2 space-y-1 text-sm">
            <li>{t.address}</li>
          </ul>
        </div>

        {/* Links */}
        <div>
          <span className="font-bold">{t.links}</span>
          <ul className="mt-2 space-y-1 text-sm">
            <li>
              <Link href="/about" className="hover:underline">
                {t.about}
              </Link>
            </li>
            <li>
              <Link href="/leader" className="hover:underline">
                {t.leader}
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <span className="font-bold">{t.contact}</span>
          <ul className="mt-2 flex gap-4 items-center">
            <li>
              <a
                href={FACEBOOK_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebookF size={22} className="hover:text-blue-400 transition" />
              </a>
            </li>
            <li>
              <a
                href={TELEGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
              >
                <FaTelegramPlane size={22} className="hover:text-blue-300 transition" />
              </a>
            </li>
            <li>
              <a href={`mailto:${EMAIL_LINK}`} aria-label="Email">
                <FaEnvelope size={22} className="hover:text-yellow-300 transition" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
