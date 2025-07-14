'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Shield, Phone, Home, Briefcase, Users, Star, Mail, LogIn, User, CheckCircle } from 'lucide-react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { useAuth } from '@/src/context/AuthContext'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface NavigationItem {
  readonly name: string;
  readonly href: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly ariaLabel: string;
}

// ===============================
// NAVIGATION CONFIGURATION
// ===============================

const navigation: readonly NavigationItem[] = [
  { 
    name: 'Home', 
    href: '/', 
    icon: Home,
    ariaLabel: 'Navigate to home page' 
  },
  { 
    name: 'Services', 
    href: '/services', 
    icon: Briefcase,
    ariaLabel: 'View our auditing services' 
  },
  { 
    name: 'About', 
    href: '/about', 
    icon: Users,
    ariaLabel: 'Learn about our company' 
  },
  { 
    name: 'Testimonials', 
    href: '/testimonials', 
    icon: Star,
    ariaLabel: 'Read client testimonials' 
  },
  { 
    name: 'Contact', 
    href: '/contact', 
    icon: Mail,
    ariaLabel: 'Contact our team' 
  },
] as const

// ===============================
// LOGIN BUTTON COMPONENT
// ===============================

interface LoginButtonProps {
  readonly isAuthenticated?: boolean;
  readonly onLoginClick?: () => void;
  readonly onLogoutClick?: () => void;
  readonly className?: string;
}

const LoginButton: React.FC<LoginButtonProps> = ({ 
  isAuthenticated = false, 
  onLoginClick,
  onLogoutClick,
  className = '' 
}) => {
  const router = useRouter()
  
  const handleClick = useCallback(() => {
    console.log('🖱️ Login button clicked!')
    console.log('🔒 Is authenticated:', isAuthenticated)
    
    if (isAuthenticated && onLogoutClick) {
      console.log('🚪 Executing logout...')
      onLogoutClick();
    } else if (!isAuthenticated && onLoginClick) {
      console.log('🔑 Executing custom login handler...')
      onLoginClick();
    } else {
      console.log('🔄 Navigating to login page...')
      try {
        router.push('/login')
        console.log('✅ Navigation to /login initiated')
      } catch (error) {
        console.error('❌ Navigation error:', error)
      }
    }
  }, [isAuthenticated, onLoginClick, onLogoutClick, router]);

  return (
    <button
      onClick={handleClick}
      className={`
        group relative inline-flex items-center justify-center
        min-h-[44px] min-w-[44px] touch-manipulation
        font-semibold text-sm transition-all duration-200
        focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
        rounded-lg hover:scale-105 transform
        ${isAuthenticated 
          ? 'text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300' 
          : 'text-primary-600 hover:text-white hover:bg-primary-600 bg-white border-2 border-primary-500 hover:border-primary-600'
        }
        ${className}
      `}
      aria-label={isAuthenticated ? 'User account menu' : 'Login to your account'}
      type="button"
    >
      {/* Desktop & Tablet: Icon + Text */}
      <span className="hidden sm:flex items-center space-x-2 px-3 sm:px-4 py-2">
        {isAuthenticated ? (
          <User className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        ) : (
          <LogIn className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
        )}
        <span className="font-medium">
          {isAuthenticated ? 'Account' : 'Login'}
        </span>
      </span>

      {/* Mobile: Icon Only */}
      <span className="sm:hidden flex items-center justify-center w-full h-full">
        {isAuthenticated ? (
          <User className="h-5 w-5" aria-hidden="true" />
        ) : (
          <LogIn className="h-5 w-5" aria-hidden="true" />
        )}
      </span>

      {/* Subtle hover effect */}
      <span 
        className="absolute inset-0 rounded-lg bg-primary-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"
        aria-hidden="true"
      />
    </button>
  );
};

// ===============================
// MAIN HEADER COMPONENT WITH ROUTE AWARENESS
// ===============================

