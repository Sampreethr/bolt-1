'use client'

import { Shield, Users, Award, CheckCircle, Target, Building, Calendar, Download, X } from 'lucide-react'
import { useState, useCallback, useMemo } from 'react'
import { AnimatedCard } from '@/src/components/ui/AnimatedCard'
import { GlowingButton } from '@/src/components/ui/GlowingButton'
import { FloatingElements } from '@/src/components/ui/FloatingElements'
import { ParallaxSection } from '@/src/components/ui/ParallaxSection'
import { FloatingBackButton } from '@/src/components/ui/BackButton'

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
      className="about-enhanced bg-white dark:bg-gray-900 relative overflow-hidden"
      role="main"
      aria-labelledby="about-heading"
    >
      {/* Back Button for Dashboard Navigation */}
      <FloatingBackButton />
      
      {/* Enhanced Background with FloatingElements */}
      <FloatingElements
        count={8}
        variant="mixed"
        size="mixed"
        speed="slow"
        opacity={0.25}
        color="primary"
        className="absolute inset-0"
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Header with consistent styling */}
        <header className="page-header-enhanced text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium mb-6 border border-primary-200 dark:border-primary-800">
            <Building className="h-4 w-4 mr-2" aria-hidden="true" />
            About AuditsPro Australia
          </div>
          <h1 
            id="about-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
          >
            Australia's Leading
            <span className="text-primary-600 dark:text-primary-400 block mt-2">Trust Account Specialists</span>
          </h1>
        </header>

        {/* Enhanced Mission Section with AnimatedCard */}
        <AnimatedCard
          variant="elevated"
          hoverEffect="lift"
          animationDelay={200}
          className="section-enhanced-spacing p-8 md:p-12"
          role="region"
          aria-labelledby="mission-heading"
        >
          <div className="text-center mb-8">
            <h2 
              id="mission-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {mission.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
              {mission.description}
            </p>
          </div>
          
          {/* Enhanced statistics grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            {companyStats.map((stat, index) => (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600"
                role="article"
                aria-labelledby={`stat-${index}-label`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div 
                  id={`stat-${index}-label`}
                  className="text-lg font-semibold text-gray-900 dark:text-white mb-1"
                >
                  {stat.label}
                </div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </AnimatedCard>

        {/* Enhanced Process Steps Section with ParallaxSection */}
        <ParallaxSection
          speed={0.3}
          direction="up"
          className="section-enhanced-spacing"
          height="auto"
        >
          <div className="text-center mb-12">
            <h2 
              id="process-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {howWeWork.title}
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Our systematic approach ensures thorough, independent assessment of your trust account compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {howWeWork.steps.map((step, index) => (
              <AnimatedCard
                key={index}
                variant="elevated"
                hoverEffect="lift"
                animationDelay={index * 150}
                className="text-center p-6 sm:p-8 h-full"
                role="article"
                aria-labelledby={`step-${index}-title`}
              >
                <div className="text-4xl sm:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-4">
                  {step.number}
                </div>
                <h3 
                  id={`step-${index}-title`}
                  className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-3"
                >
                  {step.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {step.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </ParallaxSection>

        {/* Why Clients Trust Us with professional styling */}
        <section 
          className="section-enhanced-spacing"
          role="region"
          aria-labelledby="trust-heading"
        >
          <div className="text-center mb-12">
            <h2 
              id="trust-heading"
              className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Why Clients Trust Us
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              The foundation of our reputation built on expertise, integrity, and results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {whyTrustUs.map((reason, index) => (
              <AnimatedCard
                key={index}
                variant="glass"
                hoverEffect="tilt"
                animationDelay={index * 200}
                className="p-6 sm:p-8 h-full"
                role="article"
                aria-labelledby={`trust-${index}-title`}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary-500 dark:bg-primary-600 rounded-xl text-white flex-shrink-0 shadow-md">
                    <reason.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div className="flex-1">
                    <h3 
                      id={`trust-${index}-title`}
                      className="text-xl font-bold text-gray-900 dark:text-white mb-3"
                    >
                      {reason.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed">
                      {reason.description}
                    </p>
                    <div className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                      {reason.stats}
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            ))}
          </div>
        </section>

        {/* Team & Actions Section with enhanced styling */}
        <div className="section-enhanced-spacing grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Enhanced Team Section with AnimatedCard */}
          <AnimatedCard
            variant="elevated"
            hoverEffect="glow"
            animationDelay={400}
            className="p-8"
            role="region"
            aria-labelledby="team-heading"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 
                id="team-heading"
                className="text-2xl font-bold text-gray-900 dark:text-white"
              >
                Meet Our Expert Team
              </h2>
              <button 
                onClick={handleShowTeamModal}
                disabled={isLoading}
                className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold text-sm transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 rounded-lg px-2 py-1 min-h-[44px] disabled:opacity-50"
                aria-label="View all team members"
              >
                {isLoading ? 'Loading...' : 'View All →'}
              </button>
            </div>
            
            <div className="space-y-4">
              {teamMembers.slice(0, 2).map((member, index) => (
                <article 
                  key={index} 
                  className="flex items-center space-x-4 p-4 bg-gray-50 dark:bg-gray-700 rounded-xl border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200"
                  role="article"
                  aria-labelledby={`member-${index}-name`}
                >
                  <div className="w-12 h-12 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div 
                      id={`member-${index}-name`}
                      className="font-semibold text-gray-900 dark:text-white truncate"
                    >
                      {member.name}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {member.title}
                    </div>
                    <div className="text-xs text-primary-600 dark:text-primary-400 truncate">
                      {member.credentials}
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <GlowingButton
              variant="primary"
              size="lg"
              glow="medium"
              onClick={handleShowTeamModal}
              disabled={isLoading}
              className="w-full mt-6"
              aria-label="Meet the full team"
            >
              {isLoading ? 'Loading...' : 'Meet the Full Team'}
            </GlowingButton>
          </AnimatedCard>

          {/* Actions Section with enhanced styling */}
          <div className="space-y-6">
            {/* Enhanced Company Profile Download */}
            <AnimatedCard
              variant="elevated"
              hoverEffect="lift"
              animationDelay={600}
              className="p-6"
              role="region"
              aria-labelledby="profile-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Download className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <h3 
                  id="profile-heading"
                  className="text-lg font-bold text-gray-900 dark:text-white"
                >
                  Company Profile
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Download our comprehensive company profile including certifications, experience, and client testimonials.
              </p>
              <GlowingButton
                variant="ghost"
                size="md"
                glow="subtle"
                leftIcon={<Download className="h-4 w-4" />}
                className="w-full border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
                aria-label="Download company profile PDF"
              >
                Download Profile (PDF)
              </GlowingButton>
            </AnimatedCard>

            {/* Enhanced Book Meeting */}
            <AnimatedCard
              variant="gradient"
              hoverEffect="scale"
              animationDelay={800}
              className="p-6"
              role="region"
              aria-labelledby="consultation-heading"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Calendar className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                <h3 
                  id="consultation-heading"
                  className="text-lg font-bold text-gray-900 dark:text-white"
                >
                  Free Consultation
                </h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Book a free 30-minute consultation to discuss your trust account auditing needs.
              </p>
              <GlowingButton
                variant="primary"
                size="md"
                glow="medium"
                leftIcon={<Calendar className="h-4 w-4" />}
                className="w-full"
                aria-label="Book free consultation meeting"
              >
                Book Free Meeting
              </GlowingButton>
            </AnimatedCard>

            {/* Enhanced Contact CTA */}
            <AnimatedCard
              variant="gradient"
              hoverEffect="glow"
              animationDelay={1000}
              className="p-6 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-primary-900/20 dark:to-blue-900/20 border-2 border-primary-200 dark:border-primary-800"
              role="region"
              aria-labelledby="cta-heading"
            >
              <h3 
                id="cta-heading"
                className="text-lg font-bold text-gray-900 dark:text-white mb-2"
              >
                Ready to Get Started?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                Join over 500 satisfied clients who trust us with their audit needs.
              </p>
              <GlowingButton
                variant="primary"
                size="md"
                glow="medium"
                href="#contact"
                rightIcon={<CheckCircle className="h-4 w-4" />}
                className="w-full"
                aria-label="Get started with AuditsPro today"
              >
                Get Started Today
              </GlowingButton>
            </AnimatedCard>
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
              className="bg-white dark:bg-gray-800 rounded-3xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              role="document"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 
                  id="modal-title"
                  className="text-2xl font-bold text-gray-900 dark:text-white"
                >
                  Our Expert Team
                </h2>
                <button 
                  onClick={handleCloseTeamModal}
                  className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-primary-500"
                  aria-label="Close team modal"
                >
                  <span className="text-2xl" aria-hidden="true">✕</span>
                </button>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {teamMembers.map((member, index) => (
                  <AnimatedCard
                    key={index}
                    variant="glass"
                    hoverEffect="lift"
                    animationDelay={index * 100}
                    className="p-6 text-center"
                    role="article"
                    aria-labelledby={`modal-member-${index}-name`}
                  >
                    <div className="w-16 h-16 bg-primary-500 dark:bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 
                      id={`modal-member-${index}-name`}
                      className="font-bold text-gray-900 dark:text-white mb-1"
                    >
                      {member.name}
                    </h3>
                    <div className="text-primary-600 dark:text-primary-400 font-semibold mb-2">
                      {member.title}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {member.credentials}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                      {member.experience}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {member.specialization}
                    </div>
                  </AnimatedCard>
                ))}
              </div>

              {/* Enhanced modal footer */}
              <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                <p className="text-gray-600 mb-4">
                  Our team brings over 40 years of combined experience in trust account auditing across Australia.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <GlowingButton
                    variant="primary"
                    size="md"
                    glow="medium"
                    href="#contact"
                    onClick={handleCloseTeamModal}
                    aria-label="Contact our team"
                  >
                    Contact Our Team
                  </GlowingButton>
                  <GlowingButton
                    variant="ghost"
                    size="md"
                    glow="none"
                    onClick={handleCloseTeamModal}
                    className="border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
                    aria-label="Close modal"
                  >
                    Close
                  </GlowingButton>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}