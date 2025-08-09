/**
 * ===============================
 * SECURE CLIENT CONFIGURATION HOOK
 * ===============================
 * 
 * 🔒 SECURITY FEATURES:
 * - Client-side configuration fetching
 * - Automatic caching and refresh
 * - Error handling and fallbacks
 * - Type-safe configuration access
 * - Loading states and error states
 * 
 * This hook provides safe access to application configuration
 * on the client-side without exposing sensitive data.
 * 
 * Last Updated: December 2024
 * Security Level: ENTERPRISE
 */

'use client';

import { useState, useEffect, useCallback } from 'react';

// ===============================
// TYPE DEFINITIONS
// ===============================

/**
 * Client-safe configuration interface
 */
export interface ClientConfig {
  app: {
    name: string;
    version: string;
    environment: string;
    supportEmail: string;
    websiteUrl: string;
    features: {
      authEnabled: boolean;
      auditingEnabled: boolean;
      paymentEnabled: boolean;
    };
  };
  security: {
    sessionTimeout: number;
    rateLimitEnabled: boolean;
  };
  auth: {
    provider: string;
    region: string;
  };
  timestamp: string;
  requestId: string;
}

/**
 * Hook state interface
 */
interface UseConfigState {
  config: ClientConfig | null;
  loading: boolean;
  error: string | null;
  lastFetch: Date | null;
  retryCount: number;
}

/**
 * Hook return interface
 */
interface UseConfigReturn extends UseConfigState {
  refetch: () => Promise<void>;
  isStale: boolean;
}

// ===============================
// CONFIGURATION CACHE
// ===============================

let configCache: ClientConfig | null = null;
let cacheTimestamp: number = 0;
const CACHE_TTL = 5 * 60 * 1000; // 5 minutes
const MAX_RETRIES = 3;
const RETRY_DELAY = 1000; // 1 second

// ===============================
// UTILITY FUNCTIONS
// ===============================

/**
 * Check if cached config is still valid
 */
function isCacheValid(): boolean {
  return configCache !== null && (Date.now() - cacheTimestamp) < CACHE_TTL;
}

/**
 * Fetch configuration from API with retry logic
 */
async function fetchConfig(retryCount: number = 0): Promise<ClientConfig> {
  try {
    const response = await fetch('/api/config', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      // Add timeout to prevent hanging requests
      signal: AbortSignal.timeout(10000), // 10 seconds
    });
    
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
    }
    
    const config: ClientConfig = await response.json();
    
    // Validate required fields
    if (!config.app?.name || !config.auth?.provider) {
      throw new Error('Invalid configuration received: missing required application fields');
    }
    
    // Update cache
    configCache = config;
    cacheTimestamp = Date.now();
    
    console.log('✅ Configuration loaded successfully:', {
      environment: config.app.environment,
      version: config.app.version,
      timestamp: config.timestamp,
    });
    
    return config;
    
  } catch (error) {
    console.error('❌ Configuration fetch error:', error);
    
    // Retry logic
    if (retryCount < MAX_RETRIES) {
      console.log(`🔄 Retrying configuration fetch (${retryCount + 1}/${MAX_RETRIES})...`);
      await new Promise(resolve => setTimeout(resolve, RETRY_DELAY * (retryCount + 1)));
      return fetchConfig(retryCount + 1);
    }
    
    // If we have cached config, use it as fallback
    if (configCache) {
      console.warn('⚠️  Using cached configuration as fallback');
      return configCache;
    }
    
    throw error;
  }
}

// ===============================
// MAIN HOOK
// ===============================

/**
 * Hook for accessing client-safe configuration
 * 
 * @returns Configuration state and utilities
 */
export function useConfig(): UseConfigReturn {
  const [state, setState] = useState<UseConfigState>({
    config: configCache,
    loading: !configCache,
    error: null,
    lastFetch: configCache ? new Date(cacheTimestamp) : null,
    retryCount: 0,
  });
  
  /**
   * Fetch configuration with state management
   */
  const fetchConfigWithState = useCallback(async () => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const config = await fetchConfig();
      setState({
        config,
        loading: false,
        error: null,
        lastFetch: new Date(),
        retryCount: 0,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown configuration error';
      setState(prev => ({
        ...prev,
        loading: false,
        error: errorMessage,
        retryCount: prev.retryCount + 1,
      }));
    }
  }, []);
  
  /**
   * Manual refetch function
   */
  const refetch = useCallback(async () => {
    // Clear cache to force fresh fetch
    configCache = null;
    cacheTimestamp = 0;
    await fetchConfigWithState();
  }, [fetchConfigWithState]);
  
  /**
   * Check if configuration is stale
   */
  const isStale = !isCacheValid();
  
  // ===============================
  // EFFECTS
  // ===============================
  
  /**
   * Initial configuration load
   */
  useEffect(() => {
    if (!configCache || isStale) {
      fetchConfigWithState();
    }
  }, [fetchConfigWithState]);
  
  /**
   * Auto-refresh stale configuration
   */
  useEffect(() => {
    if (isStale && !state.loading) {
      console.log('🔄 Configuration is stale, refreshing...');
      fetchConfigWithState();
    }
  }, [isStale, state.loading, fetchConfigWithState]);
  
  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      // Cleanup any pending timeouts or requests
    };
  }, []);
  
  return {
    ...state,
    refetch,
    isStale,
  };
}

// ===============================
// UTILITY HOOKS
// ===============================

/**
 * Hook for accessing authentication configuration specifically
 */
export function useAuthConfig() {
  const { config, loading, error } = useConfig();
  
  return {
    auth: config?.auth || null,
    loading,
    error,
  };
}

/**
 * Hook for accessing app configuration specifically
 */
export function useAppConfig() {
  const { config, loading, error } = useConfig();
  
  return {
    app: config?.app || null,
    loading,
    error,
  };
}

/**
 * Hook for checking feature flags
 */
export function useFeatureFlags() {
  const { config, loading, error } = useConfig();
  
  return {
    features: config?.app.features || {
      authEnabled: false,
      auditingEnabled: false,
      paymentEnabled: false,
    },
    loading,
    error,
  };
}

// ===============================
// EXPORT TYPES
// ===============================

export type { UseConfigReturn };

/**
 * ===============================
 * USAGE EXAMPLES
 * ===============================
 * 
 * Basic usage:
 * ```tsx
 * function MyComponent() {
 *   const { config, loading, error, refetch } = useConfig();
 *   
 *   if (loading) return <div>Loading configuration...</div>;
 *   if (error) return <div>Error: {error}</div>;
 *   if (!config) return <div>No configuration available</div>;
 *   
 *   return (
 *     <div>
 *       <h1>{config.app.name}</h1>
 *       <p>Environment: {config.app.environment}</p>
 *       <button onClick={refetch}>Refresh Config</button>
 *     </div>
 *   );
 * }
 * ```
 * 
 * Appwrite-specific usage:
 * ```tsx
 * function AppwriteComponent() {
 *   const { appwrite, loading, error } = useAppwriteConfig();
 *   
 *   if (loading || !appwrite) return <div>Loading...</div>;
 *   
 *   // Use appwrite.projectId and appwrite.endpoint safely
 *   return <div>Project: {appwrite.projectId}</div>;
 * }
 * ```
 * 
 * Feature flag usage:
 * ```tsx
 * function ConditionalFeature() {
 *   const { features } = useFeatureFlags();
 *   
 *   if (!features.paymentEnabled) {
 *     return <div>Payment feature is disabled</div>;
 *   }
 *   
 *   return <PaymentComponent />;
 * }
 * ```
 */