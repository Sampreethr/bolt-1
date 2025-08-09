'use client'

import React, { useState, useRef, useEffect } from 'react'
import { cn } from '@/src/lib/utils'
import { Loader2 } from 'lucide-react'

/**
 * ===============================
 * GLOWING BUTTON COMPONENT
 * ===============================
 * 
 * Professional glowing button with:
 * - Dynamic glow effects
 * - Ripple animations on click
 * - Loading states with spinner
 * - Multiple variants and sizes
 * - Full accessibility support
 * - TypeScript strict mode
 * - Performance optimized
 * 
 * @author Professional UI/UX Team
 * @version 2.0.0
 * @since 2024
 */

interface GlowingButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error' | 'ghost'
  size?: 'sm' | 'md' | 'lg' | 'xl'
  glow?: 'none' | 'subtle' | 'medium' | 'intense'
  loading?: boolean
  disabled?: boolean
  fullWidth?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  ripple?: boolean
  href?: string
  target?: string
  rel?: string
  className?: string
}

interface RippleEffect {
  id: number
  x: number
  y: number
  size: number
}

/**
 * Utility function for class name concatenation
 * Fallback implementation if @/src/lib/utils doesn't exist
 */
const cnFallback = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Advanced Glowing Button Component
 * 
 * Features:
 * - Multiple visual variants with custom glow effects
 * - Ripple animation on click with proper cleanup
 * - Loading states with accessibility support
 * - Responsive sizing and full-width option
 * - Icon support (left and right)
 * - Link functionality when href provided
 * - Keyboard navigation support
 * - Screen reader compatible
 * 
 * @param props - Component props
 * @returns JSX.Element - Rendered glowing button
 */
