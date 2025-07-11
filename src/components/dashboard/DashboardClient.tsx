'use client'

import Link from 'next/link'
import { User, FileText, Calendar, Settings, LogOut, Bell, Shield, TrendingUp } from 'lucide-react'

// ===============================
// TYPE DEFINITIONS
// ===============================

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
  color: string;
  bgColor: string;
}

interface Activity {
  id: number;
  title: string;
  description: string;
  date: string;
  status: string;
}

interface DashboardClientProps {
  userData: UserData;
  stats: Stat[];
  recentActivity: Activity[];
}

/**
 * UPDATED Dashboard Client Component
 * 
 * Features:
 * - Removed redundant success banner (now in header)
 * - Clean dashboard layout
 * - Professional spacing
 * - Responsive design for all devices
 * - TypeScript safety throughout
 * 
 * @returns Clean dashboard interface without redundant banners
 */
export default function DashboardClient({
  userData,
  stats,
  recentActivity,
}: DashboardClientProps): JSX.Element {
  console.log('🎯 Dashboard client component loaded successfully!')
  console.log('✅ Login process completed - user reached dashboard')
  
  // Client-side event handlers
  const handleNotificationsClick = () => {
    console.log('🔔 Notifications clicked')
  }
  
  const handleSettingsClick = () => {
    console.log('⚙️ Settings clicked')
  }
  
  const handleBookAuditClick = () => {
    console.log('📋 Book new audit clicked')
  }
  
  const handleUploadDocsClick = () => {
    console.log('📁 Upload documents clicked')
  }
  
  const handleViewReportsClick = () => {
    console.log('📊 View reports clicked')
  }
  
  const handleContactSupportClick = () => {
    console.log('📞 Contact support clicked')
  }
  
  const handleViewAllActivityClick = () => {
    console.log('📜 View all activity clicked')
  }
  
  const handleSupportPhoneClick = () => {
    console.log('📞 Support phone clicked')
  }
  
  const handleHelpCenterClick = () => {
    console.log('📖 Help center clicked')
  }
  
  const handleLogoutClick = () => {
    console.log('🚪 Logout clicked')
    alert('Logout functionality would be implemented here')
  }

  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Page Header - Clean, no redundant banners */}
      <div className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Dashboard Overview
              </h1>
              <p className="text-gray-600 mt-1">
                {userData.company} • {userData.plan} Plan
              </p>
            </div>
            
            <div className="flex items-center gap-3">
              <button 
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                onClick={handleNotificationsClick}
              >
                <Bell className="h-5 w-5" aria-hidden="true" />
              </button>
              
              <button
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors rounded-lg hover:bg-gray-100"
                aria-label="Account settings"
                onClick={handleSettingsClick}
              >
                <Settings className="h-5 w-5" aria-hidden="true" />
              </button>
              
              <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                <User className="h-5 w-5 text-white" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
        
        {/* Quick Actions Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Ready to take action?</h2>
              <p className="text-primary-100">
                Manage your audits, upload documents, or contact our support team.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleBookAuditClick}
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap"
              >
                📋 Book New Audit
              </button>
              
              <a
                href="tel:1300283487"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap"
                onClick={handleSupportPhoneClick}
              >
                📞 Call Support
              </a>
            </div>
          </div>
        </div>
        
        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  <p className="text-xs text-gray-500 mt-1">{stat.subtext}</p>
                </div>
                
                <div className={`p-3 rounded-xl ${stat.bgColor}`}>
                  {stat.title === 'Active Audits' && <FileText className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />}
                  {stat.title === 'Completed Audits' && <Shield className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />}
                  {stat.title === 'Compliance Score' && <TrendingUp className={`h-6 w-6 ${stat.color}`} aria-hidden="true" />}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h2>
              
              <div className="space-y-3">
                <button
                  onClick={handleBookAuditClick}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  Book New Audit
                </button>
                
                <button
                  onClick={handleUploadDocsClick}
                  className="w-full border-2 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  Upload Documents
                </button>
                
                <button
                  onClick={handleViewReportsClick}
                  className="w-full border-2 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                >
                  View Reports
                </button>
                
                <Link
                  href="/contact"
                  className="w-full border-2 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                  onClick={handleContactSupportClick}
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Account Summary */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h2>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Plan</span>
                  <span className="text-sm font-medium text-gray-900">{userData.plan}</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Next Audit Due</span>
                  <span className="text-sm font-medium text-gray-900">Dec 15, 2024</span>
                </div>
                
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-sm text-gray-600">Compliance Status</span>
                  <span className="text-sm font-medium text-green-600">✓ Current</span>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600">Support Level</span>
                  <span className="text-sm font-medium text-gray-900">Priority</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-semibold text-gray-900">Recent Activity</h2>
                <button
                  onClick={handleViewAllActivityClick}
                  className="text-sm text-primary-600 hover:text-primary-500 font-medium"
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                    <div className={`p-2 rounded-lg flex-shrink-0 ${
                      activity.status === 'completed' ? 'bg-green-100' :
                      activity.status === 'scheduled' ? 'bg-blue-100' : 'bg-gray-100'
                    }`}>
                      {activity.status === 'completed' ? (
                        <Shield className="h-4 w-4 text-green-600" aria-hidden="true" />
                      ) : activity.status === 'scheduled' ? (
                        <Calendar className="h-4 w-4 text-blue-600" aria-hidden="true" />
                      ) : (
                        <FileText className="h-4 w-4 text-gray-600" aria-hidden="true" />
                      )}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-sm font-medium text-gray-900">{activity.title}</h3>
                      <p className="text-sm text-gray-600 mt-1">{activity.description}</p>
                      <p className="text-xs text-gray-500 mt-1">{activity.date}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Tasks */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 mt-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Upcoming Tasks</h2>
              
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-yellow-50 border border-yellow-200">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-yellow-800">Upload Q4 Bank Statements</p>
                    <p className="text-xs text-yellow-600">Due in 5 days</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-blue-50 border border-blue-200">
                  <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-800">Review Draft Audit Report</p>
                    <p className="text-xs text-blue-600">Due in 2 weeks</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gray-50 border border-gray-200">
                  <div className="w-2 h-2 bg-gray-400 rounded-full flex-shrink-0"></div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-800">Schedule 2025 Audit Calendar</p>
                    <p className="text-xs text-gray-600">Due in 1 month</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-6 text-white">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold mb-2">Need Assistance?</h2>
              <p className="text-primary-100">
                Our expert team is here to help with your trust account auditing needs.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="tel:1300283487"
                className="bg-white text-primary-600 hover:bg-primary-50 font-semibold py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap"
                aria-label="Call AuditsPro support"
                onClick={handleSupportPhoneClick}
              >
                📞 Call 1300 AUDITS
              </a>
              
              <Link
                href="/help"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-2 px-4 rounded-lg transition-colors text-center whitespace-nowrap"
                aria-label="Visit help center"
                onClick={handleHelpCenterClick}
              >
                📖 Help Center
              </Link>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-semibold text-gray-900 mb-6">Performance Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600 mb-2">100%</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Compliance Rate</div>
              <div className="text-xs text-gray-600">Perfect record maintained</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600 mb-2">12 days</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Average Turnaround</div>
              <div className="text-xs text-gray-600">Faster than industry standard</div>
            </div>
            
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600 mb-2">5⭐</div>
              <div className="text-sm font-medium text-gray-900 mb-1">Service Rating</div>
              <div className="text-xs text-gray-600">Consistently excellent</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}