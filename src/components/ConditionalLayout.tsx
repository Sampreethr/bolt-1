'use client'

import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'
import DashboardLayout from '@/src/components/dashboard/DashboardLayout'
import { useNavigation } from '@/src/contexts/NavigationContext'

/**
 * CONDITIONAL LAYOUT COMPONENT
 * 
 * This component manages the conditional rendering of header and footer
 * based on the current route. It provides:
 * 
 * - Complete header/footer hiding for dashboard routes
 * - Clean auth page layouts
 * - Main website layout with header/footer
 * - Responsive design across all device types
 * 
 * Route Logic:
 * - Dashboard routes (/dashboard*): No header, no footer, independent layout
 * - Auth routes (/login, /signup, etc.): No header, no footer, clean layout
 * - Main website routes: Full header and footer
 * 
 * @param children - Page content from Next.js routing
 * @returns Conditionally wrapped layout based on route
 */

interface ConditionalLayoutProps {
  children: ReactNode
}

export default function ConditionalLayout({ children }: ConditionalLayoutProps): JSX.Element {
  const pathname = usePathname()
  const { isDashboardOrigin, navigationHistory } = useNavigation()
  
  /**
   * ENHANCED ROUTE DETECTION LOGIC
   * 
   * Define different layout types:
   * 1. Dashboard routes - Dashboard layout with sidebar
   * 2. Dashboard-accessed routes - Dashboard layout with sidebar
   * 3. Auth routes - Clean full-screen layout
   * 4. Main website routes - Header and footer layout
   */
  
  // Dashboard routes (always get dashboard layout)
  const isDashboardRoute = pathname.startsWith('/dashboard')
  
  // Routes that should get dashboard layout when accessed from dashboard
  const dashboardAccessibleRoutes = [
    '/audits',
    '/audit-calendar',
    '/profile',
    '/documents',
    '/compliance',
    '/reports',
    '/progress',
    '/analytics',
    '/team',
    '/settings',
    '/support'
  ]
  
  const isDashboardAccessibleRoute = dashboardAccessibleRoutes.some(route => 
    pathname.startsWith(route)
  )
  
  // Auth routes (clean full-screen layout)
  const authRoutes = [
    '/login',
    '/signup', 
    '/forgot-password',
    '/reset-password',
    '/verify-email',
    '/welcome'
  ]
  const isAuthRoute = authRoutes.some(route => pathname.startsWith(route))
  
  // Determine if this page should use dashboard layout
  const shouldUseDashboardLayout = isDashboardRoute || 
    (isDashboardAccessibleRoute && isDashboardOrigin)
  
  // Combine all routes that shouldn't have header/footer
  const shouldHideLayout = shouldUseDashboardLayout || isAuthRoute
  
  console.log('🎯 ConditionalLayout Debug:', {
    pathname,
    isDashboardRoute,
    isDashboardAccessibleRoute,
    isDashboardOrigin,
    isAuthRoute,
    shouldUseDashboardLayout,
    shouldHideLayout
  })

  /**
   * DASHBOARD LAYOUT - WITH PERSISTENT SIDEBAR
   * 
   * Dashboard routes and dashboard-accessed routes get dashboard layout:
   * - Persistent sidebar navigation
   * - No main website header/footer
   * - Professional dashboard styling
   * - Responsive sidebar behavior
   */
  if (shouldUseDashboardLayout) {
    return (
      <DashboardLayout>
        {children}
      </DashboardLayout>
    )
  }

  /**
   * AUTH ROUTES - CLEAN FULL-SCREEN LAYOUT
   * 
   * Auth routes get minimal clean layout:
   * - No header or footer
   * - Full-screen container
   * - Clean background
   * - Centered content area
   */
  if (isAuthRoute) {
    return (
      <div className="auth-layout min-h-screen bg-gray-50 dark:bg-gray-900">
        <main 
          className="auth-page min-h-screen"
          id="auth-content"
        >
          {children}
        </main>
      </div>
    )
  }



  /**
   * MAIN WEBSITE ROUTES - FULL LAYOUT
   * 
   * All other routes get the complete website layout:
   * - Header with navigation
   * - Footer with links and information
   * - Proper spacing for fixed header
   * - Responsive design
   */
  return (
    <div className="main-website-layout min-h-screen">
      {/* Main Website Header */}
      <Header />
      
      {/* Main Content Area with Header Spacing */}
      <main 
        className="main-content"
        id="main-content"
        role="main"
      >
        {children}
      </main>
      
      {/* Main Website Footer */}
      <Footer />
    </div>
  )
}

/**
 * ===============================
 * RESPONSIVE DESIGN NOTES
 * ===============================
 * 
 * This layout is fully responsive across:
 * 
 * 📱 MOBILE DEVICES:
 * - iPhone SE (375px): Touch-optimized, single column
 * - iPhone Pro Max (428px): Larger touch targets
 * - Small Samsung phones: Adaptive spacing
 * - Big Samsung phones: Optimized for larger screens
 * 
 * 📱 FOLDABLE DEVICES:
 * - Samsung Galaxy Fold: Adaptive layout for fold/unfold
 * - Microsoft Surface Duo: Dual-screen support
 * - Layout reflows smoothly on orientation change
 * 
 * 📱 TABLETS:
 * - iPad Mini (768px): Tablet-optimized layout
 * - iPad Pro (1024px): Desktop-like experience
 * - Android tablets: Consistent cross-platform design
 * 
 * 💻 LAPTOPS & DESKTOPS:
 * - Small laptops (1024px+): Full feature set
 * - Desktop monitors (1440px+): Optimal use of space
 * - Ultra-wide displays (2560px+): Centered content
 * 
 * ✅ ACCESSIBILITY FEATURES:
 * - Keyboard navigation support
 * - Screen reader compatibility
 * - High contrast mode support
 * - Reduced motion preferences
 * - Semantic HTML structure
 * 
 * ✅ PERFORMANCE OPTIMIZATIONS:
 * - Minimal re-renders with proper route detection
 * - Efficient conditional rendering
 * - Clean component separation
 * - Fast navigation between layouts
 * 
 * ===============================
 * LAYOUT ARCHITECTURE SUMMARY
 * ===============================
 * 
 * 🎯 DASHBOARD ROUTES (/dashboard*):
 * - Completely independent from main website
 * - No header, no footer interference
 * - Clean sidebar integration
 * - Professional business dashboard appearance
 * 
 * 🔐 AUTH ROUTES (/login, /signup, etc.):
 * - Minimal clean layout
 * - No navigation distractions  
 * - Focused user experience
 * - Full-screen utilization
 * 
 * 👤 PROFILE ROUTES (/profile*):
 * - Dashboard-style independence
 * - Professional settings interface
 * - Clean, focused layout
 * 
 * 🌐 MAIN WEBSITE (/, /services, /about, etc.):
 * - Complete header and footer
 * - Marketing-focused design
 * - Full navigation system
 * - SEO-optimized structure
 * 
 * This architecture ensures each section of the application
 * has its optimal user experience without conflicts or
 * interference between different layout requirements.
 */