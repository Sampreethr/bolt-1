'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'

// ===============================
// TYPE DEFINITIONS
// ===============================

export interface User {
  id: string
  name: string
  email: string
  company: string
  accountType: 'Standard' | 'Premium' | 'Enterprise'
  avatar?: string
  auditsCompleted: number
  nextAuditDue: string
  lastLogin: string
  role: 'admin' | 'user' | 'manager'
  permissions: string[]
  isVerified: boolean
}

export interface AuthState {
  user: User | null
  isAuthenticated: boolean
  isLoading: boolean
  error: string | null
}

export interface LoginResult {
  success: boolean
  error?: string
  user?: User
}

export interface AuthContextType extends AuthState {
  login: (email: string, password: string, rememberMe?: boolean) => Promise<LoginResult>
  logout: () => Promise<void>
  refreshAuth: () => Promise<void>
  clearError: () => void
  updateUser: (updates: Partial<User>) => void
}

// ===============================
// DEMO DATA & UTILITIES
// ===============================

const DEMO_USERS: Record<string, User> = {
  'sarah.mitchell@example.com': {
    id: '1',
    name: 'Sarah Mitchell',
    email: 'sarah.mitchell@example.com',
    company: 'Mitchell & Associates Legal',
    accountType: 'Premium',
    avatar: '/avatars/sarah.jpg',
    auditsCompleted: 24,
    nextAuditDue: '2025-03-15',
    lastLogin: '2025-01-02',
    role: 'admin',
    permissions: ['view_audits', 'create_audits', 'manage_users'],
    isVerified: true,
  },
  'david.chen@example.com': {
    id: '2',
    name: 'David Chen',
    email: 'david.chen@example.com',
    company: 'Chen Real Estate Group',
    accountType: 'Enterprise',
    avatar: '/avatars/david.jpg',
    auditsCompleted: 45,
    nextAuditDue: '2025-02-28',
    lastLogin: '2025-01-03',
    role: 'manager',
    permissions: ['view_audits', 'create_audits'],
    isVerified: true,
  },
  'demo@auditspro.com.au': {
    id: '3',
    name: 'Demo User',
    email: 'demo@auditspro.com.au',
    company: 'AuditsPro Demo',
    accountType: 'Standard',
    auditsCompleted: 5,
    nextAuditDue: '2025-04-01',
    lastLogin: '2025-01-04',
    role: 'user',
    permissions: ['view_audits'],
    isVerified: true,
  },
}

// Utility function to simulate API delay
const simulateNetworkDelay = (ms: number = 1500): Promise<void> => 
  new Promise(resolve => setTimeout(resolve, ms))

// Local storage utilities with error handling
const STORAGE_KEYS = {
  USER: 'auditspro_user',
  TOKEN: 'auditspro_token',
  REMEMBER_ME: 'auditspro_remember_me',
} as const

const storage = {
  get: (key: string): string | null => {
    if (typeof window === 'undefined') return null
    try {
      return localStorage.getItem(key)
    } catch {
      return null
    }
  },
  set: (key: string, value: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.setItem(key, value)
    } catch {
      // Silent fail for storage issues
    }
  },
  remove: (key: string): void => {
    if (typeof window === 'undefined') return
    try {
      localStorage.removeItem(key)
    } catch {
      // Silent fail for storage issues
    }
  },
}

