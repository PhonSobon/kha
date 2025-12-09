"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Input, Card, CardBody, CardHeader } from '@heroui/react';
import { EyeIcon, EyeSlashIcon, CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function SetNewPasswordForm() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isValidToken, setIsValidToken] = useState(null);

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (token) {
      validateToken(token);
    } else {
      setIsValidToken(false);
    }
  }, [token]);

  const validateToken = async (resetToken) => {
    try {
      // Simulate API call to validate token
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock token validation
      if (resetToken === 'valid-reset-token') {
        setIsValidToken(true);
      } else {
        setIsValidToken(false);
      }
    } catch (error) {
      setIsValidToken(false);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
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
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful password reset
      setIsSuccess(true);
      setErrors({});
    } catch (error) {
      setErrors({ general: 'Failed to update password. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  if (isValidToken === false) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardBody className="text-center py-8">
              <XCircleIcon className="mx-auto h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('auth.invalidToken')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('auth.invalidToken')}
              </p>
              <div className="space-y-3">
                <Button
                  color="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => router.push('/forgot-password')}
                >
                  {t('auth.sendResetLink')}
                </Button>
                <Button
                  variant="bordered"
                  size="lg"
                  className="w-full"
                  onClick={() => router.push('/login')}
                >
                  {t('auth.backToLogin')}
                </Button>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  if (isValidToken === null) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardBody className="text-center py-8">
              <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('auth.checkYourEmail')}
              </h2>
              <p className="text-gray-600">
                {t('auth.checkYourEmail')}
              </p>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  if (isSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <Card>
            <CardBody className="text-center py-8">
              <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {t('auth.passwordUpdated')}
              </h2>
              <p className="text-gray-600 mb-6">
                {t('auth.passwordResetSuccess')}
              </p>
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                {t('auth.backToLogin')}
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            {t('auth.resetPassword')}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {t('auth.enterEmailPlaceholder')}
          </p>
          {email && (
            <p className="mt-1 text-sm text-gray-500">
              Resetting password for: <strong>{email}</strong>
            </p>
          )}
        </div>

        <Card className="mt-8">
          <CardHeader className="space-y-1">
            <h3 className="text-2xl font-bold text-center">{t('auth.setNewPassword')}</h3>
          </CardHeader>
          <CardBody className="space-y-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              {errors.general && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                  {errors.general}
                </div>
              )}

              <div>
                <Input
                  label={t('auth.newPassword')}
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  value={formData.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                  errorMessage={errors.password}
                  placeholder={t('auth.newPassword')}
                  variant="bordered"
                  size="lg"
                  endContent={
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="focus:outline-none"
                    >
                      {showPassword ? (
                        <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  }
                />
              </div>

              <div>
                <Input
                  label={t('auth.confirmPassword')}
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  isInvalid={!!errors.confirmPassword}
                  errorMessage={errors.confirmPassword}
                  placeholder={t('auth.confirmPassword')}
                  variant="bordered"
                  size="lg"
                  endContent={
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="focus:outline-none"
                    >
                      {showConfirmPassword ? (
                        <EyeSlashIcon className="w-5 h-5 text-gray-400" />
                      ) : (
                        <EyeIcon className="w-5 h-5 text-gray-400" />
                      )}
                    </button>
                  }
                />
              </div>

              <Button
                type="submit"
                color="primary"
                size="lg"
                className="w-full"
                isLoading={isLoading}
                disabled={isLoading}
              >
                {isLoading ? t('auth.updatePassword') + '...' : t('auth.updatePassword')}
              </Button>
            </form>

            <div className="text-center">
              <Link
                href="/login"
                className="text-sm text-blue-600 hover:text-blue-500"
              >
                {t('auth.backToLogin')}
              </Link>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
