'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users, Phone } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const trustLogos = [
    'ASIC Registered',
    'CPA Australia',
    'Government Compliant',
    'Fixed Pricing'
  ]

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Clean Background */}
      <div className="absolute inset-0 bg-gray-50"></div>
      
      {/* Subtle Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100 rounded-full opacity-20 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-200 rounded-full opacity-15 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
              <Shield className="h-4 w-4 mr-2" />
              Australia's Trusted Trust Account Auditors
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-gray-900">Trust Account</span>
              <br />
              <span className="text-primary-600">Audits Made Simple</span>
              <br />
              <span className="text-gray-900">for Australia</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Professional trust account auditing for law firms and real estate agencies across Australia. 
              Fast turnaround, government compliant, fixed pricing. Ensuring compliance with peace of mind.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fast Turnaround</div>
                  <div className="text-sm text-gray-600">7-14 business days</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Shield className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Government Compliant</div>
                  <div className="text-sm text-gray-600">ASIC registered auditors</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Award className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Fixed Pricing</div>
                  <div className="text-sm text-gray-600">No hidden fees</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-primary-100 rounded-lg">
                  <Users className="h-5 w-5 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Expert Team</div>
                  <div className="text-sm text-gray-600">15+ years experience</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center group">
                Book an Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:1300283487" className="btn-outline inline-flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call 1300 AUDITS
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-600 mb-4">Trusted by leading Australian businesses:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustLogos.map((logo, index) => (
                  <div key={index} className="professional-card text-center">
                    <span className="text-xs font-medium text-gray-700">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Audit Report Card */}
              <div className="professional-card clean-shadow-lg transform rotate-3 hover:rotate-0 transition-transform duration-500 p-8">
                <div className="gradient-primary rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Trust Account Audit Report</h3>
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-blue-100">Trust Account Balance</span>
                      <span className="font-bold">$2,847,362</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">Compliance Status</span>
                      <span className="font-bold text-green-300">✓ Fully Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">Audit Period</span>
                      <span className="font-bold">FY 2024</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-100">Turnaround Time</span>
                      <span className="font-bold">7 Business Days</span>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-blue-500">
                    <div className="text-sm text-blue-100">Audited by: AuditsPro Australia</div>
                    <div className="text-xs text-blue-200">ASIC Registered Auditor #12345</div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 professional-card transform -rotate-12 hover:rotate-0 transition-transform duration-500 p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">100%</div>
                    <div className="text-xs text-gray-600">Compliance Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 professional-card transform rotate-12 hover:rotate-0 transition-transform duration-500 p-4">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-primary-500 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-gray-900">7-14</div>
                    <div className="text-xs text-gray-600">Days Delivery</div>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -left-8 professional-card transform -rotate-6 hover:rotate-0 transition-transform duration-500 p-3">
                <div className="text-center">
                  <div className="text-sm font-bold text-gray-900">$2,500</div>
                  <div className="text-xs text-gray-600">Fixed Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}