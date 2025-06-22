"use client";
import React from 'react';
import { FaFacebookF, FaMapMarkerAlt, FaEnvelope, FaTelegramPlane } from 'react-icons/fa';

const FACEBOOK_LINK = process.env.NEXT_PUBLIC_FACEBOOK_LINK ;
const TELEGRAM_LINK = process.env.NEXT_PUBLIC_TELEGRAM_LINK ;

export default function CardContact() {
  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Facebook Card */}
      <div className="flex items-center gap-4 bg-blue-50 rounded-lg shadow p-4 w-full md:w-64">
        <div className="bg-blue-600 text-white rounded-full p-3">
          <FaFacebookF size={24} />
        </div>
        <div>
          <div className="font-semibold text-gray-700">Facebook</div>
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
            Khmer Heirs Association
          </a>
        </div>
      </div>
      
      {/* Email Card */}
      <div className="flex items-center gap-4 bg-blue-50 rounded-lg shadow p-4 w-full md:w-64">
        <div className="bg-blue-600 text-white rounded-full p-3">
          <FaEnvelope size={24} />
        </div>
        <div>
          <div className="font-semibold text-gray-700">Email</div>
          <a
            href="mailto:kha.info01@gmail.com"
            className="text-blue-600 hover:underline text-sm"
          >
            kha.info01@gmail.com
          </a>
        </div>
      </div>
      {/* Telegram Card */}
      <div className="flex items-center gap-4 bg-blue-50 rounded-lg shadow p-4 w-full md:w-64">
        <div className="bg-blue-600 text-white rounded-full p-3">
          <FaTelegramPlane size={24} />
        </div>
        <div>
          <div className="font-semibold text-gray-700">Telegram</div>
          <a
            href={TELEGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm"
          >
                        Khmer Heirs Association

          </a>
        </div>
      </div>
    </div>
  );
}