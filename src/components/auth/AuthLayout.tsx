'use client'

import { Shield, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface AuthLayoutProps {
  readonly children: React.ReactNode;
  readonly title: string;
  readonly subtitle?: string;
  readonly showBackToHome?: boolean;
}

/**
 * ULTRA CLEAN SPLIT-SCREEN: Authentication Layout
 * 
 * Features:
 * - Minimal split-screen design
 * - Only essential elements
 * - No trust indicators or benefits lists
 * - Clean professional appearance
 */
export default function UltraCleanAuthLayout({
  children,
  title,
  subtitle,
  showBackToHome = true,
}: AuthLayoutProps): JSX.Element {
  console.log('🎨 Ultra Clean AuthLayout rendering with title:', title)
  
  const handleBackToHomeClick = () => {
    console.log('🔙 Back to home clicked from auth page')
  }
  
  const handleLogoClick = () => {
    console.log('🏠 AuditsPro logo clicked in auth layout')
  }

  return (
    <div className="auth-layout min-h-screen bg-gradient-to-br from-primary-500 via-primary-600 to-primary-700 relative overflow-hidden">
      
      {/* Main Content Card */}
      <div className="min-h-screen flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-7xl bg-white rounded-3xl shadow-2xl overflow-hidden">
          
          {/* Minimal Header */}
          <header className="flex items-center justify-between p-6 lg:p-8">
            {/* Back Button */}
            {showBackToHome && (
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-primary-600 transition-colors"
                onClick={handleBackToHomeClick}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                <span>Back to Home</span>
              </Link>
            )}
            
            {/* Empty space for balance */}
            {!showBackToHome && <div></div>}
            
            {/* Right Side - Just Contact Support */}
            <div className="flex items-center">
              <a
                href="tel:1300283487"
                className="text-sm text-gray-500 hover:text-primary-600 transition-colors"
              >
                📞 Need Help?
              </a>
            </div>
          </header>

          {/* Main Split Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">
            
            {/* Left Side - Minimal Branding & Illustration */}
            <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 flex flex-col justify-center items-center p-8 lg:p-12">
              
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="w-full h-full bg-primary-500 bg-[radial-gradient(circle_at_1px_1px,_rgba(59,130,246,0.3)_1px,_transparent_0)] bg-[length:30px_30px]"></div>
              </div>

              <div className="relative z-10 text-center max-w-md">
                
                {/* Logo Section */}
                <Link 
                  href="/"
                  className="inline-flex flex-col items-center group mb-8"
                  onClick={handleLogoClick}
                >
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 mb-4">
                    <Shield className="h-12 w-12 text-white" aria-hidden="true" />
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                    <span className="text-orange-500">Audits</span>Pro
                  </h1>
                  <p className="text-lg text-orange-500 font-semibold -mt-1">Australia</p>
                </Link>

                {/* Illustration Area */}
                <div className="mb-8">
                  {/* Professional Audit Illustration */}
                  <div className="relative w-64 h-64 mx-auto">
                    {/* Main Character - Professional Auditor */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative">
                        {/* Rocket/Growth Metaphor */}
                        <div className="w-32 h-40 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full relative transform rotate-12 shadow-xl">
                          {/* Rocket Body */}
                          <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-16 h-24 bg-white rounded-lg shadow-lg flex items-center justify-center">
                            <Shield className="h-8 w-8 text-primary-500" />
                          </div>
                          
                          {/* Rocket Fins */}
                          <div className="absolute bottom-2 left-2 w-6 h-8 bg-orange-500 rounded-l-full"></div>
                          <div className="absolute bottom-2 right-2 w-6 h-8 bg-orange-500 rounded-r-full"></div>
                          
                          {/* Fire/Thrust */}
                          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                            <div className="w-8 h-12 bg-gradient-to-b from-orange-400 to-red-500 rounded-b-full opacity-80"></div>
                            <div className="w-6 h-8 bg-gradient-to-b from-yellow-400 to-orange-500 rounded-b-full absolute top-2 left-1 opacity-90"></div>
                          </div>
                        </div>

                        {/* Floating Elements - Documents */}
                        <div className="absolute -top-4 -left-8 w-8 h-6 bg-white rounded shadow-lg transform rotate-12 flex items-center justify-center">
                          <div className="w-4 h-3 bg-green-500 rounded-sm"></div>
                        </div>
                        
                        <div className="absolute -top-2 right-8 w-6 h-8 bg-white rounded shadow-lg transform -rotate-12 flex items-center justify-center">
                          <div className="w-3 h-4 bg-primary-500 rounded-sm"></div>
                        </div>

                        {/* Stars/Success indicators */}
                        <div className="absolute -top-8 left-12 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
                        <div className="absolute top-2 -right-12 w-2 h-2 bg-green-400 rounded-full animate-pulse delay-300"></div>
                        <div className="absolute -bottom-4 -left-12 w-4 h-4 bg-blue-400 rounded-full animate-pulse delay-700"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Message */}
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {title === 'Welcome Back' ? (
                    <>
                      Sign In to<br />
                      <span className="text-primary-600">AuditsPro Direct</span>
                    </>
                  ) : (
                    <>
                      Join<br />
                      <span className="text-primary-600">AuditsPro Australia</span>
                    </>
                  )}
                </h2>

                {/* Sub Message */}
                <p className="text-gray-600 leading-relaxed mb-6">
                  {title === 'Welcome Back' ? (
                    <>
                      Access your professional audit dashboard and manage your compliance needs.
                    </>
                  ) : (
                    <>
                      Create your account to access Australia's leading trust account auditing services.
                    </>
                  )}
                </p>

                {/* Account Links */}
                <div>
                  {title === 'Welcome Back' ? (
                    <p className="text-sm text-gray-600">
                      If you don't have an account, you can{' '}
                      <Link href="/signup" className="text-primary-600 font-medium hover:text-primary-500">
                        Register here!
                      </Link>
                    </p>
                  ) : (
                    <p className="text-sm text-gray-600">
                      Already have an account?{' '}
                      <Link href="/login" className="text-primary-600 font-medium hover:text-primary-500">
                        Sign in here!
                      </Link>
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="w-full max-w-md mx-auto">
                
                {/* Form Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="text-gray-600">
                      {subtitle}
                    </p>
                  )}
                </div>

                {/* Form Content */}
                <div className="space-y-6">
                  {children}
                </div>

                {/* Social Login Options */}
                <div className="mt-8">
                  <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-300" />
                    </div>
                    <div className="relative flex justify-center text-sm">
                      <span className="px-2 bg-white text-gray-500">Or continue with</span>
                    </div>
                  </div>

                  <div className="mt-6 grid grid-cols-3 gap-3">
                    <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                      <svg className="h-5 w-5" viewBox="0 0 24 24">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                      </svg>
                    </button>

                    <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                      </svg>
                    </button>

                    <button className="w-full inline-flex justify-center py-3 px-4 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                      <svg className="h-5 w-5" fill="#1877F2" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}