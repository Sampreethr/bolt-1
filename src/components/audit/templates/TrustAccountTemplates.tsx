'use client'

import { Shield, FileCheck, Calendar, Download, Eye } from 'lucide-react'
import { PageHeaderWithBack } from '@/src/components/ui/BackButton'

/**
 * Trust Account Audit Templates Component
 * 
 * Specialized interface for trust account audit templates including
 * annual, quarterly, and special audit procedures with ASIC compliance.
 */
export default function TrustAccountTemplates(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeaderWithBack
          title="Trust Account Audit Templates"
          subtitle="Professional templates for annual, quarterly, and special trust account audits with ASIC compliance"
        />

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center">
            <Shield className="h-16 w-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Trust Account Audit Templates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Comprehensive trust account audit templates designed for legal practices, 
              real estate agencies, and other trust account holders across Australia.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}