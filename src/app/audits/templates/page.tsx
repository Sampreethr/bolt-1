import { Metadata } from 'next'
import AuditTemplates from '@/src/components/audit/AuditTemplates'

export const metadata: Metadata = {
  title: 'Audit Templates | AuditsPro Australia',
  description: 'Professional audit templates and checklists for trust account audits, compliance checks, and standardized audit procedures across Australia.',
  keywords: [
    'audit templates',
    'trust account audit templates',
    'audit checklists',
    'ASIC compliance templates',
    'audit procedures',
    'professional audit templates',
    'standardized audit workflows',
    'audit documentation templates'
  ],
  robots: {
    index: false, // Dashboard content should not be indexed
    follow: false,
  },
}

/**
 * Audit Templates Page
 * 
 * Professional audit template management system for standardized
 * trust account auditing procedures and compliance checklists.
 * 
 * Features:
 * - Standardized audit procedure templates
 * - State-specific compliance checklists
 * - ASIC requirement templates
 * - Document request templates
 * - Risk assessment frameworks
 * - Audit report templates
 * - Custom template creation
 * - Template versioning and updates
 * 
 * Template Categories:
 * - Trust Account Audit Templates (Annual, Quarterly, Special)
 * - Compliance Check Templates (ASIC, State-specific)
 * - Document Request Templates (Client communications)
 * - Risk Assessment Templates (Risk evaluation frameworks)
 * - Report Templates (Standardized audit reports)
 * - Custom Templates (User-created templates)
 * 
 * Professional Features:
 * - Template preview and customization
 * - Download in multiple formats (PDF, Word, Excel)
 * - Template sharing and collaboration
 * - Version control and audit trail
 * - Integration with active audits
 * - Mobile-responsive design
 * - Dark/light mode support
 * 
 * @returns {JSX.Element} Audit Templates management interface
 */
export default function AuditTemplatesPage(): JSX.Element {
  return <AuditTemplates />
}