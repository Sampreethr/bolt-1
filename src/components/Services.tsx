'use client'

import { FileCheck, Shield, BarChart3, Clock, Users, Award, CheckCircle, ArrowRight, DollarSign, Calendar } from 'lucide-react'
import { useState } from 'react'

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const mainService = {
    icon: FileCheck,
    title: 'Trust Account Auditing',
    subtitle: 'Our Core Service',
    description: 'Comprehensive annual trust account audits for law firms and real estate agencies across Australia.',
    price: 'From $2,500',
    duration: '7-14 business days',
    features: [
      'ASIC compliant audit procedures',
      'Detailed compliance report',
      'Risk assessment and recommendations',
      'Regulatory filing assistance',
      'Ongoing support and consultation',
      'Fixed pricing with no hidden fees'
    ],
    process: [
      'Initial consultation and document review',
      'Comprehensive audit procedures',
      'Draft report and client review',
      'Final report and regulatory filing'
    ],
    color: 'from-blue-500 to-blue-600'
  }

  const addOnServices = [
    {
      icon: Shield,
      title: 'Compliance Consulting',
      description: 'Ongoing compliance support and consultation services.',
      price: 'From $150/hour',
      features: ['Monthly compliance reviews', 'Policy development', 'Staff training', 'Regulatory updates'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Additional financial reporting and analysis services.',
      price: 'From $500',
      features: ['Custom financial reports', 'Trend analysis', 'Performance metrics', 'Board presentations'],
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Users,
      title: 'Setup & Training',
      description: 'Trust account setup assistance and staff training programs.',
      price: 'From $1,000',
      features: ['Trust account setup', 'Procedure documentation', 'Staff training sessions', 'Best practice guidance'],
      color: 'from-gold-500 to-gold-600'
    }
  ]

  const pricingTiers = [
    {
      name: 'Standard Audit',
      price: '$2,500',
      duration: '14 business days',
      features: [
        'Complete trust account audit',
        'Compliance report',
        'Basic recommendations',
        'Email support',
        'Regulatory filing'
      ],
      popular: false
    },
    {
      name: 'Express Audit',
      price: '$3,500',
      duration: '7 business days',
      features: [
        'Priority audit processing',
        'Detailed compliance report',
        'Comprehensive recommendations',
        'Phone & email support',
        'Regulatory filing',
        'Follow-up consultation'
      ],
      popular: true
    },
    {
      name: 'Premium Package',
      price: '$4,500',
      duration: '7 business days',
      features: [
        'Express audit processing',
        'Detailed compliance report',
        'Risk assessment',
        'Dedicated account manager',
        'Regulatory filing',
        'Quarterly check-ins',
        'Staff training session'
      ],
      popular: false
    }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gold-100 dark:from-blue-900/30 dark:to-gold-900/30 text-blue-700 dark:text-gold-400 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Professional Trust Account
            <span className="bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent block">Auditing Services</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Comprehensive auditing solutions designed to ensure compliance and provide peace of mind for your business.
          </p>
        </div>

        {/* Main Service - Trust Account Auditing */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className={`p-4 bg-gradient-to-r ${mainService.color} rounded-2xl text-white`}>
                  <mainService.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-sm font-medium text-blue-600 dark:text-gold-400">{mainService.subtitle}</div>
                  <h3 className="text-3xl font-bold text-slate-900 dark:text-white">{mainService.title}</h3>
                </div>
              </div>

              <p className="text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                {mainService.description}
              </p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-green-600 dark:text-green-400" />
                  <span className="font-semibold text-slate-900 dark:text-white">{mainService.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                  <span className="font-semibold text-slate-900 dark:text-white">{mainService.duration}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                {mainService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <a href="#contact" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl inline-flex items-center">
                Book Your Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div>
              <div className="glass-morphism rounded-2xl p-6">
                <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-4">Our Audit Process</h4>
                <div className="space-y-4">
                  {mainService.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-slate-700 dark:text-slate-300">{step}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add-on Services */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-slate-900 dark:text-white text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="group">
                <div className="glass-morphism rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="text-lg font-bold text-blue-600 dark:text-gold-400 mb-4">
                    {service.price}
                  </div>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full py-3 px-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-gold-500 hover:text-blue-600 dark:hover:text-gold-400 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Transparent Pricing
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Choose the audit package that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${tier.popular ? 'bg-gradient-to-br from-blue-50 to-gold-50 dark:from-blue-900/20 dark:to-gold-900/20 border-2 border-blue-200 dark:border-gold-400' : 'bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-600 to-gold-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-blue-600 dark:text-gold-400 mb-1">{tier.price}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{tier.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 ${tier.popular ? 'bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white' : 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-blue-500 dark:hover:border-gold-500 hover:text-blue-600 dark:hover:text-gold-400'}`}>
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}