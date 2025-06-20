import { Metadata } from 'next'
import Hero from '@/src/components/Hero'
import Benefits from '@/src/components/Benefits'

/**
 * Home Page Metadata
 * Optimized for SEO with focus on primary keywords and local Australian market
 */
export const metadata: Metadata = {
  title: 'Professional Trust Account Auditing Services | AuditsPro Australia',
  description: 'Professional trust account auditing services across Australia. ASIC registered auditors, fast 7-14 day turnaround, fixed pricing. Trusted by 500+ businesses for legal and real estate compliance.',
  keywords: [
    'trust account audits Australia',
    'ASIC registered auditors',
    'legal trust account auditing',
    'real estate audits',
    'professional auditing services',
    'compliance auditing',
    'trust account compliance',
    'Australian auditing services'
  ],
  openGraph: {
    title: 'Professional Trust Account Auditing Services | AuditsPro Australia',
    description: 'ASIC registered auditors providing professional trust account auditing across Australia. Fast turnaround, fixed pricing, complete compliance.',
    url: 'https://auditspro.com.au',
    images: [
      {
        url: '/og-home.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia - Professional Trust Account Auditing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Professional Trust Account Auditing Services | AuditsPro Australia',
    description: 'ASIC registered auditors providing professional trust account auditing across Australia. Fast turnaround, fixed pricing, complete compliance.',
    images: ['/twitter-home.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au',
  },
}

/**
 * Structured data for home page
 */
const homeStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AuditsPro Australia',
  description: 'Professional trust account auditing services across Australia with ASIC registered auditors.',
  url: 'https://auditspro.com.au',
  logo: {
    '@type': 'ImageObject',
    url: 'https://auditspro.com.au/logo.png',
    width: 400,
    height: 400,
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '1300283487',
    contactType: 'customer service',
    availableLanguage: 'English',
    areaServed: 'AU',
  },
  sameAs: [
    'https://www.facebook.com/AuditsProAustralia',
    'https://www.linkedin.com/company/auditspro-australia',
    'https://twitter.com/AuditsProAU',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trust Account Auditing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Trust Account Audit',
          description: 'Comprehensive trust account audits for real estate agencies across Australia',
          provider: {
            '@type': 'Organization',
            name: 'AuditsPro Australia',
          },
        },
        price: '499',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        priceValidUntil: '2024-12-31',
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legal Practice Trust Account Audit',
          description: 'Specialized comprehensive audits for legal practice trust accounts',
          provider: {
            '@type': 'Organization',
            name: 'AuditsPro Australia',
          },
        },
        price: '1500',
        priceCurrency: 'AUD',
        availability: 'https://schema.org/InStock',
        validFrom: '2024-01-01',
        priceValidUntil: '2024-12-31',
      },
    ],
  },
}

/**
 * Enhanced Home Page Component
 * 
 * Features:
 * - Focused on core value proposition (Hero + Benefits)
 * - Comprehensive SEO optimization
 * - Structured data for rich snippets
 * - Fast loading with minimal components
 * - Clear call-to-action flow
 * - Mobile-first responsive design
 * 
 * @returns Home page with Hero and Benefits sections
 */
export default function HomePage(): JSX.Element {
  return (
    <>
      {/* Structured Data for Home Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(homeStructuredData),
        }}
      />
      
      {/* Hero Section - Primary value proposition */}
      <section 
        className="relative"
        role="banner"
        aria-labelledby="hero-heading"
      >
        <Hero />
        
        {/* Subtle separator */}
        <div 
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"
          aria-hidden="true"
        />
      </section>

      {/* Benefits Section - Three pillars of excellence */}
      <section 
        className="relative border-t border-gray-100"
        role="main"
        aria-labelledby="benefits-heading"
      >
        <Benefits />
        
        {/* Professional section separator */}
        <div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-primary-200"
          aria-hidden="true"
        />
      </section>

      {/* Call-to-Action Section */}
      <section 
        className="py-12 sm:py-16 lg:py-20 bg-white border-t border-gray-100"
        role="complementary"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 
            id="cta-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Ready to Ensure Your Trust Account Compliance?
          </h2>
          
          <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
            Join over 500 satisfied clients who trust AuditsPro Australia for their annual trust account auditing requirements. 
            Professional, reliable, and fully compliant across all Australian states.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/services"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center w-full sm:w-auto justify-center"
              aria-label="View our professional auditing services"
            >
              <span>View Our Services</span>
              <svg 
                className="ml-2 h-5 w-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            
            <a
              href="/contact"
              className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center w-full sm:w-auto justify-center"
              aria-label="Get free consultation"
            >
              <span>Get Free Consultation</span>
            </a>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm sm:text-base text-gray-600">Satisfied Clients</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-sm sm:text-base text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-primary-600 mb-2">7-14</div>
              <div className="text-sm sm:text-base text-gray-600">Days Turnaround</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}