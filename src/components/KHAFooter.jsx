"use client";
import React from "react";
import { FaFacebookF, FaTelegramPlane, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from 'react-i18next';

const FACEBOOK_LINK = process.env.NEXT_PUBLIC_FACEBOOK_LINK;
const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK;
const EMAIL_LINK = process.env.NEXT_PUBLIC_EMAIL_LINK;

export default function KHAFooter() {
  const { t } = useTranslation('common');

  return (
    <footer className="bg-[#1a237e] text-white py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-start">
          {/* Logo & Name */}
          <div className="flex flex-col items-center sm:items-start col-span-1 sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-4">
              <Image
                src="/logo.png"
                alt="KHA Logo"
                width={32}
                height={32}
                className="rounded-3xl shadow bg-white w-8 h-8 sm:w-10 sm:h-10"
              />
              <span className="font-bold text-base sm:text-lg">{t('footer.name')}</span>
            </div>
          </div>

          {/* Address */}
          <div className="text-center sm:text-left">
            <span className="font-bold text-sm sm:text-base">{t('footer.addressLabel')}</span>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>{t('footer.address')}</li>
            </ul>
          </div>

          {/* Links */}
          <div className="text-center sm:text-left">
            <span className="font-bold text-sm sm:text-base">{t('footer.quickLinks')}</span>
            <ul className="mt-2 space-y-1 text-xs sm:text-sm">
              <li>
                <Link href="/about" className="hover:underline hover:text-blue-200 transition-colors">
                  {t('navigation.about')}
                </Link>
              </li>
              <li>
                <Link href="/leader" className="hover:underline hover:text-blue-200 transition-colors">
                  {t('navigation.leader')}
                </Link>
              </li>
              <li>
                <Link href="/education" className="hover:underline hover:text-blue-200 transition-colors">
                  {t('navigation.education')}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline hover:text-blue-200 transition-colors">
                  {t('navigation.contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center sm:text-left">
            <span className="font-bold text-sm sm:text-base">{t('footer.followUs')}</span>
            <ul className="mt-2 flex justify-center sm:justify-start gap-3 sm:gap-4 items-center">
              <li>
                <a
                  href={FACEBOOK_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="p-1 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FaFacebookF size={18} className="hover:text-blue-400 transition sm:w-5 sm:h-5" />
                </a>
              </li>
              <li>
                <a
                  href={TELEGRAM_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="p-1 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FaTelegramPlane size={18} className="hover:text-blue-300 transition sm:w-5 sm:h-5" />
                </a>
              </li>
              <li>
                <a 
                  href={`mailto:${EMAIL_LINK}`} 
                  aria-label="Email"
                  className="p-1 rounded-full hover:bg-blue-600 transition-colors"
                >
                  <FaEnvelope size={18} className="hover:text-yellow-300 transition sm:w-5 sm:h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-6 sm:mt-8 text-xs sm:text-sm text-gray-400 border-t border-gray-600 pt-4 sm:pt-6">
          &copy; {new Date().getFullYear()} {t('footer.name')}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
