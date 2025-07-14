import { Metadata } from 'next'
import AuditServiceSelector from '@/src/components/audit/AuditServiceSelector'

export const metadata: Metadata = {
  title: 'Professional Audit Service Selection | AuditsPro Australia',
  description: 'Configure your professional trust account audit service by selecting business type and operating states. ASIC registered auditors across Australia.',
  keywords: [
    'audit service selection',
    'trust account audit',
    'business type classification',
    'Australian audit requirements',
    'ASIC registered auditors',
    'professional compliance'
  ],
  robots: {
    index: true,
    follow: true,
  },
}

export default function AuditServicePage(): JSX.Element {
  return <AuditServiceSelector />
}