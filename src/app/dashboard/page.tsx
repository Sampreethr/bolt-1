import { Metadata } from 'next'
import DashboardClient from '@/src/components/dashboard/DashboardClient'

/**
 * Dashboard Page Metadata
 */
export const metadata: Metadata = {
  title: 'Dashboard | AuditsPro Australia',
  description: 'Manage your trust account audits, view reports, and access your AuditsPro Australia account dashboard.',
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * FIXED Dashboard Page Component (Server Component)
 * 
 * Features:
 * - Clean server-side rendering
 * - No event handlers (delegated to client component)
 * - Professional dashboard layout
 * - TypeScript safety
 * 
 * @returns Complete dashboard page wrapper
 */
export default function DashboardPage(): JSX.Element {
  // Server-side data preparation could go here
  const userData = {
    name: 'John Smith',
    company: 'Smith & Associates Law Firm',
    email: 'john@smithlaw.com.au',
    plan: 'Professional',
  }

  const stats = [
    {
      title: 'Active Audits',
      value: '2',
      subtext: 'In progress',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Completed Audits',
      value: '12',
      subtext: 'This year',
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Compliance Score',
      value: '100%',
      subtext: 'Perfect record',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
  ]

  const recentActivity = [
    {
      id: 1,
      title: 'Trust Account Audit Completed',
      description: 'Q3 2024 audit report generated and delivered',
      date: '2 days ago',
      status: 'completed',
    },
    {
      id: 2,
      title: 'Audit Scheduled',
      description: 'Q4 2024 audit scheduled for December 15th',
      date: '1 week ago',
      status: 'scheduled',
    },
    {
      id: 3,
      title: 'Document Uploaded',
      description: 'Bank statements for October uploaded',
      date: '2 weeks ago',
      status: 'info',
    },
  ]

  return (
    <DashboardClient
      userData={userData}
      stats={stats}
      recentActivity={recentActivity}
    />
  )
}