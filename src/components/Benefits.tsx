'use client'

import { Clock, Shield, DollarSign, CheckCircle, Award, Users } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Complete your trust account audit in just 7-14 business days with our streamlined process.',
      features: ['Express 7-day option', 'Standard 14-day delivery', 'Progress tracking', 'Priority support']
    },
    {
      icon: Shield,
      title: 'Government Compliant',
      description: 'ASIC registered auditors ensuring full compliance with Australian trust account regulations.',
      features: ['ASIC registered', 'Latest regulations', 'Compliance guarantee', 'Legal protection']
    },
    {
      icon: DollarSign,
      title: 'Fixed Pricing',
      description: 'Transparent, fixed pricing with no hidden fees. Know exactly what you\'ll pay upfront.',
      features: ['No hidden costs', 'Upfront pricing', 'Payment plans', 'Money-back guarantee']
    }
  ]

  return (
    <section className="py-16 md:py-20 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <Award className="h-4 w-4 mr-2" />
            Why Choose AuditsPro
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Three Pillars of
            <span className="text-primary-600 block">Excellence</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built our reputation on three core promises that set us apart from other auditing firms.
          </p>
        </div>

        {/* Benefits Grid - Three Pillars with Professional Borders */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              {/* Professional Card with enhanced borders and shadows to match other components */}
              <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-200 shadow-md hover:shadow-lg hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1">
                {/* Icon with consistent sizing across all screen sizes */}
                <div className="inline-flex p-3 sm:p-4 rounded-2xl bg-primary-500 text-white mb-6 transform transition-transform duration-200 group-hover:scale-105 shadow-sm">
                  <benefit.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                
                {/* Content with responsive typography */}
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 leading-tight">
                  {benefit.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed text-sm sm:text-base">
                  {benefit.description}
                </p>

                {/* Features list with proper spacing for all screen sizes */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-3">
                      <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Professional hover effect - subtle and clean */}
                <div className="absolute inset-0 rounded-2xl bg-primary-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Icons Section with enhanced professional borders */}
        <div className="bg-white rounded-2xl p-6 sm:p-8 md:p-12 text-center border-2 border-gray-200 shadow-md">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 leading-tight">
            Trusted by Australia's Leading Businesses
          </h3>
          
          {/* Responsive grid that works on all screen sizes */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 sm:p-4 bg-primary-500 rounded-2xl text-white">
                <Shield className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base">ASIC Registered</div>
                <div className="text-xs sm:text-sm text-gray-600">Auditor #12345</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 sm:p-4 bg-primary-500 rounded-2xl text-white">
                <Award className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base">CPA Australia</div>
                <div className="text-xs sm:text-sm text-gray-600">Member Firm</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-3 sm:p-4 bg-primary-500 rounded-2xl text-white">
                <CheckCircle className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base">ISO Certified</div>
                <div className="text-xs sm:text-sm text-gray-600">Quality Assured</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3 col-span-2 lg:col-span-1">
              <div className="p-3 sm:p-4 bg-primary-500 rounded-2xl text-white">
                <Users className="h-6 w-6 sm:h-8 sm:w-8" />
              </div>
              <div className="text-center">
                <div className="font-bold text-gray-900 text-sm sm:text-base">500+ Clients</div>
                <div className="text-xs sm:text-sm text-gray-600">Australia Wide</div>
              </div>
            </div>
          </div>

          <p className="text-gray-600 mb-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Join hundreds of law firms and real estate agencies who trust AuditsPro for their annual compliance requirements.
          </p>
          
          {/* CTA button with proper touch targets for mobile */}
          <a 
            href="#contact" 
            className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl transition-all duration-300 transform hover:-translate-y-0.5 inline-flex items-center shadow-lg text-sm sm:text-base min-h-[44px] touch-manipulation"
            role="button"
            aria-label="Get started with AuditsPro today"
          >
            Get Started Today
            <CheckCircle className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}