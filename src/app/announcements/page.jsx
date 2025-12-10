"use client";
import React from "react";
import KHANavbar from "../../components/KHANavbar";
import Announcement from "../../components/announcement/announcement";
import KHAFooter from "../../components/KHAFooter";

export default function Page() {
  return (
    <div>
      <KHANavbar />
      <div className="pt-16">
        <Announcement />
      </div>
      <KHAFooter />
    </div>
  );
}

