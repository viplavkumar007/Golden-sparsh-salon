import Navbar from './components/Navbar'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Services from './components/sections/Services'
import Bridal from './components/sections/Bridal'
import WhyUs from './components/sections/WhyUs'
import Gallery from './components/sections/Gallery'
import Testimonials from './components/sections/Testimonials'
import FAQ from './components/sections/FAQ'
import CTAStrip from './components/sections/CTAStrip'
import Contact from './components/sections/Contact'
import Footer from './components/Footer'
import FloatingButtons from './components/FloatingButtons'
import watermarkLogo from './assets/site-watermark-logo.png'

export default function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="site-watermark" aria-hidden="true">
        <img src={watermarkLogo} alt="" />
      </div>
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Services />
        <Bridal />
        <WhyUs />
        <Gallery />
        <Testimonials />
        <FAQ />
        <CTAStrip />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <FloatingButtons />
    </div>
  )
}
