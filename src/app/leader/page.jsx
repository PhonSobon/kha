"use client"
import React from 'react'
import HeaderLeader from '../../components/Leader/HeaderLeader'
import { useLanguage } from '../../components/LanguageProvider'
import KHANavbar from '../../components/KHANavbar';
import LeaderKha from '../../components/Leader/LeaderKha';

export default function page() {
const { lang, setLang } = useLanguage();
  return (
    <div className='pt-16'>
      <KHANavbar lang={lang} setLang={setLang}/>
        {/* <HeaderLeader lang={lang} setLang={setLang}/> */}
        <LeaderKha lang={lang} setLang={setLang}/>
        </div>
  )
}
