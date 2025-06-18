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
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 transition-colors duration-300">
      <Header />
      <Hero />
      <Benefits />
      <Services />
      <WhyAuditRequired />
      <About />
      <Stats />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}