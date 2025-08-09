/**
 * ===============================
 * UTILITY FUNCTIONS LIBRARY
 * ===============================
 * 
 * Professional utility functions for:
 * - Class name concatenation and conditional styling
 * - Type-safe operations
 * - Performance optimized implementations
 * - Reusable across the entire application
 * 
 * @author Professional Development Team
 * @version 2.0.0
 * @since 2024
 */

import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Combines class names with proper Tailwind CSS merging
 * 
 * This function combines clsx for conditional class names
 * with tailwind-merge for proper Tailwind CSS class deduplication.
 * 
 * Features:
 * - Handles conditional classes
 * - Merges conflicting Tailwind classes properly
 * - Type-safe with TypeScript
 * - Performance optimized
 * 
 * @param inputs - Class values to combine
 * @returns Combined and deduplicated class string
 * 
 * @example
 * ```tsx
 * cn('px-4 py-2', 'bg-blue-500', { 'text-white': isActive })
 * // Returns: "px-4 py-2 bg-blue-500 text-white"
 * 
 * cn('px-4', 'px-6') // Conflicting classes
 * // Returns: "px-6" (tailwind-merge handles deduplication)
 * ```
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs))
}

/**
 * Formats a number as currency
 * 
 * @param amount - The amount to format
 * @param currency - Currency code (default: 'AUD')
 * @param locale - Locale for formatting (default: 'en-AU')
 * @returns Formatted currency string
 * 
 * @example
 * ```tsx
 * formatCurrency(1234.56) // Returns: "$1,234.56"
 * formatCurrency(1234.56, 'USD', 'en-US') // Returns: "$1,234.56"
 * ```
 */
export function formatCurrency(
  amount: number,
  currency: string = 'AUD',
  locale: string = 'en-AU'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

/**
 * Debounce function for performance optimization
 * 
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 * 
 * @example
 * ```tsx
 * const debouncedSearch = debounce((query: string) => {
 *   // Search logic here
 * }, 300)
 * ```
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null
  
  return (...args: Parameters<T>) => {
    if (timeout) {
      clearTimeout(timeout)
    }
    
    timeout = setTimeout(() => {
      func(...args)
    }, wait)
  }
}

/**
 * Throttle function for performance optimization
 * 
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 * 
 * @example
 * ```tsx
 * const throttledScroll = throttle(() => {
 *   // Scroll logic here
 * }, 100)
 * ```
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean = false
  
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args)
      inThrottle = true
      setTimeout(() => {
        inThrottle = false
      }, limit)
    }
  }
}

/**
 * Generate a random ID string
 * 
 * @param length - Length of the ID (default: 8)
 * @returns Random ID string
 * 
 * @example
 * ```tsx
 * const id = generateId() // Returns: "a1b2c3d4"
 * const longId = generateId(16) // Returns: "a1b2c3d4e5f6g7h8"
 * ```
 */
export function generateId(length: number = 8): string {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  
  for (let i = 0; i < length; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  
  return result
}

/**
 * Check if a value is empty (null, undefined, empty string, empty array, empty object)
 * 
 * @param value - Value to check
 * @returns True if empty, false otherwise
 * 
 * @example
 * ```tsx
 * isEmpty('') // true
 * isEmpty([]) // true
 * isEmpty({}) // true
 * isEmpty(null) // true
 * isEmpty('hello') // false
 * ```
 */
export function isEmpty(value: any): boolean {
  if (value == null) return true
  if (typeof value === 'string') return value.trim().length === 0
  if (Array.isArray(value)) return value.length === 0
  if (typeof value === 'object') return Object.keys(value).length === 0
  return false
}

/**
 * Clamp a number between min and max values
 * 
 * @param value - Value to clamp
 * @param min - Minimum value
 * @param max - Maximum value
 * @returns Clamped value
 * 
 * @example
 * ```tsx
 * clamp(5, 0, 10) // 5
 * clamp(-5, 0, 10) // 0
 * clamp(15, 0, 10) // 10
 * ```
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max)
}

/**
 * Convert a string to title case
 * 
 * @param str - String to convert
 * @returns Title case string
 * 
 * @example
 * ```tsx
 * toTitleCase('hello world') // "Hello World"
 * toTitleCase('HELLO WORLD') // "Hello World"
 * ```
 */
export function toTitleCase(str: string): string {
  return str
    .toLowerCase()
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

/**
 * Format a date in a human-readable format
 * 
 * @param date - Date to format
 * @param locale - Locale for formatting (default: 'en-AU')
 * @returns Formatted date string
 * 
 * @example
 * ```tsx
 * formatDate(new Date()) // "15 December 2024"
 * formatDate(new Date(), 'en-US') // "December 15, 2024"
 * ```
 */
export function formatDate(date: Date, locale: string = 'en-AU'): string {
  return new Intl.DateTimeFormat(locale, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date)
}

/**
 * Calculate reading time for text content
 * 
 * @param text - Text content
 * @param wordsPerMinute - Reading speed (default: 200)
 * @returns Reading time in minutes
 * 
 * @example
 * ```tsx
 * calculateReadingTime('Lorem ipsum...') // 2
 * ```
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length
  return Math.ceil(words / wordsPerMinute)
}

/**
 * Validate email address format
 * 
 * @param email - Email address to validate
 * @returns True if valid, false otherwise
 * 
 * @example
 * ```tsx
 * isValidEmail('test@example.com') // true
 * isValidEmail('invalid-email') // false
 * ```
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

/**
 * Validate Australian phone number format
 * 
 * @param phone - Phone number to validate
 * @returns True if valid, false otherwise
 * 
 * @example
 * ```tsx
 * isValidAustralianPhone('0412345678') // true
 * isValidAustralianPhone('+61412345678') // true
 * isValidAustralianPhone('invalid') // false
 * ```
 */
export function isValidAustralianPhone(phone: string): boolean {
  const phoneRegex = /^(\+61|0)[2-9]\d{8}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Sleep function for async operations
 * 
 * @param ms - Milliseconds to sleep
 * @returns Promise that resolves after the specified time
 * 
 * @example
 * ```tsx
 * await sleep(1000) // Wait 1 second
 * ```
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Type guard to check if a value is not null or undefined
 * 
 * @param value - Value to check
 * @returns True if value is not null or undefined
 * 
 * @example
 * ```tsx
 * const values = [1, null, 2, undefined, 3]
 * const filtered = values.filter(isNotNullish) // [1, 2, 3]
 * ```
 */
export function isNotNullish<T>(value: T | null | undefined): value is T {
  return value != null
}

/**
 * ===============================
 * EXPORT ALL UTILITIES
 * ===============================
 */
export default {
  cn,
  formatCurrency,
  debounce,
  throttle,
  generateId,
  isEmpty,
  clamp,
  toTitleCase,
  formatDate,
  calculateReadingTime,
  isValidEmail,
  isValidAustralianPhone,
  sleep,
  isNotNullish,
}