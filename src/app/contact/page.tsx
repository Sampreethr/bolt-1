import { Metadata } from 'next'
import Contact from '@/src/components/Contact'

/**
 * Contact Page Metadata
 * Optimized for contact and location-based SEO keywords
 */
export const metadata: Metadata = {
  title: 'Contact AuditsPro Australia | Get Your Trust Account Audit Quote',
  description: 'Contact AuditsPro Australia for professional trust account auditing services. Call 1300 AUDITS, email info@auditspro.com.au, or visit our Melbourne office. Free consultation available.',
  keywords: [
    'contact AuditsPro Australia',
    'trust account audit quote',
    'auditing services Melbourne',
    'ASIC auditor contact',
    'trust account compliance consultation',
    'professional auditing contact',
    'audit services phone number',
    'Melbourne auditing firm contact'
  ],
  openGraph: {
    title: 'Contact AuditsPro Australia | Get Your Trust Account Audit Quote',
    description: 'Contact us for professional trust account auditing services. Call 1300 AUDITS or visit our Melbourne office. Free consultation available.',
    url: 'https://auditspro.com.au/contact',
    images: [
      {
        url: '/og-contact.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact AuditsPro Australia - Professional Trust Account Auditing Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact AuditsPro Australia | Get Your Trust Account Audit Quote',
    description: 'Contact us for professional trust account auditing services. Call 1300 AUDITS or visit our Melbourne office.',
    images: ['/twitter-contact.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au/contact',
  },
}

/**
 * Structured data for contact page
 */
const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'AuditsPro Australia',
    description: 'Professional trust account auditing services across Australia with ASIC registered auditors.',
    url: 'https://auditspro.com.au',
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
    openingHours: [
      'Mo-Fr 08:00-18:00',
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '1300283487',
        contactType: 'customer service',
        availableLanguage: 'English',
        areaServed: 'AU',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
          ],
          opens: '08:00',
          closes: '18:00',
        },
      },
      {
        '@type': 'ContactPoint',
        telephone: '1300283487',
        contactType: 'emergency',
        availableLanguage: 'English',
        areaServed: 'AU',
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday',
          ],
          opens: '00:00',
          closes: '23:59',
        },
      },
    ],
    sameAs: [
      'https://www.facebook.com/AuditsProAustralia',
      'https://www.linkedin.com/company/auditspro-australia',
      'https://twitter.com/AuditsProAU',
    ],
  },
}

/**
 * Contact Page Component
 * 
 * Features:
 * - Dedicated contact page with comprehensive information
 * - Contact form and multiple contact methods
 * - Office location and business hours
 * - Emergency contact information
 * - SEO optimized with local business structured data
 * - Map integration ready
 * 
 * @returns Contact page with forms and contact information
 */
export default function ContactPage(): JSX.Element {
  return (
    <>
      {/* Structured Data for Contact Page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactStructuredData),
        }}
      />
      
      {/* Page Header */}
      <section 
        className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Contact
            <span className="text-primary-600 block">AuditsPro Australia</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Ready to ensure your trust account compliance? Get in touch with our expert team 
            for a free consultation and personalized audit solution.
          </p>
        </div>
      </section>

      {/* Contact Component */}
      <Contact />

      {/* Additional Contact Information */}
      <section 
        className="py-12 sm:py-16 bg-white border-t border-gray-200"
        role="complementary"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Multiple Ways to Connect
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose the contact method that works best for you. We're here to help with all your trust account auditing needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Immediate Response */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-flex p-3 bg-green-500 rounded-xl text-white mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Immediate Response</h3>
                <p className="text-green-700 text-sm mb-4">
                  Call now for immediate assistance and quote
                </p>
                <a
                  href="tel:1300283487"
                  className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center min-h-[44px] touch-manipulation"
                  aria-label="Call AuditsPro now"
                >
                  <span>1300 AUDITS</span>
                </a>
              </div>
            </div>

            {/* Email Response */}
            <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-flex p-3 bg-blue-500 rounded-xl text-white mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Email Response</h3>
                <p className="text-blue-700 text-sm mb-4">
                  Detailed responses within 2 hours during business hours
                </p>
                <a
                  href="mailto:info@auditspro.com.au"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center min-h-[44px] touch-manipulation"
                  aria-label="Email AuditsPro"
                >
                  <span>Send Email</span>
                </a>
              </div>
            </div>

            {/* Office Visit */}
            <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
              <div className="text-center">
                <div className="inline-flex p-3 bg-purple-500 rounded-xl text-white mb-4">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">Office Visit</h3>
                <p className="text-purple-700 text-sm mb-4">
                  Meet our team in person at our Melbourne office
                </p>
                <a
                  href="https://maps.google.com/?q=Level+25,+123+Collins+Street,+Melbourne+VIC+3000"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center min-h-[44px] touch-manipulation"
                  aria-label="Get directions to our office"
                >
                  <span>Get Directions</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office Hours and Location */}
      <section 
        className="py-12 sm:py-16 bg-gray-50"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Office Hours */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Business Hours
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-semibold text-gray-900">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-gray-900">By Appointment</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-gray-900">Closed</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Emergency Support</span>
                  <span className="font-semibold text-green-600">24/7 Available</span>
                </div>
              </div>
            </div>

            {/* Office Location */}
            <div className="bg-white rounded-xl p-6 sm:p-8 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <svg className="h-6 w-6 text-primary-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Office Location
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Melbourne Head Office</h4>
                  <p className="text-gray-700">
                    Level 25, 123 Collins Street<br />
                    Melbourne, VIC 3000<br />
                    Australia
                  </p>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600 mb-3">
                    Located in the heart of Melbourne's CBD with easy access to public transport.
                  </p>
                  <a
                    href="https://maps.google.com/?q=Level+25,+123+Collins+Street,+Melbourne+VIC+3000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm inline-flex items-center"
                    aria-label="View location on Google Maps"
                  >
                    <span>View on Google Maps</span>
                    <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section 
        className="py-12 sm:py-16 bg-white border-t border-gray-200"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our auditing services
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">How quickly can you complete our audit?</h3>
              <p className="text-gray-700">
                Our standard turnaround time is 7-14 business days. We also offer express services 
                for urgent requirements, which can be completed within 5-7 business days.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">Do you service all Australian states?</h3>
              <p className="text-gray-700">
                Yes, we provide trust account auditing services across all Australian states and territories. 
                Our team is familiar with the specific requirements for each jurisdiction.
              </p>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="font-semibold text-gray-900 mb-2">What information do you need to get started?</h3>
              <p className="text-gray-700">
                We'll need your trust account statements, transaction records, and reconciliation 
                documents for the audit period. We'll provide a comprehensive checklist once you engage our services.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}