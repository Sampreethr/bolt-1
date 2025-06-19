'use client'

import { useState } from 'react'
import { BarChart3, CheckCircle, ArrowLeft, TrendingUp, FileText, PieChart, Phone, Mail, Download, Star } from 'lucide-react'
import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function FinancialReporting() {
  const serviceDetails = {
    title: 'Financial Reporting Services',
    subtitle: 'Advanced financial analysis and custom reporting',
    description: 'Our financial reporting services provide detailed analysis and custom reports to help you understand your trust account performance and make informed business decisions.',
    price: 'From $500',
    features: [
      'Custom financial reports and dashboards',
      'Trend analysis and performance metrics',
      'Trust account balance reconciliation',
      'Cash flow analysis and forecasting',
      'Regulatory compliance reporting',
      'Board presentation materials',
      'Monthly, quarterly, and annual reports',
      'Interactive data visualization'
    ]
  }

  const reportTypes = [
    {
      name: 'Trust Account Summary',
      description: 'Comprehensive overview of trust account balances and transactions',
      features: ['Balance summaries', 'Transaction analysis', 'Compliance status', 'Risk indicators'],
      price: '$500'
    },
    {
      name: 'Performance Analytics',
      description: 'Detailed performance metrics and trend analysis',
      features: ['Performance trends', 'Comparative analysis', 'KPI tracking', 'Growth metrics'],
      price: '$750'
    },
    {
      name: 'Executive Dashboard',
      description: 'High-level executive reporting with key insights',
      features: ['Executive summary', 'Key metrics', 'Risk assessment', 'Strategic insights'],
      price: '$1,000'
    }
  ]

  const benefits = [
    {
      icon: TrendingUp,
      title: 'Data-Driven Insights',
      description: 'Make informed decisions with comprehensive financial analysis and reporting.'
    },
    {
      icon: PieChart,
      title: 'Visual Analytics',
      description: 'Easy-to-understand charts and graphs that tell your financial story.'
    },
    {
      icon: FileText,
      title: 'Custom Reports',
      description: 'Tailored reports that meet your specific business and regulatory needs.'
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
            <span className="text-gray-900">Financial Reporting</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-7xl mx-auto container-padding py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
              <BarChart3 className="h-4 w-4 mr-2" />
              Financial Reporting
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {serviceDetails.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {serviceDetails.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="btn-primary">
                Order Custom Report
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
                Comprehensive Reporting Features
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
                  Why Our Reports Matter
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

              {/* Sample Report Preview */}
              <div className="professional-card">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  Sample Report Preview
                </h3>
                <div className="bg-primary-50 rounded-xl p-4 border border-primary-200">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Trust Account Balance</span>
                      <span className="font-bold text-gray-900">$2,847,362</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Monthly Growth</span>
                      <span className="font-bold text-primary-600">+12.5%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Compliance Score</span>
                      <span className="font-bold text-primary-600">100%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Risk Level</span>
                      <span className="font-bold text-primary-600">Low</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Report Types */}
        <section className="max-w-7xl mx-auto container-padding section-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Report Types
            </h2>
            <p className="text-gray-600">
              Choose from our range of specialized financial reports
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reportTypes.map((report, index) => (
              <div key={index} className="professional-card hover-lift">
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{report.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{report.description}</p>
                  <div className="text-2xl font-bold text-primary-600">{report.price}</div>
                </div>

                <div className="professional-list mb-6">
                  {report.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-primary-500 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link href="/payment" className="btn-outline w-full text-center block">
                  Order This Report
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-7xl mx-auto container-padding section-padding bg-light">
          <div className="professional-card clean-shadow-lg text-center bg-primary-50 border border-primary-200 p-8 md:p-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Get Insights That Drive Results
            </h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Transform your financial data into actionable insights with our comprehensive reporting services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/payment" className="btn-primary">
                Order Custom Report
              </Link>
              <Link href="/#contact" className="btn-outline">
                Discuss Your Needs
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}