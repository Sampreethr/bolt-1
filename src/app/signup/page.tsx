import { Metadata } from 'next'
import Link from 'next/link'
import AuthLayout from '@/src/components/auth/AuthLayout'
import SignupForm from '@/src/components/auth/SignupForm'

/**
 * Sign-up Page Metadata
 * SEO optimized for registration page
 */
export const metadata: Metadata = {
  title: 'Create Account | AuditsPro Australia',
  description: 'Create your AuditsPro Australia account to access professional trust account auditing services across Australia.',
  robots: {
    index: false, // Don't index auth pages
    follow: false,
  },
}

/**
 * ENHANCED Sign-up Page Component
 * 
 * Features:
 * - Complete responsive design system
 * - TypeScript safety and type definitions
 * - Consistent with design system
 * - Professional registration layout with logo
 * - Accessibility compliance (WCAG 2.1)
 * - Touch-optimized interactions
 * - No header/footer (handled by ConditionalLayout)
 * 
 * Device Support:
 * - Galaxy Fold (280px folded, 717px unfolded)
 * - iPhone SE to Pro Max (375px-428px)
 * - Samsung Galaxy series (360px-412px)
 * - iPad Mini to Pro (768px-1024px)
 * - All laptop and desktop sizes (1024px+)
 * 
 * @returns Complete sign-up page with registration form
 */
export default function SignupPage(): JSX.Element {
  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join 500+ Australian businesses using AuditsPro"
      showBackToHome={true}
    >
      {/* Sign-up Form Component */}
      <SignupForm />
      
      {/* Login Link Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link
            href="/login"
            className="font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            aria-label="Sign in to your existing account"
          >
            Sign In
          </Link>
        </p>
      </div>
      
      {/* Terms and Privacy */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-500 leading-relaxed">
          By creating an account, you agree to our{' '}
          <Link
            href="/terms"
            className="text-primary-600 hover:text-primary-500 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            aria-label="Read our Terms of Service"
          >
            Terms of Service
          </Link>
          {' '}and{' '}
          <Link
            href="/privacy"
            className="text-primary-600 hover:text-primary-500 underline focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded"
            aria-label="Read our Privacy Policy"
          >
            Privacy Policy
          </Link>
        </p>
      </div>
      
      {/* Business Benefits */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-600 text-center font-medium mb-4">
          What you get with AuditsPro Australia:
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-gray-500">
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span>7-14 day turnaround</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span>Fixed transparent pricing</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span>ASIC registered auditors</span>
          </div>
          
          <div className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span>24/7 customer support</span>
          </div>
          
          <div className="flex items-center gap-2 sm:col-span-2">
            <div className="w-1.5 h-1.5 bg-primary-500 rounded-full flex-shrink-0"></div>
            <span>Government compliant reporting</span>
          </div>
        </div>
      </div>
      
      {/* Contact Support */}
      <div className="mt-6 text-center">
        <p className="text-xs text-gray-400">
          Need assistance?{' '}
          <a
            href="tel:1300283487"
            className="text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            aria-label="Call AuditsPro support"
          >
            Call 1300 AUDITS
          </a>
        </p>
      </div>
    </AuthLayout>
  )
}