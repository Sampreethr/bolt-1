import { Metadata } from 'next'
import Services from '@/src/components/Services'

/**
 * Services Page Metadata
 * Optimized for service-specific SEO keywords
 */
export const metadata: Metadata = {
  title: 'Trust Account Auditing Services | AuditsPro Australia',
  description: 'Comprehensive trust account auditing services for real estate agents, solicitors, conveyancers, and property managers. ASIC registered auditors, fixed pricing from $499, fast 7-14 day turnaround across Australia.',
  keywords: [
    'trust account auditing services',
    'real estate audit services',
    'legal practice auditing',
    'conveyancer audits',
    'property manager audits',
    'ASIC compliance auditing',
    'professional audit services Australia',
    'trust account compliance services',
    'audit certification services'
  ],
  openGraph: {
    title: 'Trust Account Auditing Services | AuditsPro Australia',
    description: 'Professional trust account auditing services for Australian businesses. Real estate agents from $499, solicitors from $1,500. ASIC registered auditors.',
    url: 'https://auditspro.com.au/services',
    images: [
      {
        url: '/og-services.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia Trust Account Auditing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Trust Account Auditing Services | AuditsPro Australia',
    description: 'Professional trust account auditing services for Australian businesses. Real estate agents from $499, solicitors from $1,500.',
    images: ['/twitter-services.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au/services',
  },
}

/**
 * Structured data for services page
 */
const servicesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Trust Account Auditing Services',
  description: 'Professional trust account auditing services for real estate agents, solicitors, conveyancers, and property managers across Australia.',
  provider: {
    '@type': 'Organization',
    name: 'AuditsPro Australia',
    url: 'https://auditspro.com.au',
    telephone: '1300283487',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 25, 123 Collins Street',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU',
    },
  },
  areaServed: {
    '@type': 'Country',
    name: 'Australia',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Trust Account Auditing Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Real Estate Trust Account Audit',
          description: 'Comprehensive trust account audits for real estate agencies including property sales, rental bonds, and commission verification.',
          category: 'Real Estate Auditing',
        },
        price: '499',
        priceCurrency: 'AUD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '499',
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 7,
          maxValue: 14,
          unitCode: 'DAY',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Legal Practice Trust Account Audit',
          description: 'Specialized comprehensive audits for legal practice trust accounts with enhanced reporting and ongoing compliance support.',
          category: 'Legal Auditing',
        },
        price: '1500',
        priceCurrency: 'AUD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '1500',
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 7,
          maxValue: 14,
          unitCode: 'DAY',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Conveyancer Trust Account Audit',
          description: 'Professional audits tailored for conveyancing practitioners with focus on settlement processes.',
          category: 'Conveyancing Auditing',
        },
        price: '499',
        priceCurrency: 'AUD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '499',
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 7,
          maxValue: 14,
          unitCode: 'DAY',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Property Manager Trust Account Audit',
          description: 'Trust account audits for property management companies with rental and maintenance fund verification.',
          category: 'Property Management Auditing',
        },
        price: '499',
        priceCurrency: 'AUD',
        priceSpecification: {
          '@type': 'PriceSpecification',
          price: '499',
          priceCurrency: 'AUD',
          valueAddedTaxIncluded: false,
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 7,
          maxValue: 14,
          unitCode: 'DAY',
        },
      },
    ],
  },
  serviceType: 'Trust Account Auditing',
  category: 'Professional Services',
  audience: {
    '@type': 'Audience',
    audienceType: [
      'Real Estate Agents',
      'Solicitors',
      'Legal Practitioners',
      'Conveyancers',
      'Property Managers',
      'Settlement Agents',
      'Collection Agencies',
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.9',
    reviewCount: '500',
    bestRating: '5',
    worstRating: '1',
  },
}

/**
 * Services Page Component
 * 
 * Features:
 * - Dedicated page for all auditing services
 * - Comprehensive service information
 * - SEO optimized with structured data
 * - Fast loading with focused content
 * - Clear service categorization
 * - Professional presentation
 * 
 * @returns Services page with complete service offerings
 */
export default function ServicesPage(): JSX.Element {
  return (
    <>
      {/* Structured Data for Services */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(servicesStructuredData),
        }}
      />
      
      {/* Page Header for Context */}
      <section 
        className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Professional Trust Account
            <span className="text-primary-600 block">Auditing Services</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Comprehensive auditing solutions across Australia with transparent pricing, 
            fast turnaround times, and full regulatory compliance.
          </p>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Additional Information Section */}
      <section 
        className="py-12 sm:py-16 bg-white border-t border-gray-200"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our Auditing Services?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🏆 Industry Expertise
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 15+ years of specialized experience</li>
                <li>• ASIC registered professional auditors</li>
                <li>• Deep understanding of Australian regulations</li>
                <li>• Expertise across all business types</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                ⚡ Fast & Reliable
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 7-14 business day turnaround</li>
                <li>• Express services available</li>
                <li>• Real-time progress tracking</li>
                <li>• 24/7 emergency support</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                💯 Complete Compliance
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• 100% regulatory compliance guaranteed</li>
                <li>• State-specific requirements covered</li>
                <li>• Comprehensive audit reports</li>
                <li>• Post-audit support included</li>
              </ul>
            </div>
            
            <div className="bg-gray-50 rounded-xl p-6 sm:p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎯 Transparent Pricing
              </h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Fixed pricing with no hidden fees</li>
                <li>• Upfront cost estimates</li>
                <li>• Flexible payment options</li>
                <li>• Money-back guarantee</li>
              </ul>
            </div>
          </div>
          
          <div className="text-center mt-8 sm:mt-12">
            <a
              href="/contact"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center"
              aria-label="Contact us to discuss your auditing needs"
            >
              <span>Get Started Today</span>
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
          </div>
        </div>
      </section>
    </>
  )
}