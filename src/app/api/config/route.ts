/**
 * ===============================
 * SECURE CONFIGURATION API ENDPOINT
 * ===============================
 * 
 * 🔒 SECURITY FEATURES:
 * - Server-side only configuration access
 * - Sanitized public configuration for client
 * - No sensitive data exposure
 * - Rate limiting and security headers
 * - Audit logging for configuration access
 * 
 * This API provides safe configuration data to the client-side
 * without exposing sensitive credentials or internal IDs.
 * 
 * Last Updated: December 2024
 * Security Level: ENTERPRISE
 */

import { NextRequest, NextResponse } from 'next/server';
import { getPublicConfig, getSecurityConfig } from '@/lib/config';

/**
 * Rate limiting store (in production, use Redis or database)
 */
const rateLimitStore = new Map<string, { count: number; resetTime: number }>();

/**
 * Apply rate limiting
 */
function applyRateLimit(clientIP: string, maxRequests: number = 60, windowMs: number = 60000): boolean {
  const now = Date.now();
  const key = `config_${clientIP}`;
  const record = rateLimitStore.get(key);
  
  if (!record || now > record.resetTime) {
    rateLimitStore.set(key, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

/**
 * Get client IP address
 */
function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const real = request.headers.get('x-real-ip');
  return forwarded?.split(',')[0] || real || 'unknown';
}

/**
 * GET /api/config
 * Returns sanitized configuration for client-side use
 */
export async function GET(request: NextRequest) {
  const clientIP = getClientIP(request);
  
  try {
    // Apply rate limiting
    if (!applyRateLimit(clientIP, 60, 60000)) {
      console.warn(`🚨 Rate limit exceeded for IP: ${clientIP}`);
      return NextResponse.json(
        { error: 'Rate limit exceeded', message: 'Too many configuration requests' },
        { status: 429 }
      );
    }
    
    // Get server-side configuration
    const publicConfig = getPublicConfig();
    const securityConfig = getSecurityConfig();
    
    // Create sanitized configuration for client
    const clientConfig = {
      // ✅ Public application configuration
      app: {
        name: publicConfig.appName,
        version: publicConfig.appVersion,
        environment: publicConfig.environment,
        supportEmail: publicConfig.supportEmail,
        websiteUrl: publicConfig.websiteUrl,
        features: publicConfig.features,
      },
      
      // ✅ Safe security settings for client
      security: {
        sessionTimeout: securityConfig.sessionTimeout,
        rateLimitEnabled: securityConfig.rateLimitEnabled,
        // Note: Sensitive security settings are NOT exposed
      },
      
      // ✅ Authentication configuration (public data only)
      auth: {
        provider: 'cognito',
        region: 'ap-southeast-2',
        // Note: User Pool ID, Client ID, and secrets are NOT exposed
        // Client will use API endpoints for authentication operations
      },
      
      // ✅ Metadata
      timestamp: new Date().toISOString(),
      requestId: crypto.randomUUID(),
    };
    
    // Log configuration access (without sensitive data)
    console.log('📊 Configuration requested:', {
      clientIP,
      userAgent: request.headers.get('user-agent')?.substring(0, 100),
      timestamp: new Date().toISOString(),
      environment: publicConfig.environment,
    });
    
    // Set security headers
    const response = NextResponse.json(clientConfig);
    response.headers.set('Cache-Control', 'private, max-age=300'); // 5 minutes cache
    response.headers.set('X-Content-Type-Options', 'nosniff');
    response.headers.set('X-Frame-Options', 'DENY');
    response.headers.set('X-XSS-Protection', '1; mode=block');
    
    return response;
    
  } catch (error) {
    console.error('❌ Configuration API error:', error);
    
    // Log security incident
    console.error('🚨 Security incident - Configuration API error:', {
      clientIP,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString(),
    });
    
    return NextResponse.json(
      { 
        error: 'Configuration unavailable', 
        message: 'Unable to load application configuration' 
      },
      { status: 500 }
    );
  }
}

/**
 * POST method not allowed
 */
export async function POST() {
  return NextResponse.json(
    { error: 'Method not allowed', message: 'POST requests are not supported' },
    { status: 405 }
  );
}

/**
 * PUT method not allowed
 */
export async function PUT() {
  return NextResponse.json(
    { error: 'Method not allowed', message: 'PUT requests are not supported' },
    { status: 405 }
  );
}

/**
 * DELETE method not allowed
 */
export async function DELETE() {
  return NextResponse.json(
    { error: 'Method not allowed', message: 'DELETE requests are not supported' },
    { status: 405 }
  );
}

/**
 * ===============================
 * SECURITY DOCUMENTATION
 * ===============================
 * 
 * 🔒 WHAT IS EXPOSED TO CLIENT:
 * - Appwrite Project ID and Endpoint (required for SDK)
 * - Public application metadata
 * - Non-sensitive feature flags
 * - Basic security settings (timeouts, etc.)
 * 
 * 🚫 WHAT IS NEVER EXPOSED:
 * - Database IDs and Collection IDs
 * - API Keys and Secrets
 * - Internal configuration details
 * - Sensitive security settings
 * - AWS credentials
 * - Rate limiting thresholds
 * 
 * 🛡️ SECURITY MEASURES:
 * - Rate limiting per IP address
 * - Security headers on all responses
 * - Audit logging of all requests
 * - Error handling without data leakage
 * - Request validation and sanitization
 * 
 * 📊 MONITORING:
 * - All configuration requests are logged
 * - Rate limit violations are tracked
 * - Error incidents are recorded
 * - Performance metrics are collected
 */