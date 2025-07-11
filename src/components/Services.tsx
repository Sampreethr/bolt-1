'use client'

import { 
  FileCheck, 
  Shield, 
  BarChart3, 
  Users, 
  Award, 
  CheckCircle, 
  ArrowRight, 
  DollarSign, 
  Calendar, 
  Home, 
  Scale, 
  Building, 
  MapPin,
  Clock,
  Star,
  Filter,
  Loader2
} from 'lucide-react'
import { useState, useCallback, useMemo, memo } from 'react'
import Link from 'next/link'

// Enhanced TypeScript interfaces for better type safety
interface ServiceFeature {
  readonly text: string;
  readonly highlighted?: boolean;
  readonly icon?: React.ComponentType<{ className?: string }>;
}

interface MainService {
  readonly id: string;
  readonly icon: React.ComponentType<{ className?: string }>;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
  readonly price: string;
  readonly gst: boolean;
  readonly duration: string;
  readonly popular: boolean;
  readonly category: 'legal' | 'property' | 'financial';
  readonly features: readonly ServiceFeature[];
  readonly estimatedHours: number;
  readonly complexity: 'standard' | 'premium' | 'enterprise';
}

interface CategoryFilter {
  readonly key: string;
  readonly label: string;
  readonly count: number;
}

/**
 * Memoized Service Card Component for better performance
 */
const ServiceCard = memo<{
  service: MainService;
  index: number;
  calculateTotalPrice: (price: number) => number;
}>(({ service, index, calculateTotalPrice }) => {
  const IconComponent = service.icon;
  const totalPrice = calculateTotalPrice(parseInt(service.price.replace(/[,$]/g, '')));

  return (
    <article 
      className={`
        relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300
        hover:shadow-xl hover:-translate-y-1 group h-full flex flex-col
        ${service.popular 
          ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-white' 
          : 'border-gray-200 hover:border-primary-300'
        }
      `}
      role="article"
      aria-labelledby={`service-${index}-title`}
    >
      {/* Popular Badge */}
      {service.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
          <span className="bg-primary-500 text-white px-3 sm:px-4 py-2 rounded-full text-sm font-medium shadow-lg flex items-center">
            <Star className="h-4 w-4 mr-1" aria-hidden="true" />
            Most Popular
          </span>
        </div>
      )}

      {/* Complexity Badge */}
      <div className="absolute top-4 right-4">
        <span className={`
          px-2 sm:px-3 py-1 rounded-full text-xs font-medium
          ${service.complexity === 'premium' 
            ? 'bg-purple-100 text-purple-700' 
            : service.complexity === 'enterprise'
            ? 'bg-red-100 text-red-700'
            : 'bg-green-100 text-green-700'
          }
        `}>
          {service.complexity.charAt(0).toUpperCase() + service.complexity.slice(1)}
        </span>
      </div>

      <div className="p-4 sm:p-6 lg:p-8 flex flex-col flex-1">
        {/* Service Header */}
        <div className="flex items-start space-x-3 sm:space-x-4 mb-4 sm:mb-6">
          <div className="p-3 sm:p-4 bg-primary-500 rounded-xl text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
            <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" aria-hidden="true" />
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-xs sm:text-sm font-medium text-primary-600 mb-1">
              {service.subtitle}
            </div>
            <h3 
              id={`service-${index}-title`}
              className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 leading-tight"
            >
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>

        {/* Enhanced Pricing Section */}
        <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-baseline justify-between mb-2">
            <div className="flex items-baseline space-x-2">
              <span className="text-xl sm:text-2xl lg:text-3xl font-bold text-primary-600">
                ${service.price}
              </span>
              {service.gst && (
                <span className="text-xs sm:text-sm text-gray-500">+ GST</span>
              )}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-500">Est. Hours</div>
              <div className="text-sm font-semibold text-gray-700">
                {service.estimatedHours}h
              </div>
            </div>
          </div>
          
          {service.gst && (
            <div className="text-sm text-gray-600 mb-3">
              <strong>Total: ${totalPrice}</strong> (inc. GST)
            </div>
          )}
          
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4 text-primary-500 flex-shrink-0" aria-hidden="true" />
              <span className="text-gray-600">{service.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-green-500 flex-shrink-0" aria-hidden="true" />
              <span className="text-green-600 font-medium text-xs sm:text-sm">ASIC Compliant</span>
            </div>
          </div>
        </div>

        {/* Enhanced Features List */}
        <div className="mb-6 sm:mb-8 flex-1">
          <h4 className="font-semibold text-gray-900 mb-3 sm:mb-4 text-sm sm:text-base lg:text-lg flex items-center">
            <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-primary-500 mr-2" aria-hidden="true" />
            What's Included:
          </h4>
          <ul className="space-y-2 sm:space-y-3" role="list">
            {service.features.slice(0, 6).map((feature, featureIndex) => (
              <li 
                key={featureIndex} 
                className="flex items-start space-x-3"
                role="listitem"
              >
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0"></div>
                <span 
                  className={`text-sm sm:text-base leading-relaxed ${
                    feature.highlighted ? 'font-semibold text-gray-900' : 'text-gray-700'
                  }`}
                >
                  {feature.text}
                </span>
              </li>
            ))}
            {service.features.length > 6 && (
              <li className="text-sm text-primary-600 font-medium">
                + {service.features.length - 6} more features included
              </li>
            )}
          </ul>
        </div>

        {/* Enhanced CTA Button */}
        <div className="space-y-3 mt-auto">
          <Link
            href="#contact"
            className={`
              w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl font-semibold text-sm sm:text-base
              min-h-[44px] touch-manipulation
              transition-all duration-200 transform hover:scale-105 hover:-translate-y-0.5
              focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500
              text-center block shadow-md hover:shadow-lg flex items-center justify-center
              ${service.popular
                ? 'bg-primary-500 hover:bg-primary-600 text-white'
                : 'border-2 border-primary-500 text-primary-600 hover:bg-primary-500 hover:text-white'
              }
            `}
            aria-label={`Book ${service.title} audit for $${service.price}`}
          >
            <span>Book {service.title}</span>
            <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
          </Link>
          
          {/* Quick Contact Button */}
          <a
            href="tel:1300283487"
            className="w-full py-2 sm:py-3 px-4 rounded-lg font-medium text-sm border border-gray-300 text-gray-700 hover:border-primary-300 hover:text-primary-600 transition-all duration-200 text-center block min-h-[44px] touch-manipulation flex items-center justify-center"
            aria-label="Call for immediate assistance"
          >
            <span className="truncate">Call: 1300 AUDITS</span>
          </a>
        </div>
      </div>
    </article>
  );
});

