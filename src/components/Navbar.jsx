import { useCallback } from 'react'
import { motion } from 'framer-motion'
import { Phone, Sparkles } from 'lucide-react'
import { brand, nav } from '../data/siteContent'
import { useScrolled, useScrollSpy } from '../hooks/useScrollSpy'
import navbarLogo from '../assets/navbar-logo.png'

const WA_URL = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
  'Hi Golden Sparsh! I would like to book an appointment. Please let me know the available slots.'
)}`

export default function Navbar() {
  const scrolled = useScrolled(50)
  const activeId = useScrollSpy(['home', 'about', 'services', 'gallery', 'testimonials', 'contact'])

  const handleNav = useCallback((href) => {
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-2 bg-white shadow-[0_8px_30px_rgba(53,53,53,0.10)] border-b border-gold-DEFAULT/15'
            : 'py-3 bg-salon-ivory/95 shadow-[0_4px_20px_rgba(53,53,53,0.06)] border-b border-gold-DEFAULT/10'
        }`}
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNav('#home')}
              className="flex items-center gap-3 group focus-gold rounded-lg p-1"
              aria-label="Golden Sparsh Home"
            >
              <img
                src={navbarLogo}
                alt={brand.fullName}
                className="h-12 sm:h-14 xl:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center justify-center gap-1 xl:gap-2 mx-5" aria-label="Main navigation">
              {nav.links.map(({ label, href }) => {
                const id = href.replace('#', '')
                const isActive = activeId === id
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`relative px-2.5 xl:px-3 py-2 text-[13px] xl:text-sm font-sans font-medium tracking-wide whitespace-nowrap transition-colors duration-200 rounded-lg focus-gold ${
                      isActive ? 'text-gold-dark' : 'text-salon-charcoal/75 hover:text-gold-dark'
                    }`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full"
                        style={{ background: 'linear-gradient(90deg, #C9A24E, #E3C98A)' }}
                      />
                    )}
                  </button>
                )
              })}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy px-4 xl:px-5 py-2.5 rounded-full inline-flex items-center gap-2 whitespace-nowrap text-xs xl:text-sm"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {nav.ctaLabel}
              </a>
            </div>

            {/* Mobile Quick Call */}
            <a
              href={`tel:${brand.phone}`}
              className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/85 text-gold-dark shadow-[0_10px_25px_rgba(53,53,53,0.12)] ring-1 ring-gold-DEFAULT/15 transition-colors hover:bg-salon-blush focus-gold"
              aria-label="Call Golden Sparsh"
            >
              <Phone className="h-5 w-5" />
            </a>
          </div>

          {/* Mobile Pill Navigation */}
          <nav
            className="lg:hidden -mx-5 mt-3 flex gap-3 overflow-x-auto px-5 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            aria-label="Mobile navigation"
          >
            {nav.links.map(({ label, href }) => {
              const id = href.replace('#', '')
              const isActive = activeId === id
              return (
                <button
                  key={label}
                  onClick={() => handleNav(href)}
                  className={`shrink-0 rounded-full px-5 py-3 text-sm font-sans font-semibold shadow-[0_8px_22px_rgba(53,53,53,0.10)] transition-all duration-200 focus-gold ${
                    isActive
                      ? 'bg-gradient-to-r from-[#F07AA1] to-[#F3B2B6] text-white shadow-[0_10px_26px_rgba(240,122,161,0.35)]'
                      : 'bg-white/90 text-salon-charcoal hover:bg-salon-blush hover:text-gold-dark'
                  }`}
                >
                  {label}
                </button>
              )
            })}
          </nav>
        </div>
      </motion.header>
    </>
  )
}
