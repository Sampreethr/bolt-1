'use client'

import { useState, useCallback, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { 
  User, 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  Shield, 
  LogIn, 
  X,
  AlertCircle,
  CheckCircle,
  Loader2
} from 'lucide-react'
import { useAuth } from '@/src/contexts/AuthContext'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface LoginModalProps {
  isOpen: boolean
  onClose: () => void
}

interface FormData {
  email: string
  password: string
  rememberMe: boolean
}

interface FormErrors {
  [key: string]: string
}

// ===============================
// DEMO CREDENTIALS CONFIGURATION
// ===============================

const demoCredentials = [
  { 
    email: 'sarah.mitchell@example.com', 
    password: 'password123', 
    name: 'Sarah Mitchell (Legal)',
    description: 'Premium account with full access'
  },
  { 
    email: 'david.chen@example.com', 
    password: 'password123', 
    name: 'David Chen (Real Estate)',
    description: 'Enterprise account with advanced features'
  },
  { 
    email: 'demo@auditspro.com.au', 
    password: 'demo123', 
    name: 'Demo Account',
    description: 'Standard account for testing'
  }
] as const

// ===============================
// PORTAL COMPONENT FOR MODAL RENDERING
// ===============================

interface PortalProps {
  children: React.ReactNode
}

function Portal({ children }: PortalProps): React.ReactPortal | null {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    return () => setMounted(false)
  }, [])

  if (!mounted || typeof window === 'undefined') {
    return null
  }

  // Create or get modal root
  let modalRoot = document.getElementById('modal-root')
  if (!modalRoot) {
    modalRoot = document.createElement('div')
    modalRoot.id = 'modal-root'
    modalRoot.style.position = 'fixed'
    modalRoot.style.top = '0'
    modalRoot.style.left = '0'
    modalRoot.style.zIndex = '9999'
    document.body.appendChild(modalRoot)
  }

  return createPortal(children, modalRoot)
}

// ===============================
// MAIN LOGIN MODAL COMPONENT
// ===============================

