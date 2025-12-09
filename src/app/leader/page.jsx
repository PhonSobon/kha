"use client";
import React from "react";
import HeaderLeader from "../../components/Leader/HeaderLeader";
import { useTranslation } from 'react-i18next';
import KHANavbar from "../../components/KHANavbar";
import LeaderKha from "../../components/Leader/LeaderKha";
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  const { t, i18n } = useTranslation('common');
  return (
    <div className="pt-16">
      <KHANavbar />
      <LeaderKha />
      <KHAFooter />
    </div>
  );
}
