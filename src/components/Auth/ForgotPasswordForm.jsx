"use client";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/navigation";
import { Button, Input, Card, CardBody } from "@heroui/react";
import Link from "next/link";
import { ArrowLeftIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VerifyOtpForm from "./VerifyOtpForm";
import NewPasswordForm from "./NewPasswordForm";

export default function ForgotPasswordForm() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const storageKey = "forgot_password_flow";

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [stage, setStage] = useState("email");
  const [passwords, setPasswords] = useState({
    password: "",
    confirmPassword: "",
  });
  const [otp, setOtp] = useState("");
  const [otpError, setOtpError] = useState("");
  const [isVerifyingOtp, setIsVerifyingOtp] = useState(false);
  const [isResetting, setIsResetting] = useState(false);
  const [isLangReady, setIsLangReady] = useState(false);

  // Language Setup
  useEffect(() => {
    const savedLang =
      typeof window !== "undefined" ? localStorage.getItem("lang") : null;
    const targetLang = savedLang || "kh";
    if (!savedLang && typeof window !== "undefined") {
      localStorage.setItem("lang", targetLang);
    }
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang).finally(() => setIsLangReady(true));
    } else {
      setIsLangReady(true);
    }
  }, [i18n]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = JSON.parse(localStorage.getItem(storageKey) || "{}");
      const allowedStages = ["email", "otp", "reset"];
      const hasEmail = !!raw.email;
      const nextStage = allowedStages.includes(raw.stage) ? raw.stage : "email";

      if (nextStage === "otp" && !hasEmail) {
        setStage("email");
        return;
      }
      if (nextStage === "reset" && (!hasEmail || !raw.otp)) {
        setStage("email");
        return;
      }

      setEmail(raw.email || "");
      setOtp(raw.otp || "");
      setPasswords(raw.passwords || { password: "", confirmPassword: "" });
      setStage(nextStage);
    } catch {
      /* ignore */
    }
  }, []);

  // Save persisted state
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (stage === "done") {
      localStorage.removeItem(storageKey);
      return;
    }
    const data = { stage, email, otp, passwords };
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, [stage, email, otp, passwords]);

  const validateEmail = (email) => {
    if (!email) return t("auth.emailRequired");
    if (!/\S+@\S+\.\S+/.test(email)) return t("auth.invalidEmail");
    return "";
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      toast.error(emailError); // Added Toast
      return;
    }

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      toast.success(t("auth.otpSentToEmail", "We sent a 6-digit code to your email.")); // Added Toast
      setStage("otp");
      setErrors({});
    } catch (error) {
      toast.error(t("auth.loginError", "Something went wrong."));
      setErrors({ general: "Something went wrong. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    if (!otp || !/^\d{6}$/.test(otp)) {
      const msg = t("auth.otpInvalid", "Enter the 6-digit code");
      setOtpError(msg);
      toast.error(msg); // Added Toast
      return;
    }

    setIsVerifyingOtp(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      toast.success(t("auth.verifyCoded", "OTP verified !!!")); 
      setStage("reset");
    } catch (error) {
      toast.error(t("auth.otpInvalid"));
    } finally {
      setIsVerifyingOtp(false);
    }
  };

  const handleResetSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords logic...
    if (passwords.password !== passwords.confirmPassword) {
      toast.error(t("auth.passwordMismatch"));
      return;
    }

    setIsResetting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      if (typeof window !== "undefined") localStorage.removeItem(storageKey);

      toast.success(
        t("auth.passwordResetSuccess", "Password updated successfully."),
        {
          autoClose: 2000,
        },
      );

      setTimeout(() => router.push("/login"), 2000);
    } catch (error) {
      toast.error(t("auth.loginError"));
    } finally {
      setIsResetting(false);
    }
  };

  if (!isLangReady || stage === "done") return null;

  // Render Logic
  const commonToast = (
    <ToastContainer position="bottom-right" theme="colored" />
  );

  if (stage === "otp") {
    return (
      <>
        {commonToast}
        <VerifyOtpForm
          t={t}
          errors={errors}
          otp={otp}
          otpError={otpError}
          onOtpChange={(val) => setOtp(val)}
          onSubmit={handleOtpSubmit}
          isVerifyingOtp={isVerifyingOtp}
          onBack={() => setStage("email")}
        />
      </>
    );
  }

  if (stage === "reset") {
    return (
      <>
        {commonToast}
        <NewPasswordForm
          t={t}
          errors={errors}
          password={passwords.password}
          confirmPassword={passwords.confirmPassword}
          onPasswordChange={(field, val) =>
            setPasswords((prev) => ({ ...prev, [field]: val }))
          }
          onSubmit={handleResetSubmit}
          isSubmitting={isResetting}
          onBack={() => setStage("otp")}
        />
      </>
    );
  }

  return (
    <>
      {commonToast}
      <div className="min-h-screen bg-slate-100 flex items-center justify-center py-8 px-4">
        <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Left Image Section */}
            <div
              className="relative hidden lg:block overflow-hidden"
              style={{
                backgroundImage: "url('/images/content/3.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black/45" />
              <div className="absolute inset-0 flex items-center justify-center text-white p-10">
                <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl p-12 text-center">
                  <Image
                    src="/images/Logo/logo.jpg"
                    alt="Logo"
                    width={90}
                    height={90}
                    className="rounded-full mx-auto mb-6"
                  />
                  <p className="text-lg font-bold">{t("auth.heroName")}</p>
                  <p className="text-gray-200 mt-4">
                    {t("auth.forgotPasswordHero")}
                  </p>
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex items-center justify-center py-10 px-6 sm:px-10">
              <div className="w-full max-w-md space-y-8">
                <div className="text-center space-y-2">
                  <h1 className="text-3xl font-extrabold text-[#26308f]">
                    {t("auth.forgotPassword")}
                  </h1>
                  <p className="text-gray-600">
                    {t("auth.forgotPasswordDescription")}
                  </p>
                </div>

                <Card>
                  <CardBody className="p-8 space-y-6">
                    {errors.general && (
                      <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                        <p className="text-sm text-red-700">{errors.general}</p>
                      </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="space-y-2">
                        <label className="text-sm font-semibold text-gray-800">
                          {t("auth.email")}
                        </label>
                        <div className="relative">
                          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                          </div>
                          <Input
                            name="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            isInvalid={!!errors.email}
                            errorMessage={errors.email}
                            variant="bordered"
                            size="lg"
                            classNames={{
                              input:
                                "text-base pl-10 pr-4 bg-transparent shadow-none focus:outline-none placeholder:text-gray-500 autofill:shadow-[0_0_0_1000px_white_inset]",
                              inputWrapper:
                                "w-full rounded-full bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] min-h-[60px] px-2 transition-all",
                            }}
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <Button
                          type="submit"
                          isLoading={isLoading}
                          className="w-full bg-[#26308f] text-white font-semibold py-3 rounded-full shadow-[0_10px_18px_rgba(37,56,143,0.2)]"
                        >
                          {t("auth.sendResetLink")}
                        </Button>
                        <Button
                          as={Link}
                          href="/login"
                          variant="bordered"
                          className="w-full rounded-full border-[#26308f] text-[#26308f] font-semibold"
                        >
                          <ArrowLeftIcon className="w-4 h-4 mr-2" />{" "}
                          {t("auth.backToLogin")}
                        </Button>
                      </div>
                    </form>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
