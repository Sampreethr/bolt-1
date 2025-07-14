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
  DollarSign,
  Activity,
  BarChart3
} from 'lucide-react'
import DashboardSidebar from './DashboardSidebar'

// Type definitions
interface UserData {
  name: string;
  company: string;
  email: string;
  plan: string;
}

interface Stat {
  title: string;
  value: string;
  subtext: string;
  change: string;
  changeType: 'positive' | 'negative' | 'neutral';
  color: string;
  bgColor: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  status: 'completed' | 'scheduled' | 'pending' | 'overdue';
  type: 'audit' | 'document' | 'payment' | 'meeting';
}

interface DashboardClientProps {
  userData: UserData;
  stats: Stat[];
  recentActivity: Activity[];
}

/**
 * FIXED DASHBOARD CLIENT - HYDRATION MISMATCH RESOLVED
 * 
 * Features:
 * - Sidebar is completely fixed (doesn't move)
 * - Main content area scrolls independently  
 * - No inheritance from main website layout
 * - Complete sidebar navigation system
 * - Enhanced statistics and data display
 * - 100% responsive design across all devices
 * - Professional business dashboard appearance
 * - FIXED: Proper loading state management to prevent hydration mismatch
 * - FIXED: Client-side only rendering for dynamic content
 */
export default function DashboardClient({
  userData,
  stats,
  recentActivity,
}: DashboardClientProps): JSX.Element {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [selectedTimeframe, setSelectedTimeframe] = useState<string>('7d')
  const [mounted, setMounted] = useState<boolean>(false)
  
  // CRITICAL: Prevent hydration mismatch by ensuring client-side only rendering
  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 1000)
    return () => clearTimeout(timer)
  }, [])

  console.log('🎯 Fixed Dashboard Client loaded successfully!')
  
  // Enhanced stats with icons
  const enhancedStats = [
    {
      ...stats[0],
      icon: FileText,
    },
    {
      ...stats[1], 
      icon: CheckCircle2,
    },
    {
      ...stats[2],
      icon: Shield,
    },
    {
      ...stats[3],
      icon: Clock,
    },
  ]

  // Event handlers
  const handleQuickAction = (action: string) => {
    console.log(`🎯 Quick action: ${action}`)
  }

  const handleStatClick = (statTitle: string) => {
    console.log(`📊 Stat clicked: ${statTitle}`)
  }

  const handleTimeframeChange = (timeframe: string) => {
    setSelectedTimeframe(timeframe)
    console.log(`📅 Timeframe changed to: ${timeframe}`)
  }

  // Helper functions
  const getStatusColor = (status: string): string => {
    switch (status) {
      case 'completed': return 'bg-green-500'
      case 'in-progress': return 'bg-blue-500'
      case 'pending': return 'bg-yellow-500'
      case 'overdue': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getActivityIcon = (type: string) => {
    switch (type) {
      case 'audit': return FileText
      case 'document': return FileText
      case 'payment': return DollarSign
      case 'meeting': return Users
      default: return Activity
    }
  }

  // FIXED: Prevent hydration mismatch with proper mounting check
  if (!mounted) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 rounded-full animate-spin border-t-primary-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            Loading Dashboard
          </h2>
          <p className="text-sm text-gray-600">
            Preparing your audit data...
          </p>
        </div>
      </div>
    )
  }

  // Loading state for mounted component
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-primary-200 rounded-full animate-spin border-t-primary-600"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <Shield className="h-6 w-6 text-primary-600" />
            </div>
          </div>
          <h2 className="mt-4 text-lg font-semibold text-gray-900">
            Loading Dashboard
          </h2>
          <p className="text-sm text-gray-600">
            Preparing your audit data...
          </p>
        </div>
      </div>
    )
  }

  // 🎯 MAIN DASHBOARD RENDER - FIXED LAYOUT WITH PROPER HYDRATION
  return (
    <div className="min-h-screen bg-gray-50 flex">
      
      {/* 🎯 COMPLETELY FIXED SIDEBAR - NEVER MOVES */}
      <DashboardSidebar userInfo={userData} />
      
      {/* 🎯 MAIN CONTENT AREA - SCROLLABLE */}
      <main 
        className="flex-1 min-h-screen overflow-auto"
        style={{
          marginLeft: '256px', // Exact sidebar width for desktop
          height: '100vh',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        
        {/* 🎯 STICKY HEADER BAR */}
        <header 
          className="bg-white border-b border-gray-200 sticky top-0 z-30"
          style={{ 
            position: 'sticky',
            top: 0,
            zIndex: 30
          }}
        >
          <div className="px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center justify-between">
              
              {/* Page Title */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
                <p className="text-sm text-gray-600 mt-1">
                  Welcome back, {userData.name}. Here's what's happening with your audits.
                </p>
              </div>

              {/* Quick Actions */}
              <div className="flex items-center space-x-3">
                
                {/* Timeframe Selector */}
                <select
                  value={selectedTimeframe}
                  onChange={(e) => handleTimeframeChange(e.target.value)}
                  className="hidden sm:block px-3 py-2 text-sm border border-gray-300 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-primary-500"
                >
                  <option value="7d">Last 7 days</option>
                  <option value="30d">Last 30 days</option>
                  <option value="90d">Last 90 days</option>
                  <option value="1y">Last year</option>
                </select>

                {/* New Audit Button */}
                <button
                  onClick={() => handleQuickAction('new-audit')}
                  className="hidden sm:flex items-center px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200 text-sm font-medium"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  New Audit
                </button>

                {/* Notifications */}
                <button className="relative p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200">
                  <Bell className="h-5 w-5" />
                  <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* 🎯 SCROLLABLE DASHBOARD CONTENT */}
        <div className="px-4 sm:px-6 lg:px-8 py-8 space-y-8">
          
          {/* Key Metrics Section */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Key Metrics</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {enhancedStats.map((stat, index) => (
                <div
                  key={index}
                  onClick={() => handleStatClick(stat.title)}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 cursor-pointer group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-xl ${stat.bgColor} group-hover:scale-105 transition-transform duration-200`}>
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                    
                    <div className={`flex items-center text-sm ${
                      stat.changeType === 'positive' ? 'text-green-600' :
                      stat.changeType === 'negative' ? 'text-red-600' : 'text-gray-600'
                    }`}>
                      {stat.changeType === 'positive' && <ArrowUpRight className="h-4 w-4 mr-1" />}
                      {stat.changeType === 'negative' && <ArrowDownRight className="h-4 w-4 mr-1" />}
                      <span className="hidden sm:inline">{stat.change}</span>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                    <p className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</p>
                    <p className="text-sm text-gray-500">{stat.subtext}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Quick Actions Grid */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Quick Actions</h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Schedule Audit', icon: Calendar, color: 'bg-blue-500', action: 'schedule-audit' },
                { title: 'Upload Documents', icon: FileText, color: 'bg-green-500', action: 'upload-docs' },
                { title: 'View Reports', icon: BarChart3, color: 'bg-purple-500', action: 'view-reports' },
                { title: 'Contact Support', icon: Users, color: 'bg-orange-500', action: 'contact-support' },
              ].map((action, index) => (
                <button
                  key={index}
                  onClick={() => handleQuickAction(action.action)}
                  className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 text-left group"
                >
                  <div className={`p-3 ${action.color} rounded-lg mb-4 inline-block group-hover:scale-105 transition-transform duration-200`}>
                    <action.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    {action.title}
                  </h3>
                </button>
              ))}
            </div>
          </section>

          {/* Recent Activity Section */}
          <section>
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                  <button
                    onClick={() => handleQuickAction('view-all-activity')}
                    className="text-sm text-primary-600 hover:text-primary-500 font-medium flex items-center"
                  >
                    View All
                    <ArrowUpRight className="h-4 w-4 ml-1" />
                  </button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="space-y-4">
                  {recentActivity.map((activity) => {
                    const IconComponent = getActivityIcon(activity.type)
                    return (
                      <div key={activity.id} className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                        <div className={`p-2 rounded-lg flex-shrink-0 ${
                          activity.status === 'completed' ? 'bg-green-100' :
                          activity.status === 'scheduled' ? 'bg-blue-100' :
                          activity.status === 'overdue' ? 'bg-red-100' : 'bg-gray-100'
                        }`}>
                          <IconComponent className={`h-4 w-4 ${
                            activity.status === 'overdue' ? 'text-red-600' : 'text-gray-600'
                          }`} />
                        </div>
                        
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <h3 className="text-sm font-semibold text-gray-900 truncate">
                              {activity.title}
                            </h3>
                            <span className={`w-2 h-2 rounded-full flex-shrink-0 ${getStatusColor(activity.status)}`}></span>
                          </div>
                          <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                          <p className="text-xs text-gray-500 mt-2">{activity.date}</p>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </section>

          {/* Performance Overview */}
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Overview</h2>
            
            <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-green-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl font-bold text-green-600">100%</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Compliance Rate</h3>
                  <p className="text-sm text-gray-600">Perfect record maintained</p>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl font-bold text-blue-600">9d</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Avg. Turnaround</h3>
                  <p className="text-sm text-gray-600">3 days faster than standard</p>
                </div>

                <div className="text-center">
                  <div className="relative w-24 h-24 mx-auto mb-4">
                    <div className="w-full h-full bg-purple-100 rounded-full flex items-center justify-center">
                      <div className="text-2xl font-bold text-purple-600">5⭐</div>
                    </div>
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-1">Service Rating</h3>
                  <p className="text-sm text-gray-600">Consistently excellent</p>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom Padding for Better Scroll Experience */}
          <div className="h-20"></div>
        </div>
      </main>

      {/* Mobile Responsive Adjustments */}
      <style jsx>{`
        @media (max-width: 1023px) {
          main {
            margin-left: 0 !important;
          }
        }
      `}</style>
    </div>
  )
}
