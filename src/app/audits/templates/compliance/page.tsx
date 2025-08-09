import { Metadata } from 'next'
import ComplianceTemplates from '@/src/components/audit/templates/ComplianceTemplates'

export const metadata: Metadata = {
  title: 'Compliance Check Templates | AuditsPro Australia',
  description: 'Professional compliance check templates for ASIC and state-specific regulatory requirements across Australia.',
  keywords: [
    'compliance check templates',
    'ASIC compliance templates',
    'regulatory compliance',
    'state compliance checks',
    'audit compliance procedures'
  ],
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Compliance Check Templates Page
 * 
 * Specialized templates for compliance verification including:
 * - ASIC compliance checklists
 * - State-specific regulatory requirements
 * - Professional standards verification
 * - Regulatory deadline tracking
 * - Compliance reporting templates
 * 
 * @returns {JSX.Element} Compliance Templates interface
 */
export default function ComplianceTemplatesPage(): JSX.Element {
  return <ComplianceTemplates />
}