// ===============================
// CONTEXT CREATION
// ===============================

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// ===============================
// ENHANCED AUTH PROVIDER COMPONENT
// ===============================

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  // ===============================
  // STATE MANAGEMENT
  // ===============================
  
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isAuthenticated: false,
    isLoading: true, // Start with loading true for hydration
    error: null,
  })

  // ===============================
  // UTILITY FUNCTIONS
  // ===============================

  const clearError = useCallback(() => {
    setAuthState(prev => ({ ...prev, error: null }))
  }, [])

  const updateUser = useCallback((updates: Partial<User>) => {
    setAuthState(prev => {
      if (!prev.user) return prev
      const updatedUser = { ...prev.user, ...updates }
      
      // Persist to storage if remember me is enabled
      const rememberMe = storage.get(STORAGE_KEYS.REMEMBER_ME) === 'true'
      if (rememberMe) {
        storage.set(STORAGE_KEYS.USER, JSON.stringify(updatedUser))
      }
      
      return {
        ...prev,
        user: updatedUser,
      }
    })
  }, [])

  // ===============================
  // AUTHENTICATION METHODS
  // ===============================

  const login = useCallback(async (
    email: string, 
    password: string, 
    rememberMe: boolean = false
  ): Promise<LoginResult> => {
    try {
      // Clear any existing errors
      clearError()
      
      // Set loading state
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: true, 
        error: null 
      }))

      // Simulate network request
      await simulateNetworkDelay(1200)

      // Validate credentials
      const normalizedEmail = email.toLowerCase().trim()
      const user = DEMO_USERS[normalizedEmail]

      if (!user) {
        const error = 'Invalid email or password. Please check your credentials and try again.'
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error 
        }))
        return { success: false, error }
      }

      // Simulate password validation (in real app, this would be server-side)
      const validPasswords = ['password123', 'demo123']
      if (!validPasswords.includes(password)) {
        const error = 'Invalid email or password. Please check your credentials and try again.'
        setAuthState(prev => ({ 
          ...prev, 
          isLoading: false, 
          error 
        }))
        return { success: false, error }
      }

      // Update last login time
      const loggedInUser: User = {
        ...user,
        lastLogin: new Date().toISOString(),
      }

      // Handle remember me functionality
      if (rememberMe) {
        storage.set(STORAGE_KEYS.USER, JSON.stringify(loggedInUser))
        storage.set(STORAGE_KEYS.TOKEN, 'demo_token_' + Date.now())
        storage.set(STORAGE_KEYS.REMEMBER_ME, 'true')
      } else {
        // Clear any existing stored data if not remembering
        storage.remove(STORAGE_KEYS.USER)
        storage.remove(STORAGE_KEYS.TOKEN)
        storage.remove(STORAGE_KEYS.REMEMBER_ME)
      }

      // Update auth state
      setAuthState({
        user: loggedInUser,
        isAuthenticated: true,
        isLoading: false,
        error: null,
      })

      // Success response
      return { 
        success: true, 
        user: loggedInUser 
      }

    } catch (error) {
      const errorMessage = 'An unexpected error occurred during login. Please try again.'
      console.error('Login error:', error)
      
      setAuthState(prev => ({ 
        ...prev, 
        isLoading: false, 
        error: errorMessage 
      }))
      
      return { 
        success: false, 
        error: errorMessage 
      }
    }
  }, [clearError])

  const logout = useCallback(async (): Promise<void> => {
    try {
      // Set loading state
      setAuthState(prev => ({ ...prev, isLoading: true }))

      // Simulate network request for logout
      await simulateNetworkDelay(500)

      // Clear all stored data
      storage.remove(STORAGE_KEYS.USER)
      storage.remove(STORAGE_KEYS.TOKEN)
      storage.remove(STORAGE_KEYS.REMEMBER_ME)

      // Reset auth state
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })

    } catch (error) {
      console.error('Logout error:', error)
      // Even if logout fails, clear local state
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })
    }
  }, [])

  const refreshAuth = useCallback(async (): Promise<void> => {
    try {
      setAuthState(prev => ({ ...prev, isLoading: true }))

      // Check if user should be remembered
      const rememberMe = storage.get(STORAGE_KEYS.REMEMBER_ME) === 'true'
      const storedUser = storage.get(STORAGE_KEYS.USER)
      const storedToken = storage.get(STORAGE_KEYS.TOKEN)

      if (rememberMe && storedUser && storedToken) {
        // Simulate token validation
        await simulateNetworkDelay(800)
        
        const user: User = JSON.parse(storedUser)
        
        setAuthState({
          user,
          isAuthenticated: true,
          isLoading: false,
          error: null,
        })
      } else {
        // No valid session
        setAuthState({
          user: null,
          isAuthenticated: false,
          isLoading: false,
          error: null,
        })
      }
    } catch (error) {
      console.error('Auth refresh error:', error)
      setAuthState({
        user: null,
        isAuthenticated: false,
        isLoading: false,
        error: null,
      })
    }
  }, [])

  // ===============================
  // HYDRATION & INITIALIZATION
  // ===============================

  useEffect(() => {
    // Initialize auth state on mount (hydration)
    refreshAuth()
  }, [refreshAuth])

  // ===============================
  // CONTEXT VALUE
  // ===============================

  const contextValue: AuthContextType = {
    ...authState,
    login,
    logout,
    refreshAuth,
    clearError,
    updateUser,
  }

  // ===============================
  // RENDER
  // ===============================

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  )
}

// ===============================
// CUSTOM HOOK
// ===============================

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  
  return context
}

// ===============================
// ADDITIONAL UTILITY HOOKS
// ===============================

/**
 * Hook to check if user has specific permission
 */
export function useHasPermission(permission: string): boolean {
  const { user } = useAuth()
  return user?.permissions.includes(permission) ?? false
}

/**
 * Hook to check if user has specific role
 */
export function useHasRole(role: User['role']): boolean {
  const { user } = useAuth()
  return user?.role === role
}

/**
 * Hook that returns loading state for auth operations
 */
export function useAuthLoading(): boolean {
  const { isLoading } = useAuth()
  return isLoading
}

/**
 * Hook for protected routes - redirects if not authenticated
 */
export function useRequireAuth(): AuthContextType {
  const auth = useAuth()
  
  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      // In a real app, you might want to redirect to login page
      console.warn('User not authenticated - should redirect to login')
    }
  }, [auth.isLoading, auth.isAuthenticated])
  
  return auth
}

export default AuthProvider