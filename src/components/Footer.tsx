'use client'

import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ExternalLink, Home, Briefcase, Users, Star, FileCheck, BarChart3, Headphones, AlertCircle, Lock, FileText, Award, CheckCircle } from 'lucide-react'
import Link from 'next/link'

/**
 * Professional Footer Component
 * - Enhanced with semantic icons for better UX
 * - Consistent with 3-color professional palette
 * - 100% responsive across all device types
 * - Enterprise-level appearance for trust and credibility
 */
export default function Footer() {
  // Quick Links with semantic icons matching header navigation
  const quickLinks = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Services', href: '#services', icon: Briefcase },
    { name: 'About Us', href: '#about', icon: Users },
    { name: 'Testimonials', href: '#testimonials', icon: Star },
    { name: 'Contact', href: '#contact', icon: Mail },
  ]

  // Services with relevant business icons
  const services = [
    { name: 'Trust Account Audits', href: '#services', icon: FileCheck },
    { name: 'Compliance Reviews', href: '#services', icon: Shield },
    { name: 'Financial Analysis', href: '#services', icon: BarChart3 },
    { name: 'Ongoing Support', href: '#services', icon: Headphones },
    { name: 'Emergency Consultation', href: '#services', icon: AlertCircle },
  ]

  // Legal links with appropriate security/legal icons
  const legalLinks = [
    { name: 'Privacy Policy', href: '#', icon: Lock },
    { name: 'Terms of Service', href: '#', icon: FileText },
    { name: 'Professional Standards', href: '#', icon: Award },
    { name: 'ASIC Compliance', href: '#', icon: CheckCircle },
  ]

  // Social media links (unchanged structure)
  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ]

  // Professional certification items with appropriate icons
  const certifications = [
    { text: 'ASIC Registered Auditors', icon: Shield },
    { text: 'CPA Australia Members', icon: Award },
    { text: 'ISO 9001 Certified', icon: CheckCircle },
    { text: 'Professional Indemnity Insured', icon: Shield },
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Information Section */}
          <div className="lg:col-span-1">
            {/* Company Logo and Branding */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-primary-500 rounded-xl shadow-md">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white">AuditsPro</span>
                <span className="text-xs text-gray-400 font-medium">Australia</span>
              </div>
            </div>
            
            {/* Company Description */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              Australia's premier trust account auditing service, providing professional, 
              reliable, and comprehensive audit solutions since 2008.
            </p>

            {/* Contact Information */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">1300 AUDITS (283 487)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">info@auditspro.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-gray-300">Melbourne, Sydney, Brisbane</span>
              </div>
            </div>
          </div>

          {/* Quick Links Section with Icons */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                      aria-label={`Navigate to ${link.name}`}
                    >
                      <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0" />
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Services Section with Icons */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => {
                const IconComponent = service.icon
                return (
                  <li key={index}>
                    <Link 
                      href={service.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                      aria-label={`Learn about ${service.name}`}
                    >
                      <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0" />
                      <span>{service.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </div>

          {/* Legal & Compliance Section with Icons */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <li key={index}>
                    <Link 
                      href={link.href}
                      className="flex items-center space-x-3 text-gray-300 hover:text-primary-400 transition-colors duration-200 group"
                      aria-label={`View ${link.name}`}
                    >
                      <IconComponent className="h-4 w-4 text-gray-500 group-hover:text-primary-400 transition-colors duration-200 flex-shrink-0" />
                      <span>{link.name}</span>
                      <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200 ml-auto" />
                    </Link>
                  </li>
                )
              })}
            </ul>

            {/* Professional Certifications with Enhanced Icons */}
            <div className="bg-gray-800 rounded-2xl p-4 border border-gray-600">
              <h4 className="font-semibold text-white mb-3">Certified & Registered</h4>
              <div className="space-y-2 text-sm text-gray-300">
                {certifications.map((cert, index) => {
                  const IconComponent = cert.icon
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-primary-400 flex-shrink-0" />
                      <span>✓ {cert.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="border-t border-gray-600 mt-12 pt-12">
          <div className="bg-gray-800 rounded-2xl p-8 border border-gray-600">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Australian Compliance Changes
              </h3>
              <p className="text-gray-300 mb-6">
                Get the latest updates on trust account regulations, compliance requirements, and industry news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 bg-gray-700 border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-200"
                  aria-label="Email address for newsletter subscription"
                />
                <button className="bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 whitespace-nowrap min-h-[44px]">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="border-t border-gray-600 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright Information */}
            <div className="text-gray-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} AuditsPro Australia. All rights reserved. | ABN: 12 345 678 901
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200 transform hover:scale-110"
                  aria-label={`Follow us on ${social.name}`}
                >
                  <social.icon className="h-5 w-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}