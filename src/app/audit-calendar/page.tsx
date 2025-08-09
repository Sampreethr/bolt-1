import { Metadata } from 'next'
import AuditCalendar from '@/src/components/audit/AuditCalendar'

export const metadata: Metadata = {
  title: 'Audit Calendar | AuditsPro Australia',
  description: 'Professional audit calendar for scheduling trust account audits, tracking compliance deadlines, and managing audit appointments across Australia.',
  keywords: [
    'audit calendar',
    'audit scheduling',
    'compliance deadlines',
    'trust account audit booking',
    'Australian audit calendar',
    'ASIC audit deadlines',
    'professional audit management'
  ],
  robots: {
    index: true,
    follow: true,
  },
}

/**
 * Audit Calendar Page
 * 
 * Professional audit calendar system for:
 * - Scheduling trust account audits
 * - Tracking compliance deadlines by state
 * - Managing audit appointments
 * - Monitoring audit status and progress
 * - State-specific regulatory deadline tracking
 * 
 * Features:
 * - Multi-view calendar (month, week, day)
 * - Dark/light mode support
 * - Mobile responsive design
 * - Professional animations
 * - Integration with audit booking system
 * - State-specific compliance tracking
 * 
 * @returns {JSX.Element} Audit Calendar page component
 */
export default function AuditCalendarPage(): JSX.Element {
  return <AuditCalendar />
}