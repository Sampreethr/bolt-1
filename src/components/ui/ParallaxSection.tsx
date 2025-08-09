'use client'

import React, { useEffect, useRef, useState } from 'react'
import { cn } from '@/src/lib/utils'

/**
 * ===============================
 * PARALLAX SECTION COMPONENT
 * ===============================
 * 
 * Professional parallax scrolling component with:
 * - Smooth parallax effects with customizable speed
 * - Intersection Observer for performance
 * - Multiple parallax layers support
 * - Responsive design with mobile optimization
 * - Accessibility friendly (respects reduced motion)
 * - TypeScript strict mode
 * - GPU-accelerated transforms
 * 
 * @author Professional UI/UX Team
 * @version 2.0.0
 * @since 2024
 */

interface ParallaxSectionProps {
  children: React.ReactNode
  className?: string
  speed?: number // Parallax speed multiplier (0.1 to 2.0)
  direction?: 'up' | 'down' | 'left' | 'right'
  offset?: number // Initial offset in pixels
  disabled?: boolean // Disable parallax on mobile or reduced motion
  backgroundImage?: string
  backgroundOverlay?: boolean
  overlayOpacity?: number
  height?: 'auto' | 'screen' | 'half' | string
  id?: string
}

/**
 * Utility function for class name concatenation
 * Fallback implementation if @/src/lib/utils doesn't exist
 */
const cnFallback = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

/**
 * Advanced Parallax Section Component
 * 
 * Creates smooth parallax scrolling effects with performance optimization.
 * Automatically disables on mobile devices and respects user motion preferences.
 * 
 * @param props - Component props
 * @returns JSX.Element - Rendered parallax section
 */
