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
  const [errors, setErrors] = useState<{[key: string]: string}>({})

  const businessTypes = [
    'Law Firm',
    'Real Estate Agency',
    'Conveyancing Practice',
    'Property Management',
    'Settlement Agency',
    'Other'
  ]

  const urgencyLevels = [
    { value: 'urgent', label: 'Urgent (Within 7 days)', color: 'text-red-600' },
    { value: 'standard', label: 'Standard (Within 14 days)', color: 'text-blue-600' },
    { value: 'flexible', label: 'Flexible (Within 30 days)', color: 'text-green-600' }
  ]

  const contactMethods = [
    { value: 'email', label: 'Email', icon: Mail },
    { value: 'phone', label: 'Phone Call', icon: Phone },
    { value: 'both', label: 'Both Email & Phone', icon: MessageSquare }
  ]

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {}
    
    if (!formData.name.trim()) newErrors.name = 'Name is required'
    if (!formData.email.trim()) newErrors.email = 'Email is required'
    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid'
    if (!formData.businessType) newErrors.businessType = 'Business type is required'
    if (!formData.message.trim()) newErrors.message = 'Message is required'
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
      actionText: 'Call Now',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['info@auditspro.com.au', 'urgent@auditspro.com.au'],
      action: 'mailto:info@auditspro.com.au',
      actionText: 'Send Email',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: MapPin,
      title: 'Visit Our Offices',
      details: ['Level 25, 123 Collins Street', 'Melbourne, VIC 3000'],
      action: '#',
      actionText: 'Get Directions',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Fri: 8:00 AM - 6:00 PM', '24/7 Emergency Support'],
      action: 'tel:1300283487',
      actionText: 'Emergency Line',
      color: 'from-gold-500 to-gold-600'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-gold-100 dark:from-blue-900/30 dark:to-gold-900/30 text-blue-700 dark:text-gold-400 text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4 mr-2" />
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Book Your
            <span className="bg-gradient-to-r from-blue-600 to-gold-600 bg-clip-text text-transparent block">Trust Account Audit?</span>
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            Get started with a free consultation. Our team is ready to help you achieve complete compliance and peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="glass-morphism rounded-2xl p-6 transform hover:scale-105 transition-all duration-300">
                <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${info.color} text-white mb-4`}>
                  <info.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {info.title}
                </h3>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-slate-600 dark:text-slate-300 mb-1">
                    {detail}
                  </p>
                ))}
                <a
                  href={info.action}
                  className="inline-flex items-center text-blue-600 dark:text-gold-400 font-semibold hover:text-blue-700 dark:hover:text-gold-300 transition-colors duration-200 mt-3"
                >
                  {info.actionText}
                  <CheckCircle className="ml-1 h-4 w-4" />
                </a>
              </div>
            ))}

            {/* Emergency Contact */}
            <div className="glass-morphism rounded-2xl p-6 bg-gradient-to-r from-red-50 to-orange-50 dark:from-red-900/20 dark:to-orange-900/20 border border-red-200 dark:border-red-800">
              <div className="flex items-center space-x-3 mb-4">
                <AlertCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">Emergency Audit Required?</h3>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mb-4 text-sm">
                Need an urgent audit due to regulatory deadlines or compliance issues?
              </p>
              <a
                href="tel:1300283487"
                className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 inline-flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="glass-morphism rounded-3xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="h-6 w-6 text-blue-600 dark:text-gold-400" />
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Book Your Audit
                </h3>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 ${errors.name ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                        placeholder="Your full name"
                      />
                    </div>
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 ${errors.email ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Business Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                        placeholder="(02) 1234 5678"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="businessName" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Business Name
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                      <input
                        type="text"
                        id="businessName"
                        name="businessName"
                        value={formData.businessName}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>
                </div>

                {/* Business Type */}
                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Business Type *
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    required
                    value={formData.businessType}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 ${errors.businessType ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
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
                    <label htmlFor="trustAccountPeriod" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Trust Account Period
                    </label>
                    <input
                      type="text"
                      id="trustAccountPeriod"
                      name="trustAccountPeriod"
                      value={formData.trustAccountPeriod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                      placeholder="e.g., 1 July 2023 - 30 June 2024"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentAuditor" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Current Auditor (if any)
                    </label>
                    <input
                      type="text"
                      id="currentAuditor"
                      name="currentAuditor"
                      value={formData.currentAuditor}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200"
                      placeholder="Current auditor name"
                    />
                  </div>
                </div>

                {/* Urgency Level */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
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
                        <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${formData.urgency === level.value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'}`}>
                          <div className={`font-semibold ${level.color} dark:text-gold-400`}>
                            {level.label}
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Preferred Contact Method */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-3">
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
                        <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 flex items-center space-x-3 ${formData.preferredContact === method.value ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'}`}>
                          <method.icon className="h-5 w-5 text-blue-600 dark:text-gold-400" />
                          <span className="font-medium text-slate-900 dark:text-white">{method.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white transition-colors duration-200 resize-none ${errors.message ? 'border-red-500' : 'border-slate-300 dark:border-slate-600'}`}
                    placeholder="Please describe your auditing needs, any specific requirements, or questions you have..."
                  />
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitted}
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-green-600 disabled:to-green-700 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
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
                  <div className="glass-morphism rounded-xl p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">Request Received!</h4>
                        <p className="text-green-700 dark:text-green-300 text-sm">
                          We'll contact you within 2 hours during business hours. For urgent matters, please call us directly.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <p className="text-sm text-slate-600 dark:text-slate-400 text-center">
                  We typically respond within 2 hours during business hours. For urgent matters, please call us directly at 1300 AUDITS.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}