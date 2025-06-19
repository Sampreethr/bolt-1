'use client'

import { FileCheck, Shield, BarChart3, Users, Award, CheckCircle, ArrowRight, DollarSign, Calendar } from 'lucide-react'
import { useState } from 'react'
import Link from 'next/link'

export default function Services() {
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
    ]
  }

  const addOnServices = [
    {
      icon: Shield,
      title: 'Compliance Consulting',
      description: 'Ongoing compliance support and consultation services.',
      price: 'From $150/hour',
      features: ['Monthly compliance reviews', 'Policy development', 'Staff training', 'Regulatory updates'],
      link: '/services/compliance-consulting'
    },
    {
      icon: BarChart3,
      title: 'Financial Reporting',
      description: 'Additional financial reporting and analysis services.',
      price: 'From $500',
      features: ['Custom financial reports', 'Trend analysis', 'Performance metrics', 'Board presentations'],
      link: '/services/financial-reporting'
    },
    {
      icon: Users,
      title: 'Setup & Training',
      description: 'Trust account setup assistance and staff training programs.',
      price: 'From $1,000',
      features: ['Trust account setup', 'Procedure documentation', 'Staff training sessions', 'Best practice guidance'],
      link: '/services/setup-training'
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
    <section id="services" className="section-padding bg-light">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <Award className="h-4 w-4 mr-2" />
            Our Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Trust Account
            <span className="text-primary-600 block">Auditing Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive auditing solutions designed to ensure compliance and provide peace of mind for your business.
          </p>
        </div>

        {/* Main Service - Trust Account Auditing */}
        <div className="professional-card clean-shadow-lg mb-16 p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-4 bg-primary-500 rounded-2xl text-white">
                  <mainService.icon className="h-8 w-8" />
                </div>
                <div>
                  <div className="text-sm font-medium text-primary-600">{mainService.subtitle}</div>
                  <h3 className="text-3xl font-bold text-gray-900">{mainService.title}</h3>
                </div>
              </div>

              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                {mainService.description}
              </p>

              <div className="flex items-center space-x-6 mb-6">
                <div className="flex items-center space-x-2">
                  <DollarSign className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">{mainService.price}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="h-5 w-5 text-primary-600" />
                  <span className="font-semibold text-gray-900">{mainService.duration}</span>
                </div>
              </div>

              <div className="professional-list mb-8">
                {mainService.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/payment" className="btn-primary inline-flex items-center justify-center">
                  Book Your Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a href="#contact" className="btn-outline inline-flex items-center justify-center">
                  Learn More
                </a>
              </div>
            </div>

            <div>
              <div className="professional-card p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-4">Our Audit Process</h4>
                <div className="space-y-4">
                  {mainService.process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <p className="text-gray-700">{step}</p>
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
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Additional Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {addOnServices.map((service, index) => (
              <div key={index} className="group">
                <div className="professional-card h-full hover-lift">
                  <div className="inline-flex p-4 rounded-2xl bg-primary-500 text-white mb-6 hover-scale">
                    <service.icon className="h-8 w-8" />
                  </div>
                  
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="text-lg font-bold text-primary-600 mb-4">
                    {service.price}
                  </div>

                  <div className="professional-list mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link href={service.link} className="btn-outline w-full text-center block">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="professional-card clean-shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h3>
            <p className="text-gray-600 text-lg">
              Choose the audit package that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${tier.popular ? 'bg-primary-50 border-2 border-primary-500' : 'bg-white border border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{tier.price}</div>
                  <div className="text-sm text-gray-600">{tier.duration}</div>
                </div>

                <div className="professional-list mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/payment" className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-center block ${tier.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Choose {tier.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}