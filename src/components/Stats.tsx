'use client'

import { TrendingUp, Users, Shield, Clock } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: Users,
      number: '500+',
      label: 'Satisfied Clients',
      description: 'Across Australia'
    },
    {
      icon: Shield,
      number: '1000+',
      label: 'Audits Completed',
      description: 'With perfect compliance'
    },
    {
      icon: TrendingUp,
      number: '15+',
      label: 'Years Experience',
      description: 'In trust account auditing'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Support Available',
      description: 'When you need us most'
    }
  ]

  return (
    <section className="section-padding gradient-primary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-white bg-opacity-5 bg-[radial-gradient(circle_at_1px_1px,_rgba(255,255,255,0.15)_1px,_transparent_0)] bg-[length:20px_20px]"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto container-padding">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted by Australia's Leading Businesses
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Our numbers speak for themselves - delivering excellence in trust account auditing since 2008
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 hover-lift border border-white border-opacity-20 clean-shadow">
                <div className="inline-flex p-4 rounded-2xl bg-white bg-opacity-20 text-white mb-6 hover-scale">
                  <stat.icon className="h-8 w-8" />
                </div>
                
                <div className="text-4xl md:text-5xl font-bold text-white mb-2 transition-colors duration-300">
                  {stat.number}
                </div>
                
                <div className="text-xl font-semibold text-blue-100 mb-2">
                  {stat.label}
                </div>
                
                <div className="text-blue-200 text-sm">
                  {stat.description}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white border-opacity-20 clean-shadow-lg">
            <h3 className="text-3xl font-bold text-white mb-4">
              Join Our Growing Family of Satisfied Clients
            </h3>
            <p className="text-blue-100 text-lg mb-8">
              Experience the difference that professional, reliable trust account auditing makes for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-700 font-bold py-4 px-8 rounded-xl hover:bg-blue-50 transition-colors duration-300 hover-lift clean-shadow">
                Get Your Free Consultation
              </a>
              <a href="tel:1300283487" className="border-2 border-white text-white font-bold py-4 px-8 rounded-xl hover:bg-white hover:text-primary-700 transition-all duration-300 hover-lift">
                Call 1300 AUDITS
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}