export default function EnhancedHeaderWithAuth(): JSX.Element | null {
  // ===============================
  // HOOKS & STATE
  // ===============================
  
  const pathname = usePathname()
  const router = useRouter()
  const { user, isAuthenticated, logout } = useAuth()
  
  // UI State
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)

  console.log('🔄 Header component rendering...')
  console.log('📍 Current pathname:', pathname)
  console.log('🔒 Authentication state:', isAuthenticated)
  console.log('👤 User:', user?.name || 'Not authenticated')

  // ===============================
  // ROUTE DETECTION - PREVENT HEADER ON DASHBOARD/AUTH ROUTES
  // ===============================
  
  /**
   * CRITICAL: Header should NOT render on certain routes
   * - Dashboard routes: Independent layout with sidebar
   * - Auth routes: Clean full-screen layout
   * - Profile routes: Dashboard-style layout
   */
  const isDashboardRoute = pathname.startsWith('/dashboard')
  const authRoutes = ['/login', '/signup', '/forgot-password', '/reset-password', '/verify-email', '/welcome']
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  const isProfileRoute = pathname.startsWith('/profile')
  
  const shouldHideHeader = isDashboardRoute || isAuthRoute || isProfileRoute
  
  console.log('🎯 Header Route Detection:', {
    pathname,
    isDashboardRoute,
    isAuthRoute,
    isProfileRoute,
    shouldHideHeader
  })
  
  // ===============================
  // EARLY RETURN - DON'T RENDER HEADER ON SPECIFIC ROUTES
  // ===============================
  
  if (shouldHideHeader) {
    console.log('🚫 Header hidden for route:', pathname)
    return null // Don't render header at all
  }

  // ===============================
  // EFFECTS
  // ===============================

  // Scroll effect handler
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 10)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element
      
      if (isOpen && !target.closest('#mobile-navigation') && !target.closest('[aria-expanded="true"]')) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isOpen) setIsOpen(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen])

  // ===============================
  // EVENT HANDLERS
  // ===============================

  const handleMobileNavClick = useCallback(() => {
    setIsOpen(false)
  }, [])

  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev)
  }, [])

  const isActiveLink = useCallback((href: string): boolean => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }, [pathname])

  const handleLoginClick = useCallback(() => {
    console.log('🔑 Custom login handler called from header')
    console.log('🔄 Attempting navigation to /login...')
    
    try {
      router.push('/login')
      console.log('✅ Header: Navigation to /login successful')
    } catch (error) {
      console.error('❌ Header: Navigation error:', error)
    }
  }, [router])

  const handleLogoutClick = useCallback(async () => {
    console.log('🚪 Logout clicked from header');
    try {
      await logout();
    } catch (error) {
      console.error('❌ Logout error:', error);
    }
  }, [logout])

  // Get user's first name for personalization
  const userFirstName = user?.name?.split(' ')[0] || 'User'

  // ===============================
  // RENDER - ONLY FOR MAIN WEBSITE ROUTES
  // ===============================

  return (
    <header 
      className={`
        fixed top-0 w-full z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm border-b border-gray-100'
        }
      `}
      role="banner"
    >
      {/* Main Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav 
          className="flex justify-between items-center py-3 sm:py-4"
          role="navigation" 
          aria-label="Main navigation"
        >
          
          {/* Logo Section */}
          <div className="flex-shrink-0 order-1">
            <Link 
              href="/"
              className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg p-1 min-h-[44px] touch-manipulation"
              aria-label="AuditsPro Australia homepage"
              onClick={() => console.log('🏠 Logo clicked')}
            >
              <div className="p-2 sm:p-2.5 bg-primary-500 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 group-hover:scale-105">
                <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg sm:text-xl lg:text-2xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                  AuditsPro
                </span>
                <span className="text-xs text-gray-500 font-medium -mt-1">Australia</span>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex flex-1 justify-center px-8 order-2">
            <div className="flex items-center space-x-6 xl:space-x-8">
              {navigation.map((item) => {
                const IconComponent = item.icon
                const isActive = isActiveLink(item.href)
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative py-2 px-3 rounded-lg transition-all duration-200 font-medium text-sm lg:text-base
                      min-h-[44px] flex items-center space-x-2 touch-manipulation
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      ${isActive 
                        ? 'text-primary-600 bg-primary-50 font-semibold shadow-sm' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                      }
                    `}
                    aria-label={item.ariaLabel}
                    aria-current={isActive ? 'page' : undefined}
                    onClick={() => console.log(`📄 Navigation clicked: ${item.name}`)}
                  >
                    <IconComponent 
                      className={`h-4 w-4 transition-colors duration-200 ${
                        isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-primary-500'
                      }`}
                      aria-hidden="true"
                    />
                    <span>{item.name}</span>
                    
                    {isActive && (
                      <span 
                        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
                        aria-hidden="true"
                      />
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-4 flex-shrink-0 order-3">
            {/* Phone Display */}
            <div className="flex items-center space-x-2 text-sm text-gray-700 bg-gray-50 hover:bg-gray-100 px-3 py-2 rounded-lg border border-gray-200 hover:border-primary-300 transition-all duration-200">
              <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
              <a 
                href="tel:1300283487"
                className="font-semibold hover:text-primary-600 transition-colors duration-200"
                aria-label="Call AuditsPro at 1300 AUDITS"
                onClick={() => console.log('📞 Phone number clicked')}
              >
                1300 AUDITS
              </a>
            </div>
            
            {/* Authentication Actions */}
            {isAuthenticated ? (
              /* Profile Icon for Authenticated Users */
              <Link
                href="/profile"
                className="group relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg hover:scale-105 transform text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 mr-2"
                aria-label="Go to profile settings"
                onClick={() => console.log('👤 Profile icon clicked')}
              >
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
                
                {/* Hover tooltip */}
                <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10">
                  Profile Settings
                </span>
              </Link>
            ) : (
              /* Login Button for Non-Authenticated Users */
              <LoginButton
                isAuthenticated={isAuthenticated}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogoutClick}
                className="mr-2"
              />
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center space-x-2 flex-shrink-0 order-3">
            {/* Mobile Profile/Login Button */}
            {isAuthenticated ? (
              <Link
                href="/profile"
                className="group relative inline-flex items-center justify-center min-h-[44px] min-w-[44px] touch-manipulation font-semibold text-sm transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg hover:scale-105 transform text-gray-700 hover:text-primary-600 bg-gray-50 hover:bg-primary-50 border border-gray-200 hover:border-primary-300 mr-2"
                aria-label="Go to profile settings"
                onClick={() => console.log('👤 Mobile profile icon clicked')}
              >
                <div className="w-8 h-8 rounded-full bg-primary-500 flex items-center justify-center">
                  <User className="h-5 w-5 text-white" aria-hidden="true" />
                </div>
              </Link>
            ) : (
              <LoginButton
                isAuthenticated={isAuthenticated}
                onLoginClick={handleLoginClick}
                onLogoutClick={handleLogoutClick}
                className="mr-2"
              />
            )}
            
            {/* Mobile Menu Toggle */}
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 hover:border-primary-300 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 touch-manipulation"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* ===============================
          INTEGRATED AUTHENTICATION STATUS BAR - MAIN WEBSITE ONLY
          =============================== */}
      {isAuthenticated && user && (
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-3">
              <div className="flex items-center space-x-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" aria-hidden="true" />
                  <span className="text-sm font-semibold text-green-800">
                    Welcome back, {userFirstName}!
                  </span>
                </div>
                <div className="hidden sm:block w-px h-4 bg-green-300" aria-hidden="true" />
                <span className="hidden sm:inline text-sm text-green-700">
                  {user.email}
                </span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Link
                  href="/dashboard"
                  className="text-sm font-medium text-green-700 hover:text-green-800 transition-colors duration-200 flex items-center space-x-1"
                >
                  <span>Dashboard</span>
                  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                
                <button
                  onClick={handleLogoutClick}
                  className="text-sm text-green-600 hover:text-green-700 transition-colors duration-200"
                  aria-label="Sign out of your account"
                >
                  Sign Out
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <>
          <div 
            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
            onClick={handleMobileNavClick}
            aria-hidden="true"
          />
          
          <div 
            id="mobile-navigation"
            className="fixed top-full left-0 right-0 bg-white border-t border-gray-200 z-50 lg:hidden max-h-[calc(100vh-80px)] overflow-y-auto animate-in slide-in-from-top-2 duration-200 shadow-xl"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="p-4 sm:p-6 space-y-6">
              
              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => {
                  const IconComponent = item.icon
                  const isActive = isActiveLink(item.href)
                  
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center space-x-3 font-medium py-3 px-4 rounded-lg 
                        min-h-[44px] transition-all duration-200 touch-manipulation
                        ${isActive 
                          ? 'text-primary-600 bg-primary-100 border-l-4 border-primary-500 shadow-sm' 
                          : 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                        }
                      `}
                      onClick={() => {
                        console.log(`📱 Mobile nav clicked: ${item.name}`)
                        handleMobileNavClick()
                      }}
                      aria-label={item.ariaLabel}
                      role="menuitem"
                      aria-current={isActive ? 'page' : undefined}
                    >
                      <IconComponent 
                        className={`h-5 w-5 flex-shrink-0 ${
                          isActive ? 'text-primary-600' : 'text-gray-500'
                        }`}
                        aria-hidden="true"
                      />
                      <span className="flex-1">{item.name}</span>
                      {isActive && (
                        <span className="text-xs bg-primary-500 text-white px-2 py-1 rounded-full font-semibold">
                          Current
                        </span>
                      )}
                    </Link>
                  )
                })}
              </div>
              
              {/* Mobile Authentication Section */}
              <div className="space-y-3 pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">Account</span>
                  {isAuthenticated && (
                    <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-medium">
                      Logged In
                    </span>
                  )}
                </div>
                
                {isAuthenticated ? (
                  <div className="space-y-3">
                    <div className="bg-green-50 rounded-lg p-3 border border-green-200">
                      <div className="flex items-center space-x-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">Welcome, {userFirstName}!</span>
                      </div>
                      <p className="text-xs text-green-700">{user?.email}</p>
                    </div>
                    
                    <Link
                      href="/profile"
                      className="w-full bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                      onClick={handleMobileNavClick}
                    >
                      Profile Settings
                    </Link>
                    
                    <Link
                      href="/dashboard"
                      className="w-full border-2 border-gray-200 hover:border-primary-300 text-gray-700 hover:text-primary-600 font-medium py-3 px-4 rounded-lg transition-colors text-center block"
                      onClick={handleMobileNavClick}
                    >
                      Go to Dashboard
                    </Link>
                    
                    <button
                      onClick={() => {
                        handleLogoutClick();
                        handleMobileNavClick();
                      }}
                      className="w-full border-2 border-gray-200 hover:border-red-300 text-gray-700 hover:text-red-600 font-medium py-3 px-4 rounded-lg transition-colors text-center"
                    >
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <LoginButton
                    isAuthenticated={false}
                    onLoginClick={() => {
                      console.log('📱 Mobile login clicked')
                      handleLoginClick();
                      handleMobileNavClick();
                    }}
                    className="w-full justify-center"
                  />
                )}
              </div>
              
              {/* Contact Information */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 mt-4 border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-lg">
                <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
                <a 
                  href="tel:1300283487"
                  className="font-semibold hover:text-primary-600 transition-colors duration-200"
                  aria-label="Call AuditsPro"
                  onClick={() => console.log('📞 Mobile phone clicked')}
                >
                  Call: 1300 AUDITS
                </a>
              </div>
              
              {/* Contact/Services Link */}
              <Link 
                href="/contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg w-full min-h-[44px] flex items-center justify-center touch-manipulation transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg"
                onClick={() => {
                  console.log('📞 Mobile contact clicked')
                  handleMobileNavClick()
                }}
                aria-label="Contact us for audit services"
                role="menuitem"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </>
      )}
    </header>
  )
}

