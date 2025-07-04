'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Shield, Phone, Home, Briefcase, Users, Star, Mail, User, LogIn, Bell } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useAuth } from '@/src/contexts/AuthContext'
import LoginModal from '@/src/components/auth/LoginModal'
import UserMenu from '@/src/components/auth/UserMenu'

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
// UTILITY FUNCTIONS
// ===============================

/**
 * Generate user initials from full name
 */
const getUserInitials = (name: string): string => {
  return name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

// ===============================
// MAIN HEADER COMPONENT
// ===============================

export default function HeaderWithAuth(): JSX.Element {
  // ===============================
  // HOOKS & STATE
  // ===============================
  
  const { user, isAuthenticated } = useAuth()
  const pathname = usePathname()
  
  // UI State
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [showLoginModal, setShowLoginModal] = useState<boolean>(false)
  const [showUserMenu, setShowUserMenu] = useState<boolean>(false)

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
      
      // Close mobile menu if clicking outside
      if (isOpen && !target.closest('#mobile-navigation') && !target.closest('[aria-expanded="true"]')) {
        setIsOpen(false)
      }
      
      // Close user menu if clicking outside
      if (showUserMenu && !target.closest('.user-menu-container')) {
        setShowUserMenu(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isOpen, showUserMenu])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        if (isOpen) setIsOpen(false)
        if (showUserMenu) setShowUserMenu(false)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, showUserMenu])

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
    setShowLoginModal(true)
    setIsOpen(false) // Close mobile menu if open
  }, [])

  const handleUserMenuToggle = useCallback(() => {
    setShowUserMenu(prev => !prev)
  }, [])

  const handleCloseLoginModal = useCallback(() => {
    setShowLoginModal(false)
  }, [])

  const handleCloseUserMenu = useCallback(() => {
    setShowUserMenu(false)
  }, [])

  // ===============================
  // RENDER
  // ===============================

  return (
    <>
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
                >
                  1300 AUDITS
                </a>
              </div>
              
              {/* Authentication Section */}
              {isAuthenticated && user ? (
                <div className="relative user-menu-container">
                  <button
                    onClick={handleUserMenuToggle}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="User menu"
                    aria-expanded={showUserMenu}
                  >
                    <div className="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {user.avatar ? (
                        <img src={user.avatar} alt={user.name} className="w-8 h-8 rounded-full object-cover" />
                      ) : (
                        getUserInitials(user.name)
                      )}
                    </div>
                    <div className="hidden xl:flex flex-col items-start">
                      <span className="text-sm font-medium text-gray-900 truncate max-w-[120px]">
                        {user.name.split(' ')[0]}
                      </span>
                      <span className="text-xs text-gray-500 truncate max-w-[120px]">
                        {user.company}
                      </span>
                    </div>
                    <Bell className="h-4 w-4 text-gray-500" aria-hidden="true" />
                  </button>
                  
                  <UserMenu 
                    isOpen={showUserMenu} 
                    onClose={handleCloseUserMenu} 
                  />
                </div>
              ) : (
                <>
                  <button
                    onClick={handleLoginClick}
                    className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:text-primary-600 font-medium rounded-lg hover:bg-gray-50 transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    aria-label="Sign in to your account"
                  >
                    <LogIn className="h-4 w-4" aria-hidden="true" />
                    <span>Sign In</span>
                  </button>
                  
                  <Link 
                    href="/contact" 
                    className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2.5 px-5 xl:px-6 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200 min-h-[44px] flex items-center justify-center touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 text-sm lg:text-base"
                    aria-label="Get a quote for audit services"
                  >
                    Get Quote
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex-shrink-0 order-3">
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
                  
                  {/* Mobile User Section */}
                  {isAuthenticated && user ? (
                    <div className="bg-primary-50 rounded-lg p-4 border border-primary-200">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                          {user.avatar ? (
                            <img src={user.avatar} alt={user.name} className="w-10 h-10 rounded-full object-cover" />
                          ) : (
                            getUserInitials(user.name)
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-gray-900">{user.name}</div>
                          <div className="text-sm text-gray-600">{user.company}</div>
                          <div className="text-xs text-primary-600 font-medium">{user.accountType} Account</div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center">
                      <button
                        onClick={handleLoginClick}
                        className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      >
                        <LogIn className="h-5 w-5" aria-hidden="true" />
                        <span>Sign In</span>
                      </button>
                    </div>
                  )}
                  
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
                          onClick={handleMobileNavClick}
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
                  
                  {/* Contact Information */}
                  <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 mt-4 border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-lg">
                    <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
                    <a 
                      href="tel:1300283487"
                      className="font-semibold hover:text-primary-600 transition-colors duration-200"
                      aria-label="Call AuditsPro"
                    >
                      Call: 1300 AUDITS
                    </a>
                  </div>
                  
                  {/* Mobile CTA */}
                  {!isAuthenticated && (
                    <Link 
                      href="/contact" 
                      className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-3 px-6 rounded-lg w-full min-h-[44px] flex items-center justify-center touch-manipulation transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 shadow-lg"
                      onClick={handleMobileNavClick}
                      aria-label="Get a quote for audit services"
                      role="menuitem"
                    >
                      Get Quote
                    </Link>
                  )}
                </div>
              </div>
            </>
          )}
        </div>
      </header>

      {/* Login Modal - Rendered at root level for proper z-index */}
      <LoginModal 
        isOpen={showLoginModal}
        onClose={handleCloseLoginModal}
      />
    </>
  )
}