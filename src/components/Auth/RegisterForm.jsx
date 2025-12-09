"use client";
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardBody, CardHeader } from '@heroui/react';
import { EyeIcon, EyeSlashIcon, UserIcon, LockClosedIcon, EnvelopeIcon, CheckCircleIcon, UserPlusIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

export default function RegisterForm() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  // Check if user is already logged in
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      router.push('/');
    }
  }, [router]);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
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
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = t('auth.passwordRequired');
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = t('auth.passwordMismatch');
    }
    
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful registration
      setRegistrationSuccess(true);
      
      // Redirect after success animation
      setTimeout(() => {
        router.push('/login');
      }, 3000);
    } catch (error) {
      setErrors({ general: 'Registration failed. Please try again.' });
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

  if (registrationSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-md w-full mx-auto">
          <Card className="shadow-2xl border-0">
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
                Registration Successful!
              </h2>
              <p className="text-gray-600 mb-8 text-lg">
                Your account has been created successfully. You can now sign in.
              </p>
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-500 mx-auto"></div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-50 via-white to-pink-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header Section */}
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="relative">
              <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
                <UserPlusIcon className="w-10 h-10 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-bold">+</span>
              </div>
            </div>
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-2">
            Create Account
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Join KHA and start your journey with us
          </p>
        </div>

        {/* Registration Form */}
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

              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      name="firstName"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      errorMessage={errors.firstName}
                      placeholder="John"
                      variant="bordered"
                      size="lg"
                      className="pl-10"
                      classNames={{
                        input: "pl-10",
                        inputWrapper: "border-gray-300 hover:border-purple-400 focus-within:border-purple-500"
                      }}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <UserIcon className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      name="lastName"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      errorMessage={errors.lastName}
                      placeholder="Doe"
                      variant="bordered"
                      size="lg"
                      className="pl-10"
                      classNames={{
                        input: "pl-10",
                        inputWrapper: "border-gray-300 hover:border-purple-400 focus-within:border-purple-500"
                      }}
                    />
                  </div>
                </div>
              </div>

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
                      inputWrapper: "border-gray-300 hover:border-purple-400 focus-within:border-purple-500"
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
                      inputWrapper: "border-gray-300 hover:border-purple-400 focus-within:border-purple-500"
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

              {/* Confirm Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  {t('auth.confirmPassword')}
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <LockClosedIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <Input
                    name="confirmPassword"
                    type={showConfirmPassword ? 'text' : 'password'}
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    isInvalid={!!errors.confirmPassword}
                    errorMessage={errors.confirmPassword}
                    placeholder="••••••••"
                    variant="bordered"
                    size="lg"
                    className="pl-10 pr-10"
                    classNames={{
                      input: "pl-10 pr-10",
                      inputWrapper: "border-gray-300 hover:border-purple-400 focus-within:border-purple-500"
                    }}
                    endContent={
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 focus:outline-none text-gray-400 hover:text-gray-600 transition-colors"
                      >
                        {showConfirmPassword ? (
                          <EyeSlashIcon className="w-5 h-5" />
                        ) : (
                          <EyeIcon className="w-5 h-5" />
                        )}
                      </button>
                    }
                  />
                </div>
              </div>

              {/* Terms and Conditions */}
              <div className="space-y-2">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    name="agreeToTerms"
                    checked={formData.agreeToTerms}
                    onChange={handleChange}
                    className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded mt-1"
                  />
                  <span className="ml-3 text-sm text-gray-600">
                    I agree to the{' '}
                    <Link href="/terms" className="text-purple-600 hover:text-purple-500 font-medium">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-purple-600 hover:text-purple-500 font-medium">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.agreeToTerms && (
                  <p className="text-red-600 text-sm">{errors.agreeToTerms}</p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-[1.02] shadow-lg"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? (
                  <div className="flex items-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  'Create Account'
                )}
              </Button>
            </form>

            {/* Sign In Link */}
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                {t('auth.alreadyHaveAccount')}{' '}
                <Link 
                  href="/login" 
                  className="font-medium text-purple-600 hover:text-purple-500 transition-colors"
                >
                  {t('auth.signIn')}
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
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
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
                    ? 'bg-purple-600 text-white' 
                    : 'text-gray-600 hover:text-purple-600'
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
