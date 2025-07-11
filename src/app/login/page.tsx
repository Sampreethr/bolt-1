import { Metadata } from 'next'
import Link from 'next/link'
import AuthLayout from '@/src/components/auth/AuthLayout'
import LoginForm from '@/src/components/auth/LoginForm'

/**
 * Login Page Metadata
 * SEO optimized for authentication page
 */
export const metadata: Metadata = {
  title: 'Login | AuditsPro Australia',
  description: 'Sign in to your AuditsPro Australia account to access your trust account auditing dashboard and manage your auditing services.',
  robots: {
    index: false, // Don't index auth pages
    follow: false,
  },
}

/**
 * ENHANCED Login Page Component (Server Component)
 * 
 * Features:
 * - Clean server-side rendering
 * - TypeScript safety throughout
 * - Professional authentication layout with logo
 * - Accessibility compliant
 * - No header/footer (handled by ConditionalLayout)
 * 
 * @returns Complete login page with authentication form
 */
export default function LoginPage(): JSX.Element {
  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your AuditsPro Australia account"
      showBackToHome={true}
      // Remove top padding
    >
      {/* Login Form Component */}
      <LoginForm />
      
      {/* Sign-up Link Section */}
      <div className="mt-6 pt-6 border-t border-gray-200">
        <p className="text-center text-sm text-gray-600">
          Don't have an account yet?{' '}
          <Link
            href="/signup"
            className="font-semibold text-primary-600 hover:text-primary-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            aria-label="Create a new AuditsPro Australia account"
          >
            Create Account
          </Link>
        </p>
        
        {/* Additional Help Links */}
        <div className="mt-4 flex flex-col sm:flex-row gap-3 sm:gap-6 justify-center items-center text-sm">
          <Link
            href="/forgot-password"
            className="text-gray-500 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            aria-label="Reset your password"
          >
            Forgot Password?
          </Link>
          
          <Link
            href="/help"
            className="text-gray-500 hover:text-primary-600 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded px-1"
            aria-label="Get help with your account"
          >
            Need Help?
          </Link>
        </div>
      </div>
      
      {/* Professional Trust Indicators */}
      <div className="mt-8 pt-6 border-t border-gray-100">
        <p className="text-xs text-gray-500 text-center mb-3 font-medium">
          Trusted by 500+ Australian businesses
        </p>
        
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-400">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>ASIC Registered</span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>SSL Encrypted</span>
          </div>
          
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span>Australian Owned</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  )
}