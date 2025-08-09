'use client'

import { useState, useEffect } from 'react'
import {
  TrendingUp,
  FileText,
  Calendar,
  Settings,
  Bell,
  Shield,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowUpRight,
  ArrowDownRight,
  Plus,
  Eye,
  Users,
  Activity,
  BarChart3,
  // Audit-specific icons
  FileCheck,
  Upload,
  Download,
  AlertTriangle,
  CheckCircle,
  PieChart,
  LineChart,
  Folder,
  Target,
  Zap,
  Award,
  Briefcase,
  Building2,
  FileSpreadsheet,
  Archive,
  Search,
  BookOpen,
  MessageSquare,
  LogIn,
  UserPlus
} from 'lucide-react'
import Link from 'next/link'
import DashboardSidebar from './DashboardSidebar'
import { useAuth } from '@/hooks/useAuth'
import { useDashboardNavigation } from '@/src/contexts/NavigationContext'

// ===============================
// ENHANCED TYPE DEFINITIONS
// ===============================

interface UserData {
  name: string;
  company: string;
  email: string;
  plan: string;
  avatar?: string;
  businessType?: string;
  registrationNumber?: string;
  subscriptionStatus?: 'active' | 'trial' | 'expired';
}

interface Stat {
  title: string;
  value: string;
  subtext: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: string;
  bgColor: string;
  trend?: number[];
  isNew?: boolean;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'scheduled' | 'pending' | 'overdue' | 'in-progress';
  type: 'audit' | 'document' | 'payment' | 'meeting';
  priority?: 'low' | 'medium' | 'high' | 'urgent';
  category?: string;
}

interface QuickAction {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  color: string;
  action: string;
  isNew?: boolean;
  badge?: string;
}

interface DashboardClientProps {
  userData: UserData;
  stats: Stat[];
  recentActivity: Activity[];
}

/**
 * COMPLETE AUDIT-FOCUSED DASHBOARD CLIENT - TRUST ACCOUNT AUDIT SPECIALIZATION
 * 
 * Features:
 * - Complete focus on trust account audit management
 * - ASIC and state compliance tracking
 * - Professional audit workflow integration
 * - Document management for audit evidence
 * - Real-time audit progress monitoring
 * - 100% responsive design across all devices
 * - Professional audit client interface
 * 
 * Removed Non-Audit Elements:
 * - Business registration services
 * - Tax return preparation
 * - Loan application management
 * - Generic business services
 * 
 * Device Compatibility:
 * ✅ iPhone SE (375px) - Mobile audit management
 * ✅ iPhone Pro Max (428px) - Enhanced mobile experience
 * ✅ Samsung Galaxy (all sizes) - Android audit interface
 * ✅ Samsung Galaxy Fold (280px/717px) - Foldable optimization
 * ✅ iPads (768px/1024px) - Tablet audit workflow
 * ✅ Laptops/Desktop (1280px+) - Complete audit management
 * ✅ 4K displays (1920px+) - Professional audit environment
 * 
 * @param userData - Audit client information
 * @param stats - Audit-focused performance metrics
 * @param recentActivity - Trust account audit activities
 * @returns Professional audit management dashboard
 */
