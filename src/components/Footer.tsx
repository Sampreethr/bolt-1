'use client'

import { Shield, Phone, Mail, MapPin, Facebook, Linkedin, Twitter, ExternalLink } from 'lucide-react'
import Link from 'next/link'

export default function Footer() {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    { name: 'Trust Account Audits', href: '#services' },
    { name: 'Compliance Reviews', href: '#services' },
    { name: 'Financial Analysis', href: '#services' },
    { name: 'Ongoing Support', href: '#services' },
    { name: 'Emergency Consultation', href: '#services' },
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Professional Standards', href: '#' },
    { name: 'ASIC Compliance', href: '#' },
  ]

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'LinkedIn', icon: Linkedin, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
  ]

  return (
    <footer className="bg-slate-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-2 bg-gradient-to-br from-primary-600 to-gold-600 rounded-xl">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gradient">AuditsPro</span>
                <span className="text-xs text-slate-400 font-medium">Australia</span>
              </div>
            </div>
            
            <p className="text-slate-300 mb-6 leading-relaxed">
              Australia's premier trust account auditing service, providing professional, 
              reliable, and comprehensive audit solutions since 2008.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span className="text-slate-300">1300 AUDITS (283 487)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span className="text-slate-300">info@auditspro.com.au</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-gold-400 flex-shrink-0" />
                <span className="text-slate-300">Melbourne, Sydney, Brisbane</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link 
                    href={service.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{service.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">Legal & Compliance</h3>
            <ul className="space-y-3 mb-6">
              {legalLinks.map((link, index) => (
                <li key={index}>
                  <Link 
                    href={link.href}
                    className="text-slate-300 hover:text-gold-400 transition-colors duration-200 flex items-center space-x-2 group"
                  >
                    <span>{link.name}</span>
                    <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Professional Certifications */}
            <div className="glass-morphism rounded-2xl p-4 bg-slate-800/50">
              <h4 className="font-semibold text-white mb-3">Certified & Registered</h4>
              <div className="space-y-2 text-sm text-slate-300">
                <div>✓ ASIC Registered Auditors</div>
                <div>✓ CPA Australia Members</div>
                <div>✓ ISO 9001 Certified</div>
                <div>✓ Professional Indemnity Insured</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-slate-700 mt-12 pt-12">
          <div className="glass-morphism rounded-3xl p-8 bg-gradient-to-r from-primary-900/20 to-gold-900/20">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">
                Stay Updated with Australian Compliance Changes
              </h3>
              <p className="text-slate-300 mb-6">
                Get the latest updates on trust account regulations, compliance requirements, and industry news.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-gold-400"
                />
                <button className="btn-secondary px-6 py-3 whitespace-nowrap">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-slate-700 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-slate-400 text-sm">
              © {new Date().getFullYear()} AuditsPro Australia. All rights reserved. | ABN: 12 345 678 901
            </div>
            
            <div className="flex items-center space-x-6">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="text-slate-400 hover:text-gold-400 transition-colors duration-200 transform hover:scale-110"
                  aria-label={social.name}
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