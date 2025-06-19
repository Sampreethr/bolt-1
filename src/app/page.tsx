import Header from '@/src/components/Header'
import Hero from '@/src/components/Hero'
import Benefits from '@/src/components/Benefits'
import Services from '@/src/components/Services'
import WhyAuditRequired from '@/src/components/WhyAuditRequired'
import About from '@/src/components/About'
import Testimonials from '@/src/components/Testimonials'
import Stats from '@/src/components/Stats'
import Contact from '@/src/components/Contact'
import Footer from '@/src/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header - Fixed Navigation */}
      <Header />
      
      {/* Hero Section - Primary Landing */}
      <section className="relative">
        <Hero />
        {/* Subtle separator line */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Benefits Section - Three Pillars */}
      <section className="relative border-t border-gray-100">
        <Benefits />
        {/* Professional section separator */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-px bg-primary-200"></div>
      </section>

      {/* Services Section - Core Offerings */}
      <section className="relative border-t border-gray-100">
        <Services />
        {/* Subtle separator with accent */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Why Audit Required - Educational Content */}
      <section className="relative border-t border-gray-100">
        <WhyAuditRequired />
        {/* Professional divider */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-px bg-primary-300"></div>
      </section>

      {/* About Section - Company Information */}
      <section className="relative border-t border-gray-100">
        <About />
        {/* Gradient separator */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
      </section>

      {/* Stats Section - Key Metrics (Special Dark Section) */}
      <section className="relative">
        <Stats />
        {/* No border needed as Stats has dark background */}
      </section>

      {/* Testimonials Section - Social Proof */}
      <section className="relative border-t border-gray-100">
        <Testimonials />
        {/* Professional separator before contact */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary-200 to-transparent"></div>
      </section>

      {/* Contact Section - Lead Generation */}
      <section className="relative border-t border-gray-100">
        <Contact />
        {/* Strong separator before footer */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-gray-300 via-primary-400 to-gray-300"></div>
      </section>

      {/* Footer - Final Information */}
      <Footer />
    </main>
  )
}