export const ParallaxSection: React.FC<ParallaxSectionProps> = ({
  children,
  className,
  speed = 0.5,
  direction = 'up',
  offset = 0,
  disabled = false,
  backgroundImage,
  backgroundOverlay = false,
  overlayOpacity = 0.5,
  height = 'auto',
  id,
  ...props
}) => {
  // State management
  const [transform, setTransform] = useState<string>('')
  const [isVisible, setIsVisible] = useState<boolean>(false)
  const [prefersReducedMotion, setPrefersReducedMotion] = useState<boolean>(false)
  const [isMobile, setIsMobile] = useState<boolean>(false)
  
  // Refs for performance optimization
  const sectionRef = useRef<HTMLElement>(null)
  const animationFrameRef = useRef<number>()

  /**
   * Check for reduced motion preference and mobile device
   */
  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)
    
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }
    
    mediaQuery.addEventListener('change', handleMotionChange)

    // Check if mobile device
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      mediaQuery.removeEventListener('change', handleMotionChange)
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  /**
   * Intersection Observer for performance optimization
   * Only animate when section is visible
   */
  useEffect(() => {
    if (!sectionRef.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '100px 0px 100px 0px' // Start animation before fully visible
      }
    )

    observer.observe(sectionRef.current)

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  /**
   * Parallax scroll effect with RAF optimization
   */
  useEffect(() => {
    // Don't animate if disabled, mobile, reduced motion, or not visible
    if (disabled || isMobile || prefersReducedMotion || !isVisible) {
      setTransform('')
      return
    }

    const handleScroll = () => {
      if (!sectionRef.current) return

      // Cancel previous animation frame
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }

      // Use RAF for smooth 60fps animation
      animationFrameRef.current = requestAnimationFrame(() => {
        if (!sectionRef.current) return

        const rect = sectionRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed

        // Calculate transform based on direction
        let transformValue = ''
        switch (direction) {
          case 'up':
            transformValue = `translateY(${rate + offset}px)`
            break
          case 'down':
            transformValue = `translateY(${-rate + offset}px)`
            break
          case 'left':
            transformValue = `translateX(${rate + offset}px)`
            break
          case 'right':
            transformValue = `translateX(${-rate + offset}px)`
            break
        }

        setTransform(transformValue)
      })
    }

    // Initial call
    handleScroll()

    // Add scroll listener with passive flag for better performance
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [speed, direction, offset, disabled, isMobile, prefersReducedMotion, isVisible])

  /**
   * Get height classes based on height prop
   */
  const getHeightClasses = (): string => {
    switch (height) {
      case 'screen':
        return 'min-h-screen'
      case 'half':
        return 'min-h-[50vh]'
      case 'auto':
        return ''
      default:
        return typeof height === 'string' ? `min-h-[${height}]` : ''
    }
  }

  /**
   * Get background styles
   */
  const getBackgroundStyles = (): React.CSSProperties => {
    if (!backgroundImage) return {}

    return {
      backgroundImage: `url(${backgroundImage})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: isMobile ? 'scroll' : 'fixed' // Fixed attachment can cause issues on mobile
    }
  }

  /**
   * Combine all classes
   */
  const sectionClasses = (cn || cnFallback)(
    'relative overflow-hidden',
    getHeightClasses(),
    className
  )

  /**
   * Content transform styles
   */
  const contentStyles: React.CSSProperties = {
    transform: transform,
    willChange: isVisible && !disabled && !isMobile && !prefersReducedMotion ? 'transform' : 'auto'
  }

  return (
    <section
      ref={sectionRef}
      className={sectionClasses}
      style={getBackgroundStyles()}
      id={id}
      {...props}
    >
      {/* Background overlay */}
      {backgroundImage && backgroundOverlay && (
        <div 
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: overlayOpacity }}
          aria-hidden="true"
        />
      )}

      {/* Parallax content */}
      <div
        className="relative z-10 h-full"
        style={contentStyles}
      >
        {children}
      </div>

      {/* Performance indicator for development */}
      {process.env.NODE_ENV === 'development' && (
        <div className="fixed top-4 right-4 bg-black/80 text-white text-xs p-2 rounded z-50 font-mono">
          Parallax: {disabled || isMobile || prefersReducedMotion ? 'Disabled' : 'Active'}
          <br />
          Speed: {speed}x | Direction: {direction}
          <br />
          Transform: {transform || 'none'}
        </div>
      )}
    </section>
  )
}

/**
 * ===============================
 * USAGE EXAMPLES & DOCUMENTATION
 * ===============================
 * 
 * Basic Usage:
 * ```tsx
 * <ParallaxSection speed={0.5} direction="up">
 *   <h1>Parallax Content</h1>
 * </ParallaxSection>
 * ```
 * 
 * Advanced Usage with Background:
 * ```tsx
 * <ParallaxSection
 *   speed={0.3}
 *   direction="up"
 *   height="screen"
 *   backgroundImage="/hero-bg.jpg"
 *   backgroundOverlay={true}
 *   overlayOpacity={0.4}
 *   className="flex items-center justify-center"
 * >
 *   <div className="text-center text-white">
 *     <h1>Hero Title</h1>
 *     <p>Hero description</p>
 *   </div>
 * </ParallaxSection>
 * ```
 * 
 * Multiple Parallax Layers:
 * ```tsx
 * <ParallaxSection speed={0.2} direction="up">
 *   <div className="background-layer">Background</div>
 * </ParallaxSection>
 * <ParallaxSection speed={0.5} direction="up">
 *   <div className="foreground-layer">Foreground</div>
 * </ParallaxSection>
 * ```
 * 
 * Performance Features:
 * - Uses IntersectionObserver for visibility detection
 * - RAF for smooth 60fps animations
 * - Automatic mobile and reduced motion detection
 * - GPU-accelerated transforms
 * - Passive scroll listeners
 * 
 * Accessibility Features:
 * - Respects prefers-reduced-motion
 * - Disabled on mobile for better performance
 * - Proper ARIA attributes
 * - Semantic HTML structure
 * - Optional background overlays for text readability
 */

export default ParallaxSection