export const GlowingButton: React.FC<GlowingButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  glow = 'medium',
  loading = false,
  disabled = false,
  fullWidth = false,
  leftIcon,
  rightIcon,
  ripple = true,
  href,
  target,
  rel,
  className,
  onClick,
  ...props
}) => {
  // State management for interactive effects
  const [ripples, setRipples] = useState<RippleEffect[]>([])
  const [isPressed, setIsPressed] = useState<boolean>(false)
  const [isFocused, setIsFocused] = useState<boolean>(false)
  
  // Refs for DOM manipulation
  const buttonRef = useRef<HTMLButtonElement>(null)
  const rippleTimeoutRef = useRef<NodeJS.Timeout>()

  /**
   * Cleanup ripple effects on unmount
   */
  useEffect(() => {
    return () => {
      if (rippleTimeoutRef.current) {
        clearTimeout(rippleTimeoutRef.current)
      }
    }
  }, [])

  /**
   * Create ripple effect on click
   */
  const createRipple = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (!ripple || disabled || loading) return

    const button = event.currentTarget
    const rect = button.getBoundingClientRect()
    const size = Math.max(rect.width, rect.height)
    const x = event.clientX - rect.left - size / 2
    const y = event.clientY - rect.top - size / 2

    const newRipple: RippleEffect = {
      id: Date.now(),
      x,
      y,
      size
    }

    setRipples(prev => [...prev, newRipple])

    // Remove ripple after animation completes
    rippleTimeoutRef.current = setTimeout(() => {
      setRipples(prev => prev.filter(ripple => ripple.id !== newRipple.id))
    }, 600)
  }

  /**
   * Handle click events
   */
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (disabled || loading) {
      event.preventDefault()
      return
    }

    createRipple(event)
    
    if (onClick) {
      onClick(event)
    }

    if (href) {
      if (target === '_blank') {
        window.open(href, target, rel ? `rel=${rel}` : undefined)
      } else {
        window.location.href = href
      }
    }
  }

  /**
   * Handle keyboard interactions
   */
  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      setIsPressed(true)
    }
  }

  const handleKeyUp = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === ' ' || event.key === 'Enter') {
      setIsPressed(false)
    }
  }

  /**
   * Get variant-specific classes
   */
  const getVariantClasses = (): string => {
    const variants = {
      primary: 'bg-primary-500 hover:bg-primary-600 text-white border-primary-500 hover:border-primary-600',
      secondary: 'bg-gray-500 hover:bg-gray-600 text-white border-gray-500 hover:border-gray-600',
      success: 'bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600',
      warning: 'bg-yellow-500 hover:bg-yellow-600 text-white border-yellow-500 hover:border-yellow-600',
      error: 'bg-red-500 hover:bg-red-600 text-white border-red-500 hover:border-red-600',
      ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600'
    }

    return variants[variant]
  }

  /**
   * Get size-specific classes
   */
  const getSizeClasses = (): string => {
    const sizes = {
      sm: 'px-3 py-2 text-sm min-h-[36px]',
      md: 'px-4 py-3 text-base min-h-[44px]',
      lg: 'px-6 py-4 text-lg min-h-[52px]',
      xl: 'px-8 py-5 text-xl min-h-[60px]'
    }

    return sizes[size]
  }

  /**
   * Get glow effect classes
   */
  const getGlowClasses = (): string => {
    if (glow === 'none' || disabled) return ''

    const glowIntensity = {
      subtle: 'shadow-sm',
      medium: 'shadow-lg',
      intense: 'shadow-2xl'
    }

    const glowColors = {
      primary: 'shadow-primary-500/25',
      secondary: 'shadow-gray-500/25',
      success: 'shadow-green-500/25',
      warning: 'shadow-yellow-500/25',
      error: 'shadow-red-500/25',
      ghost: 'shadow-gray-500/10'
    }

    return `${glowIntensity[glow]} ${glowColors[variant]} hover:shadow-2xl hover:${glowColors[variant].replace('/25', '/40')}`
  }

  /**
   * Get state-specific classes
   */
  const getStateClasses = (): string => {
    const classes = []

    if (disabled || loading) {
      classes.push('opacity-50 cursor-not-allowed')
    } else {
      classes.push('cursor-pointer hover:scale-105 active:scale-95')
    }

    if (isPressed) {
      classes.push('scale-95')
    }

    if (isFocused) {
      classes.push('ring-2 ring-offset-2 ring-primary-500')
    }

    return classes.join(' ')
  }

  /**
   * Combine all classes
   */
  const buttonClasses = (cn || cnFallback)(
    // Base classes
    'relative inline-flex items-center justify-center font-semibold rounded-lg border-2 transition-all duration-200 overflow-hidden',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500',
    'touch-manipulation select-none',
    
    // Variant classes
    getVariantClasses(),
    
    // Size classes
    getSizeClasses(),
    
    // Glow classes
    getGlowClasses(),
    
    // State classes
    getStateClasses(),
    
    // Full width
    fullWidth && 'w-full',
    
    // Custom classes
    className
  )

  /**
   * Render loading spinner
   */
  const renderLoadingSpinner = () => (
    <Loader2 
      className="animate-spin mr-2 h-4 w-4" 
      aria-hidden="true"
    />
  )

  /**
   * Render ripple effects
   */
  const renderRipples = () => (
    <div className="absolute inset-0 overflow-hidden rounded-lg">
      {ripples.map(ripple => (
        <span
          key={ripple.id}
          className="absolute bg-white/30 rounded-full animate-ping"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: ripple.size,
            height: ripple.size,
            animationDuration: '600ms'
          }}
        />
      ))}
    </div>
  )

  /**
   * Accessibility attributes
   */
  const accessibilityProps = {
    'aria-disabled': disabled || loading,
    'aria-busy': loading,
    'aria-describedby': loading ? 'button-loading' : undefined
  }

  return (
    <button
      ref={buttonRef}
      className={buttonClasses}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      disabled={disabled || loading}
      {...accessibilityProps}
      {...props}
    >
      {/* Ripple effects */}
      {renderRipples()}
      
      {/* Button content */}
      <span className="relative z-10 flex items-center justify-center">
        {loading && renderLoadingSpinner()}
        {leftIcon && !loading && (
          <span className="mr-2 flex-shrink-0" aria-hidden="true">
            {leftIcon}
          </span>
        )}
        
        <span className={loading ? 'opacity-70' : ''}>
          {children}
        </span>
        
        {rightIcon && !loading && (
          <span className="ml-2 flex-shrink-0" aria-hidden="true">
            {rightIcon}
          </span>
        )}
      </span>
      
      {/* Glow overlay */}
      {glow !== 'none' && !disabled && (
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
      )}
      
      {/* Screen reader loading announcement */}
      {loading && (
        <span id="button-loading" className="sr-only">
          Loading, please wait
        </span>
      )}
    </button>
  )
}

/**
 * ===============================
 * USAGE EXAMPLES & DOCUMENTATION
 * ===============================
 * 
 * Basic Usage:
 * ```tsx
 * <GlowingButton variant="primary" size="md">
 *   Click Me
 * </GlowingButton>
 * ```
 * 
 * Advanced Usage:
 * ```tsx
 * <GlowingButton
 *   variant="success"
 *   size="lg"
 *   glow="intense"
 *   loading={isLoading}
 *   leftIcon={<CheckIcon />}
 *   onClick={handleSubmit}
 *   fullWidth
 * >
 *   Submit Form
 * </GlowingButton>
 * ```
 * 
 * Link Button:
 * ```tsx
 * <GlowingButton
 *   variant="primary"
 *   href="/services"
 *   target="_blank"
 *   rel="noopener noreferrer"
 * >
 *   View Services
 * </GlowingButton>
 * ```
 * 
 * Performance Features:
 * - Efficient ripple effect management
 * - Proper cleanup on unmount
 * - Optimized re-renders
 * - GPU-accelerated animations
 * 
 * Accessibility Features:
 * - Full keyboard navigation
 * - Screen reader support
 * - Loading state announcements
 * - Focus management
 * - ARIA attributes
 */

export default GlowingButton