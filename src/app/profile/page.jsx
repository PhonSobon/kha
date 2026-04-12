"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import KHANavbar from "../../components/KHANavbar";
import KHAFooter from "../../components/KHAFooter";
import { Card, CardBody, Button, Chip, Divider } from "@heroui/react";
import {
  UserIcon,
  EnvelopeIcon,
  CalendarIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

export default function ProfilePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userData));
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/");
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f8fafc]">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#26308f]"></div>
          <p className="text-slate-400 font-bold tracking-widest uppercase text-xs">
            Loading Profile
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <KHANavbar />

      {/* Modern Deep Blue Header */}
      <div className="h-40 w-full bg-[#26308f] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-18 pb-24 relative z-10">
        
        <div className="flex justify-between items-center mb-12">
          <Link
            href="/dashboard"
            className="inline-flex items-center text-white/90 hover:text-white transition-all font-bold bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-xl"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            {t("auth.back", "Back to Dashboard")}
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* LEFT COLUMN: IDENTITY CARD */}
          <div className="lg:col-span-4">
            <Card className="border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem] overflow-visible">
              <CardBody className="p-0">
                <div className="flex flex-col items-center pt-12 pb-10 px-8">
                  
                  {/* Circle Profile Picture Section */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-tr from-[#26308f] to-indigo-400 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                    <div className="relative w-40 h-40 rounded-full p-1.5 bg-white shadow-2xl">
                      <Image
                        src="/images/member/moeurnsovanara.jpg"
                        alt="Profile"
                        width={160}
                        height={160}
                        className="rounded-full w-full h-full object-cover"
                      />
                    </div>
                    {user?.isVerified && (
                      <div className="absolute bottom-1 right-1 bg-blue-600 rounded-2xl p-2 border-4 border-white shadow-lg">
                        <ShieldCheckIcon className="w-6 h-6 text-white" />
                      </div>
                    )}
                  </div>

                  <div className="text-center mt-8">
                    <h2 className="text-2xl font-black text-slate-800 tracking-tight">
                      {user?.email?.split("@")[0].toLowerCase() || "OFFICIAL MEMBER"}
                    </h2>
                    <p className="text-slate-400 font-bold text-[10px] tracking-[0.1em] mt-1">
                        {
                        user?.email
                        }
                    </p>
                  </div>

                  <div className="w-full mt-10 space-y-3">
                    <Button
                      fullWidth
                      className="bg-blue-300 text-slate-700 font-bold h-14 rounded-2xl hover:bg-slate-200"
                      startContent={<Cog6ToothIcon className="w-5 h-5" />}
                    >
                      {t("profile.settings", "Account Settings")}
                    </Button>
                    <Button
                      fullWidth
                      variant="light"
                      color="danger"
                      className="font-bold h-14 rounded-2xl bg-red-500 text-white"
                      onClick={handleLogout}
                      startContent={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
                    >
                      {t("auth.logout", "Sign Out")}
                    </Button>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <Card className="border-none shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-[3rem]">
              <CardBody className="p-10 sm:p-14">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-12 gap-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-800 tracking-tight">
                      Account Details
                    </h3>
                    <div className="h-1 w-12 bg-[#26308f] rounded-full mt-2" />
                  </div>
                  
                  <Chip
                    variant="flat"
                    classNames={{
                      base: "bg-green-50 border-2 border-green-100 p-4 rounded-3xl",
                      content: "font-black text-green-700 text-[10px] tracking-[0.2em]",
                    }}
                    startContent={
                      <span className="flex h-2.5 w-2.5 relative mr-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
                      </span>
                    }
                  >
                   Active
                  </Chip>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <InfoItem 
                    icon={<EnvelopeIcon className="h-6 w-6 text-blue-600" />}
                    label="Connection Email"
                    value={user?.email || "N/A"}
                    bg="bg-blue-50/50"
                    border="border-blue-100"
                  />
                  <InfoItem 
                    icon={<ShieldCheckIcon className="h-6 w-6 text-green-600" />}
                    label="Security Level"
                    value={user?.isVerified ? "Verified Member" : "Standard"}
                    bg="bg-green-50/50"
                    border="border-green-100"
                  />
                  <InfoItem 
                    icon={<CalendarIcon className="h-6 w-6 text-purple-600" />}
                    label="Access Granted"
                    value={user?.loginTime ? new Date(user.loginTime).toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' }) : "Today"}
                    bg="bg-purple-50/50"
                    border="border-purple-100"
                  />
                  <InfoItem 
                    icon={<UserIcon className="h-6 w-6 text-amber-600" />}
                    label="Membership Role"
                    value="General Member"
                    bg="bg-amber-50/50"
                    border="border-amber-100"
                  />
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <KHAFooter />
    </div>
  );
}

function InfoItem({ icon, label, value, bg, border }) {
  return (
    <div className={`flex flex-col p-8 rounded-[2.5rem] ${bg} border ${border} hover:bg-white hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 group`}>
      <div className="bg-white p-3.5 rounded-2xl w-fit mb-6 shadow-sm group-hover:scale-110 transition-transform duration-500">
        {icon}
      </div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">
        {label}
      </p>
      <p className="text-base font-bold text-slate-700 truncate tracking-tight">
        {value}
      </p>
    </div>
  );
}