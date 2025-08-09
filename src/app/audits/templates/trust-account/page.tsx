import { Metadata } from 'next'
import TrustAccountTemplates from '@/src/components/audit/templates/TrustAccountTemplates'

export const metadata: Metadata = {
  title: 'Trust Account Audit Templates | AuditsPro Australia',
  description: 'Professional trust account audit templates for annual, quarterly, and special audits across Australia with ASIC compliance.',
  keywords: [
    'trust account audit templates',
    'annual audit templates',
    'quarterly audit templates',
    'ASIC compliance templates',
    'trust account procedures',
    'audit checklists'
  ],
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Trust Account Audit Templates Page
 * 
 * Specialized templates for trust account auditing including:
 * - Annual trust account audit procedures
 * - Quarterly compliance checks
 * - Special audit templates
 * - ASIC requirement checklists
 * - State-specific compliance templates
 * 
 * @returns {JSX.Element} Trust Account Templates interface
 */
export default function TrustAccountTemplatesPage(): JSX.Element {
  return <TrustAccountTemplates />
}