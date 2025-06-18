'use client'

import { Shield, Users, Award, CheckCircle, Target, Heart, Zap, Building, Calendar, Download } from 'lucide-react'
import { useState } from 'react'

export default function About() {
  const [showTeamModal, setShowTeamModal] = useState(false)

  const mission = {
    title: "Ensuring compliance with peace of mind",
    description: "At AuditsPro Australia, we understand that trust account compliance isn't just about meeting regulatory requirements—it's about protecting your clients, your reputation, and your business. Our mission is to provide comprehensive, reliable auditing services that give you complete confidence in your compliance status."
  }

  const howWeWork = {
    title: "How AuditsPro Works as an Independent Auditing Agency",
    steps: [
      {
        number: "01",
        title: "Independent Assessment",
        description: "We operate as a completely independent third-party, ensuring unbiased evaluation of your trust account practices."
      },
      {
        number: "02",
        title: "Comprehensive Review",
        description: "Our ASIC registered auditors conduct thorough examinations of all trust account transactions and procedures."
      },
      {
        number: "03",
        title: "Compliance Verification",
        description: "We verify that your practices meet all current Australian regulatory requirements and best practices."
      },
      {
        number: "04",
        title: "Detailed Reporting",
        description: "You receive comprehensive reports with clear findings, recommendations, and compliance confirmations."
      }
    ]
  }

  const whyTrustUs = [
    {
      icon: Shield,
      title: 'ASIC Registered Auditors',
      description: 'All our auditors are registered with ASIC and maintain current professional certifications.',
      stats: 'Auditor Registration #12345'
    },
    {
      icon: Award,
      title: '15+ Years Experience',
      description: 'Extensive experience specifically in trust account auditing across Australia.',
      stats: '1000+ audits completed'
    },
    {
      icon: Users,
      title: 'Client-Focused Approach',
      description: 'We work with you, not against you, to ensure compliance and improve processes.',
      stats: '98% client retention rate'
    },
    {
      icon: Target,
      title: 'Fixed Pricing Promise',
      description: 'Transparent, upfront pricing with no hidden fees or surprise charges.',
      stats: 'No hidden costs guarantee'
    }
  ]

  const teamMembers = [
    {
      name: 'Sarah Mitchell',
      title: 'Principal Auditor',
      credentials: 'CPA, ASIC Registered Auditor',
      experience: '15+ years',
      specialization: 'Legal practice audits'
    },
    {
      name: 'David Chen',
      title: 'Senior Auditor',
      credentials: 'CA, ASIC Registered Auditor',
      experience: '12+ years',
      specialization: 'Real estate audits'
    },
    {
      name: 'Rebecca Thompson',
      title: 'Compliance Manager',
      credentials: 'CPA, Compliance Specialist',
      experience: '10+ years',
      specialization: 'Regulatory compliance'
    }
  ]

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gold-100 dark:from-blue-900/30 dark:to-gold-900/30 text-blue-700 dark:text-gold-400 text-sm font-medium mb-6">
            <Building className="h-4 w-4 mr-2" />
            About AuditsPro Australia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Australia's Leading
            <span className="bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent block">Trust Account Specialists</span>
          </h2>
        </div>

        {/* Mission Section */}
        <div className="glass-morphism rounded-3xl p-8 md:p-12 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {mission.title}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 max-w-4xl mx-auto leading-relaxed">
              {mission.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-gold-400 mb-2">500+</div>
              <div className="text-slate-900 dark:text-white font-semibold">Satisfied Clients</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Across Australia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-gold-400 mb-2">15+</div>
              <div className="text-slate-900 dark:text-white font-semibold">Years Experience</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Trust account auditing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 dark:text-gold-400 mb-2">100%</div>
              <div className="text-slate-900 dark:text-white font-semibold">Compliance Rate</div>
              <div className="text-slate-600 dark:text-slate-400 text-sm">Perfect track record</div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              {howWeWork.title}
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto">
              Our systematic approach ensures thorough, independent assessment of your trust account compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.steps.map((step, index) => (
              <div key={index} className="group">
                <div className="glass-morphism rounded-2xl p-6 h-full hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-blue-600 dark:text-gold-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                      {step.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Clients Trust Us */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Why Clients Trust Us
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-lg">
              The foundation of our reputation built on expertise, integrity, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyTrustUs.map((reason, index) => (
              <div key={index} className="group">
                <div className="glass-morphism rounded-3xl p-8 h-full hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-gold-500 rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-slate-600 dark:text-slate-300 mb-3 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="text-sm font-semibold text-blue-600 dark:text-gold-400">
                        {reason.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team & Actions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Section */}
          <div className="glass-morphism rounded-3xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                Meet Our Expert Team
              </h3>
              <button 
                onClick={() => setShowTeamModal(true)}
                className="text-blue-600 dark:text-gold-400 hover:text-blue-700 dark:hover:text-gold-300 font-semibold text-sm"
              >
                View All →
              </button>
            </div>
            
            <div className="space-y-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-slate-50 dark:bg-slate-800 rounded-xl">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-gold-400 rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-slate-900 dark:text-white">{member.name}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400">{member.title}</div>
                    <div className="text-xs text-blue-600 dark:text-gold-400">{member.credentials}</div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowTeamModal(true)}
              className="w-full mt-6 py-3 px-4 border-2 border-blue-300 dark:border-gold-400 text-blue-600 dark:text-gold-400 font-semibold rounded-xl hover:bg-blue-50 dark:hover:bg-gold-900/20 transition-all duration-300"
            >
              Meet the Full Team
            </button>
          </div>

          {/* Actions Section */}
          <div className="space-y-6">
            {/* Company Profile Download */}
            <div className="glass-morphism rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-blue-600 dark:text-gold-400" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Company Profile</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                Download our comprehensive company profile including certifications, experience, and client testimonials.
              </p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300">
                Download Profile (PDF)
              </button>
            </div>

            {/* Book Meeting */}
            <div className="glass-morphism rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                <h4 className="text-lg font-bold text-slate-900 dark:text-white">Free Consultation</h4>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                Book a free 30-minute consultation to discuss your trust account auditing needs.
              </p>
              <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300">
                Book Free Meeting
              </button>
            </div>

            {/* Contact CTA */}
            <div className="glass-morphism rounded-2xl p-6 bg-gradient-to-r from-blue-50 to-gold-50 dark:from-blue-900/20 dark:to-gold-900/20">
              <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                Join over 500 satisfied clients who trust us with their audit needs.
              </p>
              <a href="#contact" className="w-full bg-gradient-to-r from-gold-600 to-gold-700 hover:from-gold-700 hover:to-gold-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center">
                Get Started Today
                <CheckCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Team Modal */}
        {showTeamModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Our Expert Team</h3>
                <button 
                  onClick={() => setShowTeamModal(false)}
                  className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="glass-morphism rounded-2xl p-6 text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-gold-400 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="font-bold text-slate-900 dark:text-white mb-1">{member.name}</h4>
                    <div className="text-blue-600 dark:text-gold-400 font-semibold mb-2">{member.title}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{member.credentials}</div>
                    <div className="text-sm text-slate-600 dark:text-slate-400 mb-2">{member.experience}</div>
                    <div className="text-xs text-slate-500 dark:text-slate-500">{member.specialization}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}