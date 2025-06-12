'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users } from 'lucide-react'
import Link from 'next/link'

export default function Hero() {
  const achievements = [
    'ASIC Registered Auditors',
    '1000+ Successful Audits',
    'All States Coverage',
    '24/7 Support Available'
  ]

  return (
    <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-gold-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900"></div>
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary-100/20 to-transparent dark:from-primary-900/20"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-gold-400 to-gold-600 rounded-full opacity-10 animate-float"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-gradient-to-br from-gold-500 to-primary-500 rounded-full opacity-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-gold-100 dark:from-primary-900/30 dark:to-gold-900/30 text-primary-700 dark:text-gold-400 text-sm font-medium mb-6 border border-primary-200 dark:border-primary-800">
              <Shield className="h-4 w-4 mr-2" />
              Australia's Trusted Audit Professionals
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              <span className="text-slate-900 dark:text-white">Premium</span>
              <br />
              <span className="text-gradient">Trust Account</span>
              <br />
              <span className="text-slate-900 dark:text-white">Auditing</span>
            </h1>
            
            <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              Comprehensive trust account auditing services across Australia. Expert compliance, 
              thorough reporting, and trusted audit solutions for legal and real estate professionals.
            </p>

            {/* Achievement Pills */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{achievement}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#contact" className="btn-primary inline-flex items-center justify-center group">
                Get Your Free Quote
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link href="#services" className="inline-flex items-center justify-center px-8 py-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-primary-500 dark:hover:border-gold-500 hover:text-primary-600 dark:hover:text-gold-400 transition-all duration-300">
                Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 mt-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 border-2 border-white dark:border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 border-2 border-white dark:border-slate-800"></div>
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-green-600 border-2 border-white dark:border-slate-800"></div>
                </div>
                <div className="text-sm">
                  <div className="font-semibold text-slate-900 dark:text-white">500+ Happy Clients</div>
                  <div className="text-slate-600 dark:text-slate-400">Across Australia</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Visual Elements */}
          <div className="relative animate-slide-up">
            <div className="relative z-10">
              {/* Main Card */}
              <div className="glass-morphism premium-shadow rounded-3xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="bg-gradient-to-br from-primary-600 to-primary-700 rounded-2xl p-6 text-white">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-bold">Audit Report</h3>
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-primary-100">Trust Account Balance</span>
                      <span className="font-bold">$2,847,362</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-100">Compliance Status</span>
                      <span className="font-bold text-green-300">✓ Compliant</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-primary-100">Last Audit</span>
                      <span className="font-bold">Dec 2024</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Stats Cards */}
              <div className="absolute -top-6 -left-6 glass-morphism rounded-2xl p-4 transform -rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg">
                    <Users className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">98%</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Client Retention</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 glass-morphism rounded-2xl p-4 transform rotate-12 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center space-x-3">
                  <div className="p-2 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg">
                    <Shield className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-bold text-slate-900 dark:text-white">24/7</div>
                    <div className="text-xs text-slate-600 dark:text-slate-400">Support</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}