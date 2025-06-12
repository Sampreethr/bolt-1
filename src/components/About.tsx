'use client'

import { Shield, Users, Award, CheckCircle, Target, Heart, Zap } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We maintain the highest ethical standards and build lasting relationships based on trust.'
    },
    {
      icon: Target,
      title: 'Precision & Accuracy',
      description: 'Every audit is conducted with meticulous attention to detail and professional excellence.'
    },
    {
      icon: Heart,
      title: 'Client-Focused',
      description: 'Your success is our priority. We tailor our services to meet your specific needs.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'We leverage cutting-edge technology to deliver efficient and comprehensive auditing solutions.'
    }
  ]

  const certifications = [
    'ASIC Registered Company Auditors',
    'CPA Australia Members',
    'Institute of Chartered Accountants',
    'Australian Institute of Company Directors'
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-primary-100 to-gold-100 dark:from-primary-900/30 dark:to-gold-900/30 text-primary-700 dark:text-gold-400 text-sm font-medium mb-6">
              <Users className="h-4 w-4 mr-2" />
              About AuditsPro Australia
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Australia's Leading
              <span className="text-gradient block">Trust Account Specialists</span>
            </h2>

            <p className="text-lg text-slate-600 dark:text-slate-300 mb-8 leading-relaxed">
              With over 15 years of specialized experience in trust account auditing, AuditsPro Australia 
              has established itself as the premier choice for legal practices, real estate agencies, and 
              regulated businesses across the continent.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Expert Team</h4>
                  <p className="text-slate-600 dark:text-slate-300">ASIC registered auditors with extensive trust account experience</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Comprehensive Coverage</h4>
                  <p className="text-slate-600 dark:text-slate-300">Serving clients across all Australian states and territories</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white">Technology-Driven</h4>
                  <p className="text-slate-600 dark:text-slate-300">Advanced audit techniques and real-time reporting systems</p>
                </div>
              </div>
            </div>

            {/* Certifications */}
            <div className="glass-morphism rounded-2xl p-6">
              <h4 className="font-bold text-slate-900 dark:text-white mb-4">Professional Certifications</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Award className="h-4 w-4 text-gold-500 flex-shrink-0" />
                    <span className="text-sm text-slate-700 dark:text-slate-300">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Values */}
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h3>
              <p className="text-slate-600 dark:text-slate-300">
                The principles that guide everything we do
              </p>
            </div>

            {values.map((value, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-primary-500 to-gold-500 rounded-xl text-white flex-shrink-0">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                      {value.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Call to Action */}
            <div className="glass-morphism rounded-2xl p-6 bg-gradient-to-r from-primary-50 to-gold-50 dark:from-primary-900/20 dark:to-gold-900/20 text-center">
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Ready to Work with Australia's Best?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4">
                Join over 500 satisfied clients who trust us with their audit needs.
              </p>
              <a href="#contact" className="btn-primary inline-flex items-center">
                Get Started Today
                <CheckCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}