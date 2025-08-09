'use client'

import { useState, useCallback, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Bookmark,
  FileText,
  Download,
  Eye,
  Edit,
  Copy,
  Share2,
  Plus,
  Search,
  Filter,
  Grid,
  List,
  Star,
  Clock,
  CheckCircle,
  Upload,
  AlertCircle,
  Shield,
  Building,
  Scale,
  Home,
  Calculator,
  FileCheck,
  Users,
  Settings,
  Trash2,
  Archive,
  RefreshCw,
  MoreHorizontal,
  Calendar,
  MapPin,
  Tag,
  Folder,
  BookOpen,
  Award,
  Target,
  TrendingUp,
  BarChart3,
  PieChart,
  Activity
} from 'lucide-react'

// Import back button functionality
import { PageHeaderWithBack } from '@/src/components/ui/BackButton'

/**
 * TypeScript Interfaces for Professional Development
 */

interface AuditTemplate {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly category: 'trust-account' | 'compliance' | 'document-request' | 'risk-assessment' | 'report' | 'custom'
  readonly type: 'annual' | 'quarterly' | 'special' | 'asic' | 'state' | 'general'
  readonly version: string
  readonly lastUpdated: string
  readonly createdBy: string
  readonly usageCount: number
  readonly rating: number
  readonly tags: readonly string[]
  readonly applicableStates: readonly string[]
  readonly businessTypes: readonly ('real-estate' | 'conveyancing' | 'legal' | 'accounting' | 'property-management')[]
  readonly requirements: {
    readonly asicCompliant: boolean
    readonly stateSpecific: boolean
    readonly customizable: boolean
  }
  readonly content: {
    readonly sections: readonly TemplateSection[]
    readonly totalSteps: number
    readonly estimatedTime: string
  }
  readonly formats: readonly ('pdf' | 'word' | 'excel' | 'online')[]
  readonly status: 'active' | 'draft' | 'archived' | 'deprecated'
  readonly featured: boolean
}

interface TemplateSection {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly steps: readonly string[]
  readonly required: boolean
  readonly estimatedTime: string
}

interface TemplateCategory {
  readonly id: string
  readonly name: string
  readonly description: string
  readonly icon: React.ComponentType<{ className?: string }>
  readonly color: string
  readonly bgColor: string
  readonly count: number
}

interface TemplateFilters {
  category: string[]
  type: string[]
  state: string[]
  businessType: string[]
  format: string[]
  status: string[]
}

interface TemplateStats {
  total: number
  active: number
  featured: number
  mostUsed: number
  recentlyUpdated: number
  customTemplates: number
}

/**
 * Professional Audit Templates Management Component
 */
