/**
 * ===============================
 * SUBSCRIBER MANAGEMENT SYSTEM
 * ===============================
 * 
 * Simple file-based subscriber storage for email subscriptions.
 * In production, replace with database storage.
 */

import { promises as fs } from 'fs'
import path from 'path'

interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
  status: 'active' | 'unsubscribed';
  confirmationSent: boolean;
}

const SUBSCRIBERS_FILE = path.join(process.cwd(), 'data', 'subscribers.json')

// Ensure data directory exists
async function ensureDataDirectory() {
  const dataDir = path.dirname(SUBSCRIBERS_FILE)
  try {
    await fs.access(dataDir)
  } catch {
    await fs.mkdir(dataDir, { recursive: true })
  }
}

// Load subscribers from file
async function loadSubscribers(): Promise<Subscriber[]> {
  try {
    await ensureDataDirectory()
    const data = await fs.readFile(SUBSCRIBERS_FILE, 'utf-8')
    return JSON.parse(data)
  } catch (error) {
    // File doesn't exist or is invalid, return empty array
    return []
  }
}

// Save subscribers to file
async function saveSubscribers(subscribers: Subscriber[]): Promise<void> {
  await ensureDataDirectory()
  await fs.writeFile(SUBSCRIBERS_FILE, JSON.stringify(subscribers, null, 2))
}

// Add new subscriber
export async function addSubscriber(
  email: string, 
  source: string = 'unknown'
): Promise<{ success: boolean; message: string; alreadyExists: boolean }> {
  try {
    const subscribers = await loadSubscribers()
    const normalizedEmail = email.toLowerCase().trim()
    
    // Check if already exists
    const existingSubscriber = subscribers.find(sub => sub.email === normalizedEmail)
    
    if (existingSubscriber) {
      if (existingSubscriber.status === 'active') {
        return {
          success: true,
          message: 'You are already subscribed to our compliance updates!',
          alreadyExists: true
        }
      } else {
        // Reactivate unsubscribed user
        existingSubscriber.status = 'active'
        existingSubscriber.subscribedAt = new Date().toISOString()
        existingSubscriber.source = source
        await saveSubscribers(subscribers)
        
        return {
          success: true,
          message: 'Welcome back! Your subscription has been reactivated.',
          alreadyExists: false
        }
      }
    }
    
    // Add new subscriber
    const newSubscriber: Subscriber = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      source,
      status: 'active',
      confirmationSent: false
    }
    
    subscribers.push(newSubscriber)
    await saveSubscribers(subscribers)
    
    return {
      success: true,
      message: 'Successfully subscribed! Check your email for confirmation.',
      alreadyExists: false
    }
    
  } catch (error) {
    console.error('Error adding subscriber:', error)
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
      alreadyExists: false
    }
  }
}

// Check if email is subscribed
export async function isSubscribed(email: string): Promise<boolean> {
  try {
    const subscribers = await loadSubscribers()
    const normalizedEmail = email.toLowerCase().trim()
    const subscriber = subscribers.find(sub => sub.email === normalizedEmail)
    return subscriber?.status === 'active'
  } catch (error) {
    console.error('Error checking subscription:', error)
    return false
  }
}

// Get all active subscribers
export async function getActiveSubscribers(): Promise<Subscriber[]> {
  try {
    const subscribers = await loadSubscribers()
    return subscribers.filter(sub => sub.status === 'active')
  } catch (error) {
    console.error('Error getting subscribers:', error)
    return []
  }
}

// Get subscription stats
export async function getSubscriptionStats(): Promise<{
  total: number;
  active: number;
  unsubscribed: number;
  sources: Record<string, number>;
}> {
  try {
    const subscribers = await loadSubscribers()
    const active = subscribers.filter(sub => sub.status === 'active')
    const unsubscribed = subscribers.filter(sub => sub.status === 'unsubscribed')
    
    const sources: Record<string, number> = {}
    subscribers.forEach(sub => {
      sources[sub.source] = (sources[sub.source] || 0) + 1
    })
    
    return {
      total: subscribers.length,
      active: active.length,
      unsubscribed: unsubscribed.length,
      sources
    }
  } catch (error) {
    console.error('Error getting stats:', error)
    return { total: 0, active: 0, unsubscribed: 0, sources: {} }
  }
}

// Mark confirmation email as sent
export async function markConfirmationSent(email: string): Promise<void> {
  try {
    const subscribers = await loadSubscribers()
    const normalizedEmail = email.toLowerCase().trim()
    const subscriber = subscribers.find(sub => sub.email === normalizedEmail)
    
    if (subscriber) {
      subscriber.confirmationSent = true
      await saveSubscribers(subscribers)
    }
  } catch (error) {
    console.error('Error marking confirmation sent:', error)
  }
}