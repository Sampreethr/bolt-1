import { Metadata } from 'next'
import About from '@/src/components/About'

/**
 * About Page Metadata
 * Optimized for company and team-related SEO keywords
 */
export const metadata: Metadata = {
  title: 'About AuditsPro Australia | Expert Trust Account Auditors',
  description: 'Learn about AuditsPro Australia, leading trust account auditing specialists with 15+ years experience. Meet our ASIC registered auditors Sarah Mitchell, David Chen, and Rebecca Thompson. Trusted by 500+ Australian businesses.',
  keywords: [
    'about AuditsPro Australia',
    'trust account auditing company',
    'ASIC registered auditors',
    'professional auditing team',
    'Australian auditing specialists',
    'trust account experts',
    'auditing company history',
    'professional audit team',
    'compliance specialists Australia'
  ],
  openGraph: {
    title: 'About AuditsPro Australia | Expert Trust Account Auditors',
    description: 'Leading trust account auditing specialists with 15+ years experience. ASIC registered auditors trusted by 500+ Australian businesses.',
    url: 'https://auditspro.com.au/about',
    images: [
      {
        url: '/og-about.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia Team - Expert Trust Account Auditors',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AuditsPro Australia | Expert Trust Account Auditors',
    description: 'Leading trust account auditing specialists with 15+ years experience. ASIC registered auditors trusted by 500+ Australian businesses.',
    images: ['/twitter-about.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au/about',
  },
}

/**
 * Structured data for about page
 */
const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'AuditsPro Australia',
    description: 'Leading trust account auditing specialists across Australia with 15+ years of experience and ASIC registered auditors.',
    url: 'https://auditspro.com.au',
    logo: 'https://auditspro.com.au/logo.png',
    foundingDate: '2008',
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: '25',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Level 25, 123 Collins Street',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      postalCode: '3000',
      addressCountry: 'AU',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '1300283487',
      contactType: 'customer service',
      availableLanguage: 'English',
      areaServed: 'AU',
    },
    employee: [
      {
        '@type': 'Person',
        name: 'Sarah Mitchell',
        jobTitle: 'Principal Auditor',
        description: 'CPA, ASIC Registered Auditor with 15+ years experience specializing in legal practice audits.',
        worksFor: {
          '@type': 'Organization',
          name: 'AuditsPro Australia',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Certification',
            name: 'CPA',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Registration',
            name: 'ASIC Registered Auditor',
          },
        ],
      },
      {
        '@type': 'Person',
        name: 'David Chen',
        jobTitle: 'Senior Auditor',
        description: 'CA, ASIC Registered Auditor with 12+ years experience specializing in real estate audits.',
        worksFor: {
          '@type': 'Organization',
          name: 'AuditsPro Australia',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Certification',
            name: 'CA',
          },
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Registration',
            name: 'ASIC Registered Auditor',
          },
        ],
      },
      {
        '@type': 'Person',
        name: 'Rebecca Thompson',
        jobTitle: 'Compliance Manager',
        description: 'CPA, Compliance Specialist with 10+ years experience in regulatory compliance.',
        worksFor: {
          '@type': 'Organization',
          name: 'AuditsPro Australia',
        },
        hasCredential: [
          {
            '@type': 'EducationalOccupationalCredential',
            credentialCategory: 'Professional Certification',
            name: 'CPA',
          },
        ],
      },
    ],
    memberOf: [
      {
        '@type': 'Organization',
        name: 'CPA Australia',
      },
      {
        '@type': 'Organization',
        name: 'Institute of Chartered Accountants Australia',
      },
    ],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Professional Registration',
        name: 'ASIC Registered Company Auditor',
        recognizedBy: {
          '@type': 'Organization',
          name: 'Australian Securities and Investments Commission',
        },
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'Quality Certification',
        name: 'ISO 9001 Certified',
      },
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '500',
      bestRating: '5',
      worstRating: '1',
    },
    serviceArea: {
      '@type': 'Country',
      name: 'Australia',
    },
    sameAs: [
      'https://www.facebook.com/AuditsProAustralia',
      'https://www.linkedin.com/company/auditspro-australia',
      'https://twitter.com/AuditsProAU',
    ],
  },
}

/**
 * About Page Component
 * 
 * Features:
 * - Dedicated page for company information
 * - Team member profiles and credentials
 * - Company history and mission
 * - Professional certifications and achievements
 * - SEO optimized with structured data
 * - Comprehensive about information
 * 
 * @returns About page with company and team information
 */
export default function AboutPage(): JSX.Element {
  return (
    <>
      {/* Structured Data for About Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(aboutStructuredData),
        }}
      />
      
      {/* Page Header */}
      <section 
        className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            About
            <span className="text-primary-600 block">AuditsPro Australia</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Australia's leading trust account auditing specialists with 15+ years of experience, 
            ASIC registered auditors, and a commitment to excellence in compliance.
          </p>
        </div>
      </section>

      {/* About Component */}
      <About />

      {/* Company Timeline Section */}
      <section 
        className="py-12 sm:py-16 bg-white border-t border-gray-200"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From humble beginnings to Australia's most trusted trust account auditing firm
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-32 flex-shrink-0">
                <div className="bg-primary-500 text-white rounded-lg px-4 py-2 text-center font-bold">
                  2008
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Company Founded</h3>
                <p className="text-gray-600">
                  AuditsPro Australia was established with a mission to provide professional, 
                  reliable trust account auditing services across Australia.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-32 flex-shrink-0">
                <div className="bg-primary-500 text-white rounded-lg px-4 py-2 text-center font-bold">
                  2012
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">ASIC Registration</h3>
                <p className="text-gray-600">
                  Achieved ASIC registration for company auditing, establishing our 
                  credentials as certified professional auditors.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-32 flex-shrink-0">
                <div className="bg-primary-500 text-white rounded-lg px-4 py-2 text-center font-bold">
                  2018
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">National Expansion</h3>
                <p className="text-gray-600">
                  Expanded services to cover all Australian states and territories, 
                  becoming a truly national auditing firm.
                </p>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row md:items-center gap-6">
              <div className="md:w-32 flex-shrink-0">
                <div className="bg-primary-500 text-white rounded-lg px-4 py-2 text-center font-bold">
                  2024
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">500+ Clients Milestone</h3>
                <p className="text-gray-600">
                  Reached the milestone of serving over 500 satisfied clients across Australia, 
                  cementing our position as industry leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications and Memberships */}
      <section 
        className="py-12 sm:py-16 bg-gray-50"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Professional Certifications & Memberships
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🏛️ Government Registrations
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">ASIC Registered Company Auditor #12345</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Australian Business Number (ABN): 12 345 678 901</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Professional Indemnity Insurance: $10M Coverage</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                🎓 Professional Memberships
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">CPA Australia Member Firm</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">Institute of Chartered Accountants Australia</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-gray-700">ISO 9001:2015 Quality Management Certified</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-12 sm:py-16 bg-white border-t border-gray-200"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
            Ready to Work with Australia's Leading Auditors?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join over 500 satisfied clients who trust AuditsPro Australia for their 
            trust account auditing needs. Experience the difference professional expertise makes.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center"
              aria-label="View our professional services"
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
              className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 inline-flex items-center justify-center"
              aria-label="Contact our team"
            >
              <span>Contact Our Team</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}