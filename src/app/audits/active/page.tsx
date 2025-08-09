import { Metadata } from 'next'
import ActiveAudits from '@/src/components/audit/ActiveAudits'

export const metadata: Metadata = {
  title: 'Active Audits | AuditsPro Australia',
  description: 'Manage and track your active trust account audits with real-time progress monitoring, document management, and compliance tracking across Australia.',
  keywords: [
    'active audits management',
    'trust account audit tracking',
    'audit progress monitoring',
    'ASIC compliance tracking',
    'audit document management',
    'professional audit workflow',
    'audit status tracking',
    'trust account compliance'
  ],
  robots: {
    index: false, // Dashboard content should not be indexed
    follow: false,
  },
}

/**
 * Active Audits Page
 * 
 * Professional audit management interface for tracking and managing
 * active trust account audits with comprehensive workflow support.
 * 
 * Features:
 * - Real-time audit progress tracking
 * - Status-based audit organization
 * - Document management integration
 * - Compliance deadline monitoring
 * - Client communication tools
 * - Auditor assignment tracking
 * - Mobile-responsive design
 * - Dark/light mode support
 * 
 * Audit Lifecycle Stages:
 * - Scheduled: Audits booked but not yet started
 * - In Progress: Currently active audit work
 * - Pending Review: Awaiting client or auditor review
 * - Awaiting Documents: Waiting for client document submission
 * - Quality Review: Internal quality assurance stage
 * - Final Review: Final audit review before completion
 * 
 * @returns {JSX.Element} Active Audits management interface
 */
export default function ActiveAuditsPage(): JSX.Element {
  return <ActiveAudits />
}