import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import Authentication Provider
import { AuthProvider } from '@/src/context/AuthContext'

// Import your ConditionalLayout component
import ConditionalLayout from '@/src/components/ConditionalLayout'

const inter = Inter({
  // Enhanced subset configuration for better performance
  subsets: ['latin', 'latin-ext'],
  
  // CRITICAL: All weight ranges for complete design flexibility
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  
  // Enhanced style support
  style: ['normal'],
  
  // CRITICAL: CSS variable for Tailwind integration
  variable: '--font-inter',
  
  // Performance optimization
  display: 'swap',
  preload: true,
  
  // Enhanced fallback system
  fallback: [
    'system-ui', 
    '-apple-system', 
    'BlinkMacSystemFont', 
    'Segoe UI', 
    'Roboto', 
    'Helvetica Neue', 
    'Arial', 
    'sans-serif'
  ],
  
  // Font loading optimization
  adjustFontFallback: true,
})

/**
 * ENHANCED METADATA CONFIGURATION
 * SEO and Performance Optimized for Font Loading
 */
export const metadata: Metadata = {
  title: {
    default: 'AuditsPro Australia | Professional Trust Account Auditing Services',
    template: '%s | AuditsPro Australia'
  },
  description: 'Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround. Serving law firms, real estate agencies, and property managers.',
  keywords: [
    'trust account audit',
    'ASIC registered auditor',
    'legal auditing services',
    'real estate audit',
    'property management audit',
    'Australia auditing',
    'compliance auditing'
  ],
  authors: [{ name: 'AuditsPro Australia' }],
  creator: 'AuditsPro Australia',
  publisher: 'AuditsPro Australia',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://auditspro.com.au',
    siteName: 'AuditsPro Australia',
    title: 'AuditsPro Australia | Professional Trust Account Auditing Services',
    description: 'Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround.',
    images: [
      {
        url: '/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia - Professional Trust Account Auditing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AuditsPro Australia | Professional Trust Account Auditing Services',
    description: 'Professional trust account auditing services across Australia. ASIC registered auditors, fixed pricing, fast turnaround.',
    images: ['/twitter-default.jpg'],
    creator: '@AuditsProAU',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

/**
 * ENHANCED ROOT LAYOUT WITH AUTHENTICATION
 * 
 * FEATURES:
 * 1. Authentication Provider wrapper for global auth state
 * 2. Clean layout structure with conditional header/footer
 * 3. Professional spacing maintained for regular pages
 * 4. Clean auth pages without header/footer
 * 5. Enhanced font loading with performance optimization
 * 6. Comprehensive fallback system
 * 7. Cross-device compatibility
 * 8. Modern font rendering optimization
 * 9. PROTECTED ROUTES: Only authenticated users can access content
 * 
 * Authentication Flow:
 * 1. Middleware checks authentication (first layer)
 * 2. AuthProvider manages global state (second layer)
 * 3. ConditionalLayout handles UI layout (third layer)
 * 4. Individual components can add protection (fourth layer)
 * 
 * @param children - Page content from Next.js routing
 * @returns Complete page structure with authentication and conditional layout
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en-AU" 
      className={`${inter.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* ENHANCED FONT LOADING OPTIMIZATION */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Enhanced DNS prefetch for better performance */}
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Responsive Design Meta - Enhanced */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes, viewport-fit=cover" />
        
        {/* Enhanced Performance Optimization */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </head>
      
      <body 
        className={`
          ${inter.className} 
          font-sans antialiased 
          text-gray-900 
          bg-white 
          selection:bg-primary-500 
          selection:text-white
          overflow-x-hidden
          min-h-screen
        `}
        suppressHydrationWarning
      >
        {/* Enhanced Accessibility: Skip to main content */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-[9999] font-semibold transition-all duration-200"
        >
          Skip to main content
        </a>
        
        {/* 
          AUTHENTICATION PROVIDER
          Wraps the entire app to provide global authentication state
          This enables:
          - Global authentication state management
          - Automatic session restoration
          - Protected routes functionality
          - User state across all components
        */}
        <AuthProvider>
          {/* 
            CONDITIONAL LAYOUT
            Handles header/footer display based on route type:
            - Shows header/footer on regular pages (for authenticated users)
            - Hides header/footer on auth pages (login, signup, etc.)
          */}
          <ConditionalLayout>
            {children}
          </ConditionalLayout>
        </AuthProvider>
        
        {/* Enhanced Performance and Font Loading Scripts */}
        <script dangerouslySetInnerHTML={{
          __html: `
            // Enhanced Font Loading Performance Optimization
            if ('fonts' in document) {
              // Preload critical font weights
              document.fonts.load('400 1rem Inter');
              document.fonts.load('600 1rem Inter');
              document.fonts.load('700 1rem Inter');
              document.fonts.load('800 1rem Inter');
              
              document.fonts.ready.then(() => {
                document.documentElement.classList.add('fonts-loaded');
                // Trigger any layout recalculations after fonts load
                if (typeof window !== 'undefined') {
                  window.dispatchEvent(new Event('resize'));
                }
              });
            }
            
            // Enhanced Page Load Optimization
            window.addEventListener('load', () => {
              document.documentElement.classList.add('page-loaded');
            });
            
            // Font loading optimization for better performance
            const fontObserver = new Promise((resolve) => {
              if (document.fonts && document.fonts.ready) {
                document.fonts.ready.then(resolve);
              } else {
                setTimeout(resolve, 3000); // Fallback timeout
              }
            });
            
            fontObserver.then(() => {
              document.body.classList.add('fonts-ready');
            });
            
            // Enhanced responsive font loading
            if ('IntersectionObserver' in window) {
              const fontObserver = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                  if (entry.isIntersecting) {
                    entry.target.classList.add('text-visible');
                  }
                });
              });
              
              // Observe all text elements for progressive enhancement
              document.querySelectorAll('h1, h2, h3, p, .text-content').forEach(el => {
                fontObserver.observe(el);
              });
            }
            
            // Authentication Debug (Development Only)
            if (typeof window !== 'undefined' && window.location.hostname === 'localhost') {
              console.log('🔐 AuditsPro Authentication System Active');
              console.log('🛡️ Protected Routes: All content requires authentication');
              console.log('🔓 Public Routes: /login, /signup, /forgot-password, /reset-password');
            }
          `
        }} />
      </body>
    </html>
  )
}

/**
 * ===============================
 * AUTHENTICATION ARCHITECTURE SUMMARY
 * ===============================
 * 
 * 🔒 PROTECTION LAYERS:
 * 
 * 1. MIDDLEWARE (middleware.ts)
 *    - First line of defense
 *    - Runs before any page renders
 *    - Redirects unauthenticated users to /login
 *    - Protects all routes except public ones
 * 
 * 2. AUTH PROVIDER (AuthContext.tsx)
 *    - Global authentication state management
 *    - Automatic session restoration
 *    - Real-time auth status updates
 *    - Error handling and recovery
 * 
 * 3. CONDITIONAL LAYOUT (ConditionalLayout.tsx)
 *    - Shows/hides header/footer based on route
 *    - Clean auth pages without navigation
 *    - Full website access for authenticated users
 * 
 * 4. COMPONENT PROTECTION (Optional)
 *    - Individual component guards
 *    - Fine-grained access control
 *    - Role-based permissions (if needed)
 * 
 * 🌐 RESPONSIVE DESIGN:
 * 
 * ✅ Mobile Devices (All sizes)
 * ✅ Tablets (All orientations)
 * ✅ Laptops & Desktops
 * ✅ Foldable Devices
 * ✅ Touch-optimized interactions
 * ✅ Keyboard navigation
 * ✅ Screen reader compatibility
 * 
 * 🚀 PERFORMANCE FEATURES:
 * 
 * ✅ Edge runtime compatible
 * ✅ Minimal bundle size impact
 * ✅ Fast authentication checks
 * ✅ Optimized redirects
 * ✅ Automatic session refresh
 * ✅ Memory leak prevention
 * 
 * 🔐 SECURITY FEATURES:
 * 
 * ✅ Cookie-based sessions (secure)
 * ✅ Automatic session validation
 * ✅ CSRF protection via Appwrite
 * ✅ Secure redirects
 * ✅ Error handling without data leaks
 * ✅ Multiple validation layers
 */