'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Calendar, MessageSquare, AlertCircle, User, Building } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
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

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  const businessTypes = [
    'Law Firm',
    'Real Estate Agency',
    'Conveyancing Practice',
    'Property Management',
    'Settlement Agency',
    'Other'
  ]

  const urgencyLevels = [
    { value: 'urgent', label: 'Urgent (Within 7 days)' },
    { value: 'standard', label: 'Standard (Within 14 days)' },
    { value: 'flexible', label: 'Flexible (Within 30 days)' }
  ]

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'both', label: 'Both Email & Phone', icon: MessageSquare }
  ]

  const validateForm = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.businessType) newErrors.businessType = 'Business type is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    // Simulate form submission
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 5000)
    
    // Reset form
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
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const contactInfo = [
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
      action: '#',
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

  return (
    <section id="contact" className="section-padding bg-light">
      <div className="max-w-7xl mx-auto container-padding">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-6 border border-primary-200">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Ready to Book Your
            <span className="text-primary-600 block">Trust Account Audit?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get started with a free consultation. Our team is ready to help you achieve complete compliance and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-lg hover:shadow-xl hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1">
                <div className="inline-flex p-3 rounded-xl bg-primary-500 text-white mb-4 shadow-md">
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 mb-1">
                    {detail}
                  </p>
                ))}
                <a
                  href={info.action}
                  className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200 mt-3"
                >
                  {info.actionText}
                  <CheckCircle className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="bg-white rounded-2xl p-6 border-2 border-red-200 shadow-lg hover:shadow-xl hover:border-red-300 transition-all duration-300 transform hover:-translate-y-1 bg-gradient-to-br from-red-50 to-orange-50">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600" />
                <h3 className="text-lg font-bold text-gray-900">Emergency Audit Required?</h3>
              </div>
              <p className="text-gray-600 mb-4 text-sm">
                Need an urgent audit due to regulatory deadlines or compliance issues?
              </p>
              <a
                href="tel:1300283487"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center shadow-md hover:shadow-lg"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-8 border-2 border-gray-200 shadow-xl hover:shadow-2xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-primary-600" />
                <h3 className="text-2xl font-bold text-gray-900">
                  Book Your Audit
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 ${
                          errors.name 
                            ? 'border-red-300 focus:border-red-500 bg-red-50' 
                            : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                        }`}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 ${
                          errors.email 
                            ? 'border-red-300 focus:border-red-500 bg-red-50' 
                            : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                        }`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Business Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 focus:border-primary-500 hover:border-gray-300"
                        placeholder="(02) 1234 5678"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 mb-2">
                      Business Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 focus:border-primary-500 hover:border-gray-300"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-gray-900 transition-all duration-200 focus:outline-none focus:ring-0 ${
                      errors.businessType 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                    }`}
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map((type, index) => (
                      <option key={index} value={type}>{type}</option>
                    ))}
                  </select>
                  {errors.businessType && <p className="text-red-500 text-sm mt-1">{errors.businessType}</p>}
                </div>

                {/* Audit Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="trustAccountPeriod" className="block text-sm font-medium text-gray-700 mb-2">
                      Trust Account Period
                    </label>
                    <input
                      type="text"
                      id="trustAccountPeriod"
                      name="trustAccountPeriod"
                      value={formData.trustAccountPeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 focus:border-primary-500 hover:border-gray-300"
                      placeholder="e.g., 1 July 2023 - 30 June 2024"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentAuditor" className="block text-sm font-medium text-gray-700 mb-2">
                      Current Auditor (if any)
                    </label>
                    <input
                      type="text"
                      id="currentAuditor"
                      name="currentAuditor"
                      value={formData.currentAuditor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl bg-white text-gray-900 placeholder-gray-500 transition-all duration-200 focus:outline-none focus:ring-0 focus:border-primary-500 hover:border-gray-300"
                      placeholder="Current auditor name"
                    />
                  </div>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Urgency Level
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {urgencyLevels.map((level) => (
                      <label key={level.value} className="relative">
                        <input
                          type="radio"
                          name="urgency"
                          value={level.value}
                          checked={formData.urgency === level.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                          formData.urgency === level.value 
                            ? 'border-primary-500 bg-primary-50 shadow-md' 
                            : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                        }`}>
                          <div className="font-semibold text-gray-900">
                            {level.label}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {contactMethods.map((method) => (
                      <label key={method.value} className="relative">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.value}
                          checked={formData.preferredContact === method.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 flex items-center space-x-3 ${
                          formData.preferredContact === method.value 
                            ? 'border-primary-500 bg-primary-50 shadow-md' 
                            : 'border-gray-200 hover:border-primary-300 hover:bg-gray-50'
                        }`}>
                          <method.icon className="h-5 w-5 text-primary-600" />
                          <span className="font-medium text-gray-900">{method.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl bg-white text-gray-900 placeholder-gray-500 resize-none transition-all duration-200 focus:outline-none focus:ring-0 ${
                      errors.message 
                        ? 'border-red-300 focus:border-red-500 bg-red-50' 
                        : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                    }`}
                    placeholder="Please describe your auditing needs, any specific requirements, or questions you have..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-green-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed flex items-center justify-center space-x-2 min-h-[56px]"
                >
                  {isSubmitted ? (
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

                {isSubmitted && (
                  <div className="bg-white rounded-xl p-4 border-2 border-green-200 shadow-lg bg-gradient-to-br from-green-50 to-emerald-50">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <h4 className="font-semibold text-green-800">Request Received!</h4>
                        <p className="text-green-700 text-sm">
                          We'll contact you within 2 hours during business hours. For urgent matters, please call us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-gray-600 text-center">
                  We typically respond within 2 hours during business hours. For urgent matters, please call us directly at 1300 AUDITS.
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* FIXED: Removed border from FAQ Section completely */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600">
              Quick answers to common questions about our auditing services
            </p>
          </div>
          
          <div className="space-y-6">
            {/* FAQ Item 1 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                color: 'rgb(17 24 39)'
              }}>
                How quickly can you complete our audit?
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgb(75 85 99)',
                margin: '0'
              }}>
                Our standard turnaround time is 7-14 business days. We also offer express services 
                for urgent requirements, which can be completed within 5-7 business days.
              </p>
            </div>
            
            {/* FAQ Item 2 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                color: 'rgb(17 24 39)'
              }}>
                Do you service all Australian states?
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgb(75 85 99)',
                margin: '0'
              }}>
                Yes, we provide trust account auditing services across all Australian states and territories. 
                Our team is familiar with the specific requirements for each jurisdiction.
              </p>
            </div>
            
            {/* FAQ Item 3 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                color: 'rgb(17 24 39)'
              }}>
                What information do you need to get started?
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgb(75 85 99)',
                margin: '0'
              }}>
                We'll need your trust account statements, transaction records, and reconciliation 
                documents for the audit period. We'll provide a comprehensive checklist once you engage our services.
              </p>
            </div>

            {/* FAQ Item 4 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                color: 'rgb(17 24 39)'
              }}>
                What are your pricing options?
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgb(75 85 99)',
                margin: '0'
              }}>
                We offer transparent, fixed pricing starting from $499 + GST for real estate and property services, 
                and $1,500 + GST for legal practice audits. No hidden fees, ever.
              </p>
            </div>

            {/* FAQ Item 5 */}
            <div className="bg-gray-50 rounded-lg p-6 hover:bg-gray-100 transition-colors duration-200">
              <h3 style={{
                fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
                fontWeight: '600',
                lineHeight: '1.5',
                letterSpacing: '-0.01em',
                marginBottom: '0.75rem',
                color: 'rgb(17 24 39)'
              }}>
                Are your auditors ASIC registered?
              </h3>
              <p style={{
                fontSize: 'clamp(0.875rem, 2vw, 1rem)',
                fontWeight: '400',
                lineHeight: '1.6',
                color: 'rgb(75 85 99)',
                margin: '0'
              }}>
                Yes, all our auditors are ASIC registered and maintain current professional certifications. 
                We're fully qualified to conduct trust account audits across Australia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}