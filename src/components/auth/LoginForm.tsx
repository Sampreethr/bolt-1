'use client'

import { useState, useCallback } from 'react'
import { Eye, EyeOff, Mail, Lock, AlertCircle, CheckCircle2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { loginUser, getCurrentUser } from '@/src/lib/appwrite'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface LoginFormData {
  email: string;
  password: string;
  rememberMe: boolean;
}

interface FormErrors {
  email?: string;
  password?: string;
  general?: string;
}

interface LoginFormState {
  data: LoginFormData;
  errors: FormErrors;
  isLoading: boolean;
  showPassword: boolean;
  isSuccess: boolean;
}

/**
 * FIXED LOGIN FORM: Real Appwrite Authentication
 * No more demo credentials - uses actual Appwrite database
 */
export default function LoginForm(): JSX.Element {
  const router = useRouter()
  
  const [formState, setFormState] = useState<LoginFormState>(() => ({
    data: {
      email: '',
      password: '',
      rememberMe: false,
    },
    errors: {},
    isLoading: false,
    showPassword: false,
    isSuccess: false,
  }))

  // ===============================
  // VALIDATION FUNCTIONS
  // ===============================
  
  const validateEmail = useCallback((email: string): string | undefined => {
    if (!email.trim()) return 'Email required'
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.trim())) return 'Invalid email format'
    return undefined
  }, [])

  const validatePassword = useCallback((password: string): string | undefined => {
    if (!password) return 'Password required'
    if (password.length < 6) return 'Password must be at least 6 characters'
    return undefined
  }, [])

  const validateForm = useCallback((): boolean => {
    const emailError = validateEmail(formState.data.email)
    const passwordError = validatePassword(formState.data.password)
    
    const newErrors: FormErrors = {}
    if (emailError) newErrors.email = emailError
    if (passwordError) newErrors.password = passwordError
    
    setFormState(prev => ({ ...prev, errors: newErrors }))
    return Object.keys(newErrors).length === 0
  }, [formState.data, validateEmail, validatePassword])

  // ===============================
  // EVENT HANDLERS
  // ===============================
  
  const handleInputChange = useCallback((field: keyof LoginFormData) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value = field === 'rememberMe' ? event.target.checked : event.target.value
    
    setFormState(prev => ({
      ...prev,
      data: { ...prev.data, [field]: value },
      errors: { ...prev.errors, [field]: undefined, general: undefined },
    }))
  }, [])

  const togglePasswordVisibility = useCallback(() => {
    setFormState(prev => ({ ...prev, showPassword: !prev.showPassword }))
  }, [])

  const handleSubmit = useCallback(async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    
    console.log('🔐 Login form submitted')
    console.log('📧 Email:', formState.data.email)
    
    if (!validateForm()) {
      console.log('❌ Form validation failed')
      return
    }
    
    setFormState(prev => ({ ...prev, isLoading: true, errors: {} }))
    
    try {
      console.log('🚀 Attempting login with Appwrite...')
      
      // FIXED: Use real Appwrite authentication with correct method name
      const session = await loginUser(formState.data.email.trim(), formState.data.password)
      
      console.log('✅ Login successful:', session)
      
      // Get current user data
      const currentUser = await getCurrentUser()
      console.log('👤 Current user:', currentUser)
      
      setFormState(prev => ({ ...prev, isLoading: false, isSuccess: true }))
      
      // Redirect to dashboard after successful login
      setTimeout(() => {
        console.log('🏠 Redirecting to dashboard...')
        router.push('/dashboard')
      }, 1000)
      
    } catch (error: any) {
      console.error('❌ Login failed:', error)
      
      let errorMessage = 'Login failed. Please try again.'
      
      // Handle specific Appwrite error messages
      if (error.message) {
        if (error.message.includes('Invalid credentials')) {
          errorMessage = 'Invalid email or password. Please check your credentials.'
        } else if (error.message.includes('user_not_found')) {
          errorMessage = 'No account found with this email address.'
        } else if (error.message.includes('too_many_requests')) {
          errorMessage = 'Too many login attempts. Please try again later.'
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
            Login successful! Redirecting to dashboard...
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

      {/* Email Field */}
      <div className="space-y-2">
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
          Email Address
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
            placeholder="Enter your email address"
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

      {/* Password Field */}
      <div className="space-y-2">
        <label htmlFor="password" className="block text-sm font-semibold text-gray-700">
          Password
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
            placeholder="Enter your password"
            disabled={formState.isLoading || formState.isSuccess}
            autoComplete="current-password"
          />
          
          <button
            type="button"
            onClick={togglePasswordVisibility}
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

      {/* Remember Me & Forgot Password */}
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input
            id="rememberMe"
            type="checkbox"
            checked={formState.data.rememberMe}
            onChange={handleInputChange('rememberMe')}
            className="h-4 w-4 text-primary-600 focus:ring-primary-500 border-gray-300 rounded"
            disabled={formState.isLoading || formState.isSuccess}
          />
          <label htmlFor="rememberMe" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        
        <Link href="/forgot-password" className="text-sm text-primary-600 hover:text-primary-500 font-medium transition-colors">
          Forgot password?
        </Link>
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
            <span>Signing In...</span>
          </>
        ) : formState.isSuccess ? (
          <>
            <CheckCircle2 className="h-5 w-5 mr-3" />
            <span>Success! Redirecting...</span>
          </>
        ) : (
          <span>Sign In</span>
        )}
      </button>
      
      {/* Debug Info (Remove in production) */}
      {process.env.NODE_ENV === 'development' && (
        <div className="mt-4 p-3 bg-gray-100 rounded-lg text-xs text-gray-600">
          <p><strong>Debug Info:</strong></p>
          <p>Form connected to Appwrite database</p>
          <p>Using real authentication (not demo)</p>
        </div>
      )}
    </form>
  )
}