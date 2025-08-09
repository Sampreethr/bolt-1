'use client'

import { useState, useCallback } from 'react'
import { Mail, CheckCircle, AlertCircle, Loader2 } from 'lucide-react'

interface EmailSubscriptionProps {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonText?: string;
  className?: string;
}

interface SubscriptionState {
  email: string;
  status: 'idle' | 'loading' | 'success' | 'error';
  message: string;
}

export default function EmailSubscription({
  title = "Stay Updated with Australian Compliance Changes",
  description = "Get the latest updates on trust account regulations, compliance requirements, and industry news.",
  placeholder = "Enter your email address",
  buttonText = "Subscribe Now",
  className = ""
}: EmailSubscriptionProps): JSX.Element {
  
  const [subscription, setSubscription] = useState<SubscriptionState>({
    email: '',
    status: 'idle',
    message: ''
  })

  const validateEmail = useCallback((email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }, [])

  const handleEmailChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSubscription(prev => ({
      ...prev,
      email: e.target.value,
      status: 'idle',
      message: ''
    }))
  }, [])

  const handleSubscribe = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    
    console.log('🔄 Email subscription started:', subscription.email)
    
    // Validation
    if (!subscription.email.trim()) {
      console.log('❌ Validation failed: Empty email')
      setSubscription(prev => ({
        ...prev,
        status: 'error',
        message: 'Please enter your email address'
      }))
      return
    }

    if (!validateEmail(subscription.email)) {
      console.log('❌ Validation failed: Invalid email format')
      setSubscription(prev => ({
        ...prev,
        status: 'error',
        message: 'Please enter a valid email address'
      }))
      return
    }

    // Start loading
    console.log('⏳ Starting API request...')
    setSubscription(prev => ({
      ...prev,
      status: 'loading',
      message: ''
    }))

    try {
      console.log('📡 Making API request to /api/subscribe')
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: subscription.email.trim().toLowerCase(),
          source: 'audit_service_selector',
          timestamp: new Date().toISOString()
        }),
      })

      console.log('📡 API Response status:', response.status)
      const data = await response.json()
      console.log('📡 API Response data:', data)

      if (response.ok) {
        console.log('✅ Subscription successful!')
        setSubscription(prev => ({
          ...prev,
          status: 'success',
          message: data.message || 'Successfully subscribed! Check your email for confirmation.'
        }))
        
        // Clear email after successful subscription
        setTimeout(() => {
          setSubscription(prev => ({
            ...prev,
            email: ''
          }))
        }, 3000)
      } else {
        console.log('❌ API returned error:', data.error)
        throw new Error(data.error || 'Subscription failed')
      }
    } catch (error) {
      console.error('❌ Subscription error:', error)
      setSubscription(prev => ({
        ...prev,
        status: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong. Please try again.'
      }))
    }
  }, [subscription.email, validateEmail])

  const getStatusIcon = () => {
    switch (subscription.status) {
      case 'loading':
        return <Loader2 className="h-5 w-5 animate-spin text-primary-500" />
      case 'success':
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case 'error':
        return <AlertCircle className="h-5 w-5 text-red-500" />
      default:
        return <Mail className="h-5 w-5 text-primary-500" />
    }
  }

  const getStatusMessage = () => {
    if (!subscription.message) return null
    
    const baseClasses = "mt-3 text-sm font-medium flex items-center"
    const statusClasses = {
      success: "text-green-600 dark:text-green-400",
      error: "text-red-600 dark:text-red-400",
      loading: "text-primary-600 dark:text-primary-400"
    }

    return (
      <div className={`${baseClasses} ${statusClasses[subscription.status as keyof typeof statusClasses] || ''}`}>
        {getStatusIcon()}
        <span className="ml-2">{subscription.message}</span>
      </div>
    )
  }

  return (
    <div className={`bg-gradient-to-r from-slate-800 to-slate-900 dark:from-slate-900 dark:to-black rounded-2xl p-6 lg:p-8 border border-slate-700 dark:border-slate-800 shadow-xl ${className}`}>
      <div className="text-center mb-6">
        <div className="inline-flex items-center justify-center w-12 h-12 bg-primary-500 rounded-xl mb-4">
          <Mail className="h-6 w-6 text-white" />
        </div>
        
        <h3 className="text-xl lg:text-2xl font-bold text-white mb-2">
          {title}
        </h3>
        
        <p className="text-slate-300 text-sm lg:text-base max-w-md mx-auto">
          {description}
        </p>
      </div>

      <form onSubmit={handleSubscribe} className="space-y-4">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1">
            <input
              type="email"
              value={subscription.email}
              onChange={handleEmailChange}
              placeholder={placeholder}
              disabled={subscription.status === 'loading'}
              className={`
                w-full px-4 py-3 rounded-lg border transition-all duration-200
                bg-white dark:bg-slate-800 
                border-slate-300 dark:border-slate-600
                text-gray-900 dark:text-white
                placeholder-gray-500 dark:placeholder-gray-400
                focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500
                disabled:opacity-50 disabled:cursor-not-allowed
                ${subscription.status === 'error' ? 'border-red-500 focus:ring-red-500' : ''}
                ${subscription.status === 'success' ? 'border-green-500 focus:ring-green-500' : ''}
              `}
            />
          </div>
          
          <button
            type="submit"
            disabled={subscription.status === 'loading' || subscription.status === 'success'}
            className={`
              px-6 py-3 rounded-lg font-semibold transition-all duration-200 min-w-[140px]
              flex items-center justify-center space-x-2
              ${subscription.status === 'success'
                ? 'bg-green-500 hover:bg-green-600 text-white'
                : 'bg-primary-500 hover:bg-primary-600 text-white'
              }
              disabled:opacity-50 disabled:cursor-not-allowed
              transform hover:scale-105 active:scale-95
            `}
          >
            {subscription.status === 'loading' ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Subscribing...</span>
              </>
            ) : subscription.status === 'success' ? (
              <>
                <CheckCircle className="h-4 w-4" />
                <span>Subscribed!</span>
              </>
            ) : (
              <>
                <Mail className="h-4 w-4" />
                <span>{buttonText}</span>
              </>
            )}
          </button>
        </div>

        {getStatusMessage()}
      </form>

      <div className="mt-6 text-center">
        <p className="text-xs text-slate-400">
          By subscribing, you agree to receive compliance updates and industry news. 
          <br className="hidden sm:inline" />
          You can unsubscribe at any time.
        </p>
      </div>
    </div>
  )
}