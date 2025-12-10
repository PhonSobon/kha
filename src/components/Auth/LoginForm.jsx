"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody } from '@heroui/react';
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, CheckCircleIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function LoginForm() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [isLangReady, setIsLangReady] = useState(false);

  // Ensure language follows saved preference (default Khmer)
  useEffect(() => {
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('lang') : null;
    const targetLang = savedLang || 'kh';
    if (i18n.language !== targetLang) {
      i18n.changeLanguage(targetLang).finally(() => setIsLangReady(true));
    } else {
      setIsLangReady(true);
    }
  }, [i18n]);

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/');
    }
  }, [router]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = t('auth.emailRequired');
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = t('auth.invalidEmail');
    }
    
    if (!formData.password) {
      newErrors.password = t('auth.passwordRequired');
    } else if (formData.password.length < 6) {
      newErrors.password = t('auth.passwordTooShort');
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    setErrors({});
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful login
      if (formData.email === 'admin@kha.com' && formData.password === 'password123') {
        // Store user session (in real app, use proper auth)
        localStorage.setItem('user', JSON.stringify({
          email: formData.email,
          isVerified: true,
          loginTime: new Date().toISOString()
        }));
        
        setLoginSuccess(true);
        
        // Redirect after success animation
        setTimeout(() => {
          router.push('/dashboard');
        }, 2000);
      } else {
        setErrors({ general: t('auth.invalidCredentials') });
      }
    } catch (error) {
      setErrors({ general: t('auth.loginError') });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'admin@kha.com',
      password: 'password123',
      rememberMe: false
    });
    setErrors({});
  };

  if (!isLangReady) {
    return null;
  }

  if (loginSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-md w-full mx-auto">
          <Card className="shadow-2xl border-0">
            <CardBody className="text-center py-12">
              <div className="mb-6">
                <CheckCircleIcon className="mx-auto h-20 w-20 text-green-500 animate-pulse" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('auth.loginSuccess')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('auth.welcomeBack')}
              </p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto"></div>
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
            style={{ backgroundImage: "url('/images/content/2.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
          >
            <div className="absolute inset-0 bg-black/40" />
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
                  <p className="text-base text-gray-300 ml-10 mr-10 text-center">
                    {t(
                      'auth.heroBody',
                      'A group of Khmer intellectual students have come together to establish an association based in the Kingdom of Cambodia, called the Khmer Heirs Association. The Khmer Heirs Association is abbreviated as “KHA” in English and “សទខ” in Khmer.'
                    )}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center py-10 px-6 sm:px-10">
            <div className="w-full max-w-md space-y-8">
              <div className="text-center space-y-2">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-[#26308f]">
                  {t('auth.loginHeroTitle', 'Welcome to Log in form!')}
                </h1>
                <p className="text-base text-gray-600 ml-10 mr-10 text-center">
                  {t('auth.loginHeroSubtitle', { defaultValue: 'To keep connected with us please login with your personal info' })}
                </p>
                <div className="text-sm text-gray-700">
                  <span className="font-semibold">{t('auth.noAccount', 'Don’t have an account?')}</span>{' '}
                  <br/>
                  <Link href="/" className="text-[#26308f] font-semibold hover:underline cursor-pointer">
                    {t('auth.backToHome','Back to Home')}
                  </Link>
                </div>
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
                          <UserIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
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

                    <div className="space-y-2">
                      <label className="block text-sm font-semibold text-gray-800">
                        {t('auth.password', 'Password')}
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <LockClosedIcon className="h-5 w-5 text-gray-400" />
                        </div>
                        <Input
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          value={formData.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                          errorMessage={errors.password}
                          placeholder={t('auth.enterPasswordPlaceholder', 'Enter your password')}
                          variant="bordered"
                          size="lg"
                          classNames={{
                            input: "text-base pl-10 pr-12 bg-transparent shadow-none focus:outline-none placeholder:text-gray-500",
                            inputWrapper:
                              "w-full rounded-full bg-white border-[#cbd3ff] hover:border-[#26308f] focus-within:border-[#26308f] focus-within:ring-2 focus-within:ring-[#9fb1ff] shadow-[0_6px_12px_rgba(37,56,143,0.12)] min-h-[60px] px-2 transition-all"
                          }}
                          endContent={
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {showPassword ? (
                                <EyeSlashIcon className="w-5 h-5" />
                              ) : (
                                <EyeIcon className="w-5 h-5" />
                              )}
                            </button>
                          }
                        />
                      </div>
                    </div>

                    <div className="flex justify-end text-sm">
                      <Link
                        href="/forgot-password"
                        className="text-[#26308f] font-semibold hover:underline cursor-pointer"
                      >
                        {t('auth.forgotPassword', 'Forgot Password?')}
                      </Link>
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
                            {t('auth.login', 'Log in')}...
                          </div>
                        ) : (
                          t('auth.login', 'Log in')
                        )}
                      </Button>

                      <Button
                        as={Link}
                        href="/"
                        size="lg"
                        variant="bordered"
                        className="w-full border-[#26308f] text-[#26308f] font-semibold py-3 rounded-full shadow-[0_6px_12px_rgba(37,56,143,0.12)] hover:bg-[#f4f5ff] transition-all cursor-pointer"
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