export default function LoginModal({ isOpen, onClose }: LoginModalProps): JSX.Element | null {
  // ===============================
  // HOOKS & STATE
  // ===============================
  
  const { login, isLoading, clearError } = useAuth()
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    password: '',
    rememberMe: false
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [showPassword, setShowPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [mounted, setMounted] = useState(false)

  // ===============================
  // EFFECTS
  // ===============================

  // Handle client-side mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  // Clear errors when modal opens
  useEffect(() => {
    if (isOpen) {
      clearError()
      setErrors({})
      setFormData({ email: '', password: '', rememberMe: false })
      setShowPassword(false)
      setIsSubmitting(false)
    }
  }, [isOpen, clearError])

  // Handle escape key press
  useEffect(() => {
    if (!isOpen) return

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && !isSubmitting) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [isOpen, isSubmitting, onClose])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return

    const originalStyle = window.getComputedStyle(document.body).overflow
    document.body.style.overflow = 'hidden'
    
    return () => {
      document.body.style.overflow = originalStyle
    }
  }, [isOpen])

  // ===============================
  // VALIDATION FUNCTIONS
  // ===============================

  const validateForm = useCallback((): FormErrors => {
    const newErrors: FormErrors = {}
    
    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address'
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required'
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }
    
    return newErrors
  }, [formData])

  // ===============================
  // EVENT HANDLERS
  // ===============================

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
    
    // Clear field-specific error when user starts typing
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }, [errors])

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault()
    e.stopPropagation()
    
    // Validate form
    const formErrors = validateForm()
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors)
      return
    }
    
    setIsSubmitting(true)
    setErrors({})
    
    try {
      const result = await login(
        formData.email.trim().toLowerCase(),
        formData.password,
        formData.rememberMe
      )
      
      if (result.success) {
        // Success - close modal and reset form
        onClose()
        setFormData({ email: '', password: '', rememberMe: false })
      } else {
        // Show error
        setErrors({ submit: result.error || 'Login failed. Please try again.' })
      }
    } catch (error) {
      console.error('Login submission error:', error)
      setErrors({ submit: 'An unexpected error occurred. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }, [formData, login, onClose, validateForm])

  const handleDemoLogin = useCallback(async (email: string, password: string) => {
    setFormData({ email, password, rememberMe: false })
    setIsSubmitting(true)
    setErrors({})
    
    try {
      const result = await login(email, password, false)
      if (result.success) {
        onClose()
      } else {
        setErrors({ submit: result.error || 'Demo login failed. Please try again.' })
      }
    } catch (error) {
      console.error('Demo login error:', error)
      setErrors({ submit: 'Demo login failed. Please try again.' })
    } finally {
      setIsSubmitting(false)
    }
  }, [login, onClose])

  const handleOverlayClick = useCallback((e: React.MouseEvent) => {
    if (e.target === e.currentTarget && !isSubmitting) {
      onClose()
    }
  }, [isSubmitting, onClose])

  // ===============================
  // RENDER CONDITIONS
  // ===============================

  if (!mounted || !isOpen) {
    return null
  }

  // ===============================
  // MODAL CONTENT
  // ===============================

  const modalContent = (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-[9999] p-4 sm:p-6"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="login-modal-title"
      aria-describedby="login-modal-description"
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-primary-500 rounded-xl">
              <Shield className="h-6 w-6 text-white" aria-hidden="true" />
            </div>
            <div>
              <h2 id="login-modal-title" className="text-xl font-bold text-gray-900">
                Sign In
              </h2>
              <p id="login-modal-description" className="text-sm text-gray-600">
                Access your AuditsPro account
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            disabled={isSubmitting}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Close login modal"
            type="button"
          >
            <X className="h-5 w-5 text-gray-500" aria-hidden="true" />
          </button>
        </div>

        {/* Demo Credentials Section */}
        <div className="p-4 sm:p-6 bg-blue-50 border-b border-gray-200">
          <h3 className="text-sm font-semibold text-blue-900 mb-3">
            Demo Accounts (Click to auto-fill):
          </h3>
          <div className="space-y-2">
            {demoCredentials.map((cred, index) => (
              <button
                key={index}
                onClick={() => handleDemoLogin(cred.email, cred.password)}
                disabled={isSubmitting}
                className="w-full text-left p-3 bg-white rounded-lg border border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                type="button"
              >
                <div className="font-medium text-blue-900 text-sm">{cred.name}</div>
                <div className="text-blue-600 text-xs">{cred.email}</div>
                <div className="text-blue-500 text-xs mt-1">{cred.description}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Login Form */}
        <div className="p-4 sm:p-6">
          {/* Error Message */}
          {errors.submit && (
            <div className="mb-4 bg-red-50 border border-red-200 rounded-lg p-3">
              <div className="flex items-center space-x-2">
                <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" aria-hidden="true" />
                <span className="text-red-700 text-sm">{errors.submit}</span>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4" noValidate>
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.email 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="your.email@example.com"
                  autoComplete="email"
                  required
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
              </div>
              {errors.email && (
                <p id="email-error" className="text-red-500 text-sm mt-2 flex items-center" role="alert">
                  <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" aria-hidden="true" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className={`w-full pl-10 pr-12 py-3 border-2 rounded-xl focus:outline-none focus:ring-0 transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed ${
                    errors.password 
                      ? 'border-red-300 focus:border-red-500 bg-red-50' 
                      : 'border-gray-200 focus:border-primary-500 hover:border-gray-300'
                  }`}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  required
                  aria-invalid={!!errors.password}
                  aria-describedby={errors.password ? "password-error" : undefined}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  disabled={isSubmitting}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded disabled:opacity-50 disabled:cursor-not-allowed min-h-[32px] min-w-[32px] flex items-center justify-center"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  ) : (
                    <Eye className="h-4 w-4 text-gray-400" aria-hidden="true" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p id="password-error" className="text-red-500 text-sm mt-2 flex items-center" role="alert">
                  <AlertCircle className="h-4 w-4 mr-1 flex-shrink-0" aria-hidden="true" />
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="rememberMe"
                  checked={formData.rememberMe}
                  onChange={handleInputChange}
                  disabled={isSubmitting}
                  className="w-4 h-4 text-primary-600 bg-gray-100 border-gray-300 rounded focus:ring-primary-500 focus:ring-2 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <span className="ml-2 text-sm text-gray-700">Remember me</span>
              </label>
              <button
                type="button"
                className="text-sm text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 focus:outline-none focus:underline"
                onClick={() => {
                  // In real app, this would open forgot password modal
                  alert('Forgot password functionality would be implemented here')
                }}
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || isLoading}
              className="w-full bg-primary-500 hover:bg-primary-600 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2 min-h-[48px] focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
            >
              {isSubmitting || isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" aria-hidden="true" />
                  <span>Signing In...</span>
                </>
              ) : (
                <>
                  <LogIn className="h-5 w-5" aria-hidden="true" />
                  <span>Sign In</span>
                </>
              )}
            </button>

            {/* Sign Up Link */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                Don't have an account?{' '}
                <button
                  type="button"
                  className="text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200 focus:outline-none focus:underline"
                  onClick={() => {
                    // In real app, this would open contact or signup flow
                    alert('Contact us functionality would be implemented here')
                  }}
                >
                  Contact us for access
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )

  // ===============================
  // RENDER WITH PORTAL
  // ===============================

  return <Portal>{modalContent}</Portal>
}