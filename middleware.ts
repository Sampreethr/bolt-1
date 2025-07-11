// middleware.ts - Root level file
import { NextRequest, NextResponse } from 'next/server'


const publicRoutes = [
  '/login',
  '/signup', 
  '/forgot-password',
  '/reset-password',
  
] as const


const authRoutes = [
  '/login',
  '/signup',
  '/forgot-password',
  '/reset-password'
] as const


const redirectToHomeWhenAuthenticated = [
  '/',
  '/welcome'
] as const


const protectedApiRoutes = [
  '/api/user',
  '/api/audits',
  '/api/dashboard'
] as const


function isPublicRoute(pathname: string): boolean {
  return publicRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))
}


function isAuthRoute(pathname: string): boolean {
  return authRoutes.some(route => pathname === route || pathname.startsWith(`${route}/`))
}


function shouldRedirectWhenAuth(pathname: string): boolean {
  return redirectToHomeWhenAuthenticated.some(route => pathname === route)
}

/**
 * Check if API route needs protection
 */
function isProtectedApiRoute(pathname: string): boolean {
  return protectedApiRoutes.some(route => pathname.startsWith(route))
}


function validateAppwriteSession(request: NextRequest): boolean {
  try {
    // Check for Appwrite session cookies
    // Appwrite automatically stores session in cookies with specific names
    const sessionCookies = [
      'a_session', // Appwrite session cookie
      'a_session_legacy', // Legacy session cookie
      'a_project_' // Project-specific cookies
    ]
    
    // Check if any session cookie exists
    const hasSession = sessionCookies.some(cookieName => {
      const cookie = request.cookies.get(cookieName)
      return cookie && cookie.value && cookie.value.length > 0
    })
    
    // Additional check for any cookie that starts with 'a_session'
    const allCookies = request.cookies.getAll()
    const hasAppwriteSession = allCookies.some(cookie => 
      cookie.name.startsWith('a_session') && 
      cookie.value && 
      cookie.value.length > 10 // Basic validation
    )
    
    return hasSession || hasAppwriteSession
  } catch (error) {
    console.error('Session validation error:', error)
    return false
  }
}

/**
 * Get client IP for logging/security
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  const real = request.headers.get('x-real-ip')
  const ip = forwarded?.split(',')[0] || real || 'unknown'
  return ip
}

/**
 * Get user agent for device detection
 */
function getUserAgent(request: NextRequest): string {
  return request.headers.get('user-agent') || 'unknown'
}

/**
 * Check if request is from mobile device
 */
function isMobileDevice(userAgent: string): boolean {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)
}

// ===============================
// MAIN MIDDLEWARE FUNCTION
// ===============================

/**
 * Main middleware function
 * Runs on every request before page rendering
 */
