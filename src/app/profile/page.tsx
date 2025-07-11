import { Metadata } from 'next'
import ProfessionalProfilePage from '@/src/components/ProfessionalProfilePage'

/**
 * Profile Page Metadata
 * Optimized for SEO and user experience
 */
export const metadata: Metadata = {
  title: 'Profile Settings | AuditsPro Australia',
  description: 'Manage your AuditsPro Australia account profile, preferences, security settings, and activity history. Professional trust account auditing services.',
  keywords: [
    'profile settings',
    'account management',
    'user preferences',
    'security settings',
    'AuditsPro Australia',
    'professional profile'
  ],
  robots: {
    index: false, // Profile pages should not be indexed
    follow: false,
  },
  openGraph: {
    title: 'Profile Settings | AuditsPro Australia',
    description: 'Manage your AuditsPro Australia account profile and settings.',
    type: 'website',
  },
}

/**
 * Professional Profile Page Route
 * 
 * This page provides comprehensive profile management including:
 * - Personal and professional information
 * - Notification preferences
 * - Security settings
 * - Activity history
 * - Account management
 * 
 * Features:
 * - Professional design consistent with AuditsPro branding
 * - Responsive layout for all devices
 * - Comprehensive form validation
 * - Real-time updates and feedback
 * - Security-focused settings
 * 
 * @returns Complete profile management interface
 */
export default function ProfilePage(): JSX.Element {
  return <ProfessionalProfilePage />
}

/**
 * ===============================
 * PROFILE PAGE ROUTE SUMMARY
 * ===============================
 * 
 * 🔐 PROTECTED ROUTE:
 * This page is automatically protected by the authentication middleware.
 * Only authenticated users can access this route.
 * 
 * 📱 RESPONSIVE DESIGN:
 * Optimized for all device types and screen sizes:
 * - Mobile phones (all sizes)
 * - Tablets (all orientations)
 * - Laptops and desktops
 * - Foldable devices
 * 
 * ✨ FEATURES INCLUDED:
 * - Complete profile management
 * - Professional information editing
 * - Notification preferences
 * - Security settings
 * - Activity tracking
 * - Account actions
 * 
 * 🎨 DESIGN CONSISTENCY:
 * Uses the same design system as the rest of the AuditsPro platform:
 * - Primary colors and typography
 * - Professional spacing and layouts
 * - Consistent form styling
 * - Standard button designs
 * - Proper hover states and animations
 * 
 * 🚀 PERFORMANCE:
 * - Fast loading with optimized components
 * - Smooth animations and transitions
 * - Efficient state management
 * - Minimal re-renders
 * 
 * 🔒 SECURITY:
 * - Protected route (authentication required)
 * - Secure form handling
 * - Input validation and sanitization
 * - Privacy-focused design
 */