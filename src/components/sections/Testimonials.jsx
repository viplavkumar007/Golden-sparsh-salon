import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { testimonials } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

function StarRow({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-gold-DEFAULT text-gold-DEFAULT" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const timerRef = useRef(null)

  const next = () => setCurrent((c) => (c + 1) % testimonials.length)
  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)

  useEffect(() => {
    timerRef.current = setInterval(next, 5000)
    return () => clearInterval(timerRef.current)
  }, [])

  const resetTimer = () => {
    clearInterval(timerRef.current)
    timerRef.current = setInterval(next, 5000)
  }

  const handleNext = () => { next(); resetTimer() }
  const handlePrev = () => { prev(); resetTimer() }

  const t = testimonials[current]

  return (
    <section id="testimonials" className="section-pad bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-14">
          <SectionBadge>Client Love</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3">
            <span className="text-salon-charcoal">What Our </span>
            <span className="text-gold-gradient">Clients Say</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
        </ScrollReveal>

        {/* Featured testimonial */}
        <div className="relative mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
              className="rounded-3xl p-8 sm:p-12 text-center relative overflow-hidden border border-gold-DEFAULT/20"
              style={{
                background:
                  'linear-gradient(145deg, #FAF8F5 0%, #FFFFFF 50%, #F4E7E7 100%)',
              }}
            >
              {/* Decorative quote */}
              <Quote
                className="absolute top-6 left-8 w-16 h-16 opacity-10"
                style={{ color: '#C9A24E' }}
              />

              {/* Avatar */}
              <div
                className="w-16 h-16 rounded-full mx-auto mb-5 flex items-center justify-center text-xl font-display font-bold text-salon-black shadow-gold"
                style={{ background: 'linear-gradient(135deg, #C9A24E, #E3C98A)' }}
              >
                {t.initials}
              </div>

              <StarRow count={t.rating} />
              <div className="flex justify-center mt-1 mb-6">
                <div className="h-px w-16 bg-gold-DEFAULT/30" />
              </div>

              <p className="text-salon-charcoal/80 font-body text-lg sm:text-xl leading-relaxed italic max-w-2xl mx-auto mb-6">
                "{t.review}"
              </p>

              <div>
                <p className="font-display font-semibold text-gold-DEFAULT text-base">{t.name}</p>
                <p className="text-salon-charcoal/45 text-xs font-sans tracking-wide mt-0.5">{t.role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-5 w-10 h-10 rounded-full bg-salon-charcoal border border-gold-DEFAULT/30 text-gold-DEFAULT flex items-center justify-center hover:bg-gold-DEFAULT hover:text-salon-black transition-all focus-gold hidden sm:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-5 w-10 h-10 rounded-full bg-salon-charcoal border border-gold-DEFAULT/30 text-gold-DEFAULT flex items-center justify-center hover:bg-gold-DEFAULT hover:text-salon-black transition-all focus-gold hidden sm:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mb-10">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setCurrent(i); resetTimer() }}
              className={`h-2 rounded-full transition-all duration-300 focus-gold ${
                i === current ? 'w-8 bg-gold-DEFAULT' : 'w-2 bg-salon-charcoal/15 hover:bg-salon-charcoal/30'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* All testimonials grid */}
        <div className="grid sm:grid-cols-3 gap-5">
          {testimonials.slice(0, 3).map((item) => (
            <motion.div
              key={item.id}
              whileHover={{ y: -4 }}
              onClick={() => { setCurrent(testimonials.indexOf(item)); resetTimer() }}
              className={`card-dark-glossy p-5 cursor-pointer transition-all duration-300 ${
                current === testimonials.indexOf(item)
                  ? 'border-gold-DEFAULT/50 shadow-gold'
                  : ''
              }`}
            >
              <div className="flex items-center gap-3 mb-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-display font-bold text-salon-black flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #C9A24E, #E3C98A)' }}
                >
                  {item.initials}
                </div>
                <div>
                  <p className="text-salon-charcoal text-xs font-sans font-semibold">{item.name}</p>
                  <p className="text-salon-charcoal/45 text-[10px] font-sans">{item.role}</p>
                </div>
              </div>
              <StarRow count={item.rating} />
              <p className="text-salon-charcoal/60 text-xs font-body leading-relaxed mt-2 line-clamp-3">
                {item.review}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
