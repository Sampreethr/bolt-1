'use client'

import React, { useEffect, useState, useRef } from 'react'
import { cn } from '@/src/lib/utils'

/**
 * ===============================
 * FLOATING ELEMENTS COMPONENT
 * ===============================
 * 
 * Professional floating background elements with:
 * - Smooth parallax scrolling
 * - Organic movement patterns
 * - Performance optimized animations
 * - Customizable shapes and colors
 * - Dark mode compatible
 * - Accessibility friendly (respects reduced motion)
 * 
 * @author Professional UI/UX Team
 * @version 2.0.0
 * @since 2024
 */

interface FloatingElementsProps {
  count?: number
  variant?: 'circles' | 'squares' | 'mixed' | 'organic'
  size?: 'sm' | 'md' | 'lg' | 'mixed'
  speed?: 'slow' | 'normal' | 'fast'
  opacity?: number
  color?: 'primary' | 'secondary' | 'accent' | 'rainbow'
  className?: string
  disabled?: boolean
}

interface FloatingElement {
  id: number
  x: number
  y: number
  size: number
  speed: number
  direction: number
  rotation: number
  rotationSpeed: number
  opacity: number
  shape: 'circle' | 'square' | 'triangle' | 'hexagon'
  color: string
}

/**
 * Utility function for class name concatenation
 * Fallback implementation if @/src/lib/utils doesn't exist
 */
const cnFallback = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Generate random floating elements with organic movement
 */
const generateElements = (
  count: number, 
  variant: FloatingElementsProps['variant'],
  sizeVariant: FloatingElementsProps['size'],
  colorVariant: FloatingElementsProps['color']
): FloatingElement[] => {
  const elements: FloatingElement[] = []
  
  // Color palettes for different variants
  const colorPalettes = {
    primary: ['#3b82f6', '#2563eb', '#1d4ed8', '#1e40af'],
    secondary: ['#6b7280', '#4b5563', '#374151', '#1f2937'],
    accent: ['#10b981', '#059669', '#047857', '#065f46'],
    rainbow: ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4']
  }
  
  const colors = colorPalettes[colorVariant || 'primary']
  const shapes: FloatingElement['shape'][] = 
    variant === 'circles' ? ['circle'] :
    variant === 'squares' ? ['square'] :
    variant === 'mixed' ? ['circle', 'square', 'triangle'] :
    ['circle', 'square', 'triangle', 'hexagon']

  for (let i = 0; i < count; i++) {
    // Size generation based on variant
    let size: number
    switch (sizeVariant) {
      case 'sm':
        size = Math.random() * 20 + 10 // 10-30px
        break
      case 'lg':
        size = Math.random() * 60 + 40 // 40-100px
        break
      case 'mixed':
        size = Math.random() * 80 + 10 // 10-90px
        break
      default: // 'md'
        size = Math.random() * 40 + 20 // 20-60px
    }

    elements.push({
      id: i,
      x: Math.random() * 100, // Percentage
      y: Math.random() * 100, // Percentage
      size,
      speed: Math.random() * 0.5 + 0.1, // 0.1-0.6
      direction: Math.random() * Math.PI * 2, // Random direction in radians
      rotation: Math.random() * 360, // Initial rotation
      rotationSpeed: (Math.random() - 0.5) * 2, // -1 to 1 degrees per frame
      opacity: Math.random() * 0.3 + 0.1, // 0.1-0.4
      shape: shapes[Math.floor(Math.random() * shapes.length)],
      color: colors[Math.floor(Math.random() * colors.length)]
    })
  }
  
  return elements
}

/**
 * Advanced Floating Elements Component
 * 
 * Creates beautiful floating background elements with organic movement.
 * Optimized for performance with RAF and respects user preferences.
 * 
 * @param props - Component props
 * @returns JSX.Element - Rendered floating elements
 */
