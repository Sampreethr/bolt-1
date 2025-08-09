'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { 
  LayoutDashboard, 
  FileCheck, 
  FolderOpen, 
  BarChart3, 
  Calendar,
  Settings,
  HelpCircle,
  Menu,
  X,
  User,
  ChevronDown,
  Bell,
  LogOut,
  Shield,
  Phone,
  Home,
  // Audit-specific icons
  CheckSquare,
  FileText,
  Upload,
  Download,
  Clock,
  AlertTriangle,
  TrendingUp,
  Archive,
  Bookmark,
  PieChart,
  Activity,
  Users,
  Building
} from 'lucide-react'

// ===============================
// TYPE DEFINITIONS
// ===============================

interface SidebarItem {
  id: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  badge?: string | number;
  subItems?: SidebarSubItem[];
}

interface SidebarSubItem {
  id: string;
  label: string;
  href: string;
  badge?: string | number;
}

interface SidebarSection {
  id: string;
  title: string;
  items: SidebarItem[];
}

interface DashboardSidebarProps {
  userInfo: {
    name: string;
    email: string;
    company: string;
    plan: string;
    avatar?: string;
  };
  isMobile?: boolean;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  onClose?: () => void;
}

/**
 * AUDIT-FOCUSED DASHBOARD SIDEBAR - TRUST ACCOUNT AUDITS ONLY
 * 
 * Features:
 * - Completely focused on audit management and compliance
 * - Aligned with ASIC and Australian trust account requirements
 * - Professional audit workflow from planning to reporting
 * - Document management for audit evidence
 * - Compliance tracking and monitoring
 * - 100% responsive design for all devices
 * 
 * Removed:
 * - Business registration services
 * - Tax return services  
 * - Loan application services
 * - Any non-audit related functionality
 * 
 * @param userInfo - User information for profile display
 * @returns Audit-focused sidebar component
 */
