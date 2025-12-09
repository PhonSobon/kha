"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import KHANavbar from '../../components/KHANavbar';
import KHAFooter from '../../components/KHAFooter';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { UserIcon, ChartBarIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';

export default function DashboardPage() {
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Welcome back, {user.email.split('@')[0]}!
            </h1>
            <p className="text-gray-600">
              Here's what's happening with your KHA account.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="shadow-lg">
              <CardBody className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-blue-100">
                    <UserIcon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Total Members</p>
                    <p className="text-2xl font-bold text-gray-900">1,234</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-green-100">
                    <ChartBarIcon className="h-6 w-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Active Projects</p>
                    <p className="text-2xl font-bold text-gray-900">12</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-yellow-100">
                    <DocumentTextIcon className="h-6 w-6 text-yellow-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Documents</p>
                    <p className="text-2xl font-bold text-gray-900">89</p>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardBody className="p-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-purple-100">
                    <CogIcon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">Settings</p>
                    <p className="text-2xl font-bold text-gray-900">5</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-900">New member registered</p>
                      <p className="text-xs text-gray-500">2 minutes ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-900">Document uploaded</p>
                      <p className="text-xs text-gray-500">1 hour ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div>
                      <p className="text-sm text-gray-900">Project updated</p>
                      <p className="text-xs text-gray-500">3 hours ago</p>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Quick Actions</h3>
              </CardHeader>
              <CardBody>
                <div className="space-y-3">
                  <button className="w-full text-left p-3 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                    <p className="font-medium text-blue-900">Add New Member</p>
                    <p className="text-sm text-blue-700">Register a new KHA member</p>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                    <p className="font-medium text-green-900">Create Project</p>
                    <p className="text-sm text-green-700">Start a new KHA project</p>
                  </button>
                  <button className="w-full text-left p-3 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                    <p className="font-medium text-purple-900">Upload Document</p>
                    <p className="text-sm text-purple-700">Share important files</p>
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>

      <KHAFooter />
    </div>
  );
}
