"use client";
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody, CardHeader } from '@heroui/react';
import Link from 'next/link';
import { ArrowLeftIcon, CheckCircleIcon, EnvelopeIcon, ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';


export default function ForgotPasswordForm() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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

  if (isSubmitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-sm">
            <CardBody className="text-center py-12">
              <div className="mb-6">
                <div className="relative mx-auto w-20 h-20">
                  <div className="absolute inset-0 bg-green-100 rounded-full animate-ping"></div>
                  <div className="relative bg-green-500 rounded-full w-20 h-20 flex items-center justify-center">
                    <CheckCircleIcon className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {t('auth.passwordResetSent')}
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                {t('auth.checkYourEmail')}
              </p>
              <div className="space-y-4">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                  onClick={() => router.push('/login')}
                >
                  {t('auth.backToLogin')}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full text-gray-600 border-gray-300 hover:bg-gray-50"
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 via-white to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center shadow-lg">
                <ExclamationTriangleIcon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">!</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {t('auth.forgotPassword')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('auth.forgotPasswordDescription')}
          </p>
        </div>

        {/* Forgot Password Form */}
        <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
          <CardBody className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Error Message */}
              {errors.general && (
                <div className="bg-red-50 border-l-4 border-red-400 p-4 rounded-md">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{errors.general}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Email Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t('auth.email')}
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
                    placeholder={t('auth.enterEmailPlaceholder')}
                    variant="bordered"
                    size="lg"
                    className="pl-10"
                    classNames={{
                      input: "pl-10",
                      inputWrapper: "border-gray-300 hover:border-orange-400 focus-within:border-orange-500"
                    }}
                  />
                </div>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('auth.sendResetLink')}...
                  </div>
                ) : (
                  t('auth.sendResetLink')
                )}
              </Button>
            </form>

            {/* Back to Login */}
            <div className="mt-8 text-center">
              <Link
                href="/login"
                className="inline-flex items-center text-sm font-medium text-gray-600 hover:text-orange-600 transition-colors"
              >
                <ArrowLeftIcon className="w-4 h-4 mr-2" />
                {t('auth.backToLogin')}
              </Link>
            </div>
          </CardBody>
        </Card>

        {/* Language Switcher */}
        <div className="flex justify-center">
          <div className="bg-white rounded-full px-4 py-2 shadow-lg border border-gray-200">
            <div className="flex items-center space-x-2">
              <button
                onClick={() => {
                  i18n.changeLanguage('en');
                  localStorage.setItem('lang', 'en');
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  i18n.language === 'en' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => {
                  i18n.changeLanguage('kh');
                  localStorage.setItem('lang', 'kh');
                }}
                className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  i18n.language === 'kh' 
                    ? 'bg-orange-500 text-white' 
                    : 'text-gray-600 hover:text-orange-500'
                }`}
              >
                ខ្មែរ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
