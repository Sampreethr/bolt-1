'use client'

import { ArrowLeft, Home } from 'lucide-react'
import { useNavigation } from '@/src/contexts/NavigationContext'
import { motion } from 'framer-motion'

interface BackButtonProps {
  className?: string
  showText?: boolean
  variant?: 'default' | 'minimal' | 'floating'
  position?: 'top-left' | 'top-right' | 'custom'
}

/**
 * Back Button Component
 * 
 * A professional back navigation button that integrates with the
 * navigation history system. Automatically shows when navigation
 * originated from dashboard or when there's navigation history.
 * 
 * Features:
 * - Automatic visibility based on navigation context
 * - Multiple visual variants (default, minimal, floating)
 * - Configurable positioning
 * - Smooth animations and transitions
 * - Dark/light mode support
 * - Touch-friendly design
 * - Accessibility compliant
 * 
 * @param className - Additional CSS classes
 * @param showText - Whether to show "Back" text alongside icon
 * @param variant - Visual style variant
 * @param position - Button positioning (when not custom)
 */
export default function BackButton({ 
  className = '', 
  showText = true, 
  variant = 'default',
  position = 'top-left'
}: BackButtonProps) {
  const { canGoBack, goBack, navigationHistory, isDashboardOrigin } = useNavigation()

  // Don't render if there's no way to go back
  if (!canGoBack) {
    return null
  }

  // Get the previous page title for better UX
  const getPreviousPageTitle = () => {
    if (navigationHistory.length > 1) {
      return navigationHistory[navigationHistory.length - 2].title
    }
    if (isDashboardOrigin) {
      return 'Dashboard'
    }
    return 'Previous Page'
  }

  // Handle click with smooth navigation
  const handleClick = () => {
    goBack()
  }

  // Base button classes
  const baseClasses = `
    inline-flex items-center justify-center
    font-medium transition-all duration-200
    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
    touch-manipulation min-h-[44px]
  `

  // Variant-specific classes
  const variantClasses = {
    default: `
      px-4 py-2 bg-white dark:bg-gray-800 
      border border-gray-300 dark:border-gray-600 
      text-gray-700 dark:text-gray-300 
      hover:bg-gray-50 dark:hover:bg-gray-700 
      hover:border-primary-300 dark:hover:border-primary-600
      rounded-lg shadow-sm hover:shadow-md
    `,
    minimal: `
      px-3 py-2 text-gray-600 dark:text-gray-400 
      hover:text-primary-600 dark:hover:text-primary-400
      hover:bg-gray-100 dark:hover:bg-gray-800 
      rounded-lg
    `,
    floating: `
      px-4 py-3 bg-white dark:bg-gray-800 
      border border-gray-200 dark:border-gray-700 
      text-gray-700 dark:text-gray-300 
      hover:bg-gray-50 dark:hover:bg-gray-700
      rounded-full shadow-lg hover:shadow-xl
      backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95
    `
  }

  // Position-specific classes (when position is not 'custom')
  const positionClasses = {
    'top-left': 'fixed top-4 left-4 z-50',
    'top-right': 'fixed top-4 right-4 z-50',
    'custom': ''
  }

  const buttonClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${position !== 'custom' ? positionClasses[position] : ''}
    ${className}
  `

  return (
    <motion.button
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.2 }}
      onClick={handleClick}
      className={buttonClasses}
      aria-label={`Go back to ${getPreviousPageTitle()}`}
      title={`Go back to ${getPreviousPageTitle()}`}
    >
      {isDashboardOrigin && navigationHistory.length <= 1 ? (
        <Home className="h-4 w-4" aria-hidden="true" />
      ) : (
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
      )}
      
      {showText && (
        <span className="ml-2 text-sm">
          {isDashboardOrigin && navigationHistory.length <= 1 ? 'Dashboard' : 'Back'}
        </span>
      )}
    </motion.button>
  )
}

/**
 * Page Header with Back Button
 * 
 * A convenient component that combines a back button with page header
 * for consistent page layouts.
 */
interface PageHeaderWithBackProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function PageHeaderWithBack({ 
  title, 
  subtitle, 
  children, 
  className = '' 
}: PageHeaderWithBackProps) {
  return (
    <div className={`mb-8 ${className}`}>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center space-x-4">
          <BackButton variant="minimal" position="custom" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white">
              {title}
            </h1>
            {subtitle && (
              <p className="text-gray-600 dark:text-gray-300 mt-1">
                {subtitle}
              </p>
            )}
          </div>
        </div>
        {children && (
          <div className="flex items-center space-x-2">
            {children}
          </div>
        )}
      </div>
    </div>
  )
}

/**
 * Floating Back Button
 * 
 * A floating back button that appears in the top-left corner
 * of the page. Ideal for full-screen or immersive experiences.
 */
export function FloatingBackButton() {
  return <BackButton variant="floating" position="top-left" showText={false} />
}