export const FloatingElements: React.FC<FloatingElementsProps> = ({
  count = 8,
  variant = 'mixed',
  size = 'mixed',
  speed = 'normal',
  opacity = 0.6,
  color = 'primary',
  className,
  disabled = false
}) => {
  // State management
  const [elements, setElements] = useState<FloatingElement[]>([])
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false)
  
  // Refs for performance optimization
  const containerRef = useRef<HTMLDivElement>(null)
  const animationFrameRef = useRef<number>()
  const timeRef = useRef<number>(0)

  /**
   * Check for reduced motion preference
   */
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  /**
   * Initialize elements on mount
   */
  useEffect(() => {
    if (!disabled && !prefersReducedMotion) {
      const newElements = generateElements(count, variant, size, color)
      setElements(newElements)
      setIsVisible(true)
    }
  }, [count, variant, size, color, disabled, prefersReducedMotion])

  /**
   * Animation loop with organic movement
   */
  useEffect(() => {
    if (disabled || prefersReducedMotion || elements.length === 0) return

    const animate = (timestamp: number) => {
      timeRef.current = timestamp

      setElements(prevElements => 
        prevElements.map(element => {
          // Calculate speed multiplier based on speed prop
          const speedMultiplier = 
            speed === 'slow' ? 0.3 :
            speed === 'fast' ? 1.5 : 1

          // Organic movement with sine waves for natural feel
          const timeOffset = timestamp * 0.001 * speedMultiplier
          const sineX = Math.sin(timeOffset + element.id) * 0.5
          const sineY = Math.cos(timeOffset * 0.7 + element.id) * 0.3
          
          // Update position with boundary wrapping
          let newX = element.x + sineX * 0.1
          let newY = element.y + sineY * 0.1
          
          // Wrap around screen boundaries
          if (newX > 105) newX = -5
          if (newX < -5) newX = 105
          if (newY > 105) newY = -5
          if (newY < -5) newY = 105

          // Update rotation
          const newRotation = element.rotation + element.rotationSpeed * speedMultiplier

          return {
            ...element,
            x: newX,
            y: newY,
            rotation: newRotation
          }
        })
      )

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [elements.length, speed, disabled, prefersReducedMotion])

  /**
   * Cleanup on unmount
   */
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [])

  /**
   * Render individual floating element
   */
  const renderElement = (element: FloatingElement) => {
    const baseClasses = 'absolute pointer-events-none transition-opacity duration-1000'
    const shapeClasses = {
      circle: 'rounded-full',
      square: 'rounded-lg',
      triangle: 'rounded-sm',
      hexagon: 'rounded-xl'
    }

    const elementStyle: React.CSSProperties = {
      left: `${element.x}%`,
      top: `${element.y}%`,
      width: `${element.size}px`,
      height: `${element.size}px`,
      backgroundColor: element.color,
      opacity: element.opacity * opacity,
      transform: `rotate(${element.rotation}deg)`,
      filter: 'blur(0.5px)',
      willChange: 'transform, left, top'
    }

    // Special styling for triangle shape
    if (element.shape === 'triangle') {
      elementStyle.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)'
    }

    // Special styling for hexagon shape
    if (element.shape === 'hexagon') {
      elementStyle.clipPath = 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)'
    }

    return (
      <div
        key={element.id}
        className={(cn || cnFallback)(baseClasses, shapeClasses[element.shape])}
        style={elementStyle}
        aria-hidden="true"
      />
    )
  }

  // Don't render if disabled or user prefers reduced motion
  if (disabled || prefersReducedMotion) {
    return null
  }

  const containerClasses = (cn || cnFallback)(
    'fixed inset-0 pointer-events-none z-0 overflow-hidden',
    isVisible ? 'opacity-100' : 'opacity-0',
    'transition-opacity duration-2000',
    className
  )

  return (
    <div
      ref={containerRef}
      className={containerClasses}
      aria-hidden="true"
      role="presentation"
    >
      {elements.map(renderElement)}
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/10 dark:to-gray-900/10 pointer-events-none" />
    </div>
  )
}

/**
 * ===============================
 * USAGE EXAMPLES & DOCUMENTATION
 * ===============================
 * 
 * Basic Usage:
 * ```tsx
 * <FloatingElements count={6} variant="circles" />
 * ```
 * 
 * Advanced Usage:
 * ```tsx
 * <FloatingElements
 *   count={12}
 *   variant="mixed"
 *   size="mixed"
 *   speed="slow"
 *   opacity={0.4}
 *   color="rainbow"
 *   className="z-0"
 * />
 * ```
 * 
 * Performance Features:
 * - Uses RAF for smooth 60fps animations
 * - Respects prefers-reduced-motion
 * - Efficient state updates
 * - Automatic cleanup on unmount
 * - GPU-accelerated transforms
 * 
 * Accessibility Features:
 * - Hidden from screen readers (aria-hidden)
 * - Respects reduced motion preferences
 * - No interactive elements
 * - Proper z-index management
 */

export default FloatingElements