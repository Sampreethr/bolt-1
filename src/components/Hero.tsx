'use client'

import { ArrowRight, CheckCircle, Shield, Award, Users, Phone, Star, TrendingUp, BarChart3, Calendar, Building, Clock, Mail, FileText, Send, Lock, Eye, EyeOff } from 'lucide-react'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { AnimatedCard } from '@/src/components/ui/AnimatedCard'
import { GlowingButton } from '@/src/components/ui/GlowingButton'
import { FloatingElements } from '@/src/components/ui/FloatingElements'

// Tax Return Request Form Component
function TaxReturnRequestForm(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [otp, setOtp] = useState<string>('')
  const [step, setStep] = useState<'email' | 'otp' | 'success'>('email')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [showOtp, setShowOtp] = useState<boolean>(false)
  const [countdown, setCountdown] = useState<number>(0)
  const [mounted, setMounted] = useState<boolean>(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000)
      return () => clearTimeout(timer)
    }
  }, [countdown])

  const handleSendCode = async () => {
    if (!email || !email.includes('@')) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    setStep('otp')
    setCountdown(60)
    setIsLoading(false)
  }

  const handleVerifyOtp = async () => {
    if (!otp || otp.length < 6) return
    
    setIsLoading(true)
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000))
    setStep('success')
    setIsLoading(false)
  }

  const handleResendCode = async () => {
    setIsLoading(true)
    await new Promise(resolve => setTimeout(resolve, 1000))
    setCountdown(60)
    setIsLoading(false)
  }

  if (!mounted) {
    return (
      <div className="bg-white rounded-2xl p-6 lg:p-8 border-2 border-gray-200 shadow-lg">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 bg-gray-200 rounded mb-6"></div>
          <div className="h-12 bg-gray-200 rounded mb-4"></div>
          <div className="h-10 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 lg:p-8 border-2 border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-white mb-1 flex items-center">
            <FileText className="h-6 w-6 text-primary-500 dark:text-primary-400 mr-2" />
            Join AuditsPro Now..
          </h3>
          <p className="text-gray-600 dark:text-gray-300 text-sm lg:text-base">
            {step === 'email' && 'Enter your email address to receive a verification code'}
            {step === 'otp' && 'Enter the verification code sent to your email'}
            {step === 'success' && 'Verification successful! Redirecting to dashboard...'}
          </p>
        </div>
      </div>

      {/* Email Step */}
      {step === 'email' && (
        <div className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
              Enter Your Email Address
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Mail className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </div>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 bg-white dark:bg-gray-700"
                disabled={isLoading}
              />
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 flex items-center">
              <Shield className="h-4 w-4 mr-1" />
              We'll send you a verification code to get started
            </p>
          </div>

          <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl p-4">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 dark:text-green-400 mr-2" />
              <span className="text-sm text-green-700 dark:text-green-300 font-medium">Security Verification</span>
            </div>
            <p className="text-sm text-green-600 dark:text-green-400 mt-1">
              Your information is protected with bank-level security
            </p>
          </div>

          <button
            onClick={handleSendCode}
            disabled={!email || !email.includes('@') || isLoading}
            className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Sending Code...
              </>
            ) : (
              <>
                <Send className="h-5 w-5 mr-2" />
                Send Verification Code
              </>
            )}
          </button>
        </div>
      )}

      {/* OTP Step */}
      {step === 'otp' && (
        <div className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-sm font-semibold text-gray-700 mb-3">
              Enter Verification Code
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className="h-5 w-5 text-gray-400" />
              </div>
              <input
                id="otp"
                type={showOtp ? 'text' : 'password'}
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                placeholder="Enter 6-digit code"
                className="w-full pl-10 pr-12 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 text-gray-900 placeholder-gray-500 text-center text-lg tracking-widest"
                disabled={isLoading}
                maxLength={6}
              />
              <button
                type="button"
                onClick={() => setShowOtp(!showOtp)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
              >
                {showOtp ? (
                  <EyeOff className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                ) : (
                  <Eye className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                )}
              </button>
            </div>
            <p className="text-sm text-gray-500 mt-2">
              Code sent to: <span className="font-medium">{email}</span>
            </p>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600">
              Didn't receive the code?
            </p>
            {countdown > 0 ? (
              <span className="text-sm text-gray-500">
                Resend in {countdown}s
              </span>
            ) : (
              <button
                onClick={handleResendCode}
                disabled={isLoading}
                className="text-sm text-primary-600 hover:text-primary-700 font-medium disabled:opacity-50"
              >
                Resend Code
              </button>
            )}
          </div>

          <button
            onClick={handleVerifyOtp}
            disabled={otp.length < 6 || isLoading}
            className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Verifying...
              </>
            ) : (
              <>
                <CheckCircle className="h-5 w-5 mr-2" />
                Verify & Continue
              </>
            )}
          </button>

          <button
            onClick={() => setStep('email')}
            className="w-full text-gray-600 hover:text-gray-800 font-medium py-2 transition-colors duration-200"
          >
            ← Back to Email
          </button>
        </div>
      )}

      {/* Success Step */}
      {step === 'success' && (
        <div className="text-center space-y-6">
          <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
            <CheckCircle className="h-8 w-8 text-green-500" />
          </div>
          
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-2">Verification Successful!</h4>
            <p className="text-gray-600">
              Your tax return request has been initiated. Redirecting to your dashboard...
            </p>
          </div>

          <div className="bg-primary-50 border border-primary-200 rounded-xl p-4">
            <div className="flex items-center justify-center">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-primary-500 mr-2"></div>
              <span className="text-primary-700 font-medium">Preparing your dashboard...</span>
            </div>
          </div>

          <div className="text-sm text-gray-500">
            <p>You'll be automatically redirected in a few seconds</p>
            <p className="mt-1">
              Or <Link href="/dashboard" className="text-primary-600 hover:text-primary-700 font-medium">click here to continue</Link>
            </p>
          </div>
        </div>
      )}

      {/* Footer */}
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center text-gray-500">
            <Shield className="h-4 w-4 mr-1" />
            <span>Secure & Encrypted</span>
          </div>
          <div className="text-gray-500">
            Need help? <Link href="/support" className="text-primary-600 hover:text-primary-700 font-medium">Contact Support</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function CleanHero(): JSX.Element {
  const [activeFeature, setActiveFeature] = useState<number>(0)
  const [mounted, setMounted] = useState(false)

  // Prevent hydration mismatch by only rendering interactive elements after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  // Trust indicators
  const trustIndicators = [
    { label: 'ASIC Registered', icon: Shield, verified: true },
    { label: 'CPA Australia', icon: Award, verified: true },
    { label: 'Government Compliant', icon: CheckCircle, verified: true },
    { label: 'Fixed Pricing', icon: TrendingUp, verified: true }
  ]

  // Key benefits
  const keyBenefits = [
    {
      icon: CheckCircle,
      title: 'Fast Turnaround',
      description: '7-14 business days',
      highlight: 'Express available'
    },
    {
      icon: Shield,
      title: 'Government Compliant',
      description: 'ASIC registered auditors',
      highlight: '100% compliant'
    },
    {
      icon: Award,
      title: 'Fixed Pricing',
      description: 'No hidden fees',
      highlight: 'Transparent costs'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '15+ years experience',
      highlight: '500+ clients'
    }
  ]

  // Statistics
  const statistics = [
    { value: '500+', label: 'Satisfied Clients', sublabel: 'Australia Wide' },
    { value: '15+', label: 'Years Experience', sublabel: 'Trust Account Auditing' },
    { value: '7-14', label: 'Days Delivery', sublabel: 'Fast Turnaround' },
    { value: '100%', label: 'Compliance Rate', sublabel: 'Perfect Record' }
  ]

  return (
    <section 
      id="home" 
      className="hero-clean bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 min-h-screen relative overflow-hidden"
      role="banner"
      aria-labelledby="hero-heading"
    >
      {/* Enhanced Background with FloatingElements */}
      <FloatingElements
        count={6}
        variant="mixed"
        size="mixed"
        speed="slow"
        opacity={0.4}
        color="primary"
        className="absolute inset-0"
      />
      
      {/* Static background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-secondary-50/20 dark:from-primary-900/20 dark:via-gray-900 dark:to-gray-800/50"></div>
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary-100/40 dark:bg-primary-800/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-primary-200/30 dark:bg-primary-700/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-primary-300/20 dark:bg-primary-600/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left Column - Content */}
          <div className="text-center lg:text-left space-y-6 lg:space-y-8">
            
            {/* Professional Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-medium border border-primary-200 dark:border-primary-800 hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors duration-300">
              <Shield className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
              <span>Australia's Trusted Trust Account Auditors</span>
            </div>
            
            {/* Hero Heading */}
            <div className="space-y-4">
              <h1 
                id="hero-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
                aria-label="Trust Account Audits Made Simple for Australia"
              >
                <span className="block text-gray-900 dark:text-white leading-tight">
                  Trust Account
                </span>
                <span className="block text-primary-600 dark:text-primary-400 leading-tight">
                  Audits Made Simple
                </span>
                <span className="block text-gray-700 dark:text-gray-300 leading-tight">
                  for Australia
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Professional trust account auditing for law firms and real estate agencies across Australia. 
                <span className="text-primary-600 dark:text-primary-400 font-semibold"> Fast turnaround, government compliant, fixed pricing.</span>
              </p>
            </div>

            {/* Key Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6 mt-8">
              {keyBenefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transition-all duration-300 p-4 lg:p-6 rounded-xl hover:shadow-lg transform hover:-translate-y-1"
                  onMouseEnter={() => mounted && setActiveFeature(index)}
                >
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex-shrink-0 hover:scale-105 transition-transform duration-200">
                      <benefit.icon className="h-6 w-6 text-primary-600 dark:text-primary-400" aria-hidden="true" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base">
                        {benefit.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
                        {benefit.description}
                      </p>
                      <span className="inline-flex items-center px-2 py-1 rounded-md bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 text-xs font-medium mt-1">
                        {benefit.highlight}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced CTA Buttons with GlowingButton */}
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              <GlowingButton
                variant="primary"
                size="lg"
                glow="medium"
                href="/services"
                rightIcon={<ArrowRight className="h-5 w-5" />}
                className="flex-1 sm:flex-none"
                aria-label="Book a trust account audit"
              >
                Book an Audit
              </GlowingButton>
              
              <GlowingButton
                variant="ghost"
                size="lg"
                glow="subtle"
                href="tel:1300283487"
                leftIcon={<Phone className="h-5 w-5" />}
                className="flex-1 sm:flex-none border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white"
                aria-label="Call AuditsPro at 1300 AUDITS"
              >
                Call 1300 AUDITS
              </GlowingButton>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 font-medium">
                Trusted by leading Australian businesses:
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                {trustIndicators.map((indicator, index) => (
                  <div 
                    key={index}
                    className="bg-white/80 dark:bg-gray-800/80 border border-gray-200/50 dark:border-gray-700/50 p-2 text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:border-primary-200 dark:hover:border-primary-800 transition-all duration-300 rounded-lg hover:scale-105"
                  >
                    <indicator.icon className="h-5 w-5 text-primary-600 dark:text-primary-400 mx-auto mb-1" aria-hidden="true" />
                    <span className="text-xs font-medium text-gray-700 dark:text-gray-300 block">
                      {indicator.label}
                    </span>
                    {indicator.verified && (
                      <CheckCircle className="h-3 w-3 text-green-600 dark:text-green-400 mx-auto mt-1" aria-hidden="true" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Tax Return Request Form */}
          <div className="relative mt-8 lg:mt-0">
            <div className="relative z-10">
              <TaxReturnRequestForm />
            </div>
          </div>
        </div>

        {/* Enhanced Statistics Section with AnimatedCard */}
        <div className="section-clean-spacing">
          <div className="text-center mb-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Trusted by Australia's Leading Businesses
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our numbers speak for themselves - delivering excellence in trust account auditing since 2008
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {statistics.map((stat, index) => (
              <AnimatedCard
                key={index}
                variant="glass"
                hoverEffect="lift"
                animationDelay={index * 100}
                className="text-center p-4"
                aria-label={`${stat.label}: ${stat.value}`}
              >
                <div className="text-3xl sm:text-4xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-base font-semibold text-gray-900 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  {stat.sublabel}
                </div>
              </AnimatedCard>
            ))}
          </div>
        </div>

        {/* Call-to-Action Banner */}
        <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl p-6 text-center">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to Ensure Your Trust Account Compliance?
          </h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Join over 500 satisfied clients who trust AuditsPro Australia for their annual trust account auditing requirements.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <GlowingButton
              variant="ghost"
              size="lg"
              glow="medium"
              href="/services"
              rightIcon={<ArrowRight className="h-5 w-5" />}
              className="bg-white text-primary-600 hover:bg-primary-50 border-0"
              aria-label="View our professional auditing services"
            >
              View Our Services
            </GlowingButton>
            
            <GlowingButton
              variant="ghost"
              size="lg"
              glow="subtle"
              href="/contact"
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600"
              aria-label="Get free consultation"
            >
              Get Free Consultation
            </GlowingButton>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-primary-100 text-sm">
            <div className="flex items-center">
              <Shield className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>ASIC Registered Auditors</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center">
              <CheckCircle className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>Fixed Pricing, No Hidden Fees</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-white/30"></div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2" aria-hidden="true" />
              <span>24/7 Emergency Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}