export default function AuditTemplates(): JSX.Element {
  // State Management with TypeScript
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [selectedType, setSelectedType] = useState<string>('all')
  const [searchQuery, setSearchQuery] = useState<string>('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [selectedTemplate, setSelectedTemplate] = useState<AuditTemplate | null>(null)
  const [showTemplateModal, setShowTemplateModal] = useState<boolean>(false)
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [sortBy, setSortBy] = useState<'name' | 'usage' | 'updated' | 'rating'>('name')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  /**
   * Mock Data for Audit Templates
   * In production, this would come from your API/database
   */
  const mockTemplates: AuditTemplate[] = useMemo(() => [
    {
      id: 'template-001',
      name: 'Annual Trust Account Audit - Legal Practice',
      description: 'Comprehensive annual trust account audit template for legal practices with ASIC compliance requirements.',
      category: 'trust-account',
      type: 'annual',
      version: '2.1',
      lastUpdated: '2025-01-10',
      createdBy: 'AuditsPro Team',
      usageCount: 156,
      rating: 4.8,
      tags: ['legal', 'annual', 'asic', 'comprehensive'],
      applicableStates: ['NSW', 'VIC', 'QLD', 'WA', 'SA', 'TAS', 'ACT', 'NT'],
      businessTypes: ['legal'],
      requirements: {
        asicCompliant: true,
        stateSpecific: true,
        customizable: true
      },
      content: {
        sections: [
          {
            id: 'section-001',
            title: 'Pre-Audit Planning',
            description: 'Initial audit planning and client communication',
            steps: [
              'Review previous audit findings',
              'Prepare engagement letter',
              'Schedule audit timeline',
              'Request client documents'
            ],
            required: true,
            estimatedTime: '2 hours'
          },
          {
            id: 'section-002',
            title: 'Trust Account Verification',
            description: 'Detailed trust account balance verification',
            steps: [
              'Obtain bank statements',
              'Verify trust account balances',
              'Review client ledger records',
              'Perform reconciliation testing'
            ],
            required: true,
            estimatedTime: '4 hours'
          }
        ],
        totalSteps: 24,
        estimatedTime: '12-16 hours'
      },
      formats: ['pdf', 'word', 'excel', 'online'],
      status: 'active',
      featured: true
    }
  ], [])

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with Back Button */}
        <PageHeaderWithBack
          title="Audit Templates"
          subtitle="Professional audit templates and checklists for standardized trust account auditing procedures"
        >
          <div className="flex items-center space-x-2">
            <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200">
              <Plus className="h-4 w-4" />
              <span>New Template</span>
            </button>
          </div>
        </PageHeaderWithBack>

        {/* Template Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8"
        >
          {[
            {
              id: 'trust-account',
              name: 'Trust Account',
              icon: Shield,
              color: 'text-blue-600 dark:text-blue-400',
              bgColor: 'bg-blue-50 dark:bg-blue-900/20',
              count: 12
            },
            {
              id: 'compliance',
              name: 'Compliance',
              icon: CheckCircle,
              color: 'text-green-600 dark:text-green-400',
              bgColor: 'bg-green-50 dark:bg-green-900/20',
              count: 8
            },
            {
              id: 'document-request',
              name: 'Documents',
              icon: FileText,
              color: 'text-purple-600 dark:text-purple-400',
              bgColor: 'bg-purple-50 dark:bg-purple-900/20',
              count: 15
            },
            {
              id: 'risk-assessment',
              name: 'Risk Assessment',
              icon: AlertCircle,
              color: 'text-orange-600 dark:text-orange-400',
              bgColor: 'bg-orange-50 dark:bg-orange-900/20',
              count: 6
            },
            {
              id: 'report',
              name: 'Reports',
              icon: BarChart3,
              color: 'text-indigo-600 dark:text-indigo-400',
              bgColor: 'bg-indigo-50 dark:bg-indigo-900/20',
              count: 10
            },
            {
              id: 'custom',
              name: 'Custom',
              icon: Star,
              color: 'text-yellow-600 dark:text-yellow-400',
              bgColor: 'bg-yellow-50 dark:bg-yellow-900/20',
              count: 4
            }
          ].map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ scale: 1.02 }}
              className={`${category.bgColor} rounded-xl p-4 border border-gray-200 dark:border-gray-700 cursor-pointer transition-all duration-200 hover:shadow-md`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center justify-between mb-2">
                <category.icon className={`h-5 w-5 ${category.color}`} />
                <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {category.count}
                </span>
              </div>
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                {category.name}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Template Preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 mb-8"
        >
          <div className="text-center py-12">
            <Bookmark className="h-16 w-16 text-primary-500 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              Professional Audit Templates
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Access our comprehensive library of professional audit templates, checklists, and procedures 
              designed specifically for trust account auditing across Australia.
            </p>
          </div>
        </motion.div>

        {/* Featured Templates Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Featured Templates
            </h2>
            <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm">
              View All →
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                id: 'featured-1',
                title: 'Annual Trust Account Audit',
                description: 'Comprehensive annual audit template for legal practices',
                category: 'Trust Account',
                icon: Shield,
                color: 'text-blue-600 dark:text-blue-400',
                bgColor: 'bg-blue-50 dark:bg-blue-900/20',
                usage: 156,
                rating: 4.8,
                states: ['NSW', 'VIC', 'QLD'],
                formats: ['PDF', 'Word', 'Excel']
              },
              {
                id: 'featured-2',
                title: 'ASIC Compliance Checklist',
                description: 'Complete ASIC compliance verification template',
                category: 'Compliance',
                icon: CheckCircle,
                color: 'text-green-600 dark:text-green-400',
                bgColor: 'bg-green-50 dark:bg-green-900/20',
                usage: 89,
                rating: 4.9,
                states: ['All States'],
                formats: ['PDF', 'Online']
              },
              {
                id: 'featured-3',
                title: 'Document Request Letter',
                description: 'Professional client document request template',
                category: 'Documents',
                icon: FileText,
                color: 'text-purple-600 dark:text-purple-400',
                bgColor: 'bg-purple-50 dark:bg-purple-900/20',
                usage: 234,
                rating: 4.7,
                states: ['All States'],
                formats: ['Word', 'PDF']
              }
            ].map((template, index) => (
              <motion.div
                key={template.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
              >
                {/* Template Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl ${template.bgColor}`}>
                    <template.icon className={`h-6 w-6 ${template.color}`} />
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 text-yellow-500 fill-current" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      {template.rating}
                    </span>
                  </div>
                </div>

                {/* Template Info */}
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {template.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                    {template.description}
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-gray-500 dark:text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="h-3 w-3" />
                      <span>{template.usage} uses</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{template.states.join(', ')}</span>
                    </div>
                  </div>
                </div>

                {/* Template Actions */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2">
                    {template.formats.map((format, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-md"
                      >
                        {format}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center space-x-1">
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                      <Eye className="h-4 w-4 text-gray-400 hover:text-primary-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                      <Download className="h-4 w-4 text-gray-400 hover:text-primary-500" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200">
                      <Copy className="h-4 w-4 text-gray-400 hover:text-primary-500" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Template Library Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-sm border border-gray-200 dark:border-gray-700 p-6"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Template Library
            </h2>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search templates..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500 w-64"
                />
              </div>
              
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              >
                <option value="all">All Categories</option>
                <option value="trust-account">Trust Account</option>
                <option value="compliance">Compliance</option>
                <option value="document-request">Documents</option>
                <option value="risk-assessment">Risk Assessment</option>
                <option value="report">Reports</option>
                <option value="custom">Custom</option>
              </select>

              <div className="flex rounded-lg border border-gray-300 dark:border-gray-600 overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    viewMode === 'grid'
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <Grid className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    viewMode === 'list'
                      ? 'bg-primary-500 text-white'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  <List className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Template Grid/List */}
          <div className="text-center py-12">
            <Folder className="h-16 w-16 text-gray-400 dark:text-gray-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Template Library Coming Soon
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Our comprehensive template library with advanced filtering, search, and management features is currently under development.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <button className="flex items-center space-x-2 px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded-lg font-medium transition-colors duration-200">
                <Plus className="h-4 w-4" />
                <span>Create Custom Template</span>
              </button>
              <button className="flex items-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg font-medium transition-colors duration-200">
                <Upload className="h-4 w-4" />
                <span>Import Template</span>
              </button>
            </div>
          </div>
        </motion.div>

        {/* Quick Actions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              title: 'Create Template',
              description: 'Build a custom audit template',
              icon: Plus,
              color: 'text-blue-600 dark:text-blue-400',
              bgColor: 'bg-blue-50 dark:bg-blue-900/20',
              action: 'create'
            },
            {
              title: 'Import Template',
              description: 'Upload existing templates',
              icon: Upload,
              color: 'text-green-600 dark:text-green-400',
              bgColor: 'bg-green-50 dark:bg-green-900/20',
              action: 'import'
            },
            {
              title: 'Template Settings',
              description: 'Manage template preferences',
              icon: Settings,
              color: 'text-purple-600 dark:text-purple-400',
              bgColor: 'bg-purple-50 dark:bg-purple-900/20',
              action: 'settings'
            },
            {
              title: 'Help & Support',
              description: 'Template creation guidance',
              icon: BookOpen,
              color: 'text-orange-600 dark:text-orange-400',
              bgColor: 'bg-orange-50 dark:bg-orange-900/20',
              action: 'help'
            }
          ].map((action, index) => (
            <motion.div
              key={action.action}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className={`${action.bgColor} rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-all duration-200 cursor-pointer group`}
            >
              <div className="flex items-center space-x-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-xl shadow-sm">
                  <action.icon className={`h-6 w-6 ${action.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                    {action.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {action.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}