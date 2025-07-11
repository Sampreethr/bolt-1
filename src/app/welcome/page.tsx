'use client'

import { Metadata } from 'next'
import Link from 'next/link'
import { CheckCircle2, Shield, Clock, Users, ArrowRight } from 'lucide-react'

/**
 * Enhanced Welcome Page Component (Client Component)
 * 
 * Features:
 * - Celebrates successful account creation
 * - Guides users to next steps
 * - Showcases key benefits
 * - Responsive design for all devices
 * - Uses Tailwind CSS instead of styled-jsx
 * 
 * @returns Complete welcome page with onboarding flow
 */
export default function WelcomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-primary-50/30 flex flex-col items-center justify-center px-4 py-8">
      
      {/* Success Animation Container */}
      <div className="max-w-2xl mx-auto text-center space-y-8">
        
        {/* Success Icon */}
        <div className="relative">
          <div className="mx-auto w-20 h-20 bg-green-500 rounded-full flex items-center justify-center shadow-2xl animate-bounce">
            <CheckCircle2 className="h-12 w-12 text-white" aria-hidden="true" />
          </div>
          
          {/* Floating elements */}
          <div className="absolute -top-4 -right-4 w-6 h-6 bg-primary-200 rounded-full animate-pulse"></div>
          <div className="absolute -bottom-2 -left-6 w-4 h-4 bg-green-200 rounded-full animate-pulse opacity-75"></div>
        </div>

        {/* Welcome Message */}
        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Welcome to AuditsPro Australia!
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-600 max-w-xl mx-auto leading-relaxed">
            Your account has been successfully created. You're now ready to access Australia's most trusted trust account auditing services.
          </p>
        </div>

        {/* Key Benefits */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-gray-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-6">
            What's Next?
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Complete Setup',
                description: 'Verify your email and complete your business profile',
                color: 'text-primary-600',
                bgColor: 'bg-primary-100',
              },
              {
                icon: Clock,
                title: 'Schedule Audit',
                description: 'Book your first trust account audit with our experts',
                color: 'text-green-600',
                bgColor: 'bg-green-100',
              },
              {
                icon: Users,
                title: 'Expert Support',
                description: 'Get guidance from our ASIC registered auditors',
                color: 'text-purple-600',
                bgColor: 'bg-purple-100',
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className={`mx-auto w-12 h-12 ${item.bgColor} rounded-xl flex items-center justify-center`}>
                  <item.icon className={`h-6 w-6 ${item.color}`} aria-hidden="true" />
                </div>
                
                <h3 className="font-semibold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/dashboard"
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 inline-flex items-center justify-center group min-h-[48px] touch-manipulation"
            aria-label="Go to your dashboard"
          >
            <span>Go to Dashboard</span>
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          
          <Link
            href="/services"
            className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 inline-flex items-center justify-center min-h-[48px] touch-manipulation"
            aria-label="View our services"
          >
            <span>View Services</span>
          </Link>
        </div>

        {/* Support Information */}
        <div className="pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-600 mb-4">
            Need help getting started? Our team is here to assist you.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center text-sm">
            <a
              href="tel:1300283487"
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Call AuditsPro support"
            >
              📞 Call 1300 AUDITS
            </a>
            
            <span className="hidden sm:block text-gray-300">|</span>
            
            <a
              href="mailto:support@auditspro.com.au"
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Email AuditsPro support"
            >
              ✉️ Email Support
            </a>
            
            <span className="hidden sm:block text-gray-300">|</span>
            
            <Link
              href="/help"
              className="font-medium text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Visit help center"
            >
              📖 Help Center
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

// Note: Metadata cannot be exported from Client Components
// If you need metadata, create a separate layout or move this to a Server Component wrapper