'use client'

import { useState } from 'react'
import { Menu, X, Shield, Phone, Home, Briefcase, Users, Star, Mail } from 'lucide-react'
import Link from 'next/link'

/**
 * Professional Header Component
 * - Clean, light-mode only design with semantic icons
 * - Consistent with 3-color professional palette
 * - 100% responsive across all device types
 * - Enterprise-level appearance for trust and credibility
 * - Enhanced UX with meaningful icons for each navigation item
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  // Navigation items with semantic icons and structure
  const navigation = [
    { 
      name: 'Home', 
      href: '#home', 
      icon: Home,
      ariaLabel: 'Navigate to home section' 
    },
    { 
      name: 'Services', 
      href: '#services', 
      icon: Briefcase,
      ariaLabel: 'Navigate to services section' 
    },
    { 
      name: 'About', 
      href: '#about', 
      icon: Users,
      ariaLabel: 'Navigate to about section' 
    },
    { 
      name: 'Testimonials', 
      href: '#testimonials', 
      icon: Star,
      ariaLabel: 'Navigate to testimonials section' 
    },
    { 
      name: 'Contact', 
      href: '#contact', 
      icon: Mail,
      ariaLabel: 'Navigate to contact section' 
    },
  ]

  /**
   * Close mobile menu when navigation item is clicked
   * Improves UX on mobile devices
   */
  const handleMobileNavClick = () => {
    setIsOpen(false)
  }

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Main navigation">
        <div className="flex justify-between items-center py-4">
          
          {/* Logo Section - Optimized for all screen sizes */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <div className="p-2 sm:p-2.5 bg-primary-500 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200">
              <Shield className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold text-primary-600">
                AuditsPro
              </span>
              <span className="text-xs text-gray-500 font-medium">Australia</span>
            </div>
          </div>

          {/* Desktop Navigation with Icons - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navigation.map((item) => {
              const IconComponent = item.icon
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-primary-600 transition-colors duration-200 font-medium relative group py-2 px-1"
                  aria-label={item.ariaLabel}
                >
                  {/* Icon with consistent sizing and color transition */}
                  <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-primary-500 transition-colors duration-200" />
                  <span>{item.name}</span>
                  {/* Professional underline hover effect */}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-200 group-hover:w-full"></span>
                </Link>
              )
            })}
          </div>

          {/* Desktop Contact & CTA - Hidden on mobile/tablet */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Phone Number Display with enhanced styling */}
            <div className="flex items-center space-x-2 text-sm text-gray-600 bg-gray-50 px-3 py-2 rounded-lg border border-gray-200">
              <Phone className="h-4 w-4 text-primary-500" />
              <span className="font-medium">1300 AUDITS</span>
            </div>
            
            {/* Primary CTA Button */}
            <Link 
              href="#contact" 
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-6 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 min-h-[44px] flex items-center"
              aria-label="Get a quote for audit services"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile/Tablet Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors duration-200 min-h-[44px] min-w-[44px] flex items-center justify-center"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-700" />
              ) : (
                <Menu className="h-6 w-6 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile/Tablet Navigation Menu with Icons */}
        {isOpen && (
          <div 
            id="mobile-navigation"
            className="lg:hidden border-t border-gray-200 py-4 bg-white/98 backdrop-blur-sm"
            role="menu"
            aria-label="Mobile navigation menu"
          >
            <div className="flex flex-col space-y-2">
              {/* Navigation Links with Icons */}
              {navigation.map((item) => {
                const IconComponent = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center space-x-3 text-gray-700 hover:text-primary-600 hover:bg-gray-50 transition-all duration-200 font-medium py-3 px-4 rounded-lg min-h-[44px]"
                    onClick={handleMobileNavClick}
                    aria-label={item.ariaLabel}
                    role="menuitem"
                  >
                    {/* Icon with proper sizing for mobile */}
                    <IconComponent className="h-5 w-5 text-gray-500 flex-shrink-0" />
                    <span>{item.name}</span>
                  </Link>
                )
              })}
              
              {/* Mobile Contact Info */}
              <div className="flex items-center space-x-2 text-sm text-gray-600 pt-4 mt-4 border-t border-gray-200 bg-gray-50 px-4 py-3 rounded-lg">
                <Phone className="h-4 w-4 text-primary-500" />
                <span className="font-medium">1300 AUDITS</span>
              </div>
              
              {/* Mobile CTA Button */}
              <Link 
                href="#contact" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 text-center shadow-md min-h-[44px] flex items-center justify-center mt-2"
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
  )
}
