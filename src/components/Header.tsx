'use client'

import { useState, useEffect, useCallback } from 'react'
import { Menu, X, Shield, Phone, Home, Briefcase, Users, Star, Mail } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

/**
 * Enhanced Header Component with Next.js App Router Support
 * 
 * Key Improvements:
 * - Professional active states without dots
 * - Modern underline active indicators
 * - 100% responsive design for all device sizes
 * - WCAG 2.5.5 compliant touch targets (minimum 44px)
 * - Enhanced accessibility with ARIA labels
 * - Mobile-first navigation with smooth animations
 * - TypeScript strict compliance
 * - Performance optimized with useCallback
 * - Professional visual hierarchy
 * 
 * @returns {JSX.Element} Professional Header component
 */

interface NavigationItem {
  readonly name: string;
  readonly href: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly ariaLabel: string;
}

export default function EnhancedHeader(): JSX.Element {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  /**
   * Navigation items with proper Next.js routing
   */
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
      ariaLabel: 'Navigate to services page' 
    },
    { 
      name: 'About', 
      href: '/about', 
      icon: Users,
      ariaLabel: 'Navigate to about page' 
    },
    { 
      name: 'Testimonials', 
      href: '/testimonials', 
      icon: Star,
      ariaLabel: 'Navigate to testimonials page' 
    },
    { 
      name: 'Contact', 
      href: '/contact', 
      icon: Mail,
      ariaLabel: 'Navigate to contact page' 
    },
  ];

  /**
   * Handle scroll effect for header background
   */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /**
   * Close mobile menu when navigation item is clicked
   */
  const handleMobileNavClick = useCallback(() => {
    setIsOpen(false);
  }, []);

  /**
   * Handle mobile menu toggle
   */
  const handleMenuToggle = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  /**
   * Check if current path is active
   */
  const isActiveLink = useCallback((href: string): boolean => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  }, [pathname]);

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
      <nav 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" 
        role="navigation" 
        aria-label="Main navigation"
      >
        <div className="flex justify-between items-center py-3 sm:py-4">
          
          {/* Enhanced Logo Section */}
          <Link 
            href="/"
            className="flex items-center space-x-2 sm:space-x-3 group focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg"
            aria-label="AuditsPro Australia homepage"
          >
            <div className="p-2 sm:p-2.5 bg-primary-500 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-105">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" aria-hidden="true" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-primary-600 group-hover:text-primary-700 transition-colors duration-200">
                AuditsPro
              </span>
              <span className="text-xs text-gray-500 font-medium">Australia</span>
            </div>
          </Link>

          {/* Enhanced Desktop Navigation with Professional Active States */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              const isActive = isActiveLink(item.href);
              
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`
                    relative flex items-center space-x-2 font-medium group py-2 px-3 rounded-lg
                    transition-all duration-200 min-h-[44px] touch-manipulation
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    ${isActive 
                      ? 'text-primary-600 bg-primary-50' 
                      : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
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
                  
                  {/* Professional underline active indicator - replaces dots */}
                  {isActive && (
                    <span 
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary-500 rounded-full"
                      aria-hidden="true"
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Enhanced Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Enhanced Phone Display */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition-colors duration-200">
              <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
              <a 
                href="tel:1300283487"
                className="font-medium hover:text-primary-600 transition-colors duration-200"
                aria-label="Call AuditsPro at 1300 AUDITS"
              >
                1300 AUDITS
              </a>
            </div>
            
            {/* Enhanced Primary CTA */}
            <Link 
              href="/contact" 
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 min-h-[44px] flex items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
              aria-label="Get a quote for audit services"
            >
              Get Quote
            </Link>
          </div>

          {/* Enhanced Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={handleMenuToggle}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
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
        </div>

        {/* Enhanced Mobile Navigation Menu with Professional Active States */}
        {isOpen && (
          <div 
            id="mobile-navigation"
            className={`
              lg:hidden border-t border-gray-200 py-4 bg-white/98 backdrop-blur-sm
              animate-fade-in
            `}
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-2">
              {/* Enhanced Navigation Links */}
              {navigation.map((item) => {
                const IconComponent = item.icon;
                const isActive = isActiveLink(item.href);
                
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`
                      relative flex items-center space-x-3 font-medium py-3 px-4 rounded-lg 
                      min-h-[44px] touch-manipulation transition-all duration-200
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      ${isActive 
                        ? 'text-primary-600 bg-primary-50 border-l-4 border-primary-500' 
                        : 'text-gray-700 hover:text-primary-600 hover:bg-gray-50'
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
                      <span className="text-xs bg-primary-500 text-white px-2 py-1 rounded-full">
                        Current
                      </span>
                    )}
                  </Link>
                );
              })}
              
              {/* Enhanced Mobile Contact Info */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 mt-4 border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-lg">
                <Phone className="h-4 w-4 text-primary-500" aria-hidden="true" />
                <a 
                  href="tel:1300283487"
                  className="font-medium hover:text-primary-600 transition-colors duration-200"
                  aria-label="Call AuditsPro"
                >
                  1300 AUDITS
                </a>
              </div>
              
              {/* Enhanced Mobile CTA */}
              <Link 
                href="/contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-center shadow-md min-h-[44px] flex items-center justify-center mt-2 touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                onClick={handleMobileNavClick}
                aria-label="Get a quote for audit services"
                role="menuitem"
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}