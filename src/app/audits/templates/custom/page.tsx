import { Metadata } from 'next'
import CustomTemplates from '@/src/components/audit/templates/CustomTemplates'

export const metadata: Metadata = {
  title: 'Custom Audit Templates | AuditsPro Australia',
  description: 'Create and manage custom audit templates tailored to your specific audit requirements and business needs.',
  keywords: [
    'custom audit templates',
    'template builder',
    'personalized audit procedures',
    'custom checklists',
    'template customization'
  ],
  robots: {
    index: false,
    follow: false,
  },
}

/**
 * Custom Audit Templates Page
 * 
 * Template creation and management system including:
 * - Custom template builder
 * - Template editing and versioning
 * - Personal template library
 * - Template sharing and collaboration
 * - Import/export functionality
 * 
 * @returns {JSX.Element} Custom Templates interface
 */
export default function CustomTemplatesPage(): JSX.Element {
  return <CustomTemplates />
}