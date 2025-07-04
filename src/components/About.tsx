'use client'

import { Shield, Users, Award, CheckCircle, Target, Building, Calendar, Download } from 'lucide-react'
import { useState, useCallback, useMemo } from 'react'

// Enhanced TypeScript interfaces for better type safety
interface MissionContent {
  readonly title: string;
  readonly description: string;
}

interface ProcessStep {
  readonly number: string;
  readonly title: string;
  readonly description: string;
}

interface ProcessInfo {
  readonly title: string;
  readonly steps: readonly ProcessStep[];
}

interface TrustReason {
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly description: string;
  readonly stats: string;
}

interface TeamMember {
  readonly name: string;
  readonly title: string;
  readonly credentials: string;
  readonly experience: string;
  readonly specialization: string;
}

interface CompanyStats {
  readonly value: string;
  readonly label: string;
  readonly description: string;
}

/**
 * Enhanced About Component with Professional Styling
 */
export default function EnhancedAbout(): JSX.Element {
  // Enhanced state management with proper typing
  const [showTeamModal, setShowTeamModal] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Mission content with enhanced messaging
   */
  const mission: MissionContent = useMemo(() => ({
    title: "Ensuring compliance with peace of mind",
    description: "At AuditsPro Australia, we understand that trust account compliance isn't just about meeting regulatory requirements—it's about protecting your clients, your reputation, and your business. Our mission is to provide comprehensive, reliable auditing services that give you complete confidence in your compliance status."
  }), []);

  /**
   * Enhanced process information with detailed steps
   */
  const howWeWork: ProcessInfo = useMemo(() => ({
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
  }), []);

  /**
   * Enhanced trust reasons with comprehensive data
   */
  const whyTrustUs: readonly TrustReason[] = useMemo(() => [
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
  ], []);

  /**
   * Enhanced team members with comprehensive credentials
   */
  const teamMembers: readonly TeamMember[] = useMemo(() => [
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
  ], []);

  /**
   * Enhanced company statistics
   */
  const companyStats: readonly CompanyStats[] = useMemo(() => [
    {
      value: "500+",
      label: "Satisfied Clients",
      description: "Across Australia"
    },
    {
      value: "15+", 
      label: "Years Experience",
      description: "Trust account auditing"
    },
    {
      value: "100%",
      label: "Compliance Rate", 
      description: "Perfect track record"
    }
  ], []);

  /**
   * Enhanced modal handlers with loading states
   */
  const handleShowTeamModal = useCallback(async () => {
    setIsLoading(true);
    await new Promise(resolve => setTimeout(resolve, 100)); // Smooth UX
    setShowTeamModal(true);
    setIsLoading(false);
  }, []);

  const handleCloseTeamModal = useCallback(() => {
    setShowTeamModal(false);
  }, []);

  return (
    <section 
      id="about" 
      className="py-12 sm:py-16 lg:py-20 bg-white"
      role="main"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header with consistent styling */}
        <header className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <Building className="h-4 w-4 mr-2" aria-hidden="true" />
            About AuditsPro Australia
          </div>
          <h1 
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Australia's Leading
            <span className="text-primary-600 block mt-2">Trust Account Specialists</span>
          </h1>
        </header>

        {/* Mission Section with professional styling */}
        <section 
          className="bg-white rounded-2xl p-8 md:p-12 mb-12 sm:mb-16 border-2 border-gray-200 shadow-lg"
          role="region"
          aria-labelledby="mission-heading"
        >
          <div className="text-center mb-8">
            <h2 
              id="mission-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              {mission.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {mission.description}
            </p>
          </div>
          
          {/* Enhanced statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {companyStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 border border-gray-200"
                role="article"
                aria-labelledby={`stat-${index}-label`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div 
                  id={`stat-${index}-label`}
                  className="text-lg font-semibold text-gray-900 mb-1"
                >
                  {stat.label}
                </div>
                <div className="text-gray-600 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* How We Work Section with professional styling */}
        <section 
          className="mb-12 sm:mb-16"
          role="region" 
          aria-labelledby="process-heading"
        >
          <div className="text-center mb-12">
            <h2 
              id="process-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              {howWeWork.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures thorough, independent assessment of your trust account compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howWeWork.steps.map((step, index) => (
              <article 
                key={index} 
                className="group"
                role="article"
                aria-labelledby={`step-${index}-title`}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-center">
                    <div className="text-4xl sm:text-5xl font-bold text-primary-600 mb-4">
                      {step.number}
                    </div>
                    <h3 
                      id={`step-${index}-title`}
                      className="text-lg sm:text-xl font-bold text-gray-900 mb-3"
                    >
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Why Clients Trust Us with professional styling */}
        <section 
          className="mb-12 sm:mb-16"
          role="region"
          aria-labelledby="trust-heading"
        >
          <div className="text-center mb-12">
            <h2 
              id="trust-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4"
            >
              Why Clients Trust Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
              The foundation of our reputation built on expertise, integrity, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyTrustUs.map((reason, index) => (
              <article 
                key={index} 
                className="group"
                role="article"
                aria-labelledby={`trust-${index}-title`}
              >
                <div className="bg-white rounded-2xl p-6 sm:p-8 h-full border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-500 rounded-xl text-white flex-shrink-0 shadow-md">
                      <reason.icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    <div className="flex-1">
                      <h3 
                        id={`trust-${index}-title`}
                        className="text-xl font-bold text-gray-900 mb-3"
                      >
                        {reason.title}
                      </h3>
                      <p className="text-gray-600 mb-3 leading-relaxed">
                        {reason.description}
                      </p>
                      <div className="text-sm font-semibold text-primary-600">
                        {reason.stats}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Team & Actions Section with enhanced styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Team Section with professional styling */}
          <section 
            className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-lg"
            role="region"
            aria-labelledby="team-heading"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 
                id="team-heading"
                className="text-2xl font-bold text-gray-900"
              >
                Meet Our Expert Team
              </h2>
              <button 
                onClick={handleShowTeamModal}
                disabled={isLoading}
                className="text-primary-600 hover:text-primary-700 font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1 min-h-[44px] disabled:opacity-50"
                aria-label="View all team members"
              >
                {isLoading ? 'Loading...' : 'View All →'}
              </button>
            </div>
            
            <div className="space-y-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <article 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-50 rounded-xl border border-gray-200 hover:bg-gray-100 transition-colors duration-200"
                  role="article"
                  aria-labelledby={`member-${index}-name`}
                >
                  <div className="w-12 h-12 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div 
                      id={`member-${index}-name`}
                      className="font-semibold text-gray-900 truncate"
                    >
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-600 truncate">
                      {member.title}
                    </div>
                    <div className="text-xs text-primary-600 truncate">
                      {member.credentials}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <button 
              onClick={handleShowTeamModal}
              disabled={isLoading}
              className="w-full mt-6 bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
              aria-label="Meet the full team"
            >
              {isLoading ? 'Loading...' : 'Meet the Full Team'}
            </button>
          </section>

          {/* Actions Section with enhanced styling */}
          <div className="space-y-6">
            {/* Company Profile Download */}
            <section 
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
              role="region"
              aria-labelledby="profile-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-primary-600" aria-hidden="true" />
                <h3 
                  id="profile-heading"
                  className="text-lg font-bold text-gray-900"
                >
                  Company Profile
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Download our comprehensive company profile including certifications, experience, and client testimonials.
              </p>
              <button 
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px]"
                aria-label="Download company profile PDF"
              >
                Download Profile (PDF)
              </button>
            </section>

            {/* Book Meeting */}
            <section 
              className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg"
              role="region"
              aria-labelledby="consultation-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-primary-600" aria-hidden="true" />
                <h3 
                  id="consultation-heading"
                  className="text-lg font-bold text-gray-900"
                >
                  Free Consultation
                </h3>
              </div>
              <p className="text-gray-600 mb-4">
                Book a free 30-minute consultation to discuss your trust account auditing needs.
              </p>
              <button 
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px]"
                aria-label="Book free consultation meeting"
              >
                Book Free Meeting
              </button>
            </section>

            {/* Contact CTA */}
            <section 
              className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-6 border-2 border-primary-200 shadow-lg"
              role="region"
              aria-labelledby="cta-heading"
            >
              <h3 
                id="cta-heading"
                className="text-lg font-bold text-gray-900 mb-2"
              >
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 mb-4">
                Join over 500 satisfied clients who trust us with their audit needs.
              </p>
              <a 
                href="#contact" 
                className="w-full bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg inline-flex items-center justify-center min-h-[44px]"
                aria-label="Get started with AuditsPro today"
              >
                Get Started Today
                <CheckCircle className="ml-2 h-5 w-5" aria-hidden="true" />
              </a>
            </section>
          </div>
        </div>

        {/* Enhanced Team Modal with professional styling */}
        {showTeamModal && (
          <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={handleCloseTeamModal}
          >
            <div 
              className="bg-white rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="document"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 
                  id="modal-title"
                  className="text-2xl font-bold text-gray-900"
                >
                  Our Expert Team
                </h2>
                <button 
                  onClick={handleCloseTeamModal}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Close team modal"
                >
                  <span className="text-2xl" aria-hidden="true">✕</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <article 
                    key={index} 
                    className="bg-white rounded-2xl p-6 text-center border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1"
                    role="article"
                    aria-labelledby={`modal-member-${index}-name`}
                  >
                    <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 
                      id={`modal-member-${index}-name`}
                      className="font-bold text-gray-900 mb-1"
                    >
                      {member.name}
                    </h3>
                    <div className="text-primary-600 font-semibold mb-2">
                      {member.title}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {member.credentials}
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      {member.experience}
                    </div>
                    <div className="text-xs text-gray-500">
                      {member.specialization}
                    </div>
                  </article>
                ))}
              </div>

              {/* Enhanced modal footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                <p className="text-gray-600 mb-4">
                  Our team brings over 40 years of combined experience in trust account auditing across Australia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg min-h-[44px] inline-flex items-center justify-center"
                    onClick={handleCloseTeamModal}
                    aria-label="Contact our team"
                  >
                    Contact Our Team
                  </a>
                  <button
                    onClick={handleCloseTeamModal}
                    className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 min-h-[44px]"
                    aria-label="Close modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}