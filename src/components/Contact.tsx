'use client'

import { useState, useCallback } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, AlertCircle, User, Building, Shield } from 'lucide-react'

// ===============================
// TYPESCRIPT INTERFACE DEFINITIONS
// ===============================

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  businessName: string;
  businessType: string;
  urgency: 'urgent' | 'standard' | 'flexible';
  preferredContact: 'email' | 'phone' | 'both';
  message: string;
  trustAccountPeriod: string;
  currentAuditor: string;
}

interface ContactFormErrors {
  name?: string;
  email?: string;
  phone?: string;
  businessName?: string;
  businessType?: string;
  urgency?: string;
  preferredContact?: string;
  message?: string;
  trustAccountPeriod?: string;
  currentAuditor?: string;
  general?: string;
}

interface ContactInfo {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  details: string[];
  action: string;
  actionText: string;
}

interface BusinessType {
  value: string;
  label: string;
}

interface UrgencyLevel {
  value: 'urgent' | 'standard' | 'flexible';
  label: string;
  description?: string;
}

interface ContactMethod {
  value: 'email' | 'phone' | 'both';
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description?: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

/**
 * ENHANCED CONTACT FORM WITH PERFECT TYPESCRIPT TYPES AND ALIGNMENT
 * 
 * Features:
 * - Complete TypeScript type safety
 * - Perfect form alignment across all devices
 * - Professional validation and error handling
 * - 100% responsive design for all screen sizes
 * - Enhanced accessibility support
 * - Clean code architecture
 * 
 * Responsive Support:
 * - iPhone SE (375px): Single column optimized
 * - iPhone Pro Max (428px): Enhanced mobile layout
 * - Samsung Galaxy (360px-412px): Adaptive design
 * - Samsung Fold (280px/717px): Dynamic columns
 * - iPads (768px-1024px): Perfect tablet layout
 * - Laptops/Desktops (1024px+): Multi-column professional
 */
export default function Contact(): JSX.Element {
  // ===============================
  // STATE MANAGEMENT WITH PROPER TYPES
  // ===============================
  
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    businessName: '',
    businessType: '',
    urgency: 'standard',
    preferredContact: 'email',
    message: '',
    trustAccountPeriod: '',
    currentAuditor: ''
  })

  const [isSubmitted, setIsSubmitted] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [errors, setErrors] = useState<ContactFormErrors>({}) // ✅ FIXED: Properly typed errors

  // ===============================
  // CONSTANTS WITH PROPER TYPES
  // ===============================
  
  const businessTypes: BusinessType[] = [
    { value: 'law-firm', label: 'Law Firm' },
    { value: 'real-estate', label: 'Real Estate Agency' },
    { value: 'conveyancing', label: 'Conveyancing Practice' },
    { value: 'property-management', label: 'Property Management' },
    { value: 'settlement-agency', label: 'Settlement Agency' },
    { value: 'other', label: 'Other' }
  ]

  const urgencyLevels: UrgencyLevel[] = [
    { 
      value: 'urgent', 
      label: 'Urgent (Within 7 days)',
      description: 'For immediate compliance requirements'
    },
    { 
      value: 'standard', 
      label: 'Standard (Within 14 days)',
      description: 'Our most popular option'
    },
    { 
      value: 'flexible', 
      label: 'Flexible (Within 30 days)',
      description: 'Best value for non-urgent audits'
    }
  ]

  const contactMethods: ContactMethod[] = [
    { 
      value: 'email', 
      label: 'Email', 
      icon: Mail,
      description: 'Written communication preferred'
    },
    { 
      value: 'phone', 
      label: 'Phone Call', 
      icon: Phone,
      description: 'Direct phone consultation'
    },
    { 
      value: 'both', 
      label: 'Both Email & Phone', 
      icon: MessageSquare,
      description: 'Comprehensive communication'
    }
  ]

  const contactInfo: ContactInfo[] = [
    {
      icon: Phone,
      title: 'Call Us Now',
      details: ['1300 AUDITS (283 487)', '+61 2 9876 5432'],
      action: 'tel:1300283487',
      actionText: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@auditspro.com.au', 'urgent@auditspro.com.au'],
      action: 'mailto:info@auditspro.com.au',
      actionText: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Visit Our Offices',
      details: ['Level 25, 123 Collins Street', 'Melbourne, VIC 3000'],
      action: 'https://maps.google.com',
      actionText: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', '24/7 Emergency Support'],
      action: 'tel:1300283487',
      actionText: 'Emergency Line'
    }
  ]

  const faqItems: FAQItem[] = [
    {
      question: "How quickly can you complete our audit?",
      answer: "Our standard turnaround time is 7-14 business days. We also offer express services for urgent requirements, which can be completed within 5-7 business days."
    },
    {
      question: "Do you service all Australian states?",
      answer: "Yes, we provide trust account auditing services across all Australian states and territories. Our team is familiar with the specific requirements for each jurisdiction."
    },
    {
      question: "What information do you need to get started?",
      answer: "We'll need your trust account statements, transaction records, and reconciliation documents for the audit period. We'll provide a comprehensive checklist once you engage our services."
    },
    {
      question: "What are your pricing options?",
      answer: "We offer transparent, fixed pricing starting from $499 + GST for real estate and property services, and $1,500 + GST for legal practice audits. No hidden fees, ever."
    },
    {
      question: "Are your auditors ASIC registered?",
      answer: "Yes, all our auditors are ASIC registered and maintain current professional certifications. We're fully qualified to conduct trust account audits across Australia."
    }
  ]

  // ===============================
  // VALIDATION FUNCTIONS WITH PROPER TYPES
  // ===============================
  
  const validateField = useCallback((field: keyof ContactFormData, value: string): string => {
    switch (field) {
      case 'name':
        if (!value.trim()) return 'Full name is required'
        if (value.trim().length < 2) return 'Name must be at least 2 characters'
        return ''
      
      case 'email':
        if (!value.trim()) return 'Email address is required'
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(value.trim())) return 'Please enter a valid email address'
        return ''
      
      case 'phone':
        if (value.trim() && !/^[\+]?[0-9\s\-\(\)]{8,}$/.test(value.trim())) {
          return 'Please enter a valid phone number'
        }
        return ''
      
      case 'businessType':
        if (!value) return 'Please select your business type'
        return ''
      
      case 'message':
        if (!value.trim()) return 'Please provide details about your auditing requirements'
        if (value.trim().length < 10) return 'Message must be at least 10 characters'
        return ''
      
      default:
        return ''
    }
  }, [])

  const validateForm = useCallback((): boolean => {
    const newErrors: ContactFormErrors = {}
    
    // Validate required fields
    Object.keys(formData).forEach((key) => {
      const field = key as keyof ContactFormData
      const value = formData[field]
      const error = validateField(field, value)
      if (error) newErrors[field] = error
    })
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [formData, validateField])

  // ===============================
  // EVENT HANDLERS WITH PROPER TYPES
  // ===============================
  
  const handleChange = useCallback((
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target
    const fieldName = name as keyof ContactFormData
    
    setFormData(prev => ({ ...prev, [fieldName]: value }))
    
    // Clear error when user starts typing
    if (errors[fieldName]) {
      setErrors(prev => ({ ...prev, [fieldName]: undefined }))
    }
  }, [errors])

  const handleSubmit = useCallback(async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    
    console.log('📧 Contact form submitted')
    
    if (!validateForm()) {
      console.log('❌ Form validation failed')
      return
    }
    
    setIsLoading(true)
    setErrors({})
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      console.log('✅ Form submitted successfully:', formData)
      setIsSubmitted(true)
      
      // Reset form after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setFormData({
          name: '',
          email: '',
          phone: '',
          businessName: '',
          businessType: '',
          urgency: 'standard',
          preferredContact: 'email',
          message: '',
          trustAccountPeriod: '',
          currentAuditor: ''
        })
      }, 5000)
      
    } catch (error: any) {
      console.error('❌ Form submission failed:', error)
      setErrors({ general: 'Submission failed. Please try again or call us directly.' })
    } finally {
      setIsLoading(false)
    }
  }, [formData, validateForm])

  // ===============================
  // RENDER HELPERS WITH PROPER TYPES
  // ===============================
  
  const renderFormField = (
    field: keyof ContactFormData,
    label: string,
    type: 'text' | 'email' | 'tel' | 'textarea' | 'select',
    icon?: React.ComponentType<{ className?: string }>,
    placeholder?: string,
    required: boolean = false,
    options?: BusinessType[],
    colSpan: 'full' | 'half' = 'half'
  ): JSX.Element => {
    const fieldError = errors[field]
    const fieldValue = formData[field]
    const Icon = icon
    
    // Perfect alignment classes
    const containerClasses = `${colSpan === 'full' ? 'md:col-span-2' : 'md:col-span-1'}`
    
    const inputBaseClasses = `
      w-full h-14 px-4 ${Icon ? 'pl-12' : 'px-4'} 
      bg-white border-2 rounded-xl 
      text-gray-900 text-base font-medium
      placeholder:text-gray-500 placeholder:font-normal
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-0
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
      ${fieldError 
        ? 'border-red-300 focus:border-red-500 bg-red-50' 
        : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
      }
    `
    
    const textareaClasses = `
      w-full min-h-[120px] px-4 py-3 
      bg-white border-2 rounded-xl 
      text-gray-900 text-base font-medium leading-relaxed
      placeholder:text-gray-500 placeholder:font-normal
      transition-all duration-200 ease-in-out
      focus:outline-none focus:ring-0
      disabled:bg-gray-50 disabled:text-gray-500 disabled:cursor-not-allowed
      resize-y
      ${fieldError 
        ? 'border-red-300 focus:border-red-500 bg-red-50' 
        : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
      }
    `
    
    return (
      <div className={containerClasses}>
        <label 
          htmlFor={field} 
          className="block text-sm font-semibold text-gray-700 mb-2"
        >
          {label} {required && (
            <span className="text-red-500 ml-1">*</span>
          )}
        </label>
        
        <div className="relative">
          {type === 'textarea' ? (
            <textarea
              id={field}
              name={field}
              value={fieldValue}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              disabled={isLoading || isSubmitted}
              className={textareaClasses}
              rows={4}
            />
          ) : type === 'select' ? (
            <select
              id={field}
              name={field}
              value={fieldValue}
              onChange={handleChange}
              required={required}
              disabled={isLoading || isSubmitted}
              className={inputBaseClasses}
            >
              <option value="" disabled>
                {placeholder || `Select ${label.toLowerCase()}`}
              </option>
              {options?.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field}
              name={field}
              type={type}
              value={fieldValue}
              onChange={handleChange}
              placeholder={placeholder}
              required={required}
              disabled={isLoading || isSubmitted}
              className={inputBaseClasses}
              autoComplete={
                field === 'name' ? 'name' :
                field === 'email' ? 'email' :
                field === 'phone' ? 'tel' :
                field === 'businessName' ? 'organization' :
                'off'
              }
            />
          )}
          
          {/* Icon for input fields */}
          {Icon && type !== 'textarea' && type !== 'select' && (
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Icon className="h-5 w-5 text-gray-400" />
            </div>
          )}
        </div>
        
        {/* Error Message */}
        {fieldError && (
          <div className="flex items-start mt-2">
            <AlertCircle className="h-4 w-4 text-red-500 mr-2 mt-0.5 flex-shrink-0" />
            <p className="text-sm text-red-600 font-medium">
              {fieldError}
            </p>
          </div>
        )}
      </div>
    )
  }

  // ===============================
  // MAIN RENDER
  // ===============================
  
  return (
    <section id="contact" className="min-h-screen bg-gray-50 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Enhanced Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-semibold mb-6 border border-primary-200">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Us
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Ready to Book Your
            <span className="text-primary-600 block">Trust Account Audit?</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Get started with a free consultation. Our team is ready to help you achieve complete compliance and peace of mind.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Contact Information Panel */}
          <div className="xl:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="inline-flex p-3 rounded-xl bg-primary-500 text-white mb-4 shadow-md">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1 leading-relaxed">
                    {detail}
                  </p>
                ))}
                <a
                  href={info.action}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 mt-3"
                >
                  {info.actionText}
                  <CheckCircle className="ml-2 h-4 w-4" />
                </a>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-2xl p-6 border border-red-200 shadow-sm hover:shadow-md transition-all duration-300">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">Emergency Audit Required?</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                Need an urgent audit due to regulatory deadlines or compliance issues?
              </p>
              <a
                href="tel:1300283487"
                className="w-full h-12 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg transform hover:scale-[1.02]"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact Form Panel */}
          <div className="xl:col-span-2">
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-200 shadow-sm">
              <div className="flex items-center space-x-3 mb-8">
                <Calendar className="h-6 w-6 text-primary-600" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Book Your Audit
                </h2>
              </div>
              
              {/* General Error Message */}
              {errors.general && (
                <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4">
                  <div className="flex items-start">
                    <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-red-800">Submission Failed</h3>
                      <p className="text-sm text-red-700 mt-1">{errors.general}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-8">
                
                {/* Personal Information Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Personal Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {renderFormField(
                      'name',
                      'Full Name',
                      'text',
                      User,
                      'Your full name',
                      true
                    )}
                    
                    {renderFormField(
                      'email',
                      'Email Address',
                      'email',
                      Mail,
                      'your.email@example.com',
                      true
                    )}
                    
                    {renderFormField(
                      'phone',
                      'Phone Number',
                      'tel',
                      Phone,
                      '(02) 1234 5678',
                      false
                    )}
                    
                    {renderFormField(
                      'businessName',
                      'Business Name',
                      'text',
                      Building,
                      'Your business name',
                      false
                    )}
                  </div>
                </div>

                {/* Business Information Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Business Information
                  </h3>
                  
                  {renderFormField(
                    'businessType',
                    'Business Type',
                    'select',
                    undefined,
                    'Select your business type',
                    true,
                    businessTypes,
                    'full'
                  )}
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                    {renderFormField(
                      'trustAccountPeriod',
                      'Trust Account Period',
                      'text',
                      undefined,
                      'e.g., 1 July 2023 - 30 June 2024',
                      false
                    )}
                    
                    {renderFormField(
                      'currentAuditor',
                      'Current Auditor (if any)',
                      'text',
                      undefined,
                      'Current auditor name',
                      false
                    )}
                  </div>
                </div>

                {/* Service Preferences Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Service Preferences
                  </h3>
                  
                  {/* Urgency Level */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Urgency Level <span className="text-red-500">*</span>
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {urgencyLevels.map((level) => (
                        <label key={level.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="urgency"
                            value={level.value}
                            checked={formData.urgency === level.value}
                            onChange={handleChange}
                            disabled={isLoading || isSubmitted}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-xl transition-all duration-200 ${
                            formData.urgency === level.value 
                              ? 'border-primary-500 bg-primary-50 shadow-md' 
                              : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                          }`}>
                            <div className="font-semibold text-gray-900 mb-1">
                              {level.label}
                            </div>
                            {level.description && (
                              <div className="text-sm text-gray-600">
                                {level.description}
                              </div>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Preferred Contact Method */}
                  <div className="mb-8">
                    <label className="block text-sm font-semibold text-gray-700 mb-4">
                      Preferred Contact Method
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {contactMethods.map((method) => (
                        <label key={method.value} className="relative cursor-pointer">
                          <input
                            type="radio"
                            name="preferredContact"
                            value={method.value}
                            checked={formData.preferredContact === method.value}
                            onChange={handleChange}
                            disabled={isLoading || isSubmitted}
                            className="sr-only"
                          />
                          <div className={`p-4 border-2 rounded-xl transition-all duration-200 flex items-center space-x-3 ${
                            formData.preferredContact === method.value 
                              ? 'border-primary-500 bg-primary-50 shadow-md' 
                              : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                          }`}>
                            <method.icon className="h-5 w-5 text-primary-600 flex-shrink-0" />
                            <div className="flex-1 min-w-0">
                              <div className="font-semibold text-gray-900">
                                {method.label}
                              </div>
                              {method.description && (
                                <div className="text-sm text-gray-600">
                                  {method.description}
                                </div>
                              )}
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Message Section */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    Additional Information
                  </h3>
                  
                  {renderFormField(
                    'message',
                    'Message',
                    'textarea',
                    undefined,
                    'Please describe your auditing needs, any specific requirements, timeline constraints, or questions you have...',
                    true,
                    undefined,
                    'full'
                  )}
                </div>

                {/* Submit Button */}
                <div className="border-t border-gray-200 pt-8">
                  <button
                    type="submit"
                    disabled={isLoading || isSubmitted}
                    className={`
                      w-full h-14 font-semibold rounded-xl transition-all duration-200 
                      flex items-center justify-center space-x-3
                      focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                      transform hover:scale-[1.02] active:scale-[0.98]
                      ${isLoading || isSubmitted
                        ? 'bg-gray-400 text-white cursor-not-allowed'
                        : 'bg-primary-600 hover:bg-primary-700 text-white shadow-md hover:shadow-lg'
                      }
                    `}
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent" />
                        <span>Sending Request...</span>
                      </>
                    ) : isSubmitted ? (
                      <>
                        <CheckCircle className="h-5 w-5" />
                        <span>Request Sent Successfully!</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span>Send Audit Request</span>
                      </>
                    )}
                  </button>

                  {/* Success Message */}
                  {isSubmitted && (
                    <div className="mt-6 bg-green-50 rounded-xl p-4 border border-green-200">
                      <div className="flex items-center space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-600" />
                        <div>
                          <h4 className="font-semibold text-green-800">Request Received!</h4>
                          <p className="text-green-700 text-sm mt-1">
                            We'll contact you within 2 hours during business hours. For urgent matters, please call us directly.
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  <p className="text-sm text-gray-600 text-center mt-4">
                    We typically respond within 2 hours during business hours. For urgent matters, please call us directly at 1300 AUDITS.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Enhanced FAQ Section */}
        <div className="mt-16 lg:mt-24 max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 border border-blue-200">
              <MessageSquare className="h-4 w-4 mr-2" />
              FAQ
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Quick answers to common questions about our auditing services
            </p>
          </div>
          
          <div className="space-y-6">
            {faqItems.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200"
              >
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
          
          {/* Additional Help */}
          <div className="mt-12 text-center">
            <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Our team is here to help. Get in touch for personalized assistance with your auditing needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:1300283487"
                  className="inline-flex items-center justify-center h-12 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-xl transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-[1.02]"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 1300 AUDITS
                </a>
                <a
                  href="mailto:info@auditspro.com.au"
                  className="inline-flex items-center justify-center h-12 px-6 border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-[1.02]"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Send Email
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Service Areas Section */}
        <div className="mt-16 lg:mt-24">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Service Areas
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              We provide professional trust account auditing services across all Australian states and territories.
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              'New South Wales',
              'Victoria',
              'Queensland',
              'Western Australia',
              'South Australia',
              'Tasmania',
              'Northern Territory',
              'Australian Capital Territory'
            ].map((state, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md hover:border-primary-300 transition-all duration-200 text-center"
              >
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <MapPin className="h-4 w-4 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {state}
                </h3>
              </div>
            ))}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 lg:mt-24">
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                Why Choose AuditsPro Australia?
              </h2>
              <p className="text-gray-600 leading-relaxed">
                Trusted by over 500 Australian businesses for professional trust account auditing
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: 'ASIC Registered',
                  description: 'All auditors are ASIC registered and certified'
                },
                {
                  icon: Clock,
                  title: 'Fast Turnaround',
                  description: '7-14 day standard delivery, express options available'
                },
                {
                  icon: CheckCircle,
                  title: 'Fixed Pricing',
                  description: 'Transparent pricing with no hidden fees'
                },
                {
                  icon: Phone,
                  title: '24/7 Support',
                  description: 'Emergency support line for urgent requirements'
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}