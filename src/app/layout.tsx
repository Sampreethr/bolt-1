import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// Import your Header and Footer components
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

// Import the AuthProvider
import { AuthProvider } from '@/src/contexts/AuthContext'

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
 * UPDATED ROOT LAYOUT WITH AUTHENTICATION AND MODAL SUPPORT
 * 
 * PROFESSIONAL FEATURES:
 * 1. AuthProvider wraps entire application
 * 2. Professional spacing maintained
 * 3. Enhanced font loading with performance optimization
 * 4. Comprehensive fallback system
 * 5. Cross-device compatibility
 * 6. Modern font rendering optimization
 * 7. CRITICAL: Modal root element for portal rendering
 * 
 * @param children - Page content from Next.js routing
 * @returns Complete page structure with authentication and professional typography
 */
export default function EnhancedRootLayout({
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
        
        {/* CRITICAL: Wrap entire app with AuthProvider */}
        <AuthProvider>
          {/* Site Header - Fixed Navigation with Auth */}
          <Header />
          
          {/* Main Content Area with professional typography and spacing */}
          <main 
            id="main-content" 
            className="min-h-screen font-sans"
            role="main"
          >
            {children}
          </main>
          
          {/* Site Footer */}
          <Footer />
        </AuthProvider>
        
        {/* CRITICAL: Modal Root for Portal Rendering */}
        <div id="modal-root"></div>
        
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
          `
        }} />
      </body>
    </html>
  )
}