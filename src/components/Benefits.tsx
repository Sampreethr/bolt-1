'use client'

import { Clock, Shield, DollarSign, CheckCircle, Award, Users } from 'lucide-react'

export default function Benefits() {
  const benefits = [
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Complete your trust account audit in just 7-14 business days with our streamlined process.',
      features: ['Express 7-day option', 'Standard 14-day delivery', 'Progress tracking', 'Priority support'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Shield,
      title: 'Government Compliant',
      description: 'ASIC registered auditors ensuring full compliance with Australian trust account regulations.',
      features: ['ASIC registered', 'Latest regulations', 'Compliance guarantee', 'Legal protection'],
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: DollarSign,
      title: 'Fixed Pricing',
      description: 'Transparent, fixed pricing with no hidden fees. Know exactly what you\'ll pay upfront.',
      features: ['No hidden costs', 'Upfront pricing', 'Payment plans', 'Money-back guarantee'],
      color: 'from-gold-500 to-gold-600'
    }
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gold-100 dark:from-blue-900/30 dark:to-gold-900/30 text-blue-700 dark:text-gold-400 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Why Choose AuditsPro
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Three Pillars of
            <span className="bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent block">Excellence</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We've built our reputation on three core promises that set us apart from other auditing firms.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="group relative">
              <div className="glass-morphism rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${benefit.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className="h-8 w-8" />
                </div>
                
                {/* Content */}
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {benefit.description}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {benefit.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Hover Effect Border */}
                <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${benefit.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Icons Section */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 text-center">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Trusted by Australia's Leading Businesses
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl text-white">
                <Shield className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">ASIC Registered</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Auditor #12345</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl text-white">
                <Award className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">CPA Australia</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Member Firm</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl text-white">
                <CheckCircle className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">ISO Certified</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Quality Assured</div>
              </div>
            </div>
            
            <div className="flex flex-col items-center space-y-3">
              <div className="p-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl text-white">
                <Users className="h-8 w-8" />
              </div>
              <div>
                <div className="font-bold text-slate-900 dark:text-white">500+ Clients</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Australia Wide</div>
              </div>
            </div>
          </div>

          <p className="text-slate-600 dark:text-slate-300 mb-6">
            Join hundreds of law firms and real estate agencies who trust AuditsPro for their annual compliance requirements.
          </p>
          
          <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center">
            Get Started Today
            <CheckCircle className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </section>
  )
}