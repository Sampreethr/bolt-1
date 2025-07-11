'use client'

import { useState, useCallback } from 'react'
import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { registerUser, createUser } from '@/src/lib/appwrite'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface SignupFormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  acceptTerms: boolean;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  acceptTerms?: string;
  general?: string;
}

interface SignupFormState {
  data: SignupFormData;
  errors: FormErrors;
  isLoading: boolean;
  showPassword: boolean;
  showConfirmPassword: boolean;
  isSuccess: boolean;
}

/**
 * FIXED SIGNUP FORM: Real Appwrite Database Integration
 * Properly saves users to Appwrite database
 */
export default function SignupForm(): JSX.Element {
  const router = useRouter()
  
  const [formState, setFormState] = useState<SignupFormState>(() => ({
    data: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      acceptTerms: false,
    },
    errors: {},
    isLoading: false,
    showPassword: false,
    showConfirmPassword: false,
    isSuccess: false,
  }))

  // ===============================
  // VALIDATION FUNCTIONS
  // ===============================
  
  const validateForm = useCallback((): boolean => {
    const newErrors: FormErrors = {}
    
    // Name validation
    if (!formState.data.firstName.trim()) {
      newErrors.firstName = 'First name is required'
    }
    if (!formState.data.lastName.trim()) {
      newErrors.lastName = 'Last name is required'
    }
    
    // Email validation
    if (!formState.data.email.trim()) {
      newErrors.email = 'Email is required'
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(formState.data.email.trim())) {
        newErrors.email = 'Please enter a valid email address'
      }
    }
    
    // Password validation
    if (!formState.data.password) {
      newErrors.password = 'Password is required'
    } else if (formState.data.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    // Confirm password validation
    if (!formState.data.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password'
    } else if (formState.data.password !== formState.data.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    // Terms validation
    if (!formState.data.acceptTerms) {
      newErrors.acceptTerms = 'You must accept the Terms of Service'
    }
    
    setFormState(prev => ({ ...prev, errors: newErrors }))
    return Object.keys(newErrors).length === 0
  }, [formState.data])

  // ===============================
  // EVENT HANDLERS
  // ===============================
  
  const handleInputChange = useCallback((field: keyof SignupFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'acceptTerms' ? event.target.checked : event.target.value
    
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined, general: undefined },
    }))
  }, [])

  const togglePasswordVisibility = useCallback((field: 'showPassword' | 'showConfirmPassword') => () => {
    setFormState(prev => ({ ...prev, [field]: !prev[field] }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    console.log('📝 Signup form submitted')
    console.log('👤 User data:', {
      name: `${formState.data.firstName} ${formState.data.lastName}`,
      email: formState.data.email
    })
    
    if (!validateForm()) {
      console.log('❌ Form validation failed')
      return
    }
    
    setFormState(prev => ({ ...prev, isLoading: true, errors: {} }))
    
    try {
      console.log('🚀 Creating user account with Appwrite...')
      
      const fullName = `${formState.data.firstName.trim()} ${formState.data.lastName.trim()}`
      const email = formState.data.email.trim()
      
      // FIXED: Use real Appwrite registration
      const user = await registerUser(email, formState.data.password, fullName)
      
      console.log('✅ User account created:', user)
      
      // FIXED: Also create user document in database
      try {
        const userDocument = await createUser({
          name: fullName,
          email: email,
          preferences: {
              notifications: true,
              newsletter: true,
              theme: 'light',
              language: 'en-AU'
          },
        })
        console.log('✅ User document created in database:', userDocument)
      } catch (dbError) {
        console.warn('⚠️ User created but database document failed:', dbError)
        // Continue anyway - user account was created successfully
      }
      
      setFormState(prev => ({ ...prev, isLoading: false, isSuccess: true }))
      
      // Redirect to welcome page
      setTimeout(() => {
        console.log('🎉 Redirecting to welcome page...')
        router.push('/welcome')
      }, 1500)
      
    } catch (error: any) {
      console.error('❌ Registration failed:', error)
      
      let errorMessage = 'Registration failed. Please try again.'
      
      // Handle specific Appwrite error messages
      if (error.message) {
        if (error.message.includes('user_already_exists')) {
          errorMessage = 'An account with this email already exists. Please try logging in instead.'
        } else if (error.message.includes('password')) {
          errorMessage = 'Password does not meet security requirements. Please use at least 8 characters.'
        } else if (error.message.includes('email')) {
          errorMessage = 'Please enter a valid email address.'
        } else {
          errorMessage = error.message
        }
      }
      
      setFormState(prev => ({
        ...prev,
        isLoading: false,
        errors: { general: errorMessage },
      }))
    }
  }, [formState.data, validateForm, router])

  return (
    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
      
      {/* Status Messages */}
      {formState.isSuccess && (
        <div className="flex items-center p-4 bg-green-50 border border-green-200 rounded-lg">
          <CheckCircle2 className="h-5 w-5 text-green-600 mr-3" />
          <span className="text-sm font-medium text-green-700">
            Account created successfully! Redirecting to welcome page...
          </span>
        </div>
      )}

      {formState.errors.general && (
        <div className="flex items-start p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="h-5 w-5 text-red-500 mr-3 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-red-700 font-medium">
            {formState.errors.general}
          </span>
        </div>
      )}

      {/* Name Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700">
            First Name *
          </label>
          <div className="relative">
            <input
              id="firstName"
              type="text"
              value={formState.data.firstName}
              onChange={handleInputChange('firstName')}
              className={`w-full px-4 py-4 border-2 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
                formState.errors.firstName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="John"
              disabled={formState.isLoading || formState.isSuccess}
              autoComplete="given-name"
            />
            <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
              <User className="h-5 w-5 text-gray-400" />
            </div>
          </div>
          {formState.errors.firstName && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              {formState.errors.firstName}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700">
            Last Name *
          </label>
          <input
            id="lastName"
            type="text"
            value={formState.data.lastName}
            onChange={handleInputChange('lastName')}
            className={`w-full px-4 py-4 border-2 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              formState.errors.lastName ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'
            }`}
            placeholder="Smith"
            disabled={formState.isLoading || formState.isSuccess}
            autoComplete="family-name"
          />
          {formState.errors.lastName && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              {formState.errors.lastName}
            </p>
          )}
        </div>
      </div>

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email Address *
        </label>
        
        <div className="relative">
          <input
            id="email"
            type="email"
            value={formState.data.email}
            onChange={handleInputChange('email')}
            className={`w-full px-4 py-4 border-2 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 ${
              formState.errors.email ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'
            }`}
            placeholder="name@example.com"
            disabled={formState.isLoading || formState.isSuccess}
            autoComplete="email"
          />
          <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
        </div>
        {formState.errors.email && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
            {formState.errors.email}
          </p>
        )}
      </div>

      {/* Password Fields */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
            Password *
          </label>
          
          <div className="relative">
            <input
              id="password"
              type={formState.showPassword ? 'text' : 'password'}
              value={formState.data.password}
              onChange={handleInputChange('password')}
              className={`w-full px-4 py-4 border-2 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 pr-12 ${
                formState.errors.password ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Create password"
              disabled={formState.isLoading || formState.isSuccess}
              autoComplete="new-password"
            />
            
            <button
              type="button"
              onClick={togglePasswordVisibility('showPassword')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              disabled={formState.isLoading || formState.isSuccess}
              aria-label={formState.showPassword ? 'Hide password' : 'Show password'}
            >
              {formState.showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          {formState.errors.password && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              {formState.errors.password}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="confirmPassword" className="block text-sm font-semibold text-gray-700">
            Confirm Password *
          </label>
          
          <div className="relative">
            <input
              id="confirmPassword"
              type={formState.showConfirmPassword ? 'text' : 'password'}
              value={formState.data.confirmPassword}
              onChange={handleInputChange('confirmPassword')}
              className={`w-full px-4 py-4 border-2 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200 pr-12 ${
                formState.errors.confirmPassword ? 'border-red-300 focus:border-red-500 focus:ring-red-500' : 'border-gray-200 hover:border-gray-300'
              }`}
              placeholder="Confirm password"
              disabled={formState.isLoading || formState.isSuccess}
              autoComplete="new-password"
            />
            
            <button
              type="button"
              onClick={togglePasswordVisibility('showConfirmPassword')}
              className="absolute inset-y-0 right-0 pr-4 flex items-center text-gray-400 hover:text-gray-600 transition-colors focus:outline-none"
              disabled={formState.isLoading || formState.isSuccess}
              aria-label={formState.showConfirmPassword ? 'Hide password' : 'Show password'}
            >
              {formState.showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          
          {formState.errors.confirmPassword && (
            <p className="text-sm text-red-500 flex items-center">
              <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
              {formState.errors.confirmPassword}
            </p>
          )}
        </div>
      </div>

      {/* Terms Acceptance */}
      <div className="space-y-4">
        <div className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl border border-gray-200">
          <input
            id="acceptTerms"
            type="checkbox"
            checked={formState.data.acceptTerms}
            onChange={handleInputChange('acceptTerms')}
            className="mt-1 h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-400 rounded"
            disabled={formState.isLoading || formState.isSuccess}
          />
          <label htmlFor="acceptTerms" className="text-sm text-gray-700 leading-relaxed">
            I agree to the{' '}
            <Link href="/terms" className="text-primary-600 hover:text-primary-500 underline font-medium">
              Terms of Service
            </Link>
            {' '}and{' '}
            <Link href="/privacy" className="text-primary-600 hover:text-primary-500 underline font-medium">
              Privacy Policy
            </Link>
          </label>
        </div>
        {formState.errors.acceptTerms && (
          <p className="text-sm text-red-500 flex items-center">
            <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" />
            {formState.errors.acceptTerms}
          </p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={formState.isLoading || formState.isSuccess}
        className={`w-full flex justify-center items-center py-4 px-6 text-base font-semibold rounded-xl min-h-[56px] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transform hover:scale-[1.02] ${
          formState.isLoading || formState.isSuccess
            ? 'bg-gray-400 text-white cursor-not-allowed'
            : 'bg-primary-600 hover:bg-primary-700 text-white shadow-lg hover:shadow-xl'
        }`}
      >
        {formState.isLoading ? (
          <>
            <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-3" />
            <span>Creating account...</span>
          </>
        ) : formState.isSuccess ? (
          <>
            <CheckCircle2 className="h-5 w-5 mr-3" />
            <span>Account Created! Redirecting...</span>
          </>
        ) : (
          <span>Create Account</span>
        )}
      </button>
      
      {/* Debug Info (Remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-600">
          <p><strong>Debug Info:</strong></p>
          <p>Form connected to Appwrite database</p>
          <p>Users will be saved to database upon registration</p>
          <p>Real authentication (not demo)</p>
        </div>
      )}
    </form>
  )
}