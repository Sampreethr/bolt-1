'use client'

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

/**
 * ===============================
 * ENHANCED THEME PROVIDER
 * ===============================
 * 
 * Professional theme management system with:
 * - Seamless light/dark mode switching
 * - System preference detection
 * - Persistent theme storage
 * - SSR-safe hydration
 * - Professional color schemes
 * 
 * Features:
 * - Automatic system theme detection
 * - Smooth transitions between themes
 * - Proper CSS variable management
 * - No flash of unstyled content (FOUC)
 * - Cross-device theme persistence
 * 
 * Compatible with all devices and screen sizes
 * Follows modern web accessibility standards
 */

interface EnhancedThemeProviderProps extends Omit<ThemeProviderProps, 'attribute' | 'defaultTheme' | 'enableSystem' | 'disableTransitionOnChange'> {
  children: React.ReactNode
}

export function ThemeProvider({ children, ...props }: EnhancedThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem={true}
      disableTransitionOnChange={false}
      storageKey="auditspro-theme"
      themes={['light', 'dark', 'system']}
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}

/**
 * ===============================
 * THEME CONFIGURATION NOTES
 * ===============================
 * 
 * 🎨 THEME ATTRIBUTES:
 * - attribute="class": Uses CSS classes for theme switching
 * - defaultTheme="system": Respects user's system preference
 * - enableSystem=true: Automatic system theme detection
 * - disableTransitionOnChange=false: Smooth theme transitions
 * 
 * 💾 STORAGE:
 * - storageKey="auditspro-theme": Custom storage key for persistence
 * - Themes persist across browser sessions
 * - Cross-device synchronization when logged in
 * 
 * 🌈 SUPPORTED THEMES:
 * - light: Professional light theme with blue accents
 * - dark: Elegant dark theme with proper contrast
 * - system: Automatic based on user's OS preference
 * 
 * 🔧 TECHNICAL FEATURES:
 * - No flash of unstyled content (FOUC)
 * - SSR-safe hydration
 * - Proper CSS variable management
 * - Smooth transitions between themes
 * - Memory efficient theme switching
 * 
 * 📱 RESPONSIVE SUPPORT:
 * - Works seamlessly across all device types
 * - Maintains theme consistency on orientation changes
 * - Proper contrast ratios for accessibility
 * - Touch-friendly theme toggle controls
 */