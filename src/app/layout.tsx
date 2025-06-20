import './globals.css'
import { Inter, Playfair_Display } from 'next/font/google'
import { Metadata, Viewport } from 'next'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

/**
 * Font configurations with optimal loading
 */
const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

/**
 * Enhanced metadata configuration for better SEO
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://auditspro.com.au'),
  title: {
    template: '%s | AuditsPro Australia',
    default: 'AuditsPro Australia - Professional Trust Account Auditing Services',
  },
  description: 'Professional trust account auditing services across Australia. Expert compliance, thorough reporting, and trusted audit solutions for legal and real estate professionals. ASIC registered auditors with 15+ years experience.',
  keywords: [
    'trust account audits',
    'Australian auditing',
    'compliance',
    'legal audits',
    'real estate audits',
    'ASIC registered auditors',
    'trust account compliance',
    'professional auditing services',
    'audit certification',
    'regulatory compliance'
  ],
  authors: [{ name: 'AuditsPro Australia', url: 'https://auditspro.com.au' }],
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
    title: 'AuditsPro Australia - Professional Trust Account Auditing',
    description: 'Professional trust account auditing services across Australia with ASIC registered auditors. Fast turnaround, fixed pricing, and complete compliance.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia - Professional Trust Account Auditing Services',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@AuditsProAU',
    creator: '@AuditsProAU',
    title: 'AuditsPro Australia - Professional Trust Account Auditing',
    description: 'Professional trust account auditing services across Australia. ASIC registered auditors with 15+ years experience.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au',
  },
  category: 'Business Services',
  classification: 'Professional Services',
  other: {
    'business:contact_data:street_address': 'Level 25, 123 Collins Street',
    'business:contact_data:locality': 'Melbourne',
    'business:contact_data:region': 'VIC',
    'business:contact_data:postal_code': '3000',
    'business:contact_data:country_name': 'Australia',
    'business:contact_data:phone_number': '1300283487',
  },
}

/**
 * Enhanced viewport configuration for optimal mobile experience
 */
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#3b82f6' },
    { media: '(prefers-color-scheme: dark)', color: '#1e40af' },
  ],
  colorScheme: 'light',
}

/**
 * Structured data for better SEO
 */
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'AuditsPro Australia',
  description: 'Professional trust account auditing services across Australia with ASIC registered auditors.',
  url: 'https://auditspro.com.au',
  logo: 'https://auditspro.com.au/logo.png',
  image: 'https://auditspro.com.au/og-image.jpg',
  telephone: '1300283487',
  email: 'info@auditspro.com.au',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Level 25, 123 Collins Street',
    addressLocality: 'Melbourne',
    addressRegion: 'VIC',
    postalCode: '3000',
    addressCountry: 'AU',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -37.8136,
    longitude: 144.9631,
  },
  areaServed: [
    {
      '@type': 'Country',
      name: 'Australia',
    },
    {
      '@type': 'State',
      name: 'New South Wales',
    },
    {
      '@type': 'State',
      name: 'Victoria',
    },
    {
      '@type': 'State',
      name: 'Queensland',
    },
    {
      '@type': 'State',
      name: 'Western Australia',
    },
    {
      '@type': 'State',
      name: 'South Australia',
    },
    {
      '@type': 'State',
      name: 'Tasmania',
    },
    {
      '@type': 'State',
      name: 'Australian Capital Territory',
    },
    {
      '@type': 'State',
      name: 'Northern Territory',
    },
  ],
  serviceType: [
    'Trust Account Auditing',
    'Compliance Review',
    'Financial Auditing',
    'Regulatory Compliance',
    'ASIC Compliance',
  ],
  priceRange: '$499 - $1500',
  paymentAccepted: ['Cash', 'Credit Card', 'Bank Transfer'],
  currenciesAccepted: 'AUD',
  openingHours: 'Mo-Fr 08:00-18:00',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trust Account Auditing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Trust Account Audit',
          description: 'Comprehensive trust account audits for real estate agencies',
        },
        price: '499',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legal Practice Trust Account Audit',
          description: 'Specialized audits for legal practice trust accounts',
        },
        price: '1500',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Sarah Mitchell',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'AuditsPro Australia has been our trusted partner for trust account auditing for over 5 years. Their attention to detail and comprehensive reporting has given us complete confidence in our compliance.',
    },
  ],
  sameAs: [
    'https://www.facebook.com/AuditsProAustralia',
    'https://www.linkedin.com/company/auditspro-australia',
    'https://twitter.com/AuditsProAU',
  ],
}

/**
 * Enhanced Root Layout Component
 * 
 * Features:
 * - Comprehensive SEO metadata
 * - Structured data for rich snippets
 * - Optimal font loading with display: swap
 * - Responsive viewport configuration
 * - Professional layout structure
 * - Enhanced accessibility
 * 
 * @param children - Child components to render
 * @returns Enhanced root layout with header and footer
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html 
      lang="en-AU" 
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* DNS prefetch for performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        
        {/* Favicon and app icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        
        {/* Additional SEO meta tags */}
        <meta name="format-detection" content="telephone=yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AuditsPro" />
        
        {/* Security headers */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        
        {/* Performance hints */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
      </head>
      
      <body 
        className={`
          font-sans antialiased bg-white text-gray-800
          min-h-screen flex flex-col
          selection:bg-primary-100 selection:text-primary-700
        `}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-500 text-white px-4 py-2 rounded-lg z-50"
        >
          Skip to main content
        </a>
        
        {/* Header */}
        <Header />
        
        {/* Main Content */}
        <main 
          id="main-content"
          className="flex-1 pt-16 sm:pt-20"
          role="main"
        >
          {children}
        </main>
        
        {/* Footer */}
        <Footer />
        
        {/* Performance and Analytics Scripts */}
        <noscript>
          <div style={{ display: 'none' }}>
            This website requires JavaScript to function properly. 
            Please enable JavaScript in your browser settings.
          </div>
        </noscript>
      </body>
    </html>
  )
}