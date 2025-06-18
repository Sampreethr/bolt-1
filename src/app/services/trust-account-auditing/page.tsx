'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users, Calendar, DollarSign, FileCheck, Phone } from 'lucide-react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TrustAccountAuditing() {
  const serviceDetails = {
    title: 'Trust Account Auditing',
    subtitle: 'Comprehensive compliance auditing',
    description: 'Our trust account auditing services ensure your firm meets all regulatory requirements while identifying opportunities for improved financial management.',
    price: 'From $249',
    features: [
      'ASIC compliant audit procedures',
      'Detailed compliance report',
      'Risk assessment and recommendations',
      'Regulatory filing assistance',
      'Ongoing support and consultation',
      'Fixed pricing with no hidden fees',
      'Expert auditor assignment',
      'Secure document handling'
    ]
  }

  const process = [
    {
      title: 'Initial Consultation',
      description: 'We begin with a thorough consultation to understand your specific needs and requirements.',
      icon: Users
    },
    {
      title: 'Document Collection',
      description: 'Our secure portal allows for easy and confidential document submission.',
      icon: FileCheck
    },
    {
      title: 'Audit Execution',
      description: 'Our expert auditors conduct a comprehensive review of your trust accounts.',
      icon: Shield
    },
    {
      title: 'Report Delivery',
      description: 'Receive a detailed report with findings and recommendations.',
      icon: Award
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="pt-20">
        {/* Background Image */}
        <div className="absolute top-0 right-0 w-full h-[50vh] bg-[url('/images/audit-bg.jpg')] bg-cover bg-center opacity-10 z-0"></div>
        
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-gold-400">Home</Link>
            <span>/</span>
            <Link href="/#services" className="hover:text-blue-600 dark:hover:text-gold-400">Services</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Trust Account Auditing</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900/30 dark:to-blue-800/30 text-blue-700 dark:text-blue-400 text-sm font-medium mb-6">
              <FileCheck className="h-4 w-4 mr-2" />
              Trust Account Auditing
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              {serviceDetails.title}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
              {serviceDetails.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Book Your Audit
              </Link>
              <a href="tel:1300283487" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-4 px-8 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                <Phone className="inline mr-2 h-5 w-5" />
                Discuss Requirements
              </a>
            </div>
          </div>
        </section>

        {/* Service Details */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
                What's Included
              </h2>
              <div className="space-y-4">
                {serviceDetails.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-blue-500 flex-shrink-0 mt-1" />
                    <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-8">
              <div className="glass-morphism rounded-2xl p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                  Our Audit Process
                </h3>
                <div className="space-y-6">
                  {process.map((step, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Transparent Pricing
            </h2>
            <p className="text-slate-600 dark:text-slate-300">
              Choose the audit package that best fits your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="relative rounded-2xl p-8 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Standard Audit</h4>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">$249</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">14 business days</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Complete trust account audit</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Compliance report</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Basic recommendations</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Email support</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Regulatory filing</span>
                </li>
              </ul>

              <Link href="/payment" className="w-full py-3 px-4 border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 text-center block">
                Choose Standard Audit
              </Link>
            </div>

            <div className="relative rounded-2xl p-8 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 border-2 border-blue-200 dark:border-blue-400">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
              
              <div className="text-center mb-6">
                <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">Express Audit</h4>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-1">$299</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">7 business days</div>
              </div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Priority audit processing</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 text-sm">Detailed