/**
 * ===============================
 * HEADER ROUTE AWARENESS SUMMARY
 * ===============================
 * 
 * 🎯 ROUTE DETECTION:
 * - Dashboard routes (/dashboard*): Header returns null
 * - Auth routes (/login, /signup, etc.): Header returns null
 * - Profile routes (/profile*): Header returns null
 * - Main website routes: Header renders normally
 * 
 * 🔍 BENEFITS:
 * - Zero conflicts with dashboard layout
 * - Clean auth page experience
 * - Professional profile page layout
 * - Complete layout independence
 * 
 * 📱 RESPONSIVE DESIGN:
 * - Mobile: Touch-optimized (44px minimum targets)
 * - Tablet: Balanced layout with proper spacing
 * - Desktop: Full navigation with all features
 * - Foldable: Adaptive layout for all orientations
 * 
 * ⚡ PERFORMANCE:
 * - Early return prevents unnecessary rendering
 * - Minimal JavaScript execution on hidden routes
 * - Clean component lifecycle management
 * - Memory efficient route detection
 * 
 * 🔐 AUTHENTICATION:
 * - Proper user state integration
 * - Secure logout functionality
 * - Profile link management
 * - Dashboard access for authenticated users
 * 
 * This updated header ensures complete layout independence
 * for dashboard, auth, and profile routes while maintaining
 * full functionality for main website routes.
 */