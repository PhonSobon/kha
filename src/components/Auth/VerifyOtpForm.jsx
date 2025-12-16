"use client";
import React, { useMemo, useRef } from 'react';
import { Button, Card, CardBody, Input } from '@heroui/react';
import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function VerifyOtpForm({
  t,
  errors,
  otp,
  otpError,
  onOtpChange,
  onSubmit,
  isVerifyingOtp,
  onBack,
}) {
  const inputRefs = useRef([]);

  const otpDigits = useMemo(() => {
    const padded = otp.padEnd(6, ' ');
    return padded.split('').slice(0, 6);
  }, [otp]);

  const updateOtpAtIndex = (index, value) => {
    const digits = otpDigits.slice();
    digits[index] = value;
    const nextValue = digits.join('').replace(/\s/g, '');
    onOtpChange(nextValue);
  };

  const handleBoxChange = (e, index) => {
    const val = e.target.value.replace(/\D/g, '').slice(0, 1);
    updateOtpAtIndex(index, val);

    if (val && inputRefs.current[index + 1]) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace') {
      const hasValue = !!otpDigits[index].trim();
      if (hasValue) {
        e.preventDefault();
        updateOtpAtIndex(index, '');
        return;
      }
      if (!hasValue && inputRefs.current[index - 1]) {
        e.preventDefault();
        updateOtpAtIndex(index - 1, '');
        inputRefs.current[index - 1].focus();
      }
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = (e.clipboardData.getData('text') || '').replace(/\D/g, '').slice(0, 6);
    if (!pasted) return;
    onOtpChange(pasted);
    const targetIndex = Math.min(pasted.length, 5);
    if (inputRefs.current[targetIndex]) {
      inputRefs.current[targetIndex].focus();
    }
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center py-8 px-4">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div
            className="relative hidden lg:block overflow-hidden"
            style={{ backgroundImage: "url('/images/content/3.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="backdrop-blur-md bg-white/10 border border-white/30 rounded-3xl shadow-2xl w-4/5 max-w-md px-10 py-12">
                <div className="flex flex-col items-center gap-6 text-center text-white">
                  <div className="w-28 h-28 rounded-full bg-white/85 flex items-center justify-center shadow-lg">
                    <Image
                      src="/images/Logo/logo.jpg"
                      alt="KHA Logo"
                      width={90}
                      height={90}
                      className="rounded-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-semibold tracking-wide">
                    {t('auth.heroName', 'KHMER HEIRS ASSOCIATION')}
                  </p>
                  <p className="text-base text-gray-200">
                    {t('auth.forgotPasswordHero', 'We will send you a secure link to reset your password.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 px-6 sm:px-10">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#26308f]">
                  {t('auth.enterOtp', 'Enter verification code')}
                </h1>
                <p className="text-base text-gray-600 ml-6 mr-6">
                  {t('auth.otpSentToEmail', { defaultValue: 'We sent a 6-digit code to your email.' })}
                </p>
              </div>

              <Card>
                <CardBody className="p-8 space-y-6">
                  {errors.general && (
                    <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                      <p className="text-sm text-red-700">{errors.general}</p>
                    </div>
                  )}

                  <form onSubmit={onSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        {t('auth.otpLabel', 'Verification code')}
                      </label>
                      <div className="grid grid-cols-6 gap-2 sm:gap-3" onPaste={handlePaste}>
                        {otpDigits.map((digit, idx) => (
                          <Input
                            key={idx}
                            ref={(el) => (inputRefs.current[idx] = el)}
                            inputMode="numeric"
                            pattern="\d*"
                            maxLength={1}
                        value={digit.trim()}
                            onChange={(e) => handleBoxChange(e, idx)}
                            onKeyDown={(e) => handleKeyDown(e, idx)}
                            variant="bordered"
                            isInvalid={!!otpError}
                            classNames={{
                              input:
                                "text-center text-xl bg-transparent shadow-none focus:outline-none",
                              inputWrapper:
                                "min-h-[56px] sm:min-h-[64px] rounded-2xl bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] focus-within:ring-2 focus-within:ring-[#9fb1ff] shadow-[0_6px_12px_rgba(37,56,143,0.12)] px-0"
                            }}
                          />
                        ))}
                      </div>
                      {otpError && (
                        <p className="text-sm text-red-600 pt-1">{otpError}</p>
                      )}
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#26308f] text-white font-semibold py-3 rounded-full shadow-[0_10px_18px_rgba(37,56,143,0.2)] hover:bg-[#1f297a] transition-all cursor-pointer"
                        isLoading={isVerifyingOtp}
                        disabled={isVerifyingOtp || otp.length !== 6}
                      >
                        {isVerifyingOtp ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {t('auth.verifyCode', 'Verify code')}...
                          </div>
                        ) : (
                          t('auth.verifyCode', 'Verify code')
                        )}
                      </Button>

                      <Button
                        size="lg"
                        variant="bordered"
                        className="w-full border-[#26308f] text-[#26308f] font-semibold py-3 rounded-full shadow-[0_6px_12px_rgba(37,56,143,0.12)] hover:bg-[#f4f5ff] transition-all cursor-pointer"
                        onClick={onBack}
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ArrowLeftIcon className="w-5 h-5" />
                          {t('auth.back', 'Back')}
                        </span>
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
  );
}
