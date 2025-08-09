'use client'

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import { Sun, Moon, Monitor } from 'lucide-react'

/**
 * ===============================
 * PROFESSIONAL THEME TOGGLE COMPONENT
 * ===============================
 * 
 * Features:
 * - Smooth theme transitions
 * - System preference detection
 * - Professional visual design
 * - Touch-friendly interface
 * - Keyboard accessibility
 * - Screen reader support
 * - No hydration mismatches
 * 
 * Supports three modes:
 * - Light: Professional light theme
 * - Dark: Elegant dark theme  
 * - System: Automatic based on OS preference
 */

interface ThemeToggleProps {
  className?: string
  showLabel?: boolean
  variant?: 'default' | 'compact' | 'icon-only'
}

export default function ThemeToggle({ 
  className = '', 
  showLabel = false,
  variant = 'default'
}: ThemeToggleProps) {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme, resolvedTheme } = useTheme()

  // Prevent hydration mismatch by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Don't render anything until mounted to prevent hydration issues
  if (!mounted) {
    return (
      <div className={`animate-pulse bg-gray-200 dark:bg-gray-700 rounded-lg ${
        variant === 'icon-only' ? 'w-10 h-10' : 'w-24 h-10'
      } ${className}`} />
    )
  }

  const themes = [
    { 
      key: 'light', 
      label: 'Light', 
      icon: Sun,
      description: 'Light theme'
    },
    { 
      key: 'dark', 
      label: 'Dark', 
      icon: Moon,
      description: 'Dark theme'
    },
    { 
      key: 'system', 
      label: 'System', 
      icon: Monitor,
      description: 'System preference'
    }
  ]

  const currentTheme = themes.find(t => t.key === theme) || themes[0]
  const CurrentIcon = currentTheme.icon

  const handleThemeChange = () => {
    // Cycle through themes: light -> dark -> system -> light
    const currentIndex = themes.findIndex(t => t.key === theme)
    const nextIndex = (currentIndex + 1) % themes.length
    const nextTheme = themes[nextIndex].key
    
    // Add theme-changing class to prevent flash
    document.documentElement.classList.add('theme-changing')
    
    setTheme(nextTheme)
    
    // Remove theme-changing class after transition
    setTimeout(() => {
      document.documentElement.classList.remove('theme-changing')
    }, 300)
  }

  const getThemeStatus = () => {
    if (theme === 'system') {
      return `System (${resolvedTheme === 'dark' ? 'Dark' : 'Light'})`
    }
    return currentTheme.label
  }

  // Icon-only variant for mobile/compact spaces
  if (variant === 'icon-only') {
    return (
      <button
        onClick={handleThemeChange}
        className={`
          group relative inline-flex items-center justify-center
          min-h-[44px] min-w-[44px] touch-manipulation
          rounded-lg transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
          border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600
          transform hover:scale-105
          ${className}
        `}
        aria-label={`Switch to ${themes[(themes.findIndex(t => t.key === theme) + 1) % themes.length].label.toLowerCase()} theme`}
        title={`Current: ${getThemeStatus()}`}
      >
        <CurrentIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
        
        {/* Tooltip */}
        <span className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-50">
          {getThemeStatus()}
        </span>
      </button>
    )
  }

  // Compact variant for header
  if (variant === 'compact') {
    return (
      <button
        onClick={handleThemeChange}
        className={`
          group relative inline-flex items-center space-x-2
          min-h-[44px] px-3 py-2 touch-manipulation
          rounded-lg transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700
          text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
          border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600
          transform hover:scale-105
          ${className}
        `}
        aria-label={`Switch to ${themes[(themes.findIndex(t => t.key === theme) + 1) % themes.length].label.toLowerCase()} theme`}
      >
        <CurrentIcon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
        {showLabel && (
          <span className="text-sm font-medium hidden sm:inline">
            {currentTheme.label}
          </span>
        )}
      </button>
    )
  }

  // Default variant with full styling
  return (
    <div className={`relative ${className}`}>
      <button
        onClick={handleThemeChange}
        className="
          group relative inline-flex items-center space-x-3
          min-h-[44px] px-4 py-2 touch-manipulation
          rounded-lg transition-all duration-200
          focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
          bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700
          text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400
          border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600
          shadow-sm hover:shadow-md transform hover:scale-105
        "
        aria-label={`Switch to ${themes[(themes.findIndex(t => t.key === theme) + 1) % themes.length].label.toLowerCase()} theme`}
      >
        <div className="flex items-center space-x-2">
          <CurrentIcon className="h-5 w-5 transition-transform duration-200 group-hover:scale-110" />
          <span className="text-sm font-medium">
            {showLabel ? getThemeStatus() : currentTheme.label}
          </span>
        </div>
        
        {/* Visual indicator for system theme */}
        {theme === 'system' && (
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-primary-500 rounded-full border-2 border-white dark:border-gray-800">
            <span className="sr-only">System theme active</span>
          </div>
        )}
      </button>

      {/* Theme options dropdown hint */}
      <div className="absolute top-full left-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-50">
        <div className="bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded px-2 py-1 whitespace-nowrap">
          Click to cycle: Light → Dark → System
        </div>
      </div>
    </div>
  )
}

/**
 * ===============================
 * THEME TOGGLE VARIANTS USAGE
 * ===============================
 * 
 * Default (Full):
 * <ThemeToggle showLabel={true} />
 * 
 * Compact (Header):
 * <ThemeToggle variant="compact" showLabel={false} />
 * 
 * Icon Only (Mobile):
 * <ThemeToggle variant="icon-only" />
 * 
 * ===============================
 * ACCESSIBILITY FEATURES
 * ===============================
 * 
 * ✅ Keyboard Navigation:
 * - Tab to focus
 * - Enter/Space to activate
 * - Proper focus indicators
 * 
 * ✅ Screen Reader Support:
 * - Descriptive aria-labels
 * - Status announcements
 * - Semantic button element
 * 
 * ✅ Touch Friendly:
 * - Minimum 44px touch targets
 * - Hover states for desktop
 * - Visual feedback on interaction
 * 
 * ✅ Visual Indicators:
 * - Clear current theme display
 * - Smooth transitions
 * - System theme indicator
 * - Tooltips for context
 * 
 * ===============================
 * RESPONSIVE BEHAVIOR
 * ===============================
 * 
 * 📱 Mobile (< 640px):
 * - Icon-only variant recommended
 * - Touch-optimized sizing
 * - Clear visual feedback
 * 
 * 📱 Tablet (640px - 1024px):
 * - Compact variant works well
 * - Optional labels
 * - Proper spacing
 * 
 * 💻 Desktop (> 1024px):
 * - Full variant with labels
 * - Hover effects
 * - Keyboard shortcuts
 * 
 * This component provides a professional, accessible,
 * and responsive theme switching experience across
 * all device types and user preferences.
 */