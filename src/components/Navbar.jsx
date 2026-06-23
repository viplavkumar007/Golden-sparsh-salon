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
            ? 'py-2 shadow-2xl border-b border-gold-DEFAULT/20'
            : 'py-4'
        }`}
        style={{
          background: scrolled
            ? 'rgba(10,10,10,0.92)'
            : 'linear-gradient(180deg, rgba(0,0,0,0.7) 0%, transparent 100%)',
          backdropFilter: scrolled ? 'blur(24px)' : 'none',
          WebkitBackdropFilter: scrolled ? 'blur(24px)' : 'none',
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
                className="h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </button>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {nav.links.map(({ label, href }) => {
                const id = href.replace('#', '')
                const isActive = activeId === id
                return (
                  <button
                    key={label}
                    onClick={() => handleNav(href)}
                    className={`relative px-4 py-2 text-sm font-sans font-medium tracking-wide transition-colors duration-200 rounded-lg focus-gold ${
                      isActive ? 'text-gold-DEFAULT' : 'text-white/80 hover:text-gold-light'
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
                className="btn-gold-glossy px-5 py-2.5 rounded-full inline-flex items-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                {nav.ctaLabel}
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors focus-gold"
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
            style={{ background: 'rgba(5,5,5,0.97)', backdropFilter: 'blur(20px)' }}
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
