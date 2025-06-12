'use client'

import { FileCheck, Shield, BarChart3, Clock, Users, Award, CheckCircle, ArrowRight } from 'lucide-react'

export default function Services() {
  const services = [
    {
      icon: FileCheck,
      title: 'Trust Account Audits',
      description: 'Comprehensive auditing of trust accounts for legal practices, real estate agencies, and other regulated businesses.',
      features: ['ASIC Compliance', 'Detailed Reporting', 'Risk Assessment', 'Regulatory Guidance'],
      color: 'from-primary-500 to-primary-600'
    },
    {
      icon: Shield,
      title: 'Compliance Reviews',
      description: 'Thorough compliance reviews ensuring your trust accounts meet all regulatory requirements and best practices.',
      features: ['Regulatory Compliance', 'Policy Review', 'Process Improvement', 'Staff Training'],
      color: 'from-gold-500 to-gold-600'
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'In-depth analysis of trust account transactions, reconciliations, and financial controls.',
      features: ['Transaction Analysis', 'Reconciliation Review', 'Control Testing', 'Trend Analysis'],
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Clock,
      title: 'Ongoing Support',
      description: '24/7 support and consultation services to ensure continuous compliance and peace of mind.',
      features: ['24/7 Hotline', 'Monthly Check-ins', 'Emergency Response', 'Training Programs'],
      color: 'from-purple-500 to-purple-600'
    }
  ]

  const stats = [
    { number: '1000+', label: 'Audits Completed', sublabel: 'Across Australia' },
    { number: '98%', label: 'Client Satisfaction', sublabel: 'Rating' },
    { number: '15+', label: 'Years Experience', sublabel: 'In Trust Auditing' },
    { number: '24/7', label: 'Support Available', sublabel: 'When You Need It' }
  ]

  return (
    <section id="services" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-gold-100 dark:from-primary-900/30 dark:to-gold-900/30 text-primary-700 dark:text-gold-400 text-sm font-medium mb-6">
            <Award className="h-4 w-4 mr-2" />
            Professional Auditing Services
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Trust Account
            <span className="text-gradient block">Auditing Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We provide comprehensive trust account auditing services designed to ensure compliance, 
            reduce risk, and provide peace of mind for your business operations.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => (
            <div key={index} className="group relative">
              <div className="glass-morphism rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${service.color} text-white mb-6`}>
                  <service.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                      <span className="text-slate-700 dark:text-slate-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="inline-flex items-center text-primary-600 dark:text-gold-400 font-semibold hover:text-primary-700 dark:hover:text-gold-300 transition-colors duration-200 group-hover:translate-x-2 transform transition-transform">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Choose AuditsPro Australia?
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              Our track record speaks for itself
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-gradient mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-slate-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-slate-600 dark:text-slate-400">
                  {stat.sublabel}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}