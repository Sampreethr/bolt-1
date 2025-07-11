'use client'

import { Star, Quote, Building, Scale, Home } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Sarah Mitchell',
      title: 'Senior Partner',
      company: 'Mitchell & Associates Legal',
      rating: 5,
      content: 'AuditsPro Australia has been our trusted partner for trust account auditing for over 5 years. Their attention to detail and comprehensive reporting has given us complete confidence in our compliance. Highly recommended!',
      icon: Scale,
      location: 'Sydney, NSW'
    },
    {
      name: 'David Chen',
      title: 'Managing Director',
      company: 'Premium Real Estate Group',
      rating: 5,
      content: 'The professionalism and expertise of the AuditsPro team is outstanding. They helped us streamline our trust account processes and ensure full compliance. Their 24/7 support is invaluable.',
      icon: Home,
      location: 'Melbourne, VIC'
    },
    {
      name: 'Rebecca Thompson',
      title: 'Finance Director',
      company: 'Corporate Legal Services',
      rating: 5,
      content: 'We switched to AuditsPro after a poor experience with another firm. The difference is night and day. Professional, thorough, and always available when we need them. Excellent service!',
      icon: Building,
      location: 'Brisbane, QLD'
    }
  ]

  return (
    <section id="testimonials" className="testimonials-enhanced bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Enhanced Spacing */}
        <div className="page-header-enhanced text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <Star className="h-4 w-4 mr-2" />
            Client Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            What Our Clients Say
            <span className="text-primary-600 block">About Our Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what leading Australian businesses 
            have to say about their experience with AuditsPro.
          </p>
        </div>

        {/* Testimonials Grid with Enhanced Spacing */}
        <div className="section-enhanced-spacing grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1 h-full relative overflow-hidden">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote className="h-12 w-12 text-primary-600" />
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-primary-500 fill-current" />
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed italic">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary-500 flex items-center justify-center">
                      <testimonial.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.title}
                    </div>
                    <div className="text-sm font-medium text-primary-600">
                      {testimonial.company}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="bg-white rounded-2xl p-8 md:p-12 border-2 border-gray-200 shadow-lg text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Trusted by Leading Australian Businesses
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">4.9/5</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">98%</div>
              <div className="text-sm text-gray-600">Client Retention</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
          </div>

          <p className="text-gray-600 mb-6">
            Join hundreds of satisfied clients who trust AuditsPro Australia for their auditing needs.
          </p>
          
          <a href="#contact" className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center">
            Become Our Next Success Story
            <Star className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}