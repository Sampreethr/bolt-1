'use client'

import { useState } from 'react'
import { CreditCard, Shield, CheckCircle, ArrowLeft, Lock, Calendar, DollarSign, Phone, Mail, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import Header from '@/src/components/Header'
import Footer from '@/src/components/Footer'

export default function Payment() {
  const [selectedService, setSelectedService] = useState('')
  const [selectedPackage, setSelectedPackage] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('card')
  const [formData, setFormData] = useState({
    // Personal Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    
    // Business Information
    businessName: '',
    businessType: '',
    abn: '',
    
    // Payment Information
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    
    // Billing Address
    address: '',
    city: '',
    state: '',
    postcode: '',
    
    // Additional Information
    specialRequirements: ''
  })

  const [isProcessing, setIsProcessing] = useState(false)
  const [paymentComplete, setPaymentComplete] = useState(false)

  const services = [
    {
      id: 'trust-audit',
      name: 'Trust Account Audit',
      packages: [
        { id: 'standard', name: 'Standard Audit', price: 2500, duration: '14 business days' },
        { id: 'express', name: 'Express Audit', price: 3500, duration: '7 business days' },
        { id: 'premium', name: 'Premium Package', price: 4500, duration: '7 business days' }
      ]
    },
    {
      id: 'compliance-consulting',
      name: 'Compliance Consulting',
      packages: [
        { id: 'basic', name: 'Basic Consulting', price: 150, duration: 'Per hour' },
        { id: 'monthly', name: 'Monthly Support', price: 800, duration: 'Per month' },
        { id: 'premium', name: 'Premium Partnership', price: 1500, duration: 'Per month' }
      ]
    },
    {
      id: 'financial-reporting',
      name: 'Financial Reporting',
      packages: [
        { id: 'summary', name: 'Trust Account Summary', price: 500, duration: 'One-time' },
        { id: 'analytics', name: 'Performance Analytics', price: 750, duration: 'One-time' },
        { id: 'dashboard', name: 'Executive Dashboard', price: 1000, duration: 'One-time' }
      ]
    },
    {
      id: 'setup-training',
      name: 'Setup & Training',
      packages: [
        { id: 'basic', name: 'Basic Setup', price: 1000, duration: '1-2 days' },
        { id: 'complete', name: 'Complete Package', price: 2500, duration: '3-5 days' },
        { id: 'premium', name: 'Premium Implementation', price: 4000, duration: '1-2 weeks' }
      ]
    }
  ]

  const paymentMethods = [
    { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
    { id: 'bank', name: 'Bank Transfer', icon: DollarSign },
    { id: 'invoice', name: 'Invoice (Net 30)', icon: Calendar }
  ]

  const getSelectedPackageDetails = () => {
    const service = services.find(s => s.id === selectedService)
    if (!service) return null
    return service.packages.find(p => p.id === selectedPackage)
  }

  const calculateTotal = () => {
    const packageDetails = getSelectedPackageDetails()
    if (!packageDetails) return 0
    
    const subtotal = packageDetails.price
    const gst = subtotal * 0.1 // 10% GST
    return subtotal + gst
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)
    
    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false)
      setPaymentComplete(true)
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  if (paymentComplete) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
        <Header />
        <main className="pt-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full mb-6">
                <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
              </div>
              <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-4">
                Payment Successful!
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-300 mb-8">
                Thank you for choosing AuditsPro Australia. Your order has been confirmed.
              </p>
              
              <div className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto mb-8">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Order Confirmation</h2>
                <div className="space-y-4 text-left">
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Order ID:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">#AP-{Date.now()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Service:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {services.find(s => s.id === selectedService)?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Package:</span>
                    <span className="font-semibold text-slate-900 dark:text-white">
                      {getSelectedPackageDetails()?.name}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-600 dark:text-slate-400">Total Paid:</span>
                    <span className="font-bold text-green-600 dark:text-green-400">
                      ${calculateTotal().toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="glass-morphism rounded-2xl p-6 max-w-2xl mx-auto mb-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4">What Happens Next?</h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">1</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">You'll receive a confirmation email within 5 minutes</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">2</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">Our team will contact you within 2 business hours</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-bold">3</span>
                    </div>
                    <p className="text-slate-700 dark:text-slate-300">We'll begin work on your audit immediately</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300">
                  Return to Home
                </Link>
                <a href="tel:1300283487" className="border-2 border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300 font-semibold py-3 px-6 rounded-xl hover:border-blue-500 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300">
                  <Phone className="inline mr-2 h-5 w-5" />
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
            <Link href="/" className="hover:text-blue-600 dark:hover:text-gold-400">Home</Link>
            <span>/</span>
            <span className="text-slate-900 dark:text-white">Payment</span>
          </div>
        </div>

        {/* Header */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 text-green-700 dark:text-green-400 text-sm font-medium mb-6">
              <Shield className="h-4 w-4 mr-2" />
              Secure Payment
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
              Complete Your Order
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
              Secure payment processing with 256-bit SSL encryption. Your information is safe with us.
            </p>
          </div>
        </section>

        {/* Payment Form */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Form */}
            <div className="lg:col-span-2 space-y-8">
              {/* Service Selection */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  1. Select Service & Package
                </h2>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Service Type
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => {
                        setSelectedService(e.target.value)
                        setSelectedPackage('')
                      }}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.id} value={service.id}>{service.name}</option>
                      ))}
                    </select>
                  </div>

                  {selectedService && (
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Package
                      </label>
                      <select
                        value={selectedPackage}
                        onChange={(e) => setSelectedPackage(e.target.value)}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        required
                      >
                        <option value="">Select a package</option>
                        {services.find(s => s.id === selectedService)?.packages.map((pkg) => (
                          <option key={pkg.id} value={pkg.id}>
                            {pkg.name} - ${pkg.price.toLocaleString()} ({pkg.duration})
                          </option>
                        ))}
                      </select>
                    </div>
                  )}
                </div>
              </div>

              {/* Personal Information */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  2. Personal Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Business Information */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  3. Business Information
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      Business Type
                    </label>
                    <select
                      name="businessType"
                      value={formData.businessType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      required
                    >
                      <option value="">Select business type</option>
                      <option value="law-firm">Law Firm</option>
                      <option value="real-estate">Real Estate Agency</option>
                      <option value="conveyancing">Conveyancing Practice</option>
                      <option value="property-management">Property Management</option>
                      <option value="settlement">Settlement Agency</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                      ABN (Optional)
                    </label>
                    <input
                      type="text"
                      name="abn"
                      value={formData.abn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                      placeholder="12 345 678 901"
                    />
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="glass-morphism rounded-2xl p-6">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  4. Payment Method
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                  {paymentMethods.map((method) => (
                    <label key={method.id} className="relative">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.id}
                        checked={paymentMethod === method.id}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div className={`p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 flex items-center space-x-3 ${paymentMethod === method.id ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-300 dark:border-slate-600 hover:border-blue-300'}`}>
                        <method.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                        <span className="font-medium text-slate-900 dark:text-white">{method.name}</span>
                      </div>
                    </label>
                  ))}
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        value={formData.cardNumber}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        placeholder="1234 5678 9012 3456"
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          value={formData.expiryDate}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="MM/YY"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          value={formData.cvv}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                          placeholder="123"
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                        Name on Card
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        value={formData.cardName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate-300 dark:border-slate-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                        required
                      />
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank' && (
                  <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Bank Transfer Details</h4>
                    <div className="space-y-1 text-sm text-slate-700 dark:text-slate-300">
                      <p><strong>Account Name:</strong> AuditsPro Australia Pty Ltd</p>
                      <p><strong>BSB:</strong> 123-456</p>
                      <p><strong>Account Number:</strong> 12345678</p>
                      <p><strong>Reference:</strong> Your business name</p>
                    </div>
                  </div>
                )}

                {paymentMethod === 'invoice' && (
                  <div className="bg-gold-50 dark:bg-gold-900/20 rounded-xl p-4">
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-2">Invoice Payment (Net 30)</h4>
                    <p className="text-sm text-slate-700 dark:text-slate-300">
                      We'll send you an invoice with Net 30 payment terms. Work will commence upon order confirmation.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Right Column - Order Summary */}
            <div className="lg:col-span-1">
              <div className="glass-morphism rounded-2xl p-6 sticky top-24">
                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                  Order Summary
                </h2>
                
                {selectedService && selectedPackage ? (
                  <div className="space-y-4">
                    <div className="border-b border-slate-200 dark:border-slate-700 pb-4">
                      <h3 className="font-semibold text-slate-900 dark:text-white">
                        {services.find(s => s.id === selectedService)?.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        {getSelectedPackageDetails()?.name}
                      </p>
                      <p className="text-slate-600 dark:text-slate-400 text-sm">
                        Duration: {getSelectedPackageDetails()?.duration}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">Subtotal:</span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          ${getSelectedPackageDetails()?.price.toLocaleString()}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600 dark:text-slate-400">GST (10%):</span>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          ${((getSelectedPackageDetails()?.price || 0) * 0.1).toLocaleString()}
                        </span>
                      </div>
                      <div className="border-t border-slate-200 dark:border-slate-700 pt-2">
                        <div className="flex justify-between">
                          <span className="text-lg font-bold text-slate-900 dark:text-white">Total:</span>
                          <span className="text-lg font-bold text-blue-600 dark:text-gold-400">
                            ${calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 disabled:from-slate-400 disabled:to-slate-500 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl disabled:scale-100 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isProcessing ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                          <span>Processing...</span>
                        </>
                      ) : (
                        <>
                          <Lock className="h-5 w-5" />
                          <span>Complete Payment</span>
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <Shield className="h-4 w-4" />
                      <span>Secured by 256-bit SSL encryption</span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-8">
                    <AlertCircle className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                    <p className="text-slate-600 dark:text-slate-400">
                      Please select a service and package to see pricing
                    </p>
                  </div>
                )}

                {/* Trust Indicators */}
                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>ASIC Registered Auditors</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>Professional Indemnity Insured</span>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-slate-600 dark:text-slate-400">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span>100% Satisfaction Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  )
}