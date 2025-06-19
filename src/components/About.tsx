'use client'

import { Shield, Users, Award, CheckCircle, Target, Building, Calendar, Download } from 'lucide-react'
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
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <Building className="h-4 w-4 mr-2" />
            About AuditsPro Australia
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Australia's Leading
            <span className="text-primary-600 block">Trust Account Specialists</span>
          </h2>
        </div>

        {/* Mission Section */}
        <div className="professional-card clean-shadow-lg mb-16 p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {mission.title}
            </h3>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {mission.description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-900 font-semibold">Satisfied Clients</div>
              <div className="text-gray-600 text-sm">Across Australia</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">15+</div>
              <div className="text-gray-900 font-semibold">Years Experience</div>
              <div className="text-gray-600 text-sm">Trust account auditing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">100%</div>
              <div className="text-gray-900 font-semibold">Compliance Rate</div>
              <div className="text-gray-600 text-sm">Perfect track record</div>
            </div>
          </div>
        </div>

        {/* How We Work Section */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              {howWeWork.title}
            </h3>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Our systematic approach ensures thorough, independent assessment of your trust account compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howWeWork.steps.map((step, index) => (
              <div key={index} className="group">
                <div className="professional-card h-full hover-lift">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary-600 mb-4 hover-scale">
                      {step.number}
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
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
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Why Clients Trust Us
            </h3>
            <p className="text-gray-600 text-lg">
              The foundation of our reputation built on expertise, integrity, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyTrustUs.map((reason, index) => (
              <div key={index} className="group">
                <div className="professional-card h-full hover-lift">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-500 rounded-xl text-white flex-shrink-0 hover-scale">
                      <reason.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-xl font-bold text-gray-900 mb-2">
                        {reason.title}
                      </h4>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="text-sm font-semibold text-primary-600">
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
          <div className="professional-card p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-900">
                Meet Our Expert Team
              </h3>
              <button 
                onClick={() => setShowTeamModal(true)}
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm"
              >
                View All →
              </button>
            </div>
            
            <div className="space-y-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <div key={index} className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl">
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900">{member.name}</div>
                    <div className="text-sm text-gray-600">{member.title}</div>
                    <div className="text-xs text-primary-600">{member.credentials}</div>
                  </div>
                </div>
              ))}
            </div>

            <button 
              onClick={() => setShowTeamModal(true)}
              className="btn-outline w-full mt-6"
            >
              Meet the Full Team
            </button>
          </div>

          {/* Actions Section */}
          <div className="space-y-6">
            {/* Company Profile Download */}
            <div className="professional-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-primary-600" />
                <h4 className="text-lg font-bold text-gray-900">Company Profile</h4>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Download our comprehensive company profile including certifications, experience, and client testimonials.
              </p>
              <button className="btn-primary w-full">
                Download Profile (PDF)
              </button>
            </div>

            {/* Book Meeting */}
            <div className="professional-card p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-primary-600" />
                <h4 className="text-lg font-bold text-gray-900">Free Consultation</h4>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Book a free 30-minute consultation to discuss your trust account auditing needs.
              </p>
              <button className="btn-primary w-full">
                Book Free Meeting
              </button>
            </div>

            {/* Contact CTA */}
            <div className="professional-card p-6 bg-primary-50 border-primary-200">
              <h4 className="text-lg font-bold text-gray-900 mb-2">
                Ready to Get Started?
              </h4>
              <p className="text-gray-600 mb-4 text-sm">
                Join over 500 satisfied clients who trust us with their audit needs.
              </p>
              <a href="#contact" className="btn-primary w-full inline-flex items-center justify-center">
                Get Started Today
                <CheckCircle className="ml-2 h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Team Modal */}
        {showTeamModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-bold text-gray-900">Our Expert Team</h3>
                <button 
                  onClick={() => setShowTeamModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="professional-card p-6 text-center">
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-1">{member.name}</h4>
                    <div className="text-primary-600 font-semibold mb-2">{member.title}</div>
                    <div className="text-sm text-gray-600 mb-2">{member.credentials}</div>
                    <div className="text-sm text-gray-600 mb-2">{member.experience}</div>
                    <div className="text-xs text-gray-500">{member.specialization}</div>
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