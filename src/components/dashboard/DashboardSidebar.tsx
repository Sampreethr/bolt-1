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
  CreditCard,
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
  Home // Added Home icon
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
}

/**
 * COMPLETELY FIXED DASHBOARD SIDEBAR - NO SCROLLING WITH MAIN CONTENT
 * 
 * Features:
 * - Completely fixed position (doesn't move with main content)
 * - Only internal navigation section scrolls when hovering over sidebar
 * - Mobile-first responsive design
 * - Professional navigation structure
 * - User profile integration
 * - Accessibility compliant
 * 
 * @param userInfo - User information for profile display
 * @returns Completely fixed sidebar component
 */
export default function DashboardSidebar({ userInfo }: DashboardSidebarProps): JSX.Element {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set())
  const [isMobile, setIsMobile] = useState<boolean>(false)

  // ===============================
  // RESPONSIVE HANDLING
  // ===============================
  
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024)
      // Auto-close sidebar on mobile when screen size changes
      if (window.innerWidth >= 1024) {
        setIsOpen(false)
      }
    }

    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  // Close sidebar when route changes (mobile)
  useEffect(() => {
    if (isMobile) {
      setIsOpen(false)
    }
  }, [pathname, isMobile])

  // ===============================
  // NAVIGATION STRUCTURE
  // ===============================
  
  const sidebarSections: SidebarSection[] = [
    {
      id: 'main',
      title: 'Main',
      items: [
        {
          id: 'dashboard',
          label: 'Dashboard',
          icon: LayoutDashboard,
          href: '/dashboard',
        },
        {
          id: 'audits',
          label: 'Audits',
          icon: FileCheck,
          href: '/audits',
          badge: '2',
          subItems: [
            { id: 'active-audits', label: 'Active Audits', href: '/audits/active', badge: '2' },
            { id: 'completed-audits', label: 'Completed', href: '/audits/completed' },
            { id: 'schedule-audit', label: 'Schedule New', href: '/audits/schedule' },
          ],
        },
        {
          id: 'documents',
          label: 'Documents',
          icon: FolderOpen,
          href: '/documents',
          subItems: [
            { id: 'upload-docs', label: 'Upload Documents', href: '/documents/upload' },
            { id: 'document-library', label: 'Document Library', href: '/documents/library' },
            { id: 'templates', label: 'Templates', href: '/documents/templates' },
          ],
        },
        {
          id: 'reports',
          label: 'Reports',
          icon: BarChart3,
          href: '/reports',
          subItems: [
            { id: 'audit-reports', label: 'Audit Reports', href: '/reports/audits' },
            { id: 'compliance-reports', label: 'Compliance', href: '/reports/compliance' },
            { id: 'performance', label: 'Performance', href: '/reports/performance' },
          ],
        },
      ],
    },
    {
      id: 'management',
      title: 'Management',
      items: [
        {
          id: 'calendar',
          label: 'Calendar',
          icon: Calendar,
          href: '/calendar',
        },
        {
          id: 'billing',
          label: 'Billing',
          icon: CreditCard,
          href: '/billing',
          subItems: [
            { id: 'invoices', label: 'Invoices', href: '/billing/invoices' },
            { id: 'payment-methods', label: 'Payment Methods', href: '/billing/payment-methods' },
            { id: 'billing-history', label: 'History', href: '/billing/history' },
          ],
        },
      ],
    },
    {
      id: 'account',
      title: 'Account',
      items: [
        {
          id: 'settings',
          label: 'Settings',
          icon: Settings,
          href: '/settings',
          subItems: [
            { id: 'profile', label: 'Profile', href: '/profile' },
            { id: 'notifications', label: 'Notifications', href: '/settings/notifications' },
            { id: 'security', label: 'Security', href: '/settings/security' },
          ],
        },
        {
          id: 'support',
          label: 'Support',
          icon: HelpCircle,
          href: '/support',
          subItems: [
            { id: 'help-center', label: 'Help Center', href: '/support/help' },
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
    setIsOpen(!isOpen)
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
    console.log('📞 Emergency support call initiated')
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
              ? 'bg-primary-100 text-primary-700 shadow-sm border border-primary-200' 
              : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
            }
          `}
        >
          <Link
            href={item.href}
            className="flex items-center flex-1 min-w-0"
            onClick={() => !hasSubMenu && isMobile && setIsOpen(false)}
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
                  onClick={() => isMobile && setIsOpen(false)}
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
          lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-lg border border-gray-200
          hover:bg-gray-50 transition-all duration-200 transform hover:scale-105
          ${isOpen ? 'bg-gray-100' : ''}
        `}
        aria-label="Toggle sidebar menu"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-gray-700" />
        ) : (
          <Menu className="h-6 w-6 text-gray-700" />
        )}
      </button>

      {/* Backdrop Overlay (Mobile/Tablet) */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* 🎯 COMPLETELY FIXED SIDEBAR - NEVER MOVES */}
      <aside
        className={`
          fixed top-0 left-0 z-40 h-screen bg-white border-r border-gray-200 shadow-xl
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          lg:translate-x-0
          w-80 lg:w-64
          flex flex-col
        `}
        style={{
          position: 'fixed',
          height: '100vh',
          overflowY: 'hidden' // Prevent entire sidebar from scrolling
        }}
        aria-label="Sidebar navigation"
      >
        
        {/* 🎯 FIXED HEADER SECTION - NO SCROLL */}
        <div className="flex-shrink-0 p-6 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-4">
            {/* 🏠 HOME BUTTON */}
            <Link
              href="/"
              className="p-2 bg-gray-100 hover:bg-primary-100 rounded-lg transition-all duration-200 transform hover:scale-105 group"
              aria-label="Go to main website home"
              onClick={() => isMobile && setIsOpen(false)}
            >
              <Home className="h-5 w-5 text-gray-600 group-hover:text-primary-600" />
            </Link>

            {/* LOGO */}
            <Link 
              href="/dashboard" 
              className="flex items-center group"
              onClick={() => isMobile && setIsOpen(false)}
            >
              <div className="p-2 bg-primary-500 rounded-xl group-hover:bg-primary-600 transition-colors duration-200">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="ml-3">
                <h1 className="text-lg font-bold text-gray-900">
                  <span className="text-orange-500">Audits</span>Pro
                </h1>
                <p className="text-sm text-orange-500 font-medium -mt-1">Australia</p>
              </div>
            </Link>
          </div>
        </div>

        {/* 🎯 FIXED USER PROFILE SECTION - NO SCROLL */}
        <div className="flex-shrink-0 p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
              <User className="h-6 w-6 text-primary-600" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-semibold text-gray-900 truncate">
                {userInfo.name}
              </h3>
              <p className="text-xs text-gray-600 truncate">{userInfo.company}</p>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 mt-1">
                {userInfo.plan} Plan
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
                <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
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
        <div className="flex-shrink-0 p-4 border-t border-gray-200 bg-white">
          {/* Emergency Support */}
          <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-sm font-semibold text-red-800">Emergency Support</h4>
                <p className="text-xs text-red-600">24/7 urgent audit assistance</p>
              </div>
              <button
                onClick={handleEmergencyCall}
                className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors duration-200"
                aria-label="Call emergency support"
              >
                <Phone className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200 group"
            aria-label="Sign out of account"
          >
            <LogOut className="h-4 w-4 mr-3 text-gray-500 group-hover:text-gray-700" />
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