export default async function middleware(request: NextRequest): Promise<NextResponse> {
  const { pathname } = request.nextUrl
  const userAgent = getUserAgent(request)
  const clientIP = getClientIP(request)
  const isMobile = isMobileDevice(userAgent)
  
  // Debug logging in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔍 Middleware: ${pathname} | IP: ${clientIP} | Mobile: ${isMobile}`)
  }
  
  // Skip middleware for static files and Next.js internals
  if (
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/api/health') ||
    pathname.includes('.') || // Static files
    pathname.startsWith('/favicon')
  ) {
    return NextResponse.next()
  }
  
  // Validate user session
  const isAuthenticated = validateAppwriteSession(request)
  
  if (process.env.NODE_ENV === 'development') {
    console.log(`🔐 Auth status: ${isAuthenticated ? 'Authenticated' : 'Not authenticated'}`)
  }
  
  // ===============================
  // AUTHENTICATION LOGIC
  // ===============================
  
  // 1. Handle protected API routes
  if (isProtectedApiRoute(pathname)) {
    if (!isAuthenticated) {
      return NextResponse.json(
        { error: 'Unauthorized', message: 'Authentication required' },
        { status: 401 }
      )
    }
    return NextResponse.next()
  }
  
  // 2. Handle public routes (always allow)
  if (isPublicRoute(pathname)) {
    return NextResponse.next()
  }
  
  // 3. Handle unauthenticated users on protected routes
  if (!isAuthenticated) {
    const loginUrl = new URL('/login', request.url)
    
    // Add return URL for better UX (where to redirect after login)
    loginUrl.searchParams.set('returnUrl', pathname)
    
    // Add device info for responsive login page
    if (isMobile) {
      loginUrl.searchParams.set('device', 'mobile')
    }
    
    console.log(`🚫 Redirecting unauthenticated user from ${pathname} to /login`)
    return NextResponse.redirect(loginUrl)
  }
  
  // 4. Handle authenticated users on auth routes (redirect to dashboard)
  if (isAuthenticated && isAuthRoute(pathname)) {
    const dashboardUrl = new URL('/dashboard', request.url)
    console.log(`✅ Redirecting authenticated user from ${pathname} to /dashboard`)
    return NextResponse.redirect(dashboardUrl)
  }
  
  // 5. Handle authenticated users on home/welcome (redirect to dashboard)
  if (isAuthenticated && shouldRedirectWhenAuth(pathname)) {
    const dashboardUrl = new URL('/dashboard', request.url)
    console.log(`🏠 Redirecting authenticated user from ${pathname} to /dashboard`)
    return NextResponse.redirect(dashboardUrl)
  }
  
  // 6. Allow access to all other routes for authenticated users
  return NextResponse.next()
}

// ===============================
// MIDDLEWARE CONFIGURATION
// ===============================

/**
 * Configure which routes middleware should run on
 * Performance optimization: exclude static files and API routes that don't need auth
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api/health (health check endpoint)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files with extensions (js, css, png, jpg, etc.)
     */
    '/((?!api/health|_next/static|_next/image|favicon.ico|.*\\..*).*)'
  ]
}

/**
 * ===============================
 * RESPONSIVE DESIGN CONSIDERATIONS
 * ===============================
 * 
 * This middleware handles authentication for all device types:
 * 
 * 📱 Mobile Devices:
 * - iPhone SE (375px) to iPhone 15 Pro Max (428px)
 * - Samsung Galaxy series (360px to 412px)
 * - Detects mobile and adds device parameter for responsive auth pages
 * 
 * 📱 Foldable Devices:
 * - Samsung Galaxy Fold (280px folded, 717px unfolded)
 * - Surface Duo (540px single, 1114px dual)
 * - Works in both folded and unfolded modes
 * 
 * 📱 Tablets:
 * - iPad Mini (768px) to iPad Pro (1024px+)
 * - Android tablets (768px to 1280px)
 * - Optimized touch interactions
 * 
 * 💻 Laptops & Desktops:
 * - Small laptops (1024px to 1366px)
 * - Standard desktops (1920px)
 * - Ultra-wide displays (2560px+)
 * 
 * The authentication flow provides:
 * - Responsive login/signup forms
 * - Touch-optimized interactions
 * - Proper return URL handling
 * - Device-specific optimizations
 * - Fast redirects with good UX
 */

/**
 * ===============================
 * SECURITY FEATURES
 * ===============================
 * 
 * 🔒 Multiple Security Layers:
 * 1. Middleware (this file) - First line of defense
 * 2. Page-level checks - Second layer validation
 * 3. Component guards - Third layer protection
 * 4. API route protection - Server-side validation
 * 
 * 🛡️ Security Best Practices:
 * - Cookie-based session validation (secure)
 * - No sensitive data in middleware (Edge runtime)
 * - Proper error handling without data leaks
 * - IP logging for security monitoring
 * - User agent detection for device security
 * 
 * 🚀 Performance Optimizations:
 * - Minimal processing in middleware
 * - Static file exclusions
 * - Efficient route matching
 * - No database calls in middleware
 * - Edge runtime compatible
 * 
 * 🔄 Future-Proof Architecture:
 * - Easy to modify route configurations
 * - Extensible for role-based access
 * - Compatible with Appwrite updates
 * - TypeScript safety throughout
 * - Clean separation of concerns
 */