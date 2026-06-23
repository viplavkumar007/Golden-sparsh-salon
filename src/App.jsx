import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Bridal from './components/sections/Bridal'
import Academy from './components/sections/Academy'
import WhyUs from './components/sections/WhyUs'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Bridal />
        <Academy />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  )
}
