'use client'

import { AlertTriangle, Scale, FileCheck, Shield, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react'

export default function WhyAuditRequired() {
  const requirements = [
    {
      icon: Scale,
      title: 'Legal Requirement',
      description: 'Australian law mandates annual trust account audits for law firms and real estate agencies.',
      details: ['Corporations Act 2001', 'Legal Profession Acts', 'Real Estate Regulations', 'ASIC Requirements']
    },
    {
      icon: Shield,
      title: 'Client Protection',
      description: 'Trust account audits protect client funds and ensure proper handling of money held in trust.',
      details: ['Client fund security', 'Fraud prevention', 'Proper segregation', 'Interest compliance']
    },
    {
      icon: FileCheck,
      title: 'Compliance Verification',
      description: 'Independent verification ensures your trust account practices meet regulatory standards.',
      details: ['Record keeping', 'Transaction verification', 'Reconciliation checks', 'Reporting standards']
    }
  ]

  const analogy = {
    title: "Think of us as the referee in a game",
    subtitle: "We don't hold the money, we verify how it's used",
    points: [
      "We're independent third-party verifiers",
      "We ensure fair play with client funds",
      "We check the rules are being followed",
      "We provide official confirmation of compliance"
    ]
  }

  return (
    <section className="section-padding bg-light dark:bg-gray-900">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300 text-sm font-medium mb-6 border border-red-200 dark:border-red-800">
            <AlertTriangle className="h-4 w-4 mr-2" />
            Compliance Requirement
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Trust Account
            <span className="text-primary-600 dark:text-primary-400 block">Audits Are Required</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Understanding the legal requirements and importance of annual trust account audits in Australia.
          </p>
        </div>

        {/* Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {requirements.map((requirement, index) => (
            <div key={index} className="group">
              <div className="professional-card h-full hover-lift bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl p-6 shadow-lg">
                <div className="p-4 bg-primary-500 dark:bg-primary-600 rounded-2xl text-white mb-6 inline-flex hover-scale">
                  <requirement.icon className="h-8 w-8" />
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {requirement.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {requirement.description}
                </p>

                <div className="professional-list space-y-3">
                  {requirement.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary-500 dark:text-primary-400 flex-shrink-0" />
                      <span className="text-gray-700 dark:text-gray-300 text-sm">{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Analogy Section */}
        <div className="professional-card clean-shadow-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800 p-8 md:p-12 rounded-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-primary-500 dark:bg-primary-600 rounded-xl text-white">
                  <Users className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {analogy.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 italic">
                    {analogy.subtitle}
                  </p>
                </div>
              </div>

              <p className="text-lg text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                Just like a referee ensures fair play in sports, AuditsPro acts as an independent third-party 
                to verify that your trust account practices are compliant with Australian regulations.
              </p>

              <div className="professional-list space-y-3">
                {analogy.points.map((point, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="p-1 bg-primary-100 dark:bg-primary-800 rounded-full mt-1">
                      <CheckCircle className="h-4 w-4 text-primary-600 dark:text-primary-400" />
                    </div>
                    <span className="text-gray-700 dark:text-gray-300">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              {/* Visual representation */}
              <div className="professional-card transform rotate-3 hover:rotate-0 transition-transform duration-500 p-6">
                <div className="gradient-primary rounded-xl p-6 text-white text-center">
                  <div className="flex items-center justify-center mb-4">
                    <div className="p-3 bg-white/20 dark:bg-gray-700/40 rounded-full">
                      <Scale className="h-8 w-8" />
                    </div>
                  </div>
                  <h4 className="text-lg font-bold mb-2">Independent Verification</h4>
                  <p className="text-blue-100 text-sm mb-4">
                    We verify compliance without holding your funds
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-blue-200">Your Business</span>
                      <span>Holds Trust Funds</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">AuditsPro</span>
                      <span>Verifies Compliance</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-blue-200">Government</span>
                      <span>Receives Report</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 professional-card bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg transform rotate-12 hover:rotate-0 transition-transform duration-500 p-3 shadow-lg">
                <div className="text-center">
                  <BookOpen className="h-6 w-6 text-primary-600 dark:text-primary-400 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-gray-900 dark:text-white">Annual</div>
                  <div className="text-xs text-gray-600 dark:text-gray-400">Requirement</div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Don't Risk Non-Compliance
            </h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Ensure your business meets all regulatory requirements with our professional audit services.
            </p>
            <a href="#contact" className="btn-primary bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center">
              Book Your Compliance Audit
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}