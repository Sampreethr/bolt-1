'use client'

import { useState, useRef, useEffect } from 'react'
import { 
  User, 
  LogOut, 
  Settings, 
  FileText, 
  Clock, 
  ChevronDown,
  Bell,
  Shield,
  BarChart3,
  CreditCard,
  HelpCircle
} from 'lucide-react'
import { useAuth } from '@/src/contexts/AuthContext'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface UserMenuProps {
  isOpen: boolean
  onClose: () => void
}

interface MenuItemConfig {
  icon: React.ComponentType<{ className?: string }>
  label: string
  description: string
  href: string
  badge?: string | null
  onClick?: () => void
}

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

/**
 * Get account type styling
 */
const getAccountTypeColor = (type: string): string => {
  switch (type) {
    case 'Premium': 
      return 'bg-purple-100 text-purple-700 border-purple-200'
    case 'Enterprise': 
      return 'bg-yellow-100 text-yellow-700 border-yellow-200'
    default: 
      return 'bg-blue-100 text-blue-700 border-blue-200'
  }
}

/**
 * Format date for display
 */
const formatDate = (dateString: string): string => {
  try {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  } catch {
    return 'N/A'
  }
}

// ===============================
// MAIN USER MENU COMPONENT
// ===============================

export default function UserMenu({ isOpen, onClose }: UserMenuProps): JSX.Element | null {
  // ===============================
  // HOOKS & STATE
  // ===============================
  
  const { user, logout } = useAuth()
  const menuRef = useRef<HTMLDivElement>(null)
  const [notifications] = useState(3) // Mock notification count
  const [isLoggingOut, setIsLoggingOut] = useState(false)

  // ===============================
  // EFFECTS
  // ===============================

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen, onClose])

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, onClose])

  // ===============================
  // EVENT HANDLERS
  // ===============================

  const handleLogout = async () => {
    try {
      setIsLoggingOut(true)
      await logout()
      onClose()
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoggingOut(false)
    }
  }

  const handleMenuItemClick = (href: string, customHandler?: () => void) => {
    if (customHandler) {
      customHandler()
    } else {
      // In a real app, this would use Next.js router
      console.log(`Navigating to: ${href}`)
    }
    onClose()
  }

  // ===============================
  // RENDER CONDITIONS
  // ===============================

  if (!isOpen || !user) return null

  // ===============================
  // MENU CONFIGURATION
  // ===============================

  const menuItems: MenuItemConfig[] = [
    {
      icon: User,
      label: 'Profile Settings',
      description: 'Manage your account details',
      href: '/profile',
      badge: null
    },
    {
      icon: FileText,
      label: 'My Audits',
      description: 'View audit history and reports',
      href: '/audits',
      badge: user.auditsCompleted.toString()
    },
    {
      icon: BarChart3,
      label: 'Dashboard',
      description: 'Analytics and insights',
      href: '/dashboard',
      badge: null
    },
    {
      icon: CreditCard,
      label: 'Billing & Payments',
      description: 'Manage subscriptions and invoices',
      href: '/billing',
      badge: null
    },
    {
      icon: Bell,
      label: 'Notifications',
      description: 'Alerts and updates',
      href: '/notifications',
      badge: notifications > 0 ? notifications.toString() : null
    },
    {
      icon: HelpCircle,
      label: 'Help & Support',
      description: 'Get assistance and documentation',
      href: '/support',
      badge: null
    }
  ]

  // ===============================
  // RENDER
  // ===============================

  return (
    <div 
      ref={menuRef}
      className="absolute right-0 top-full mt-2 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden"
      role="menu"
      aria-label="User menu"
    >
      {/* User Info Header */}
      <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-4 sm:p-6 text-white">
        <div className="flex items-center space-x-3 sm:space-x-4">
          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
            {user.avatar ? (
              <img 
                src={user.avatar} 
                alt={user.name} 
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              getUserInitials(user.name)
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white truncate text-sm sm:text-base">
              {user.name}
            </h3>
            <p className="text-blue-100 text-xs sm:text-sm truncate">
              {user.email}
            </p>
            <div className="flex items-center space-x-2 mt-1 flex-wrap">
              <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getAccountTypeColor(user.accountType)}`}>
                {user.accountType}
              </span>
              <span className="text-blue-100 text-xs truncate max-w-[120px]">
                {user.company}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="p-3 sm:p-4 bg-gray-50 border-b border-gray-200">
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="text-center">
            <div className="text-xl sm:text-2xl font-bold text-primary-600">
              {user.auditsCompleted}
            </div>
            <div className="text-xs text-gray-600">Audits Completed</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-semibold text-gray-900">Next Due</div>
            <div className="text-xs text-gray-600">
              {formatDate(user.nextAuditDue)}
            </div>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <div className="py-2 max-h-64 overflow-y-auto">
        {menuItems.map((item, index) => (
          <button
            key={index}
            onClick={() => handleMenuItemClick(item.href, item.onClick)}
            className="w-full text-left px-4 py-3 hover:bg-gray-50 transition-colors duration-200 group focus:outline-none focus:bg-gray-50 min-h-[44px] touch-manipulation"
            role="menuitem"
          >
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gray-100 rounded-lg group-hover:bg-primary-100 transition-colors duration-200 flex-shrink-0">
                <item.icon className="h-4 w-4 text-gray-600 group-hover:text-primary-600" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors duration-200 text-sm sm:text-base">
                    {item.label}
                  </span>
                  {item.badge && (
                    <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center font-medium">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-xs sm:text-sm text-gray-500 block">
                  {item.description}
                </span>
              </div>
            </div>
          </button>
        ))}
      </div>

      {/* Account Status */}
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
        <div className="flex items-center justify-between text-xs sm:text-sm mb-2">
          <span className="text-gray-600">Last login:</span>
          <span className="text-gray-900 font-medium">
            {formatDate(user.lastLogin)}
          </span>
        </div>
        <div className="flex items-center space-x-2">
          <Shield className="h-4 w-4 text-green-500 flex-shrink-0" />
          <span className="text-xs sm:text-sm text-green-600 font-medium">
            Account Verified
          </span>
          {user.isVerified && (
            <span className="text-xs text-green-500">✓</span>
          )}
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={handleLogout}
          disabled={isLoggingOut}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-red-500 hover:bg-red-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 hover:shadow-lg min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
          {isLoggingOut ? (
            <>
              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
              <span>Signing Out...</span>
            </>
          ) : (
            <>
              <LogOut className="h-4 w-4" />
              <span>Sign Out</span>
            </>
          )}
        </button>
      </div>
    </div>
  )
}