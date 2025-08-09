'use client'

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react'
import { useRouter, usePathname } from 'next/navigation'

/**
 * Navigation History Context
 * 
 * Provides navigation history tracking and back navigation functionality
 * for pages accessed from the dashboard. This ensures users can easily
 * navigate back to their previous page or ultimately to the dashboard.
 * 
 * Features:
 * - Tracks navigation history stack
 * - Provides back navigation functionality
 * - Detects dashboard-originated navigation
 * - Handles browser back button integration
 * - Maintains navigation state across page transitions
 */

interface NavigationHistoryItem {
  path: string
  title: string
  timestamp: number
}

interface NavigationContextType {
  navigationHistory: NavigationHistoryItem[]
  canGoBack: boolean
  isDashboardOrigin: boolean
  goBack: () => void
  pushToHistory: (path: string, title?: string) => void
  clearHistory: () => void
  setDashboardOrigin: (isDashboard: boolean) => void
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined)

interface NavigationProviderProps {
  children: ReactNode
}

/**
 * Navigation Provider Component
 * 
 * Wraps the application to provide navigation history tracking
 * and back navigation functionality throughout the app.
 */
export function NavigationProvider({ children }: NavigationProviderProps) {
  const router = useRouter()
  const pathname = usePathname()
  
  const [navigationHistory, setNavigationHistory] = useState<NavigationHistoryItem[]>([])
  const [isDashboardOrigin, setIsDashboardOrigin] = useState<boolean>(false)

  /**
   * Add a new path to navigation history
   */
  const pushToHistory = useCallback((path: string, title?: string) => {
    const historyItem: NavigationHistoryItem = {
      path,
      title: title || path,
      timestamp: Date.now()
    }

    setNavigationHistory(prev => {
      // Avoid duplicate consecutive entries
      if (prev.length > 0 && prev[prev.length - 1].path === path) {
        return prev
      }
      
      // Keep only last 10 items to prevent memory issues
      const newHistory = [...prev, historyItem]
      return newHistory.slice(-10)
    })
  }, [])

  /**
   * Navigate back to previous page
   */
  const goBack = useCallback(() => {
    if (navigationHistory.length > 1) {
      // Remove current page and go to previous
      const previousPage = navigationHistory[navigationHistory.length - 2]
      setNavigationHistory(prev => prev.slice(0, -1))
      router.push(previousPage.path)
    } else if (isDashboardOrigin) {
      // If no history but came from dashboard, go back to dashboard
      router.push('/dashboard')
    } else {
      // Fallback to browser back
      router.back()
    }
  }, [navigationHistory, isDashboardOrigin, router])

  /**
   * Clear navigation history
   */
  const clearHistory = useCallback(() => {
    setNavigationHistory([])
    setIsDashboardOrigin(false)
  }, [])

  /**
   * Set dashboard origin flag
   */
  const setDashboardOriginFlag = useCallback((isDashboard: boolean) => {
    setIsDashboardOrigin(isDashboard)
    
    // If marking as dashboard origin, also add dashboard to history if not already there
    if (isDashboard && navigationHistory.length > 0) {
      const lastEntry = navigationHistory[navigationHistory.length - 1]
      if (!lastEntry.path.startsWith('/dashboard')) {
        pushToHistory('/dashboard', 'Dashboard')
      }
    }
  }, [navigationHistory, pushToHistory])

  /**
   * Track current page in history when pathname changes
   */
  useEffect(() => {
    // Get page title from pathname
    const getPageTitle = (path: string): string => {
      const segments = path.split('/').filter(Boolean)
      if (segments.length === 0) return 'Home'
      
      // Convert path segments to readable titles
      const titleMap: Record<string, string> = {
        'dashboard': 'Dashboard',
        'audit-calendar': 'Audit Calendar',
        'profile': 'Profile',
        'services': 'Services',
        'about': 'About',
        'contact': 'Contact',
        'testimonials': 'Testimonials',
        'pricing': 'Pricing',
        'audits': 'Audits'
      }
      
      const lastSegment = segments[segments.length - 1]
      return titleMap[lastSegment] || lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1)
    }

    const title = getPageTitle(pathname)
    pushToHistory(pathname, title)
  }, [pathname, pushToHistory])

  /**
   * Detect if navigation originated from dashboard
   */
  useEffect(() => {
    // Check if the previous page in history was dashboard
    if (navigationHistory.length >= 2) {
      const previousPage = navigationHistory[navigationHistory.length - 2]
      if (previousPage.path === '/dashboard') {
        setIsDashboardOrigin(true)
      }
    }
  }, [navigationHistory])

  const canGoBack = navigationHistory.length > 1 || isDashboardOrigin

  const contextValue: NavigationContextType = {
    navigationHistory,
    canGoBack,
    isDashboardOrigin,
    goBack,
    pushToHistory,
    clearHistory,
    setDashboardOrigin: setDashboardOriginFlag
  }

  return (
    <NavigationContext.Provider value={contextValue}>
      {children}
    </NavigationContext.Provider>
  )
}

/**
 * Hook to use navigation context
 */
export function useNavigation() {
  const context = useContext(NavigationContext)
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider')
  }
  return context
}

/**
 * Hook to mark current navigation as dashboard-originated
 * Use this in dashboard components when navigating to other pages
 */
export function useDashboardNavigation() {
  const { setDashboardOrigin } = useNavigation()
  
  const navigateFromDashboard = useCallback((path: string) => {
    setDashboardOrigin(true)
    // The actual navigation should be handled by the calling component
    return path
  }, [setDashboardOrigin])

  return { navigateFromDashboard }
}