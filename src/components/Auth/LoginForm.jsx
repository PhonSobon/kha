"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody, CardHeader } from '@heroui/react';
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, CheckCircleIcon } from '@heroicons/react/24/outline';
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center shadow-lg">
                <Image
                  src="/images/Logo/logo.jpg"
                  alt="KHA Logo"
                  width={48}
                  height={48}
                  className="rounded-full"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <CheckCircleIcon className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            {t('auth.welcomeBack')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('auth.signInToAccount')}
          </p>
        </div>

        {/* Login Form */}
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
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    isInvalid={!!errors.email}
                    errorMessage={errors.email}
                    placeholder={t('auth.enterEmailPlaceholder')}
                    variant="bordered"
                    size="lg"
                    className="pl-10"
                    classNames={{
                      input: "pl-10",
                      inputWrapper: "border-gray-300 hover:border-blue-400 focus-within:border-blue-500"
                    }}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t('auth.password')}
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
                    placeholder="••••••••"
                    variant="bordered"
                    size="lg"
                    className="pl-10 pr-10"
                    classNames={{
                      input: "pl-10 pr-10",
                      inputWrapper: "border-gray-300 hover:border-blue-400 focus-within:border-blue-500"
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <span className="ml-2 text-sm text-gray-600">
                    {t('auth.rememberMe')}
                  </span>
                </label>

                <Link
                  href="/forgot-password"
                  className="text-sm font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  {t('auth.forgotPassword')}
                </Link>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    {t('auth.signIn')}...
                  </div>
                ) : (
                  t('auth.signIn')
                )}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-8 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div className="text-center">
                <p className="text-sm font-medium text-gray-700 mb-3">
                  {t('auth.demoCredentials')}
                </p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><span className="font-medium">Email:</span> {t('auth.demoEmail')}</p>
                  <p><span className="font-medium">Password:</span> {t('auth.demoPassword')}</p>
                </div>
                <Button
                  onClick={fillDemoCredentials}
                  variant="bordered"
                  size="sm"
                  className="mt-3 text-blue-600 border-blue-300 hover:bg-blue-50"
                >
                  Fill Demo Credentials
                </Button>
              </div>
            </div>

            {/* Sign Up Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {t('auth.dontHaveAccount')}{' '}
                <Link 
                  href="/register" 
                  className="font-medium text-blue-600 hover:text-blue-500 transition-colors"
                >
                  {t('auth.createAccount')}
                </Link>
              </p>
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
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
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
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-600 hover:text-blue-600'
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
