"use client";
import React from 'react'
import FromContact from '../../components/contact/FromContact'
import HeaderContact from '../../components/contact/HeaderContact'
import CardContact from '../../components/contact/CardContact'
import KHAFooter from '../../components/KHAFooter'
import { useTranslation } from 'react-i18next'
import KHANavbar from '../../components/KHANavbar';


export default function page() {
  const { t, i18n } = useTranslation('common')
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <KHANavbar />
      <HeaderContact />
      <div className="flex flex-col items-center justify-center pt-8 pb-8">
      <CardContact />
      </div>
      <div className="pt-16 pb-16 ">
      <div className="flex-1 w-full max-w-6xl mx-auto flex flex-col md:flex-row shadow-lg rounded-xl overflow-hidden bg-white">
        <div className="w-full md:w-1/2 flex flex-col justify-center p-8 bg-white">
          <FromContact />
        </div>

        <div className="w-full md:w-1/2">
          <iframe
            title="KHA Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d871.6578773971763!2d104.87818134324421!3d11.568579474248091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310951a04723a1a7%3A0x9325c95a8bd39918!2z4Z6f4Z6Y4Z624Z6C4Z6Y4Z6R4Z624Z6Z4Z624Z6R4Z6B4Z-S4Z6Y4Z-C4Z6a!5e1!3m2!1sen!2skh!4v1750573566885!5m2!1sen!2skh"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full min-h-[500px]"
          ></iframe>
        </div>
      </div>
      </div>
      <KHAFooter />
      
    </div>
  )
}