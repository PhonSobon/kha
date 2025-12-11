"use client";
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody } from '@heroui/react';
import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

export default function ForgotPasswordForm() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLangReady, setIsLangReady] = useState(false);

  useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    const targetLang = savedLang || 'kh';

    // Persist default language so next visits stay consistent
    if (!savedLang && typeof window !== 'undefined') {
      localStorage.setItem('lang', targetLang);
    }

    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang).finally(() => setIsLangReady(true));
    } else {
      setIsLangReady(true);
    }
  }, [i18n]);

  const validateEmail = (email) => {
    if (!email) {
      return t('auth.emailRequired');
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return t('auth.invalidEmail');
    }
    return '';
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const emailError = validateEmail(email);
    if (emailError) {
      setErrors({ email: emailError });
      return;
    }
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful password reset request
      setIsSubmitted(true);
      setErrors({});
    } catch (error) {
      setErrors({ general: 'Something went wrong. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors(prev => ({ ...prev, email: '' }));
    }
  };

  if (!isLangReady) {
    return null;
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card className="shadow-2xl border-0">
            <CardBody className="text-center py-12 space-y-6">
              <div className="flex justify-center">
                <CheckCircleIcon className="h-20 w-20 text-green-500 animate-pulse" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                {t('auth.passwordResetSent')}
              </h2>
              <p className="text-gray-600">
                {t('auth.checkYourEmail')}
              </p>
              <div className="space-y-3">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full bg-[#26308f] text-white font-semibold rounded-full shadow-lg hover:bg-[#1f297a] transition-colors"
                  onClick={() => router.push('/login')}
                >
                  {t('auth.backToLogin')}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full border-[#26308f] text-[#26308f] font-semibold rounded-full shadow-sm hover:bg-[#f4f5ff]"
                  onClick={() => {
                    setIsSubmitted(false);
                    setEmail('');
                  }}
                >
                  {t('auth.sendAnotherEmail')}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

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
                  {t('auth.forgotPassword', 'Forgot your password?')}
                </h1>
                <p className="text-base text-gray-600 ml-6 mr-6">
                  {t('auth.forgotPasswordDescription', 'Enter the email you used to sign up, and we will send a reset link.')}
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
                      <label className="block text-sm font-semibold text-gray-800">
                        {t('auth.email', 'Email')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          name="email"
                          type="email"
                          value={email}
                          onChange={handleEmailChange}
                          isInvalid={!!errors.email}
                          errorMessage={errors.email}
                          placeholder={t('auth.enterEmailPlaceholder', 'Enter your email')}
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-base pl-10 pr-4 bg-transparent shadow-none focus:outline-none placeholder:text-gray-500",
                            inputWrapper:
                              "w-full rounded-full bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] focus-within:ring-2 focus-within:ring-[#9fb1ff] shadow-[0_6px_12px_rgba(37,56,143,0.12)] min-h-[60px] px-2 transition-all"
                          }}
                        />
                      </div>
                    </div>

                    <div className="space-y-3">
                      <Button
                        type="submit"
                        size="lg"
                        className="w-full bg-[#26308f] text-white font-semibold py-3 rounded-full shadow-[0_10px_18px_rgba(37,56,143,0.2)] hover:bg-[#1f297a] transition-all cursor-pointer"
                        isLoading={isLoading}
                        disabled={isLoading}
                      >
                        {isLoading ? (
                          <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            {t('auth.sendResetLink')}...
                          </div>
                        ) : (
                          t('auth.sendResetLink')
                        )}
                      </Button>

                      <Button
                        as={Link}
                        href="/login"
                        size="lg"
                        variant="bordered"
                        className="w-full border-[#26308f] text-[#26308f] font-semibold py-3 rounded-full shadow-[0_6px_12px_rgba(37,56,143,0.12)] hover:bg-[#f4f5ff] transition-all cursor-pointer"
                      >
                        <span className="flex items-center justify-center gap-2">
                          <ArrowLeftIcon className="w-5 h-5" />
                          {t('auth.backToLogin')}
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
