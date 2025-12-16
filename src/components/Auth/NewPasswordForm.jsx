"use client";
import React, { useState } from 'react';
import { Button, Card, CardBody, Input } from '@heroui/react';
import { ArrowLeftIcon, EyeIcon, EyeSlashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function NewPasswordForm({
  t,
  errors,
  password,
  confirmPassword,
  onPasswordChange,
  onSubmit,
  isSubmitting,
  onBack,
}) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
                    {t('auth.newPasswordStepSubtitle', 'Create a strong password to secure your account.')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 px-6 sm:px-10">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#26308f]">
                  {t('auth.newPasswordStepTitle', 'Set a new password')}
                </h1>
                <p className="text-base text-gray-600 ml-6 mr-6">
                  {t('auth.newPasswordStepSubtitle', 'Create a strong password to secure your account.')}
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
                        {t('auth.newPassword')}
                      </label>
                      <Input
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        value={password}
                        onChange={(e) => onPasswordChange('password', e.target.value)}
                        isInvalid={!!errors.password}
                        errorMessage={errors.password}
                        placeholder={t('auth.newPassword')}
                        variant="bordered"
                        size="lg"
                        classNames={{
                          input: "text-base pr-12 bg-transparent shadow-none focus:outline-none placeholder:text-gray-500",
                          inputWrapper:
                            "w-full rounded-full bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] focus-within:ring-2 focus-within:ring-[#9fb1ff] shadow-[0_6px_12px_rgba(37,56,143,0.12)] min-h-[60px] px-4 transition-all"
                        }}
                        endContent={
                          <button
                            type="button"
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                          </button>
                        }
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        {t('auth.confirmPassword')}
                      </label>
                      <Input
                        name="confirmPassword"
                        type={showConfirmPassword ? 'text' : 'password'}
                        value={confirmPassword}
                        onChange={(e) => onPasswordChange('confirmPassword', e.target.value)}
                        isInvalid={!!errors.confirmPassword}
                        errorMessage={errors.confirmPassword}
                        placeholder={t('auth.confirmPassword')}
                        variant="bordered"
                        size="lg"
                        classNames={{
                          input: "text-base pr-12 bg-transparent shadow-none focus:outline-none placeholder:text-gray-500",
                          inputWrapper:
                            "w-full rounded-full bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] focus-within:ring-2 focus-within:ring-[#9fb1ff] shadow-[0_6px_12px_rgba(37,56,143,0.12)] min-h-[60px] px-4 transition-all"
                        }}
                        endContent={
                          <button
                            type="button"
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="text-gray-400 hover:text-gray-600 transition-colors"
                          >
                            {showConfirmPassword ? <EyeSlashIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
                          </button>
                        }
                      />
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#26308f] text-white font-semibold py-3 rounded-full shadow-[0_10px_18px_rgba(37,56,143,0.2)] hover:bg-[#1f297a] transition-all cursor-pointer"
                        isLoading={isSubmitting}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {t('auth.updatePassword', 'Update password')}...
                          </div>
                        ) : (
                          t('auth.updatePassword', 'Update password')
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
                          {t('auth.back')}
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