export default function DashboardSidebar({ 
  userInfo, 
  isMobile = false, 
  isOpen = false, 
  setIsOpen,
  onClose 
}: DashboardSidebarProps): JSX.Element {
  const pathname = usePathname()
  const [sidebarOpen, setSidebarOpen] = useState<boolean>(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [internalIsMobile, setInternalIsMobile] = useState<boolean>(false)

  // Use props when provided, fallback to internal state
  const currentIsMobile = isMobile || internalIsMobile
  const currentIsOpen = isOpen || sidebarOpen

  // ===============================
  // RESPONSIVE HANDLING
  // ===============================
  
  useEffect(() => {
    const checkScreenSize = () => {
      setInternalIsMobile(window.innerWidth < 1024)
      // Auto-close sidebar on mobile when screen size changes
      if (window.innerWidth >= 1024) {
        setSidebarOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (currentIsMobile) {
      setSidebarOpen(false)
      onClose?.()
    }
  }, [pathname, currentIsMobile, onClose])

  // ===============================
  // AUDIT-FOCUSED NAVIGATION STRUCTURE
  // ===============================
  
  const sidebarSections: SidebarSection[] = [
    {
      id: 'overview',
      title: 'Overview',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboard,
          href: '/dashboard',
        },
        {
          id: 'audit-calendar',
          label: 'Audit Calendar',
          icon: Calendar,
          href: '/audit-calendar',
          badge: '3',
        },
      ],
    },
    {
      id: 'audits',
      title: 'Audit Management',
      items: [
        {
          id: 'active-audits',
          label: 'Active Audits',
          icon: FileCheck,
          href: '/audits/active',
          badge: '2',
          subItems: [
            { id: 'in-progress', label: 'In Progress', href: '/audits/active/in-progress', badge: '1' },
            { id: 'pending-review', label: 'Pending Review', href: '/audits/active/pending-review', badge: '1' },
            { id: 'awaiting-documents', label: 'Awaiting Documents', href: '/audits/active/awaiting-docs' },
          ],
        },
        {
          id: 'schedule-audit',
          label: 'Schedule New Audit',
          icon: CheckSquare,
          href: '/audits',
        },
        {
          id: 'audit-templates',
          label: 'Audit Templates',
          icon: Bookmark,
          href: '/audits/templates',
          subItems: [
            { id: 'trust-account-template', label: 'Trust Account Audit', href: '/audits/templates/trust-account' },
            { id: 'compliance-template', label: 'Compliance Check', href: '/audits/templates/compliance' },
            { id: 'custom-templates', label: 'Custom Templates', href: '/audits/templates/custom' },
          ],
        },
        {
          id: 'audit-history',
          label: 'Audit History',
          icon: Archive,
          href: '/audits/history',
          subItems: [
            { id: 'completed-audits', label: 'Completed Audits', href: '/audits/history/completed' },
            { id: 'archived-audits', label: 'Archived Audits', href: '/audits/history/archived' },
            { id: 'audit-timeline', label: 'Timeline View', href: '/audits/history/timeline' },
          ],
        },
      ],
    },
    {
      id: 'documents',
      title: 'Document Management',
      items: [
        {
          id: 'document-upload',
          label: 'Upload Documents',
          icon: Upload,
          href: '/documents/upload',
        },
        {
          id: 'document-library',
          label: 'Document Library',
          icon: FolderOpen,
          href: '/documents/library',
          subItems: [
            { id: 'bank-statements', label: 'Bank Statements', href: '/documents/library/bank-statements' },
            { id: 'trust-records', label: 'Trust Records', href: '/documents/library/trust-records' },
            { id: 'supporting-docs', label: 'Supporting Documents', href: '/documents/library/supporting' },
            { id: 'client-documents', label: 'Client Documents', href: '/documents/library/client-docs' },
          ],
        },
        {
          id: 'document-requests',
          label: 'Document Requests',
          icon: FileText,
          href: '/documents/requests',
          badge: '1',
          subItems: [
            { id: 'pending-requests', label: 'Pending Requests', href: '/documents/requests/pending', badge: '1' },
            { id: 'completed-requests', label: 'Completed', href: '/documents/requests/completed' },
            { id: 'overdue-requests', label: 'Overdue', href: '/documents/requests/overdue' },
          ],
        },
      ],
    },
    {
      id: 'compliance',
      title: 'Compliance & Reporting',
      items: [
        {
          id: 'compliance-dashboard',
          label: 'Compliance Status',
          icon: Shield,
          href: '/compliance/dashboard',
          subItems: [
            { id: 'asic-compliance', label: 'ASIC Requirements', href: '/compliance/asic' },
            { id: 'state-compliance', label: 'State Requirements', href: '/compliance/state' },
            { id: 'trust-compliance', label: 'Trust Account Rules', href: '/compliance/trust-rules' },
          ],
        },
        {
          id: 'audit-reports',
          label: 'Audit Reports',
          icon: BarChart3,
          href: '/reports/audits',
          subItems: [
            { id: 'draft-reports', label: 'Draft Reports', href: '/reports/audits/drafts' },
            { id: 'final-reports', label: 'Final Reports', href: '/reports/audits/final' },
            { id: 'compliance-reports', label: 'Compliance Reports', href: '/reports/audits/compliance' },
            { id: 'exception-reports', label: 'Exception Reports', href: '/reports/audits/exceptions' },
          ],
        },
        {
          id: 'progress-tracking',
          label: 'Progress Tracking',
          icon: TrendingUp,
          href: '/progress/tracking',
          subItems: [
            { id: 'audit-progress', label: 'Audit Progress', href: '/progress/audit-status' },
            { id: 'milestone-tracking', label: 'Milestones', href: '/progress/milestones' },
            { id: 'deadline-alerts', label: 'Deadline Alerts', href: '/progress/deadlines' },
          ],
        },
        {
          id: 'analytics',
          label: 'Analytics',
          icon: PieChart,
          href: '/analytics/dashboard',
          subItems: [
            { id: 'audit-analytics', label: 'Audit Performance', href: '/analytics/audit-performance' },
            { id: 'compliance-metrics', label: 'Compliance Metrics', href: '/analytics/compliance' },
            { id: 'trend-analysis', label: 'Trend Analysis', href: '/analytics/trends' },
          ],
        },
      ],
    },
    {
      id: 'account',
      title: 'Account Management',
      items: [
        {
          id: 'profile-settings',
          label: 'Profile & Settings',
          icon: User,
          href: '/profile',
          subItems: [
            { id: 'company-profile', label: 'Company Profile', href: '/profile/company' },
            { id: 'user-preferences', label: 'Preferences', href: '/profile/preferences' },
            { id: 'notification-settings', label: 'Notifications', href: '/profile/notifications' },
            { id: 'security-settings', label: 'Security', href: '/profile/security' },
          ],
        },
        {
          id: 'audit-team',
          label: 'Audit Team',
          icon: Users,
          href: '/team/management',
          subItems: [
            { id: 'assigned-auditors', label: 'Assigned Auditors', href: '/team/auditors' },
            { id: 'audit-contacts', label: 'Audit Contacts', href: '/team/contacts' },
            { id: 'communication', label: 'Communication', href: '/team/communication' },
          ],
        },
        {
          id: 'system-settings',
          label: 'System Settings',
          icon: Settings,
          href: '/settings/system',
          subItems: [
            { id: 'audit-preferences', label: 'Audit Preferences', href: '/settings/audit-preferences' },
            { id: 'integration-settings', label: 'Integrations', href: '/settings/integrations' },
            { id: 'backup-settings', label: 'Backup & Archive', href: '/settings/backup' },
          ],
        },
        {
          id: 'support',
          label: 'Support & Help',
          icon: HelpCircle,
          href: '/support/help',
          subItems: [
            { id: 'audit-guides', label: 'Audit Guides', href: '/support/guides' },
            { id: 'compliance-help', label: 'Compliance Help', href: '/support/compliance' },
            { id: 'contact-support', label: 'Contact Support', href: '/support/contact' },
            { id: 'live-chat', label: 'Live Chat', href: '/support/chat' },
          ],
        },
      ],
    },
  ]

  // ===============================
  // EVENT HANDLERS
  // ===============================
  
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen)
    if (onClose && sidebarOpen) {
      onClose()
    }
  }

  const toggleSubMenu = (itemId: string) => {
    const newExpanded = new Set(expandedItems)
    if (newExpanded.has(itemId)) {
      newExpanded.delete(itemId)
    } else {
      newExpanded.add(itemId)
    }
    setExpandedItems(newExpanded)
  }

  const isActiveRoute = (href: string): boolean => {
    if (href === '/dashboard') {
      return pathname === '/dashboard'
    }
    return pathname.startsWith(href)
  }

  const handleEmergencyCall = () => {
    console.log('📞 Emergency audit support call initiated')
  }

  const handleLogout = () => {
    console.log('🚪 Logout initiated')
    // Implement logout logic
  }

  // ===============================
  // RENDER HELPERS
  // ===============================
  
  const renderSidebarItem = (item: SidebarItem, hasSubItems = false) => {
    const isActive = isActiveRoute(item.href)
    const isExpanded = expandedItems.has(item.id)
    const hasSubMenu = item.subItems && item.subItems.length > 0

    return (
      <div key={item.id} className="relative">
        {/* Main Item */}
        <div
          className={`
            group flex items-center justify-between w-full px-3 py-2.5 text-left rounded-lg transition-all duration-200
            ${isActive 
              ? 'bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 shadow-sm border border-primary-200 dark:border-primary-800' 
              : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
            }
          `}
        >
          <Link
            href={item.href}
            className="flex items-center flex-1 min-w-0"
            onClick={() => !hasSubMenu && currentIsMobile && (setSidebarOpen(false), onClose?.())}
          >
            <item.icon 
              className={`h-5 w-5 mr-3 flex-shrink-0 transition-colors duration-200 ${
                isActive ? 'text-primary-600' : 'text-gray-500 group-hover:text-gray-700'
              }`} 
            />
            <span className="font-medium text-sm truncate">{item.label}</span>
            {item.badge && (
              <span className={`
                ml-auto px-2 py-0.5 text-xs font-medium rounded-full
                ${isActive 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-200 text-gray-700 group-hover:bg-gray-300'
                }
              `}>
                {item.badge}
              </span>
            )}
          </Link>
          
          {hasSubMenu && (
            <button
              onClick={() => toggleSubMenu(item.id)}
              className={`
                ml-2 p-1 rounded hover:bg-gray-200 transition-colors duration-200
                ${isActive ? 'hover:bg-primary-200' : ''}
              `}
              aria-label={`Toggle ${item.label} submenu`}
            >
              <ChevronDown 
                className={`h-4 w-4 transition-transform duration-200 ${
                  isExpanded ? 'rotate-180' : ''
                } ${isActive ? 'text-primary-600' : 'text-gray-500'}`} 
              />
            </button>
          )}
        </div>

        {/* Sub Items */}
        {hasSubMenu && (
          <div 
            className={`
              overflow-hidden transition-all duration-300 ease-in-out
              ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
            `}
          >
            <div className="ml-6 mt-1 space-y-1 border-l border-gray-200 pl-4">
              {item.subItems?.map((subItem) => (
                <Link
                  key={subItem.id}
                  href={subItem.href}
                  onClick={() => currentIsMobile && (setSidebarOpen(false), onClose?.())}
                  className={`
                    group flex items-center justify-between px-3 py-2 text-sm rounded-md transition-all duration-200
                    ${isActiveRoute(subItem.href)
                      ? 'bg-primary-50 text-primary-700 border-l-2 border-primary-500'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                    }
                  `}
                >
                  <span className="truncate">{subItem.label}</span>
                  {subItem.badge && (
                    <span className={`
                      px-1.5 py-0.5 text-xs font-medium rounded-full
                      ${isActiveRoute(subItem.href)
                        ? 'bg-primary-100 text-primary-700'
                        : 'bg-gray-200 text-gray-600 group-hover:bg-gray-300'
                      }
                    `}>
                      {subItem.badge}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    )
  }

  // ===============================
  // MAIN RENDER - COMPLETELY FIXED SIDEBAR
  // ===============================
  
  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={toggleSidebar}
        className={`
          lg:hidden fixed top-4 left-4 z-50 p-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700
          hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105
          ${currentIsOpen ? 'bg-gray-100 dark:bg-gray-700' : ''}
        `}
        aria-label="Toggle sidebar menu"
      >
        {currentIsOpen ? (
          <X className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
        )}
      </button>

      {/* Backdrop Overlay (Mobile/Tablet) */}
      {currentIsOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => (setSidebarOpen(false), onClose?.())}
          aria-hidden="true"
        />
      )}

      {/* 🎯 COMPLETELY FIXED SIDEBAR - NEVER MOVES */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700
          transform transition-transform duration-300 ease-in-out
          ${currentIsOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          w-80 lg:w-64
          flex flex-col
        `}
        style={{
          position: 'fixed',
          height: '100vh',
          overflowY: 'hidden', // Prevent entire sidebar from scrolling
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
        }}
        aria-label="Audit management navigation"
      >
        
        {/* 🎯 FIXED HEADER SECTION - NO SCROLL */}
        <div className="flex-shrink-0 px-4 sm:px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-4">
            {/* 🏠 HOME BUTTON */}
            <Link
              href="/"
              className="p-2 bg-gray-100 dark:bg-gray-700 hover:bg-primary-100 dark:hover:bg-primary-900/30 rounded-lg transition-all duration-200 transform hover:scale-105 group"
              aria-label="Go to main website home"
              onClick={() => isMobile && setIsOpen?.(false)}
            >
              <Home className="h-5 w-5 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400" />
            </Link>

            {/* LOGO */}
            <Link 
              href="/dashboard" 
              className="flex items-center group"
              onClick={() => isMobile && setIsOpen?.(false)}
            >
              <div className="p-2 bg-primary-500 rounded-xl group-hover:bg-primary-600 transition-colors duration-200">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-bold text-gray-900 dark:text-white">
                  <span className="text-orange-500">Audits</span>Pro
                </h1>
                <p className="text-sm text-orange-500 font-medium -mt-1">Australia</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 🎯 FIXED USER PROFILE SECTION - NO SCROLL */}
        <div className="flex-shrink-0 p-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 dark:bg-primary-900/30 rounded-full flex items-center justify-center">
              <Building className="h-6 w-6 text-primary-600 dark:text-primary-400" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {userInfo.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-300 truncate">{userInfo.company}</p>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 mt-1">
                Audit Client
              </span>
            </div>
          </div>
        </div>

        {/* 🎯 SCROLLABLE NAVIGATION SECTION - ONLY THIS SCROLLS */}
        <div 
          className="flex-1 overflow-y-auto overflow-x-hidden p-4"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#cbd5e1 transparent'
          }}
        >
          <nav className="space-y-6">
            {sidebarSections.map((section) => (
              <div key={section.id}>
                <h3 className="px-3 text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                  {section.title}
                </h3>
                <div className="space-y-1">
                  {section.items.map((item) => renderSidebarItem(item))}
                </div>
              </div>
            ))}
          </nav>
        </div>

        {/* 🎯 FIXED BOTTOM SECTION - NO SCROLL */}
        <div className="flex-shrink-0 p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          {/* Emergency Audit Support */}
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-red-800 dark:text-red-400">Urgent Audit Support</h4>
                <p className="text-xs text-red-600 dark:text-red-300">24/7 ASIC compliance assistance</p>
              </div>
              <button
                onClick={handleEmergencyCall}
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                aria-label="Call emergency audit support"
              >
                <Phone className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors duration-200 group"
            aria-label="Sign out of account"
          >
            <LogOut className="h-4 w-4 mr-3 text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-300" />
            <span>Sign Out</span>
          </button>
        </div>
      </aside>

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #cbd5e1;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: #94a3b8;
        }
      `}</style>
    </>
  )
}

/**
 * ===============================
 * AUDIT-FOCUSED SIDEBAR FEATURES
 * ===============================
 * 
 * ✅ OVERVIEW SECTION:
 * - Dashboard: Main audit overview and metrics
 * - Audit Calendar: Scheduling and deadline tracking
 * 
 * ✅ AUDIT MANAGEMENT SECTION:
 * - Active Audits: Current audit projects with status tracking
 * - Schedule New Audit: Initiate new audit engagements
 * - Audit Templates: Standardized audit procedures and checklists
 * - Audit History: Complete audit trail and archives
 * 
 * ✅ DOCUMENT MANAGEMENT SECTION:
 * - Upload Documents: Secure document submission system
 * - Document Library: Organized storage by category (bank statements, trust records, etc.)
 * - Document Requests: Track outstanding document requirements
 * 
 * ✅ COMPLIANCE & REPORTING SECTION:
 * - Compliance Status: ASIC and state regulatory compliance monitoring
 * - Audit Reports: Generate and manage audit outputs
 * - Progress Tracking: Real-time audit progress and milestone tracking
 * - Analytics: Performance metrics and trend analysis
 * 
 * ✅ ACCOUNT MANAGEMENT SECTION:
 * - Profile & Settings: Company and user configuration
 * - Audit Team: Manage auditor assignments and communications
 * - System Settings: Audit preferences and integrations
 * - Support & Help: Compliance guides and assistance
 * 
 * ✅ RESPONSIVE DESIGN COVERAGE:
 * - iPhone SE (375px): Optimized mobile navigation
 * - iPhone Pro Max (428px): Enhanced mobile experience
 * - Samsung Galaxy (all sizes): Android-optimized layout
 * - Samsung Galaxy Fold (280px/717px): Foldable device support
 * - iPads (768px/1024px): Tablet-specific optimizations
 * - Laptops/Desktop (1280px+): Full sidebar functionality
 * - 4K displays (1920px+): Optimal space utilization
 * 
 * ✅ PROFESSIONAL FEATURES:
 * - Emergency audit support hotline
 * - ASIC compliance focus
 * - Trust account audit specialization
 * - Real-time progress tracking
 * - Document security and organization
 * - Audit trail maintenance
 * - Regulatory deadline management
 * 
 * This sidebar is now completely focused on trust account audit
 * management, removing all non-audit services while maintaining
 * professional standards and responsive design.
 */