"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import KHANavbar from '../../components/KHANavbar';
import KHAFooter from '../../components/KHAFooter';
import { Card, CardBody, Button } from '@heroui/react';
import { UserIcon, EnvelopeIcon, CalendarIcon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';

export default function ProfilePage() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setIsLoading(false);
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem('user');
    router.push('/');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <KHANavbar />
      
      <div className="pt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-6">
            <Link
              href="/dashboard"
              className="inline-flex items-center text-[#26308f] hover:text-[#1f297a] transition-colors mb-4"
            >
              <ArrowLeftIcon className="w-5 h-5 mr-2" />
              {t('auth.back', 'Back')}
            </Link>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {t('profile.title', 'Profile')}
            </h1>
            <p className="text-gray-600">
              {t('profile.subtitle', 'View and manage your account information')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Profile Picture & Basic Info */}
            <Card className="shadow-lg">
              <CardBody className="p-6 text-center">
                <div className="mb-4">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto bg-amber-300">
                    <Image 
                      src="/images/member/moeurnsovanara.jpg" 
                      alt="Profile" 
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-1">
                  {user.email?.split('@')[0] || 'User'}
                </h2>
                <p className="text-sm text-gray-500 mb-4">
                  {user.email || ''}
                </p>
                <Button
                  color="primary"
                  variant="bordered"
                  className="w-full"
                  onClick={handleLogout}
                >
                  {t('auth.logout', 'Logout')}
                </Button>
              </CardBody>
            </Card>

            {/* Account Details */}
            <div className="lg:col-span-2 space-y-6">
              <Card className="shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('profile.accountInfo', 'Account Information')}
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-blue-100">
                        <EnvelopeIcon className="h-5 w-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          {t('auth.email', 'Email')}
                        </p>
                        <p className="text-base text-gray-900">{user.email || 'N/A'}</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-full bg-green-100">
                        <UserIcon className="h-5 w-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          {t('profile.accountStatus', 'Account Status')}
                        </p>
                        <p className="text-base text-gray-900">
                          {user.isVerified ? t('profile.verified', 'Verified') : t('profile.unverified', 'Unverified')}
                        </p>
                      </div>
                    </div>

                    {user.loginTime && (
                      <div className="flex items-center space-x-3">
                        <div className="p-2 rounded-full bg-purple-100">
                          <CalendarIcon className="h-5 w-5 text-purple-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500">
                            {t('profile.lastLogin', 'Last Login')}
                          </p>
                          <p className="text-base text-gray-900">
                            {new Date(user.loginTime).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </CardBody>
              </Card>

              <Card className="shadow-lg">
                <CardBody className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">
                    {t('profile.settings', 'Settings')}
                  </h3>
                  <div className="space-y-3">
                    <Button
                      variant="bordered"
                      className="w-full justify-start"
                      onClick={() => router.push('/dashboard')}
                    >
                      {t('profile.goToDashboard', 'Go to Dashboard')}
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <KHAFooter />
    </div>
  );
}
