import { Metadata } from 'next'
import Testimonials from '@/src/components/Testimonials'

/**
 * Testimonials Page Metadata
 * Optimized for trust and social proof keywords
 */
export const metadata: Metadata = {
  title: 'Client Testimonials | AuditsPro Australia Reviews',
  description: 'Read what our 500+ satisfied clients say about AuditsPro Australia trust account auditing services. 4.9/5 star rating from legal firms, real estate agencies, and property managers across Australia.',
  keywords: [
    'AuditsPro testimonials',
    'trust account auditing reviews',
    'client testimonials Australia',
    'auditing service reviews',
    'professional auditing feedback',
    'ASIC auditor reviews',
    'trust account compliance testimonials',
    'Australian auditing client reviews'
  ],
  openGraph: {
    title: 'Client Testimonials | AuditsPro Australia Reviews',
    description: '4.9/5 star rating from 500+ satisfied clients. Read testimonials from legal firms, real estate agencies, and property managers across Australia.',
    url: 'https://auditspro.com.au/testimonials',
    images: [
      {
        url: '/og-testimonials.jpg',
        width: 1200,
        height: 630,
        alt: 'AuditsPro Australia Client Testimonials and Reviews',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Client Testimonials | AuditsPro Australia Reviews',
    description: '4.9/5 star rating from 500+ satisfied clients. Read testimonials from legal firms, real estate agencies, and property managers.',
    images: ['/twitter-testimonials.jpg'],
  },
  alternates: {
    canonical: 'https://auditspro.com.au/testimonials',
  },
}

/**
 * Structured data for testimonials page
 */
const testimonialsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AuditsPro Australia',
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
      reviewBody: 'AuditsPro Australia has been our trusted partner for trust account auditing for over 5 years. Their attention to detail and comprehensive reporting has given us complete confidence in our compliance. Highly recommended!',
      datePublished: '2024-01-15',
      publisher: {
        '@type': 'Organization',
        name: 'Mitchell & Associates Legal',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'David Chen',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'The professionalism and expertise of the AuditsPro team is outstanding. They helped us streamline our trust account processes and ensure full compliance. Their 24/7 support is invaluable.',
      datePublished: '2024-02-20',
      publisher: {
        '@type': 'Organization',
        name: 'Premium Real Estate Group',
      },
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Rebecca Thompson',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody: 'We switched to AuditsPro after a poor experience with another firm. The difference is night and day. Professional, thorough, and always available when we need them. Excellent service!',
      datePublished: '2024-03-10',
      publisher: {
        '@type': 'Organization',
        name: 'Corporate Legal Services',
      },
    },
  ],
}

/**
 * Testimonials Page Component
 * 
 * Features:
 * - Dedicated page for client testimonials
 * - Social proof and trust indicators
 * - SEO optimized with review structured data
 * - Comprehensive client feedback
 * - Rating and review statistics
 * - Industry-specific testimonials
 * 
 * @returns Testimonials page with client reviews and social proof
 */
export default function TestimonialsPage(): JSX.Element {
  return (
    <>
      {/* Structured Data for Testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(testimonialsStructuredData),
        }}
      />
      
      {/* Page Header */}
      <section 
        className="bg-gradient-to-br from-gray-50 to-white py-8 sm:py-12 border-b border-gray-200"
        role="banner"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Client
            <span className="text-primary-600 block">Testimonials</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-6">
            Discover why over 500 Australian businesses trust AuditsPro for their 
            trust account auditing needs. Read genuine feedback from our satisfied clients.
          </p>
          
          {/* Trust Statistics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-200">
              <div className="text-2xl font-bold text-primary-600 mb-1">98%</div>
              <div className="text-sm text-gray-600">Retention Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Component */}
      <Testimonials />

      {/* Additional Reviews Section */}
      <section 
        className="py-12 sm:py-16 bg-gray-50"
        role="complementary"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              More Client Success Stories
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Testimonials from across Australia spanning different industries and business sizes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Additional testimonials */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Outstanding service from start to finish. The team made our annual audit 
                process seamless and stress-free. Highly professional and knowledgeable."
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">Mark Rodriguez</div>
                <div className="text-sm text-gray-600">Managing Director</div>
                <div className="text-sm text-primary-600">Coastal Property Management</div>
                <div className="text-xs text-gray-500">Gold Coast, QLD</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "The expertise and attention to detail provided by AuditsPro is exceptional. 
                They caught issues we hadn't noticed and helped us improve our processes."
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">Jennifer Walsh</div>
                <div className="text-sm text-gray-600">Senior Partner</div>
                <div className="text-sm text-primary-600">Walsh & Associates Law</div>
                <div className="text-xs text-gray-500">Perth, WA</div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <div className="flex items-center mb-4">
                <div className="flex text-primary-500">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Fast, reliable, and professional. AuditsPro completed our audit ahead of schedule 
                and provided valuable insights for improving our compliance processes."
              </blockquote>
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">Michael Park</div>
                <div className="text-sm text-gray-600">Finance Director</div>
                <div className="text-sm text-primary-600">Adelaide Conveyancing Group</div>
                <div className="text-xs text-gray-500">Adelaide, SA</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry Statistics */}
      <section 
        className="py-12 sm:py-16 bg-white"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Trusted Across Industries
            </h2>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">250+</div>
              <div className="text-gray-600 font-medium">Real Estate Agencies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
              <div className="text-gray-600 font-medium">Legal Practices</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">75+</div>
              <div className="text-gray-600 font-medium">Property Managers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Conveyancers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section 
        className="py-12 sm:py-16 bg-primary-500"
        role="complementary"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Join Our Growing Family of Satisfied Clients
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Experience the difference that professional, reliable trust account auditing makes. 
            Become our next success story.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/services"
              className="bg-white text-primary-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 inline-flex items-center justify-center"
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
              className="border-2 border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 inline-flex items-center justify-center"
              aria-label="Contact us for your audit needs"
            >
              <span>Get Your Free Quote</span>
            </a>
          </div>
        </div>
      </section>
    </>
  )
}