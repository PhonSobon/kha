"use client";
import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button, Card, CardBody, CardHeader } from '@heroui/react';
import { CheckCircleIcon, XCircleIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function EmailVerification() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [verificationStatus, setVerificationStatus] = useState('loading'); // 'loading', 'success', 'error', 'expired'
  const [isResending, setIsResending] = useState(false);
  const [resendCount, setResendCount] = useState(0);

  const token = searchParams.get('token');
  const email = searchParams.get('email');

  useEffect(() => {
    if (token) {
      verifyEmail(token);
    } else {
      setVerificationStatus('error');
    }
  }, [token]);

  const verifyEmail = async (verificationToken) => {
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock verification logic
      if (verificationToken === 'valid-token') {
        setVerificationStatus('success');
        // Update user verification status in localStorage
        const user = JSON.parse(localStorage.getItem('user') || '{}');
        localStorage.setItem('user', JSON.stringify({
          ...user,
          isVerified: true
        }));
      } else if (verificationToken === 'expired-token') {
        setVerificationStatus('expired');
      } else {
        setVerificationStatus('error');
      }
    } catch (error) {
      setVerificationStatus('error');
    }
  };

  const handleResendVerification = async () => {
    if (resendCount >= 3) {
      alert('Maximum resend attempts reached. Please contact support.');
      return;
    }

    setIsResending(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setResendCount(prev => prev + 1);
      alert('Verification email sent successfully!');
    } catch (error) {
      alert('Failed to send verification email. Please try again.');
    } finally {
      setIsResending(false);
    }
  };

  const renderContent = () => {
    switch (verificationStatus) {
      case 'loading':
        return (
          <div className="text-center py-8">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 mx-auto mb-4"></div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verifying Email...
            </h2>
            <p className="text-gray-600">
              Please wait while we verify your email address.
            </p>
          </div>
        );

      case 'success':
        return (
          <div className="text-center py-8">
            <CheckCircleIcon className="mx-auto h-16 w-16 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              {t('auth.emailVerified')}
            </h2>
            <p className="text-gray-600 mb-6">
              Your email has been successfully verified. You can now access all features.
            </p>
            <div className="space-y-3">
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onClick={() => router.push('/adminForm')}
              >
                Continue to Dashboard
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Back to Login
              </Button>
            </div>
          </div>
        );

      case 'expired':
        return (
          <div className="text-center py-8">
            <XCircleIcon className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verification Link Expired
            </h2>
            <p className="text-gray-600 mb-6">
              This verification link has expired. Please request a new one.
            </p>
            <div className="space-y-3">
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onClick={handleResendVerification}
                isLoading={isResending}
                disabled={isResending}
              >
                {isResending ? 'Sending...' : t('auth.resendVerification')}
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Back to Login
              </Button>
            </div>
          </div>
        );

      case 'error':
        return (
          <div className="text-center py-8">
            <XCircleIcon className="mx-auto h-16 w-16 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Verification Failed
            </h2>
            <p className="text-gray-600 mb-6">
              Invalid or corrupted verification link. Please try again.
            </p>
            <div className="space-y-3">
              <Button
                color="primary"
                size="lg"
                className="w-full"
                onClick={handleResendVerification}
                isLoading={isResending}
                disabled={isResending}
              >
                {isResending ? 'Sending...' : t('auth.resendVerification')}
              </Button>
              <Button
                variant="bordered"
                size="lg"
                className="w-full"
                onClick={() => router.push('/login')}
              >
                Back to Login
              </Button>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <Card>
          <CardBody>
            {renderContent()}
          </CardBody>
        </Card>

        {email && (
          <div className="text-center text-sm text-gray-600">
            <p>Verifying email: <strong>{email}</strong></p>
          </div>
        )}

        <div className="text-center">
          <Link
            href="/"
            className="text-sm text-blue-600 hover:text-blue-500"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
