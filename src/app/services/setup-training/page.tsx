'use client'

import { useState } from 'react'
import { Users, CheckCircle, ArrowLeft, BookOpen, Settings, Award, Phone, Mail, Download, Star } from 'lucide-react'
import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function SetupTraining() {
  const serviceDetails = {
    title: 'Trust Account Setup & Training',
    subtitle: 'Complete setup assistance and comprehensive staff training',
    description: 'Our setup and training services help you establish proper trust account procedures and ensure your team is fully equipped to maintain compliance.',
    price: 'From $1,000',
    features: [
      'Complete trust account setup and configuration',
      'Custom procedure documentation and policies',
      'Comprehensive staff training programs',
      'Best practice guidance and recommendations',
      'Compliance checklist and templates',
      'Ongoing support during transition period',
      'Training materials and resources',
      'Certification upon completion'
    ]
  }

  const trainingModules = [
    {
      name: 'Trust Account Fundamentals',
      duration: '2 hours',
      description: 'Basic principles and legal requirements',
      topics: ['Legal framework', 'Trust account basics', 'Compliance requirements', 'Common mistakes']
    },
    {
      name: 'Operational Procedures',
      duration: '3 hours',
      description: 'Day-to-day operational procedures',
      topics: ['Transaction processing', 'Record keeping', 'Reconciliation', 'Reporting procedures']
    },
    {
      name: 'Advanced Compliance',
      duration: '2 hours',
      description: 'Advanced compliance topics and scenarios',
      topics: ['Complex transactions', 'Risk management', 'Audit preparation', 'Best practices']
    }
  ]

  const packages = [
    {
      name: 'Basic Setup',
      price: '$149',
      duration: '1-2 days',
      features: [
        'Trust account setup',
        'Basic documentation',
        'Essential training (4 hours)',
        'Email support for 30 days'
      ],
      popular: false
    },
    {
      name: 'Complete Package',
      price: '$249',
      duration: '3-5 days',
      features: [
        'Full trust account setup',
        'Comprehensive documentation',
        'Complete training program (7 hours)',
        'Custom policies and procedures',
        'Phone support for 90 days',
        'Follow-up consultation'
      ],
      popular: true
    },
    {
      name: 'Premium Implementation',
      price: '$299',
      duration: '1-2 weeks',
      features: [
        'Enterprise-level setup',
        'Custom system integration',
        'Advanced training program',
        'Ongoing mentoring',
        'Quarterly reviews',
        'Priority support for 12 months'
      ],
      popular: false
    }
  ]

  const benefits = [
    {
      icon: Settings,
      title: 'Professional Setup',
      description: 'Expert configuration of your trust account systems and procedures.'
    },
    {
      icon: BookOpen,
      title: 'Comprehensive Training',
      description: 'Thorough training programs that ensure your team understands all requirements.'
    },
    {
      icon: Award,
      title: 'Certification',
      description: 'Staff certification upon successful completion of training programs.'
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
            <span className="text-slate-900 dark:text-white">Setup & Training</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gold-100 to-orange-100 dark:from-gold-900/30 dark:to-orange-900/30 text-gold-700 dark:text-gold-400 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              Setup & Training
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {serviceDetails.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              {serviceDetails.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book Setup & Training
              </Link>
              <a href="tel:1300283487" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300">
                <Phone className="inline mr-2 h-5 w-5" />
                Discuss Requirements
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
                    <CheckCircle className="h-6 w-6 text-gold-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Why Professional Setup Matters
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-gradient-to-br from-gold-500 to-gold-600 rounded-lg text-white">
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

        {/* Training Modules */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Training Modules
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Comprehensive training covering all aspects of trust account management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{module.name}</h3>
                  <div className="text-gold-600 dark:text-gold-400 font-semibold">{module.duration}</div>
                  <p className="text-slate-600 dark:text-slate-300 text-sm mt-2">{module.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-slate-900 dark:text-white text-sm">Topics Covered:</h4>
                  <ul className="space-y-1">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-gold-500 flex-shrink-0" />
                        <span className="text-slate-700 dark:text-slate-300 text-sm">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Setup & Training Packages
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Choose the package that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${pkg.popular ? 'bg-gradient-to-br from-gold-50 to-orange-50 dark:from-gold-900/20 dark:to-orange-900/20 border-2 border-gold-200 dark:border-gold-400' : 'glass-morphism'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-gold-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-1">{pkg.price}</div>
                  <div className="text-sm text-slate-600 dark:text-slate-400">{pkg.duration}</div>
                </div>

                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-gold-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/payment" className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-center block ${pkg.popular ? 'bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white' : 'border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400'}`}>
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="glass-morphism rounded-3xl p-8 md:p-12 text-center bg-gradient-to-r from-gold-50 to-orange-50 dark:from-gold-900/20 dark:to-orange-900/20">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Start Your Compliance Journey Today
            </h2>
            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
              Get your trust account setup right from the start with professional guidance and comprehensive training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book Your Setup
              </Link>
              <Link href="/#contact" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl hover:border-gold-500 dark:hover:border-gold-500 hover:text-gold-600 dark:hover:text-gold-400 transition-all duration-300">
                Get More Information
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
