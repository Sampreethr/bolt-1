'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users, Play, Download, Phone } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

export default function Hero() {
  const [showVideo, setShowVideo] = useState(false)

  const trustLogos = [
    'ASIC Registered',
    'CPA Australia',
    'Government Compliant',
    'Fixed Pricing'
  ]

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100/20 to-transparent dark:from-blue-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-gold-500 to-blue-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gold-100 dark:from-blue-900/30 dark:to-gold-900/30 text-blue-700 dark:text-gold-400 text-sm font-medium mb-6 border border-blue-200 dark:border-blue-800">
              <Shield className="h-4 w-4 mr-2" />
              Australia's Trusted Trust Account Auditors
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-slate-900 dark:text-white">Trust Account</span>
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent">Audits Made Simple</span>
              <br />
              <span className="text-slate-900 dark:text-white">for Australia</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Professional trust account auditing for law firms and real estate agencies across Australia. 
              Fast turnaround, government compliant, fixed pricing. Ensuring compliance with peace of mind.
            </p>

            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                  <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Fast Turnaround</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">7-14 business days</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                  <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Government Compliant</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">ASIC registered auditors</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gold-100 dark:bg-gold-900/30 rounded-lg">
                  <Award className="h-5 w-5 text-gold-600 dark:text-gold-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Fixed Pricing</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">No hidden fees</div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                  <Users className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">Expert Team</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">15+ years experience</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center justify-center group">
                Book an Audit
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <a href="tel:1300283487" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-gold-500 hover:text-blue-600 dark:hover:text-gold-400 transition-all duration-300">
                <Phone className="mr-2 h-5 w-5" />
                Call 1300 AUDITS
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-8 border-t border-slate-200 dark:border-slate-700">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">Trusted by leading Australian businesses:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {trustLogos.map((logo, index) => (
                  <div key={index} className="flex items-center justify-center p-3 bg-white dark:bg-slate-800 rounded-lg shadow-sm border border-slate-200 dark:border-slate-700">
                    <span className="text-xs font-medium text-slate-700 dark:text-slate-300 text-center">{logo}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Audit Report Card */}
              <div className="glass-morphism premium-shadow rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl p-6 text-white">
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
              <div className="absolute -top-6 -left-6 glass-morphism rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">100%</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Compliance Rate</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass-morphism rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">7-14</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Days Delivery</div>
                  </div>
                </div>
              </div>

              {/* Additional floating element */}
              <div className="absolute top-1/2 -left-8 glass-morphism rounded-2xl p-3 transform -rotate-6 hover:rotate-0 transition-transform duration-500">
                <div className="text-center">
                  <div className="text-sm font-bold text-slate-900 dark:text-white">$2,500</div>
                  <div className="text-xs text-slate-600 dark:text-slate-400">Fixed Price</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}