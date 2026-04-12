"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';
import GridLayout from 'react-grid-layout';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, Area } from 'recharts';
import KHANavbar from '../../components/KHANavbar';
import KHAFooter from '../../components/KHAFooter';
import { Card, CardBody, CardHeader } from '@heroui/react';
import { UserIcon, ChartBarIcon, DocumentTextIcon, CogIcon } from '@heroicons/react/24/outline';
import 'react-grid-layout/css/styles.css';

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#8b5cf6', '#ef4444', '#06b6d4'];

export default function DashboardPage() {
  const { t, i18n } = useTranslation('common');
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Donut chart data
  const donutData = [
    { name: 'Active Members', value: 850, color: '#3b82f6' },
    { name: 'Alumni', value: 384, color: '#10b981' },
    { name: 'Pending', value: 120, color: '#f59e0b' },
    { name: 'Inactive', value: 50, color: '#ef4444' },
  ];

  // Bar chart data - all 12 months
  const barData = [
    { month: 'Jan', members: 120, projects: 8 },
    { month: 'Feb', members: 190, projects: 9 },
    { month: 'Mar', members: 300, projects: 10 },
    { month: 'Apr', members: 280, projects: 11 },
    { month: 'May', members: 189, projects: 9 },
    { month: 'Jun', members: 239, projects: 12 },
    { month: 'Jul', members: 320, projects: 14 },
    { month: 'Aug', members: 280, projects: 13 },
    { month: 'Sep', members: 350, projects: 15 },
    { month: 'Oct', members: 310, projects: 14 },
    { month: 'Nov', members: 290, projects: 13 },
    { month: 'Dec', members: 270, projects: 12 },
  ];

  // Line chart data - all 12 months
  const lineData = [
    { month: 'Jan', active: 800, total: 1000 },
    { month: 'Feb', active: 850, total: 1100 },
    { month: 'Mar', active: 900, total: 1200 },
    { month: 'Apr', active: 920, total: 1250 },
    { month: 'May', active: 950, total: 1300 },
    { month: 'Jun', active: 1000, total: 1350 },
    { month: 'Jul', active: 1050, total: 1400 },
    { month: 'Aug', active: 1080, total: 1450 },
    { month: 'Sep', active: 1120, total: 1500 },
    { month: 'Oct', active: 1150, total: 1550 },
    { month: 'Nov', active: 1180, total: 1600 },
    { month: 'Dec', active: 1200, total: 1650 },
  ];

  // Default layout configuration - all stat boxes in one row
  const defaultLayout = [
    { i: 'stats1', x: 0, y: 0, w: 3, h: 0.6, minW: 2, minH: 0.5 },
    { i: 'stats2', x: 3, y: 0, w: 3, h: 0.6, minW: 2, minH: 0.5 },
    { i: 'stats3', x: 6, y: 0, w: 3, h: 0.6, minW: 2, minH: 0.5 },
    { i: 'stats4', x: 9, y: 0, w: 3, h: 0.6, minW: 2, minH: 0.5 },
    { i: 'donut', x: 0, y: 0.6, w: 6, h: 3, minW: 4, minH: 2 },
    { i: 'bar', x: 6, y: 0.6, w: 6, h: 3, minW: 4, minH: 2 },
    { i: 'line', x: 0, y: 6, w: 6, h: 5, minW: 4, minH: 4 },
    { i: 'activity', x: 6, y: 6, w: 6, h: 5, minW: 4, minH: 4 },
    { i: 'actions', x: 0, y: 11, w: 12, h: 3.5, minW: 6, minH: 3 },
  ];

  const [layout, setLayout] = useState(defaultLayout);
  const [containerWidth, setContainerWidth] = useState(1200);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) {
      router.push('/login');
      return;
    }
    
    setUser(JSON.parse(userData));
    setIsLoading(false);

    // Load saved layout from localStorage, but ensure stat boxes are consistent and in one row
    const savedLayout = localStorage.getItem('dashboard-layout');
    if (savedLayout) {
      try {
        const parsed = JSON.parse(savedLayout);
        // Ensure all stat boxes have the same height and are in one row (y: 0)
        const normalizedLayout = parsed.map(item => {
          if (item.i.startsWith('stats')) {
            return { ...item, y: 0, h: 0.6, minH: 0.5 };
          }
          return item;
        });
        setLayout(normalizedLayout);
      } catch (e) {
        console.error('Failed to load saved layout:', e);
      }
    }

    // Calculate container width - responsive padding calculation
    const updateWidth = () => {
      const container = document.querySelector('.dashboard-container');
      if (container) {
        const computedStyle = window.getComputedStyle(container);
        const paddingLeft = parseFloat(computedStyle.paddingLeft) || 0;
        const paddingRight = parseFloat(computedStyle.paddingRight) || 0;
        setContainerWidth(container.offsetWidth - paddingLeft - paddingRight);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [router]);

  // Save layout to localStorage when it changes
  const handleLayoutChange = (newLayout) => {
    setLayout(newLayout);
    localStorage.setItem('dashboard-layout', JSON.stringify(newLayout));
  };

  // Custom tooltip for donut chart
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 rounded-xl shadow-lg border border-gray-200">
          <p className="font-semibold text-gray-900">{payload[0].name}</p>
          <p className="text-sm text-gray-600">
            <span className="font-bold" style={{ color: payload[0].payload.color }}>
              {payload[0].value}
            </span>{' '}
            members
          </p>
        </div>
      );
    }
    return null;
  };

  // Custom label for donut chart
  const renderCustomLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
        className="text-sm font-bold"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#26308f]"></div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
      <KHANavbar />
      
      <div className="pt-16 pl-4 sm:pl-12 lg:pl-20">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-8 dashboard-container">
          <div className="mb-8">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
              Welcome back, {user.email.split('@')[0]}!
            </h1>
            <p className="text-gray-600 text-lg">
              Here's what's happening with your KHA account.
            </p>
          </div>

          <GridLayout
            className="layout"
            layout={layout}
            onLayoutChange={handleLayoutChange}
            cols={12}
            rowHeight={60}
            width={containerWidth}
            isDraggable={false}
            isResizable={false}
            margin={[16, 16]}
            containerPadding={[0, 0]}
          >
            {/* Stats Card 1 */}
            <div key="stats1" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden h-full hover:shadow-xl transition-all duration-300">
              <Card className="h-full border-0 shadow-none bg-transparent flex flex-col">
                <CardBody className="p-4 flex-1 flex items-center">
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 shadow-md flex-shrink-0">
                      <UserIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-0.5">Total Members</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">1,234</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Stats Card 2 */}
            <div key="stats2" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden h-full hover:shadow-xl transition-all duration-300">
              <Card className="h-full border-0 shadow-none bg-transparent flex flex-col">
                <CardBody className="p-4 flex-1 flex items-center">
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-green-500 to-green-600 shadow-md flex-shrink-0">
                      <ChartBarIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-0.5">Active Projects</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">12</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Stats Card 3 */}
            <div key="stats3" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden h-full hover:shadow-xl transition-all duration-300">
              <Card className="h-full border-0 shadow-none bg-transparent flex flex-col">
                <CardBody className="p-4 flex-1 flex items-center">
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500 to-yellow-600 shadow-md flex-shrink-0">
                      <DocumentTextIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-0.5">Documents</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">89</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Stats Card 4 */}
            <div key="stats4" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden h-full hover:shadow-xl transition-all duration-300">
              <Card className="h-full border-0 shadow-none bg-transparent flex flex-col">
                <CardBody className="p-4 flex-1 flex items-center">
                  <div className="flex items-center gap-3 w-full">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500 to-purple-600 shadow-md flex-shrink-0">
                      <CogIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-600 uppercase tracking-wide mb-0.5">Settings</p>
                      <p className="text-2xl font-extrabold text-gray-900 leading-tight">5</p>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Donut Chart */}
            <div key="donut" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
              <Card className="h-full border-0 shadow-none bg-transparent">
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-bold text-gray-900">Member Distribution</h3>
                </CardHeader>
                <CardBody className="pt-0 px-2 sm:px-4">
                  <div className="h-full min-h-[200px] sm:min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={donutData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={renderCustomLabel}
                          outerRadius="95%"
                          innerRadius="60%"
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {donutData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip content={<CustomTooltip />} />
                        <Legend
                          verticalAlign="bottom"
                          height={36}
                          iconType="circle"
                          formatter={(value, entry) => (
                            <span style={{ color: entry.color, fontWeight: 500 }}>
                              {value}
                            </span>
                          )}
                        />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Bar Chart */}
            <div key="bar" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
              <Card className="h-full border-0 shadow-none bg-transparent">
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-bold text-gray-900">Monthly Growth</h3>
                </CardHeader>
                <CardBody className="pt-0 px-2 sm:px-4">
                  <div className="h-full min-h-[200px] sm:min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={barData} margin={{ top: 5, right: 10, left: -10, bottom: 40 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#6b7280" 
                          angle={-45}
                          textAnchor="end"
                          height={60}
                          tick={{ fontSize: 11 }}
                          interval={0}
                        />
                        <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '0.75rem',
                            padding: '0.5rem'
                          }} 
                        />
                        <Legend />
                        <Bar dataKey="members" fill="#3b82f6" radius={[8, 8, 0, 0]} name="New Members" />
                        <Bar dataKey="projects" fill="#10b981" radius={[8, 8, 0, 0]} name="Projects" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Line Chart */}
            <div key="line" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
              <Card className="h-full border-0 shadow-none bg-transparent">
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-bold text-gray-900">Member Trends</h3>
                </CardHeader>
                <CardBody className="pt-0 px-2 sm:px-4">
                  <div className="h-full min-h-[200px] sm:min-h-[250px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={lineData} margin={{ top: 5, right: 10, left: -10, bottom: 40 }}>
                        <defs>
                          <linearGradient id="colorActive" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                          </linearGradient>
                          <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                        <XAxis 
                          dataKey="month" 
                          stroke="#6b7280" 
                          angle={-45}
                          textAnchor="end"
                          height={60}
                          tick={{ fontSize: 11 }}
                          interval={0}
                        />
                        <YAxis stroke="#6b7280" tick={{ fontSize: 11 }} />
                        <Tooltip 
                          contentStyle={{ 
                            backgroundColor: 'white', 
                            border: '1px solid #e5e7eb', 
                            borderRadius: '0.75rem',
                            padding: '0.5rem'
                          }} 
                        />
                        <Legend />
                        <Area type="monotone" dataKey="active" stroke="#3b82f6" fillOpacity={1} fill="url(#colorActive)" name="Active Members" />
                        <Area type="monotone" dataKey="total" stroke="#10b981" fillOpacity={1} fill="url(#colorTotal)" name="Total Members" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Recent Activity */}
            <div key="activity" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
              <Card className="h-full border-0 shadow-none bg-transparent">
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-bold text-gray-900">Recent Activity</h3>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-green-100/50 hover:shadow-md transition-all">
                      <div className="w-2.5 h-2.5 bg-green-500 rounded-full shadow-sm flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">New member registered</p>
                        <p className="text-xs text-gray-500">2 minutes ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100/50 hover:shadow-md transition-all">
                      <div className="w-2.5 h-2.5 bg-blue-500 rounded-full shadow-sm flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">Document uploaded</p>
                        <p className="text-xs text-gray-500">1 hour ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-yellow-50 to-yellow-100/50 hover:shadow-md transition-all">
                      <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full shadow-sm flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">Project updated</p>
                        <p className="text-xs text-gray-500">3 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-purple-50 to-purple-100/50 hover:shadow-md transition-all">
                      <div className="w-2.5 h-2.5 bg-purple-500 rounded-full shadow-sm flex-shrink-0"></div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-semibold text-gray-900">Meeting scheduled</p>
                        <p className="text-xs text-gray-500">5 hours ago</p>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>

            {/* Quick Actions */}
            <div key="actions" className="rounded-xl shadow-lg border border-gray-200 bg-white overflow-hidden">
              <Card className="h-full border-0 shadow-none bg-transparent">
                <CardHeader className="pb-3">
                  <h3 className="text-lg font-bold text-gray-900">Quick Actions</h3>
                </CardHeader>
                <CardBody className="pt-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <button className="text-left p-4 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all shadow-sm hover:shadow-md">
                      <p className="font-bold text-blue-900">Add New Member</p>
                      <p className="text-sm text-blue-700 mt-1">Register a new KHA member</p>
                    </button>
                    <button className="text-left p-4 rounded-lg bg-gradient-to-br from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all shadow-sm hover:shadow-md">
                      <p className="font-bold text-green-900">Create Project</p>
                      <p className="text-sm text-green-700 mt-1">Start a new KHA project</p>
                    </button>
                    <button className="text-left p-4 rounded-lg bg-gradient-to-br from-purple-50 to-purple-100 hover:from-purple-100 hover:to-purple-200 transition-all shadow-sm hover:shadow-md">
                      <p className="font-bold text-purple-900">Upload Document</p>
                      <p className="text-sm text-purple-700 mt-1">Share important files</p>
                    </button>
                  </div>
                </CardBody>
              </Card>
            </div>
          </GridLayout>
        </div>
      </div>

      <KHAFooter />
    </div>
  );
}
