'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users, Phone, Star, TrendingUp, BarChart3, Calendar, Building, Clock } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function CleanHero(): JSX.Element {
  const [activeFeature, setActiveFeature] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering interactive elements after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Trust indicators
  const trustIndicators = [
    { label: 'ASIC Registered', icon: Shield, verified: true },
    { label: 'CPA Australia', icon: Award, verified: true },
    { label: 'Government Compliant', icon: CheckCircle, verified: true },
    { label: 'Fixed Pricing', icon: TrendingUp, verified: true }
  ]

  // Key benefits
  const keyBenefits = [
    {
      icon: CheckCircle,
      title: 'Fast Turnaround',
      description: '7-14 business days',
      highlight: 'Express available'
    },
    {
      icon: Shield,
      title: 'Government Compliant',
      description: 'ASIC registered auditors',
      highlight: '100% compliant'
    },
    {
      icon: Award,
      title: 'Fixed Pricing',
      description: 'No hidden fees',
      highlight: 'Transparent costs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '15+ years experience',
      highlight: '500+ clients'
    }
  ]

  // Statistics
  const statistics = [
    { value: '500+', label: 'Satisfied Clients', sublabel: 'Australia Wide' },
    { value: '15+', label: 'Years Experience', sublabel: 'Trust Account Auditing' },
    { value: '7-14', label: 'Days Delivery', sublabel: 'Fast Turnaround' },
    { value: '100%', label: 'Compliance Rate', sublabel: 'Perfect Record' }
  ]

  return (
    <section 
      id="home" 
      className="hero-clean bg-gradient-to-br from-gray-50 to-white min-h-screen relative"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100/40 rounded-full blur-3xl"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300/20 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-medium border border-primary-200 hover:bg-primary-200 transition-colors duration-300">
              <Shield className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
              <span>Australia's Trusted Trust Account Auditors</span>
            </div>
            
            {/* Hero Heading */}
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                aria-label="Trust Account Audits Made Simple for Australia"
              >
                <span className="block text-gray-900 leading-tight">
                  Trust Account
                </span>
                <span className="block text-primary-600 leading-tight">
                  Audits Made Simple
                </span>
                <span className="block text-gray-700 leading-tight">
                  for Australia
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Professional trust account auditing for law firms and real estate agencies across Australia. 
                <span className="text-primary-600 font-semibold"> Fast turnaround, government compliant, fixed pricing.</span>
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white border-2 border-gray-200 hover:border-primary-300 transition-all duration-300 p-4 lg:p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1"
                  onMouseEnter={() => mounted && setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-200">
                      <benefit.icon className="h-6 w-6 text-primary-600" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        {benefit.description}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary-50 text-primary-700 text-xs font-medium mt-1">
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <Link 
                href="/services" 
                className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 inline-flex items-center justify-center group"
                aria-label="Book a trust account audit"
              >
                <span>Book an Audit</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
              
              <a 
                href="tel:1300283487" 
                className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 inline-flex items-center justify-center group"
                aria-label="Call AuditsPro at 1300 AUDITS"
              >
                <Phone className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>Call 1300 AUDITS</span>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-3 font-medium">
                Trusted by leading Australian businesses:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {trustIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 border border-gray-200/50 p-2 text-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 rounded-lg hover:scale-105"
                  >
                    <indicator.icon className="h-5 w-5 text-primary-600 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-xs font-medium text-gray-700 block">
                      {indicator.label}
                    </span>
                    {indicator.verified && (
                      <CheckCircle className="h-3 w-3 text-green-600 mx-auto mt-1" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Professional Report Card */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              {/* Professional Report Card */}
              <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-lg">
                
                {/* Header Section */}
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">Trust Account Analytics</h3>
                    <p className="text-gray-600 text-sm lg:text-base">AuditsPro Australia • Executive Dashboard</p>
                  </div>
                  <div className="p-3 bg-primary-500 rounded-xl text-white">
                    <BarChart3 className="h-6 w-6 lg:h-8 lg:w-8" aria-hidden="true" />
                  </div>
                </div>

                {/* Simple Chart Area */}
                <div className="bg-gray-50 rounded-xl p-4 lg:p-6 mb-6">
                  <div className="flex items-end justify-between h-24 lg:h-32 mb-3">
                    {[65, 85, 92, 78, 95, 88, 100].map((height, i) => (
                      <div key={i} className="flex flex-col items-center">
                        <div 
                          className="w-6 lg:w-8 bg-primary-500 rounded-t-sm"
                          style={{ height: `${height}%` }}
                        ></div>
                        <span className="text-xs text-gray-600 mt-2">Q{i + 1}</span>
                      </div>
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="font-semibold text-gray-900 text-sm lg:text-base">Compliance Performance Trend</p>
                    <p className="text-xs lg:text-sm text-gray-600">Real-time Analytics</p>
                  </div>
                </div>

                {/* Key Metrics */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6">
                  <div className="bg-gray-50 rounded-xl p-4 lg:p-6">
                    <div className="text-sm lg:text-base text-gray-600 mb-1">Portfolio Value</div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">$2.8M</div>
                    <div className="text-xs lg:text-sm text-green-600">↗ +12.5% YoY</div>
                  </div>
                  
                  <div className="bg-gray-50 rounded-xl p-4 lg:p-6">
                    <div className="text-sm lg:text-base text-gray-600 mb-1">Compliance Score</div>
                    <div className="text-2xl lg:text-3xl font-bold text-gray-900">100%</div>
                    <div className="text-xs lg:text-sm text-green-600">Perfect Record</div>
                  </div>
                </div>

                {/* Status Information */}
                <div className="grid grid-cols-2 gap-4 lg:gap-6 mb-6">
                  <div>
                    <div className="text-xs lg:text-sm text-gray-600">Audit Period</div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">FY 2024</div>
                  </div>
                  <div>
                    <div className="text-xs lg:text-sm text-gray-600">Delivery Time</div>
                    <div className="font-semibold text-gray-900 text-sm lg:text-base">7 Days</div>
                  </div>
                  <div>
                    <div className="text-xs lg:text-sm text-gray-600">Service Level</div>
                    <div className="font-semibold text-primary-600 text-sm lg:text-base">Premium</div>
                  </div>
                  <div>
                    <div className="text-xs lg:text-sm text-gray-600">Status</div>
                    <div className="font-semibold text-green-600 text-sm lg:text-base">Complete</div>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                  <div>
                    <div className="text-sm lg:text-base font-semibold text-gray-900">AuditsPro Australia</div>
                    <div className="text-xs lg:text-sm text-gray-600">ASIC Registered Auditor #12345</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs lg:text-sm text-gray-600">Fixed Price</div>
                    <div className="text-lg lg:text-xl font-bold text-primary-600">$499 + GST</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="section-clean-spacing">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Trusted by Australia's Leading Businesses
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our numbers speak for themselves - delivering excellence in trust account auditing since 2008
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {statistics.map((stat, index) => (
              <div 
                key={index}
                className="bg-white/80 border border-gray-200/50 text-center hover:bg-primary-50 hover:border-primary-200 transition-all duration-300 rounded-xl p-4 hover:shadow-md hover:-translate-y-1"
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-900 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Ensure Your Trust Account Compliance?
          </h3>
          <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
            Join over 500 satisfied clients who trust AuditsPro Australia for their annual trust account auditing requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/services"
              className="bg-white text-primary-600 hover:bg-primary-50 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold py-3 px-6 rounded-xl inline-flex items-center"
              aria-label="View our professional auditing services"
            >
              <span>View Our Services</span>
              <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
            </Link>
            
            <Link
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-300 font-semibold py-3 px-6 rounded-xl inline-flex items-center"
              aria-label="Get free consultation"
            >
              <span>Get Free Consultation</span>
            </Link>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-100 text-sm">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>ASIC Registered Auditors</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Fixed Pricing, No Hidden Fees</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}