ServiceCard.displayName = 'ServiceCard';

/**
 * Main Enhanced Services Component
 */
export default function EnhancedServices(): JSX.Element {
  // Enhanced state management with proper typing
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  /**
   * Main services configuration with enhanced data structure
   */
  const mainServices: readonly MainService[] = useMemo(() => [
    {
      id: 'real-estate',
      icon: Home,
      title: 'Real Estate Agents',
      subtitle: 'Most Popular Service',
      description: 'Comprehensive trust account audits for real estate agencies across all Australian states with full regulatory compliance and detailed reporting.',
      price: '499',
      gst: true,
      duration: '7-14 business days',
      popular: true,
      category: 'property' as const,
      estimatedHours: 8,
      complexity: 'standard' as const,
      features: [
        { text: 'Property sales trust account audit', highlighted: true },
        { text: 'Rental bond trust account verification' },
        { text: 'Commission trust account compliance' },
        { text: 'ASIC regulatory compliance certification' },
        { text: 'State-specific requirements analysis' },
        { text: 'Digital report delivery with findings' },
        { text: 'Post-audit support and recommendations' }
      ]
    },
    {
      id: 'solicitors',
      icon: Scale,
      title: 'Solicitors & Legal Practitioners',
      subtitle: 'Premium Comprehensive Service',
      description: 'Specialized comprehensive audits for legal practice trust accounts with enhanced reporting, risk assessment, and ongoing compliance support.',
      price: '1,500',
      gst: true,
      duration: '7-14 business days',
      popular: false,
      category: 'legal' as const,
      estimatedHours: 20,
      complexity: 'premium' as const,
      features: [
        { text: 'Legal practice trust account audit', highlighted: true },
        { text: 'Client funds verification and reconciliation' },
        { text: 'Professional conduct compliance assessment' },
        { text: 'Law society requirements verification' },
        { text: 'Complex transaction review and analysis' },
        { text: 'Comprehensive risk assessment report' },
        { text: 'Ongoing compliance support included' },
        { text: 'Staff training assistance available' }
      ]
    },
    {
      id: 'conveyancers',
      icon: FileCheck,
      title: 'Conveyancers',
      subtitle: 'Specialized Professional Service',
      description: 'Professional audits tailored for conveyancing practitioners with focus on settlement processes and comprehensive regulatory compliance.',
      price: '499',
      gst: true,
      duration: '7-14 business days',
      popular: false,
      category: 'property' as const,
      estimatedHours: 8,
      complexity: 'standard' as const,
      features: [
        { text: 'Conveyancing trust account audit' },
        { text: 'Settlement fund verification' },
        { text: 'Client money handling compliance' },
        { text: 'State conveyancing law compliance' },
        { text: 'Professional standards verification' },
        { text: 'Detailed audit reporting with recommendations' },
        { text: 'Risk assessment and mitigation guidance' }
      ]
    }
  ], []);

  /**
   * Calculate total price including GST with proper error handling
   */
  const calculateTotalPrice = useCallback((basePrice: number): number => {
    try {
      return Math.round(basePrice * 1.1);
    } catch (error) {
      console.error('Error calculating price:', error);
      return basePrice;
    }
  }, []);

  /**
   * Handle category filter change with loading state
   */
  const handleCategoryChange = useCallback(async (category: string) => {
    setIsLoading(true);
    setSelectedCategory(category);
    
    // Simulate processing delay for better UX
    await new Promise(resolve => setTimeout(resolve, 200));
    setIsLoading(false);
  }, []);

  /**
   * Filter services based on selected category with performance optimization
   */
  const filteredMainServices = useMemo(() => {
    if (selectedCategory === 'all') return mainServices;
    return mainServices.filter(service => service.category === selectedCategory);
  }, [mainServices, selectedCategory]);

  /**
   * Generate category filters with counts
   */
  const categoryFilters: readonly CategoryFilter[] = useMemo(() => [
    { 
      key: 'all', 
      label: 'All Services', 
      count: mainServices.length 
    },
    { 
      key: 'property', 
      label: 'Property Services', 
      count: mainServices.filter(s => s.category === 'property').length 
    },
    { 
      key: 'legal', 
      label: 'Legal Services', 
      count: mainServices.filter(s => s.category === 'legal').length 
    },
    { 
      key: 'financial', 
      label: 'Financial Services', 
      count: mainServices.filter(s => s.category === 'financial').length 
    }
  ], [mainServices]);

  return (
    <section 
      id="services" 
      className="services-enhanced bg-gray-50 relative isolate"
      role="main"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section with Enhanced Spacing */}
        <div className="page-header-enhanced text-center">
          <div className="inline-flex items-center px-3 sm:px-4 py-2 rounded-full bg-primary-50 text-primary-700 text-sm font-medium mb-4 sm:mb-6 border border-primary-200">
            <Award className="h-4 w-4 mr-2 flex-shrink-0" aria-hidden="true" />
            <span>Our Professional Services</span>
          </div>
          
          <h1 
            id="services-heading"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight"
          >
            <span className="text-gray-900 block">
              Professional Trust Account
            </span>
            <span className="text-primary-600 block mt-2">
              Auditing Services
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto mb-6 sm:mb-8 leading-relaxed font-medium">
            Comprehensive auditing solutions across Australia with transparent pricing, 
            fast turnaround times, and full regulatory compliance.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto mb-6 sm:mb-8">
            {[
              { icon: CheckCircle, text: 'Fixed Pricing', subtext: 'No hidden fees' },
              { icon: MapPin, text: 'All States Covered', subtext: 'Australia wide' },
              { icon: Clock, text: '7-14 Day Delivery', subtext: 'Fast turnaround' }
            ].map((benefit, index) => (
              <div 
                key={index}
                className="flex flex-col items-center space-y-2 p-3 sm:p-4 rounded-lg bg-white shadow-sm border border-gray-200 hover:shadow-md transition-all duration-200 group"
                role="article"
                aria-labelledby={`benefit-${index}-title`}
              >
                <benefit.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary-500 group-hover:scale-110 transition-transform duration-200" aria-hidden="true" />
                <span 
                  id={`benefit-${index}-title`}
                  className="text-gray-900 font-semibold text-sm sm:text-base"
                >
                  {benefit.text}
                </span>
                <span className="text-gray-600 text-xs sm:text-sm">{benefit.subtext}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-600" aria-hidden="true" />
              <h2 className="text-base sm:text-lg font-semibold text-gray-900">
                Filter by Service Category
              </h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {categoryFilters.map((category) => (
                <button
                  key={category.key}
                  onClick={() => handleCategoryChange(category.key)}
                  disabled={isLoading}
                  className={`
                    px-3 sm:px-4 lg:px-6 py-2 sm:py-3 rounded-lg font-medium text-sm sm:text-base
                    min-h-[44px] min-w-[100px] touch-manipulation
                    transition-all duration-200 transform hover:scale-105
                    focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${selectedCategory === category.key
                      ? 'bg-primary-500 text-white shadow-lg'
                      : 'bg-white text-gray-700 border border-gray-300 hover:border-primary-300 hover:shadow-md'
                    }
                  `}
                  aria-pressed={selectedCategory === category.key}
                  aria-label={`Filter services by ${category.label}, ${category.count} services available`}
                >
                  <span className="flex flex-col items-center">
                    <span>{category.label}</span>
                    <span className="text-xs opacity-75">({category.count})</span>
                  </span>
                </button>
              ))}
            </div>
            
            <div className="text-sm text-gray-600">
              {isLoading ? (
                <div className="flex items-center space-x-2">
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                  <span>Loading services...</span>
                </div>
              ) : (
                <span>
                  Showing {filteredMainServices.length} of {mainServices.length} services
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Main Services Grid */}
        <div className="services-grid mb-12 sm:mb-16 lg:mb-20">
          <div 
            className={`
              grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8
              transition-opacity duration-300 ${isLoading ? 'opacity-50' : 'opacity-100'}
            `}
          >
            {filteredMainServices.map((service, index) => (
              <ServiceCard
                key={service.id}
                service={service}
                index={index}
                calculateTotalPrice={calculateTotalPrice}
              />
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary-500 to-primary-600 text-white rounded-2xl shadow-2xl p-6 sm:p-8 lg:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-lg sm:text-xl text-blue-100 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed">
              View our complete pricing guide with state-specific services and transparent costs. 
              Choose the perfect audit solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/pricing"
                className="bg-white text-primary-600 font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-gray-50 transition-all duration-200 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 w-full sm:w-auto"
                aria-label="View all services and pricing information"
              >
                <MapPin className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>View All Services & Pricing</span>
              </Link>
              
              <Link
                href="#contact"
                className="border-2 border-white text-white font-semibold py-3 sm:py-4 px-6 sm:px-8 rounded-xl hover:bg-white hover:text-primary-600 transition-all duration-200 inline-flex items-center justify-center min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 w-full sm:w-auto"
                aria-label="Get free consultation"
              >
                <ArrowRight className="mr-2 h-5 w-5 flex-shrink-0" aria-hidden="true" />
                <span>Get Free Consultation</span>
              </Link>
            </div>
            
            <div className="mt-6 text-blue-100 text-sm sm:text-base text-center">
              <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
                <span className="font-semibold">Fixed Pricing:</span>
                <span>Real Estate & Property: $499 + GST</span>
                <span className="hidden sm:inline">|</span>
                <span>Solicitors: $1,500 + GST</span>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 sm:mt-16 lg:mt-20 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          <div className="text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 sm:mb-8">
              Why Choose AuditsPro Australia?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  icon: Shield,
                  title: 'ASIC Registered',
                  description: 'All auditors are ASIC registered with current professional certifications',
                  stat: 'Auditor #12345'
                },
                {
                  icon: Star,
                  title: 'Fixed Pricing',
                  description: 'Transparent, upfront pricing with no hidden fees or surprise charges',
                  stat: 'No hidden costs'
                },
                {
                  icon: CheckCircle,
                  title: 'Fast Turnaround',
                  description: 'Complete your audit in just 7-14 business days with expert team',
                  stat: '7-14 days delivery'
                },
                {
                  icon: Users,
                  title: '500+ Clients',
                  description: 'Trusted by leading Australian businesses across all states',
                  stat: 'Australia wide'
                }
              ].map((item, index) => (
                <div 
                  key={index}
                  className="text-center group bg-white rounded-2xl p-6 border-2 border-gray-200 shadow-sm hover:shadow-lg hover:border-primary-300 transition-all duration-300 transform hover:-translate-y-1"
                  role="article"
                  aria-labelledby={`trust-${index}-title`}
                >
                  <div className="inline-flex p-3 sm:p-4 bg-primary-500 rounded-xl text-white mb-4 group-hover:scale-110 transition-transform duration-200">
                    <item.icon className="h-6 w-6 sm:h-8 sm:w-8" aria-hidden="true" />
                  </div>
                  <h4 
                    id={`trust-${index}-title`}
                    className="font-bold text-gray-900 text-base sm:text-lg mb-2"
                  >
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm sm:text-base mb-2 leading-relaxed">
                    {item.description}
                  </p>
                  <div className="text-xs sm:text-sm font-semibold text-primary-600">
                    {item.stat}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-8 sm:mt-12 bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-lg p-4 sm:p-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-red-500 text-white">
                <Clock className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
              </div>
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="text-base sm:text-lg font-semibold text-gray-900 mb-1">
                Need an Emergency Audit?
              </h4>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Urgent compliance deadlines? Regulatory issues? We provide 24/7 emergency audit services 
                across Australia with rapid response times.
              </p>
            </div>
            <div className="flex-shrink-0 w-full sm:w-auto">
              <a
                href="tel:1300283487"
                className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 inline-flex items-center justify-center min-h-[44px] touch-manipulation focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
                aria-label="Call emergency audit line"
              >
                <span className="flex items-center">
                  <span className="mr-2">🚨</span>
                  <span>Emergency Line</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}