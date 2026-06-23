import { useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sparkles } from 'lucide-react'
import { brand, nav } from '../data/siteContent'
import { useScrolled, useScrollSpy } from '../hooks/useScrollSpy'

const WA_URL = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
  'Hi Golden Sparsh! I would like to book an appointment. Please let me know the available slots.'
)}`

export default function Navbar() {
  const scrolled = useScrolled(50)
  const activeId = useScrollSpy(['home', 'about', 'services', 'academy', 'gallery', 'testimonials', 'contact'])
  const [open, setOpen] = useState(false)

  const handleNav = useCallback((href) => {
    setOpen(false)
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
                src={brand.logo}
                alt={brand.fullName}
                className="h-10 xl:h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="hidden sm:flex flex-col items-start leading-none">
                <span className="font-display text-base xl:text-lg font-semibold tracking-wide text-salon-charcoal">
                  Golden Sparsh
                </span>
                <span className="mt-1 font-sans text-[8px] xl:text-[9px] font-medium tracking-[0.16em] uppercase text-gold-dark">
                  Salon &amp; Academy
                </span>
              </span>
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

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-salon-charcoal p-2 rounded-lg hover:bg-salon-blush transition-colors focus-gold"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{ background: 'rgba(53,53,53,0.98)', backdropFilter: 'blur(20px)' }}
          >
            <div className="flex flex-col h-full pt-24 px-8">
              <nav className="flex flex-col gap-2">
                {nav.links.map(({ label, href }, i) => (
                  <motion.button
                    key={label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    onClick={() => handleNav(href)}
                    className="text-left py-4 text-2xl font-display text-white/90 hover:text-gold-DEFAULT border-b border-white/10 transition-colors tracking-wide"
                  >
                    {label}
                  </motion.button>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
                className="mt-8"
              >
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                  className="btn-gold-glossy w-full py-4 rounded-full text-base flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-4 h-4" />
                  Book Appointment
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
