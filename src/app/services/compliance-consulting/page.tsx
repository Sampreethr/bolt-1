'use client'

import { useState } from 'react'
import { Shield, CheckCircle, ArrowLeft, Calendar, Users, FileText, Phone, Mail, Download, Star } from 'lucide-react'
import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function ComplianceConsulting() {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null)

  const serviceDetails = {
    title: 'Compliance Consulting Services',
    subtitle: 'Ongoing compliance support and consultation',
    description: 'Our compliance consulting services provide ongoing support to ensure your business maintains the highest standards of trust account compliance throughout the year.',
    price: 'From $150/hour',
    features: [
      'Monthly compliance reviews and assessments',
      'Custom policy development and documentation',
      'Staff training and education programs',
      'Regular regulatory updates and alerts',
      'Risk assessment and mitigation strategies',
      'Compliance calendar and deadline management',
      'Direct access to compliance experts',
      'Emergency consultation support'
    ]
  }

  const packages = [
    {
      name: 'Basic Consulting',
      price: '$150/hour',
      duration: 'As needed',
      features: [
        'Ad-hoc compliance consultation',
        'Email support',
        'Basic policy review',
        'Regulatory update alerts'
      ],
      popular: false
    },
    {
      name: 'Monthly Support',
      price: '$800/month',
      duration: 'Ongoing',
      features: [
        'Monthly compliance review',
        'Priority phone support',
        'Custom policy development',
        'Staff training sessions',
        'Risk assessments',
        'Compliance calendar'
      ],
      popular: true
    },
    {
      name: 'Premium Partnership',
      price: '$1,500/month',
      duration: 'Ongoing',
      features: [
        'Weekly compliance check-ins',
        'Dedicated compliance manager',
        'Unlimited consultation',
        'Custom training programs',
        'Advanced risk management',
        'Board reporting',
        'Emergency support'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Shield,
      title: 'Proactive Compliance',
      description: 'Stay ahead of regulatory changes with proactive compliance management.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to our team of compliance experts and ASIC registered auditors.'
    },
    {
      icon: FileText,
      title: 'Documentation',
      description: 'Comprehensive documentation and policy development services.'
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Mitchell Legal',
      content: 'The monthly compliance support has been invaluable. We never miss a deadline and our processes are bulletproof.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Premium Real Estate',
      content: 'Having a dedicated compliance manager has transformed our operations. Highly recommended.',
      rating: 5
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-blue-600 dark:hover:text-gold-400">Services</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Compliance Consulting</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Compliance Consulting
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {serviceDetails.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              {serviceDetails.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Get Started Today
              </Link>
              <a href="tel:1300283487" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl hover:border-green-500 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                <Phone className="inline mr-2 h-5 w-5" />
                Call for Consultation
              </a>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {serviceDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Why Choose Our Consulting?
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-green-500 to-green-600 rounded-lg text-white">
                        <benefit.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{benefit.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Packages */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Choose Your Support Level
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Select the consulting package that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${pkg.popular ? 'bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20 border-2 border-green-200 dark:border-green-400' : 'glass-morphism'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-1">{pkg.price}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/payment" className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-center block ${pkg.popular ? 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white' : 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-green-500 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400'}`}>
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              What Our Clients Say
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6">
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-gold-500 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 dark:text-slate-300 mb-4 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-slate-900 dark:text-white">{testimonial.name}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 text-center bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-900/20 dark:to-blue-900/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Ready to Enhance Your Compliance?
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who trust our compliance consulting services to keep them compliant and worry-free.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Start Your Consultation
              </Link>
              <Link href="/#contact" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl hover:border-green-500 dark:hover:border-green-500 hover:text-green-600 dark:hover:text-green-400 transition-all duration-300">
                Contact Us First
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}