export default function DashboardClient({
  userData,
  stats,
  recentActivity,
}: DashboardClientProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('7d')
  const [mounted, setMounted] = useState<boolean>(false)
  const [notifications, setNotifications] = useState<number>(2)

  // CRITICAL: Prevent hydration mismatch by ensuring client-side only rendering
  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  console.log('🎯 Complete Audit-focused Dashboard Client loaded successfully!')

  // Enhanced stats with audit-specific icons and trends
  const enhancedStats = [
    {
      ...stats[0],
      icon: FileCheck,
      trend: [2, 3, 2, 3, 3, 3, 3]
    },
    {
      ...stats[1],
      icon: Shield,
      trend: [100, 100, 100, 100, 100, 100, 100]
    },
    {
      ...stats[2],
      icon: CheckCircle2,
      trend: [8, 9, 10, 11, 11, 12, 12]
    },
    {
      ...stats[3],
      icon: Clock,
      trend: [12, 11, 10, 9, 8, 8, 8]
    },
  ]

  // Audit-focused quick actions with trust account specialization
  const quickActions: QuickAction[] = [
    {
      title: 'Schedule Audit',
      description: 'Book your next trust account audit',
      icon: Calendar,
      color: 'bg-blue-500',
      action: 'schedule-audit'
    },
    {
      title: 'Upload Documents',
      description: 'Submit bank statements and records',
      icon: Upload,
      color: 'bg-green-500',
      action: 'upload-docs'
    },
    {
      title: 'View Compliance Status',
      description: 'Check ASIC and state requirements',
      icon: Shield,
      color: 'bg-purple-500',
      action: 'compliance-status',
      badge: 'Updated'
    },
    {
      title: 'Download Reports',
      description: 'Access completed audit reports',
      icon: Download,
      color: 'bg-orange-500',
      action: 'download-reports'
    },
    {
      title: 'Document Library',
      description: 'Browse uploaded audit documents',
      icon: Folder,
      color: 'bg-indigo-500',
      action: 'document-library'
    },
    {
      title: 'Audit Progress',
      description: 'Track current audit milestones',
      icon: BarChart3,
      color: 'bg-emerald-500',
      action: 'audit-progress',
      isNew: true
    },
    {
      title: 'Trust Account Search',
      description: 'Find specific trust account records',
      icon: Search,
      color: 'bg-pink-500',
      action: 'trust-search'
    },
    {
      title: 'Contact Auditor',
      description: 'Connect with your assigned auditor',
      icon: MessageSquare,
      color: 'bg-red-500',
      action: 'contact-auditor'
    }
  ]

  // Event handlers
  const handleQuickAction = (action: string) => {
    console.log(`🎯 Audit action: ${action}`)
    // Implement audit-specific navigation logic
    switch (action) {
      case 'schedule-audit':
        window.location.href = '/audits/schedule'
        break
      case 'upload-docs':
        window.location.href = '/documents/upload'
        break
      case 'compliance-status':
        window.location.href = '/compliance/dashboard'
        break
      case 'download-reports':
        window.location.href = '/reports/audits'
        break
      case 'document-library':
        window.location.href = '/documents/library'
        break
      case 'audit-progress':
        window.location.href = '/progress/tracking'
        break
      case 'trust-search':
        window.location.href = '/search/trust-accounts'
        break
      case 'contact-auditor':
        window.location.href = '/team/communication'
        break
      default:
        console.log(`Unknown audit action: ${action}`)
    }
  }

  const handleStatClick = (statTitle: string) => {
    console.log(`📊 Audit stat clicked: ${statTitle}`)
    // Implement audit stat navigation logic
  }

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe)
    console.log(`📅 Audit timeframe changed to: ${timeframe}`)
    // Implement audit data refresh logic
  }

  const handleNotificationClick = () => {
    console.log('🔔 Audit notifications clicked')
    setNotifications(0)
    // Navigate to audit notifications page
  }

  // Helper functions
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'pending': return 'bg-yellow-500'
      case 'overdue': return 'bg-red-500'
      case 'scheduled': return 'bg-purple-500'
      default: return 'bg-gray-500'
    }
  }

  const getPriorityColor = (priority?: string): string => {
    switch (priority) {
      case 'urgent': return 'text-red-600 bg-red-50'
      case 'high': return 'text-orange-600 bg-orange-50'
      case 'medium': return 'text-yellow-600 bg-yellow-50'
      case 'low': return 'text-green-600 bg-green-50'
      default: return 'text-gray-600 bg-gray-50'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'audit': return FileCheck
      case 'document': return FileSpreadsheet
      case 'payment': return Activity
      case 'meeting': return Users
      default: return Activity
    }
  }

  // FIXED: Prevent hydration mismatch with proper mounting check
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full animate-spin border-t-primary-600 dark:border-t-primary-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Loading Audit Dashboard
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Preparing your trust account audit management system...
          </p>
        </div>
      </div>
    )
  }

  // Loading state for mounted component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 dark:border-primary-800 rounded-full animate-spin border-t-primary-600 dark:border-t-primary-400"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
            Loading Audit Dashboard
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Preparing your trust account audit management system...
          </p>
        </div>
      </div>
    )
  }

  // 🎯 MAIN AUDIT DASHBOARD RENDER - TRUST ACCOUNT SPECIALIZATION
  return (
    <div className="dashboard-client-content">
      {/* 🎯 MAIN AUDIT CONTENT AREA - Sidebar is handled by DashboardLayout */}
      <main className="min-h-screen overflow-auto bg-gray-50 dark:bg-gray-900">

        {/* 🎯 AUDIT DASHBOARD HEADER BAR */}
        <header
          className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-30"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 30,
            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)'
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">

              {/* Audit Dashboard Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Trust Account Audit Dashboard</h1>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  Welcome back, {userData.name}. Your audit management and compliance center.
                </p>
              </div>

              {/* Audit Dashboard Controls */}
              <div className="flex items-center space-x-3">

                {/* Timeframe Selector */}
                <select
                  value={selectedTimeframe}
                  onChange={(e) => handleTimeframeChange(e.target.value)}
                  className="hidden sm:block px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last quarter</option>
                  <option value="1y">This financial year</option>
                </select>

                {/* New Audit Button */}
                <button
                  onClick={() => handleQuickAction('schedule-audit')}
                  className="hidden sm:flex items-center px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 text-sm font-medium shadow-sm"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Schedule Audit
                </button>

                {/* Audit Notifications */}
                <button
                  onClick={handleNotificationClick}
                  className="relative p-2 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200"
                >
                  <Bell className="h-5 w-5" />
                  {notifications > 0 && (
                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full">
                      <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 🎯 SCROLLABLE AUDIT DASHBOARD CONTENT */}
        <div className="px-4 sm:px-6 lg:px-8 py-6 space-y-6">

          {/* Audit Key Metrics Section */}
          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Audit Performance Metrics</h2>
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-500 dark:text-gray-400">Updated 5 minutes ago</span>
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {enhancedStats.map((stat, index) => (
                <div
                  key={index}
                  onClick={() => handleStatClick(stat.title)}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 cursor-pointer group relative overflow-hidden"
                >
                  {stat.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-orange-100 text-orange-600 text-xs font-medium rounded-full">
                        New
                      </span>
                    </div>
                  )}

                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-105 transition-transform duration-200`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>

                    <div className={`flex items-center text-sm ${stat.changeType === 'positive' ? 'text-green-600' :
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                      }`}>
                      {stat.changeType === 'positive' && <ArrowUpRight className="h-4 w-4 mr-1" />}
                      {stat.changeType === 'negative' && <ArrowDownRight className="h-4 w-4 mr-1" />}
                      <span className="hidden sm:inline">{stat.change}</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{stat.subtext}</p>
                  </div>

                  {/* Mini trend chart */}
                  {stat.trend && (
                    <div className="mt-3 h-8">
                      <div className="flex items-end space-x-1 h-full">
                        {stat.trend.map((value, i) => (
                          <div
                            key={i}
                            className={`flex-1 rounded-t ${stat.color.replace('text-', 'bg-').replace('-600', '-200')} opacity-70`}
                            style={{ height: `${(value / Math.max(...stat.trend)) * 100}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Audit Quick Actions Grid */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Audit Management Actions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600 transition-all duration-200 text-left group relative overflow-hidden"
                >
                  {action.isNew && (
                    <div className="absolute top-2 right-2">
                      <span className="px-2 py-1 bg-green-100 text-green-600 text-xs font-medium rounded-full">
                        New
                      </span>
                    </div>
                  )}

                  {action.badge && (
                    <div className="absolute top-2 left-2">
                      <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                        {action.badge}
                      </span>
                    </div>
                  )}

                  <div className={`p-3 ${action.color} rounded-lg mb-4 inline-block group-hover:scale-105 transition-transform duration-200`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200 mb-2">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {action.description}
                  </p>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Audit Activity Section */}
          <section>
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
              <div className="p-6 border-b border-gray-200 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Audit Activity</h2>
                  <button
                    onClick={() => handleQuickAction('audit-progress')}
                    className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-500 dark:hover:text-primary-300 font-medium flex items-center"
                  >
                    View All Activity
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const IconComponent = getActivityIcon(activity.type)
                    return (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                        <div className={`p-2 rounded-lg flex-shrink-0 ${activity.status === 'completed' ? 'bg-green-100' :
                          activity.status === 'scheduled' ? 'bg-blue-100' :
                            activity.status === 'in-progress' ? 'bg-yellow-100' :
                              activity.status === 'overdue' ? 'bg-red-100' : 'bg-gray-100'
                          }`}>
                          <IconComponent className={`h-4 w-4 ${activity.status === 'overdue' ? 'text-red-600' :
                            activity.status === 'completed' ? 'text-green-600' :
                              activity.status === 'in-progress' ? 'text-yellow-600' :
                                'text-gray-600'
                            }`} />
                        </div>

                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                              {activity.title}
                            </h3>
                            <div className="flex items-center space-x-2">
                              {activity.priority && (
                                <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(activity.priority)}`}>
                                  {activity.priority.charAt(0).toUpperCase() + activity.priority.slice(1)}
                                </span>
                              )}
                              <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(activity.status)}`}></span>
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          <div className="flex items-center justify-between mt-2">
                            <p className="text-xs text-gray-500">{activity.date}</p>
                            {activity.category && (
                              <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                                {activity.category}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Audit Compliance Overview */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">Trust Account Compliance Overview</h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                      <div className="absolute inset-0 rounded-full border-4 border-green-200"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">ASIC Compliance</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">All requirements met</p>
                  <div className="flex items-center justify-center mt-2">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-xs text-green-600">Compliant</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-2xl font-bold text-blue-600">15</div>
                      <div className="absolute inset-0 rounded-full border-4 border-blue-200"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Trust Accounts</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Actively monitored</p>
                  <div className="flex items-center justify-center mt-2">
                    <Shield className="h-4 w-4 text-blue-500 mr-1" />
                    <span className="text-xs text-blue-600">Secured</span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center relative overflow-hidden">
                      <div className="text-2xl font-bold text-purple-600">18d</div>
                      <div className="absolute inset-0 rounded-full border-4 border-purple-200"></div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Next Deadline</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Q1 2025 ASIC filing</p>
                  <div className="flex items-center justify-center mt-2">
                    <Clock className="h-4 w-4 text-purple-500 mr-1" />
                    <span className="text-xs text-purple-600">On Schedule</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick Access Links */}
          <section>
            <div className="bg-gradient-to-r from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 rounded-xl border border-primary-200 dark:border-primary-800 p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Access Resources</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a
                  href="/support/guides"
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <BookOpen className="h-5 w-5 text-primary-600 dark:text-primary-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Audit Guides</span>
                </a>

                <a
                  href="/compliance/asic"
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <Shield className="h-5 w-5 text-green-600 dark:text-green-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">ASIC Requirements</span>
                </a>

                <a
                  href="/documents/templates"
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <FileText className="h-5 w-5 text-orange-600 dark:text-orange-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Document Templates</span>
                </a>

                <a
                  href="/support/contact"
                  className="flex items-center p-3 bg-white dark:bg-gray-700 rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400 mr-3 group-hover:scale-110 transition-transform" />
                  <span className="text-sm font-medium text-gray-900 dark:text-white">Contact Support</span>
                </a>
              </div>
            </div>
          </section>

          {/* Bottom Padding for Better Scroll Experience */}
          <div className="h-20"></div>
        </div>
      </main>

      {/* Enhanced Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 1023px) {
          main {
            margin-left: 0 !important;
          }
        }
        
        /* iPhone SE and small devices */
        @media (max-width: 374px) {
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: 1fr;
            gap: 1rem;
          }
          
          .px-4.sm\\:px-6.lg\\:px-8 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Samsung Galaxy Fold (folded) */
        @media (max-width: 320px) {
          .text-2xl {
            font-size: 1.5rem;
          }
          
          .p-6 {
            padding: 1rem;
          }
        }
        
        /* Touch optimization for all mobile devices */
        @media (pointer: coarse) {
          .cursor-pointer {
            min-height: 44px;
            touch-action: manipulation;
          }
          
          button {
            min-height: 44px;
            touch-action: manipulation;
          }
        }
      `}</style>
    </div>
  )
}
