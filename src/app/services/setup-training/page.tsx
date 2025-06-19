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
      price: '$1,000',
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
      price: '$2,500',
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
      price: '$4,000',
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
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto container-padding py-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-primary-600 transition-colors duration-200">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-primary-600 transition-colors duration-200">Services</Link>
            <span>/</span>
            <span className="text-gray-900">Setup & Training</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto container-padding py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
              <Users className="h-4 w-4 mr-2" />
              Setup & Training
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {serviceDetails.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {serviceDetails.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="btn-primary">
                Book Setup & Training
              </Link>
              <a href="tel:1300283487" className="btn-outline">
                <Phone className="inline mr-2 h-5 w-5" />
                Discuss Requirements
              </a>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="max-w-7xl mx-auto container-padding section-padding bg-light">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What's Included
              </h2>
              <div className="professional-list">
                {serviceDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-primary-500 flex-shrink-0 mt-1" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="professional-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Why Professional Setup Matters
                </h3>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-primary-500 rounded-lg text-white">
                        <benefit.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{benefit.title}</h4>
                        <p className="text-sm text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Training Modules */}
        <section className="max-w-7xl mx-auto container-padding section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Training Modules
            </h2>
            <p className="text-gray-600">
              Comprehensive training covering all aspects of trust account management
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingModules.map((module, index) => (
              <div key={index} className="professional-card hover-lift">
                <div className="text-center mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{module.name}</h3>
                  <div className="text-primary-600 font-semibold">{module.duration}</div>
                  <p className="text-gray-600 text-sm mt-2">{module.description}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-gray-900 text-sm">Topics Covered:</h4>
                  <div className="professional-list">
                    {module.topics.map((topic, topicIndex) => (
                      <div key={topicIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                        <span className="text-gray-700 text-sm">{topic}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Packages */}
        <section className="max-w-7xl mx-auto container-padding section-padding bg-light">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Setup & Training Packages
            </h2>
            <p className="text-gray-600">
              Choose the package that best fits your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${pkg.popular ? 'bg-primary-50 border-2 border-primary-500' : 'professional-card'}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-primary-600 mb-1">{pkg.price}</div>
                  <div className="text-sm text-gray-600">{pkg.duration}</div>
                </div>

                <div className="professional-list mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/payment" className={`w-full py-3 px-4 rounded-xl font-semibold transition-all duration-300 text-center block ${pkg.popular ? 'btn-primary' : 'btn-outline'}`}>
                  Choose {pkg.name}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto container-padding section-padding">
          <div className="professional-card clean-shadow-lg text-center bg-primary-50 border border-primary-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Start Your Compliance Journey Today
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Get your trust account setup right from the start with professional guidance and comprehensive training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="btn-primary">
                Book Your Setup
              </Link>
              <Link href="/#contact" className="btn-outline">
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