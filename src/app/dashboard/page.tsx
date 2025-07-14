import { Metadata } from 'next'
import DashboardClient from '@/src/components/dashboard/DashboardClient'

/**
 * Dashboard Page Metadata
 */
export const metadata: Metadata = {
  title: 'Dashboard | AuditsPro Australia',
  description: 'Manage your trust account audits with modern dashboard navigation.',
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * FIXED DASHBOARD PAGE - APP ROUTER VERSION
 * 
 * This page uses the App Router pattern and loads the DashboardClient component
 * which contains the full sidebar layout.
 * 
 * @returns Dashboard page with enhanced sidebar layout
 */
export default function DashboardPage(): JSX.Element {
  
  // Enhanced user data
  const userData = {
    name: 'John Smith',
    company: 'Smith & Associates Law Firm',
    email: 'john@smithlaw.com.au',
    plan: 'Professional',
  }

  // Enhanced stats with trend indicators
  const stats = [
    {
      title: 'Active Audits',
      value: '2',
      subtext: 'Currently in progress',
      change: '+1 from last month',
      changeType: 'positive' as const,
      color: 'text-blue-600',
      bgColor: 'bg-blue-100',
    },
    {
      title: 'Completed Audits',
      value: '12',
      subtext: 'This year',
      change: '+3 from last quarter',
      changeType: 'positive' as const,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
    },
    {
      title: 'Compliance Score',
      value: '100%',
      subtext: 'Perfect record maintained',
      change: 'Consistent excellence',
      changeType: 'neutral' as const,
      color: 'text-purple-600',
      bgColor: 'bg-purple-100',
    },
    {
      title: 'Average Turnaround',
      value: '9 days',
      subtext: 'Faster than industry standard',
      change: '-3 days improvement',
      changeType: 'positive' as const,
      color: 'text-orange-600',
      bgColor: 'bg-orange-100',
    },
  ]

  // Enhanced activity data
  const recentActivity = [
    {
      id: 1,
      title: 'Q4 2024 Trust Account Audit Completed',
      description: 'Final audit report generated and delivered to client portal',
      date: '2 hours ago',
      status: 'completed' as const,
      type: 'audit' as const,
    },
    {
      id: 2,
      title: 'Q1 2025 Audit Scheduled',
      description: 'Preliminary audit scheduled for March 15th, 2025',
      date: '5 hours ago',
      status: 'scheduled' as const,
      type: 'audit' as const,
    },
    {
      id: 3,
      title: 'Bank Statements Uploaded',
      description: 'December 2024 bank statements successfully processed',
      date: '1 day ago',
      status: 'completed' as const,
      type: 'document' as const,
    },
    {
      id: 4,
      title: 'Compliance Review Meeting',
      description: 'Quarterly compliance review with senior auditor',
      date: '2 days ago',
      status: 'completed' as const,
      type: 'meeting' as const,
    },
    {
      id: 5,
      title: 'Payment Processed',
      description: 'Q4 audit fee payment received and processed',
      date: '3 days ago',
      status: 'completed' as const,
      type: 'payment' as const,
    },
  ]

  console.log('🎯 Dashboard page rendered with enhanced layout')

  return (
    <DashboardClient
      userData={userData}
      stats={stats}
      recentActivity={recentActivity}
    />
  )
}