import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import LotUses from '@/components/LotUses'
import Benefits from '@/components/Benefits'
import Gallery from '@/components/Gallery'
import Location from '@/components/Location'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <LotUses />
      <Benefits />
      <Gallery />
      <Location />
      <FinalCTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
