'use client'

import { Star, Plus, Edit, Download, Upload } from 'lucide-react'
import { PageHeaderWithBack } from '@/src/components/ui/BackButton'

/**
 * Custom Audit Templates Component
 * 
 * Template creation and management interface for personalized
 * audit procedures and custom checklists.
 */
export default function CustomTemplates(): JSX.Element {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeaderWithBack
          title="Custom Audit Templates"
          subtitle="Create and manage personalized audit templates tailored to your specific requirements"
        >
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200">
              <Plus className="h-4 w-4" />
              <span>Create Template</span>
            </button>
          </div>
        </PageHeaderWithBack>

        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
          <div className="text-center">
            <Star className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Custom Template Builder
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-6">
              Build personalized audit templates with our intuitive template builder. 
              Create custom checklists, procedures, and workflows tailored to your needs.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center space-x-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200">
                <Plus className="h-5 w-5" />
                <span>Start Building</span>
              </button>
              <button className="flex items-center space-x-2 px-6 py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                <Upload className="h-5 w-5" />
                <span>Import Template</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}