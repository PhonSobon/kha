"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import KHANavbar from "../../components/KHANavbar";
import KHAFooter from "../../components/KHAFooter";
import {
  Card,
  CardBody,
  Button,
  Chip,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@heroui/react";
import {
  UserIcon,
  EnvelopeIcon,
  ArrowLeftIcon,
  ShieldCheckIcon,
  ArrowRightOnRectangleIcon,
  Cog6ToothIcon,
  PencilIcon,
  PencilSquareIcon,
  TrashIcon,
  PhoneIcon,
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const notify = {
  success: (msg) =>
    toast.success(msg, {
      icon: <CheckCircleIcon className="w-5 h-5 text-emerald-500 " />,
    }),
  error: (msg) =>
    toast.error(msg, {
      icon: <ExclamationCircleIcon className="w-5 h-5 text-red-500" />,
    }),
  info: (msg) =>
    toast.info(msg, {
      icon: <InformationCircleIcon className="w-5 h-5 text-blue-500" />,
    }),
};

const inputCls = (hasError) =>
  `w-full bg-slate-50 border appearance-none ${
    hasError
      ? "border-red-400 focus:ring-red-200 focus:border-red-400"
      : "border-slate-200 focus:ring-[#26308f]/20 focus:border-[#26308f]"
  } rounded-2xl px-4 py-3 text-sm text-slate-800 focus:outline-none focus:ring-2 transition-all placeholder:text-slate-300`;

const validate = (form) => {
  const errs = {};
  if (!form.email.trim()) errs.email = "Email is required";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
    errs.email = "Enter a valid email address";
  if (!form.phone.trim()) errs.phone = "Phone is required";
  else if (!/^\d{7,15}$/.test(form.phone.replace(/\s/g, "")))
    errs.phone = "Enter 7–15 digits only";
  if (!form.dob) errs.dob = "Date of birth is required";
  return errs;
};

export default function ProfilePage() {
  const { t } = useTranslation("common");
  const router = useRouter();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [profileImage, setProfileImage] = useState(
    "/images/Logo/logo.jpg",
  );

  const [form, setForm] = useState({
    gender: "Female",
    dob: "2000-01-01",
    email: "",
    phone: "0123456789",
  });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/login");
      return;
    }
    const parsed = JSON.parse(userData);
    setUser(parsed);
    setForm({
      gender: parsed.gender || "Female",
      dob: parsed.dob || "2000-01-01",
      email: parsed.email || "",
      phone: parsed.phone || "0123456789",
    });
    setIsLoading(false);
  }, [router]);

  const setField = (key) => (e) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleUpdate = async () => {
    const errs = validate(form);
    if (Object.keys(errs).length) {
      setErrors(errs);
      notify.error("Please fix the errors before saving.");
      return;
    }
    setSaving(true);
    try {
      // ── Replace with your real API call ──────────────────────────────────
      // await fetch("/api/profile", {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });
      await new Promise((res) => setTimeout(res, 900));

      const updated = { ...user, ...form };
      localStorage.setItem("user", JSON.stringify(updated));
      setUser(updated);
      notify.success("Profile updated successfully!");
    } catch {
      notify.error("Failed to save. Please try again.");
    } finally {
      setSaving(false);
    }
  };

  const handleLogout = () => {
    notify.info("Signing you out…");
    setTimeout(() => {
      localStorage.removeItem("user");
      router.push("/");
    }, 1200);
  };

  const handleDelete = () => {
    notify.info("Deleting account…");
    setTimeout(() => {
      localStorage.removeItem("user");
      router.push("/");
    }, 1200);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    if (!file.type.startsWith("image/")) {
      notify.error("Please upload a valid image file.");
      return;
    }
    setProfileImage(URL.createObjectURL(file));
    notify.success("Profile photo updated!");
  };

  if (isLoading) return null;

  const displayName = user?.email?.split("@")[0] ?? "User";

  return (
    <div className="min-h-screen bg-[#f8fafc]">
      <KHANavbar />

      {/* Hero banner */}
      <div className="h-48 w-full bg-[#26308f] relative">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 pb-24 relative z-10">
        <div className="mb-8">
          <Link
            href={user?.role === "admin" ? "/dashboard" : "/"}
            className="inline-flex items-center text-white/90 hover:text-white font-bold bg-white/10 backdrop-blur-md px-6 py-2.5 rounded-full border border-white/20 shadow-xl transition-all"
          >
            <ArrowLeftIcon className="w-4 h-4 mr-2" />
            {t("auth.back", "Back")}
          </Link>
        </div>

        <Card className="border-none shadow-2xl shadow-slate-200/60 rounded-[3.5rem] overflow-visible">
          <CardBody className="p-12 flex flex-col items-center">
            <div className="relative">
              <div className="w-40 h-40 rounded-full p-1.5 bg-white shadow-2xl ring-4 ring-white">
                <Image
                  src={profileImage}
                  alt="Profile"
                  width={160}
                  height={160}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>
              <label
                htmlFor="upload"
                className="absolute bottom-1 right-1 bg-[#26308f] rounded-4xl p-2.5 border-4 border-white shadow-lg cursor-pointer hover:scale-110 hover:bg-indigo-700 transition-all"
              >
                <Icon icon="fluent:image-edit-20-regular" className="w-7 h-7 text-white" />
                <input
                  id="upload"
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
              </label>
            </div>

            <h2 className="mt-8 text-2xl font-black text-slate-800 tracking-tight">
              {displayName}
            </h2>
            <p className="text-slate-700 text-ls font-light tracking-widest mt-1">
              {user?.email}
            </p>

            <div className="w-full mt-10 space-y-3">
              <Button
                fullWidth
                className="cursor-pointer bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold h-14 rounded-2xl transition-all"
                startContent={<Cog6ToothIcon className="w-5 h-5" />}
                onPress={onOpen}
              >
                {t("profile.accountSetting", "Account Setting")}
              </Button>
              <Button
                fullWidth
                className="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-bold h-14 rounded-2xl shadow-lg shadow-red-100 transition-all"
                onPress={handleLogout}
                startContent={<ArrowRightOnRectangleIcon className="w-5 h-5" />}
              >
                {t("auth.logout", "Sign Out")}
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="4xl"
        hideCloseButton
        classNames={{ base: "rounded-[2.5rem] p-4 bg-white" }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="border-b border-slate-100 pb-6">
                <h2 className="text-3xl font-black text-slate-800">
                  {t("profile.profileInfo", "Profile Information")}
                </h2>
              </ModalHeader>

              <ModalBody className="py-8 px-6">
                <div className="flex items-center justify-between pb-8 border-b border-slate-100">
                  <div className="flex items-center gap-4">
                    <Image
                      src={profileImage}
                      width={64}
                      height={64}
                      className="rounded-full object-cover w-16 h-16 border-2 border-slate-100"
                      alt="User"
                    />
                    <div>
                      <p className="text-xs font-bold text-slate-400">
                        {t("profile.userName", "User Name")}
                      </p>
                      <p className="text-lg font-black text-slate-800 tracking-tight">
                        {displayName}
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Button
                      variant="solid"
                      className="bg-red-500 hover:bg-red-600 cursor-pointer text-white rounded-xl font-bold px-6 transition-all"
                      startContent={<Icon icon="si:bin-line" className="w-5 h-5" />}
                      onPress={handleDelete}
                    >
                      {t("profile.deleteProfile", "Delete")}
                    </Button>
                    <Button
                      variant="solid"
                      className="bg-[#8b5cf6] hover:bg-[#7c3aed] text-white cursor-pointer rounded-xl font-bold px-6 shadow-lg shadow-purple-100 transition-all"
                      startContent={<Icon icon="ic:baseline-update" className="w-5 h-5" />}
                      onPress={handleUpdate}
                    >
                      {t("profile.update", "Update")}
                    </Button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8 mt-8">
                  <EditField
                    icon=
                    {
                      <Icon icon="ph:gender-male" className="w-5 h-5" />
                    }
                    label={t("profile.genderLabel", "Gender")}
                  >
                    <select
                      value={form.gender}
                      onChange={setField("gender")}
                      className={inputCls(false)}
                    >
                      <option>{t("profile.gender.male")}</option>
                      <option>{t("profile.gender.female", "Female")}</option>
                      <option>{t("profile.gender.others", "Others")}</option>
                    </select>
                  </EditField>

                  <EditField
                    icon={
                      <Icon icon="solar:calendar-outline" className="w-5 h-5" />
                    }
                    label={t("profile.dob", "Date Of Birth")}
                    error={errors.dob}
                  >
                    <div className="relative flex items-center w-full">
                      <input
                        type="date"
                        value={form.dob}
                        onChange={setField("dob")}
                        className={`${inputCls(!!errors.dob)} w-full pr-10 clear-date-icon`}
                      />

                      <div className="absolute right-3 pointer-events-none text-gray-400">
                        <Icon icon="solar:calendar-outline" className="w-5 h-5" />
                      </div>
                    </div>
                  </EditField>

                  <EditField
                    icon={
                      <Icon icon="fluent:mail-32-regular" className="w-5 h-5" />
                    }
                    label={t("profile.emailAddress", "Email Address")}
                    error={errors.email}
                  >
                    <input
                      type="email"
                      value={form.email}
                      onChange={setField("email")}
                      placeholder="email@example.com"
                      className={inputCls(!!errors.email)}
                    />
                  </EditField>

                  <EditField
                    icon={
                      <Icon icon="solar:call-dropped-outline" className="w-5 h-5" />
                    }
                    label={t("profile.phoneNumber", "Phone Number")}
                    error={errors.phone}
                  >
                    <input
                      type="tel"
                      value={form.phone}
                      onChange={setField("phone")}
                      placeholder="0123456789"
                      className={inputCls(!!errors.phone)}
                    />
                  </EditField>
                </div>
              </ModalBody>

              <ModalFooter className="border-t border-slate-50 pt-4">
                <Button
                  variant="flat"
                  onPress={onClose}
                  className="font-bold cursor-pointer rounded-xl border border-red-700 px-8 h-12 bg-red-100 text-red-600 hover:text-white hover:bg-red-600 transition-all"
                >
                  <div className="flex justify-between items-center gap-5">
                    <Icon icon="radix-icons:cross-circled" className="w-5 h-5" />
                    {t("profile.close", "Close")}
                  </div>
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        closeOnClick
        closeButton={false}
        theme="colored"
        toastClassName={() =>
          "relative flex items-center gap-3 p-4 min-h-[56px] rounded-2xl bg-white shadow-2xl shadow-slate-200/80 border border-slate-100 mb-3 text-slate-700 font-semibold text-sm"
        }
      />

      <KHAFooter />
    </div>
  );
}

function EditField({ icon, label, children, error }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-[#26308f]">
        {icon}
        <p className="font-bold text-slate-800 text-sm">{label}</p>
      </div>
      {children}
      {error && (
        <p className="text-xs text-red-500 flex items-center gap-1 mt-0.5">
          <ExclamationCircleIcon className="w-3.5 h-3.5" /> {error}
        </p>
      )}
    </div>
  );
}

function InfoItem({ icon, label, value, bg, border }) {
  return (
    <div
      className={`flex flex-col p-8 rounded-[2.5rem] ${bg} border ${border}`}
    >
      <div className="bg-white p-3 rounded-xl w-fit mb-6 shadow-sm">{icon}</div>
      <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
        {label}
      </p>
      <p className="text-base font-bold text-slate-700 truncate">{value}</p>
    </div>
  );
}
