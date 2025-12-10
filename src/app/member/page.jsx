"use client";
import React from "react";
import KHANavbar from "../../components/KHANavbar";
import Member from "../../components/Member/member";
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  return (
    <div>
      <KHANavbar />
      <div className="pt-16">
        <Member />
      </div>
      <KHAFooter />
    </div>
  );
}

