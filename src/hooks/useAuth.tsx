'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// ===============================
// TYPE DEFINITIONS
// ===============================

export interface User {
  id: string;
  email: string;
  name: string;
  businessName?: string;
  businessType?: string;
  emailVerified: boolean;
  preferences?: {
    notifications: boolean;
    newsletter: boolean;
    theme: 'light' | 'dark' | 'system';
    language: string;
  };
  subscription?: {
    plan: 'free' | 'professional' | 'enterprise';
    status: 'active' | 'inactive' | 'cancelled';
  };
}

export interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  error: string | null;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string, name: string) => Promise<void>;
  signOut: () => Promise<void>;
  logout: () => Promise<void>;
}

// ===============================
// CONTEXT CREATION
// ===============================

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// ===============================
// AUTH PROVIDER COMPONENT
// ===============================

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Initialize auth state
  useEffect(() => {
    // Simulate checking for existing session
    const initAuth = async () => {
      try {
        // Check for stored user data or token
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
      } catch (err) {
        console.error('Auth initialization error:', err);
      } finally {
        setLoading(false);
      }
    };

    initAuth();
  }, []);

  const signIn = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name: 'John Smith',
        businessName: 'Smith Legal Partners',
        businessType: 'Legal Services',
        emailVerified: true,
        preferences: {
          notifications: true,
          newsletter: true,
          theme: 'system',
          language: 'en'
        },
        subscription: {
          plan: 'professional',
          status: 'active'
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError('Sign in failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signUp = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const mockUser: User = {
        id: '1',
        email,
        name,
        emailVerified: false,
        preferences: {
          notifications: true,
          newsletter: false,
          theme: 'system',
          language: 'en'
        },
        subscription: {
          plan: 'free',
          status: 'active'
        }
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError('Sign up failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    setLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      setUser(null);
      localStorage.removeItem('user');
    } catch (err) {
      setError('Sign out failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = signOut; // Alias for signOut

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    loading,
    error,
    signIn,
    signUp,
    signOut,
    logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// ===============================
// HOOK TO USE AUTH CONTEXT
// ===============================

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  
  return context;
}