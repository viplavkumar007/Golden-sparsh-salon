import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Star } from 'lucide-react'
import { hero, brand } from '../../data/siteContent'

function waUrl(msg) {
  return `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`
}

const HERO_BG = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1920&q=80'

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  }
  const item = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={HERO_BG}
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(0,0,0,0.88) 0%, rgba(10,8,4,0.75) 50%, rgba(0,0,0,0.92) 100%)',
          }}
        />
        {/* Gold accent vignette */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 60%, rgba(201,162,78,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Decorative gold orbs */}
      <motion.div
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(201,162,78,0.1) 0%, transparent 70%)' }}
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(227,201,138,0.08) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-8">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-[0.2em] uppercase text-gold-light border border-gold-DEFAULT/30 bg-gold-DEFAULT/10">
              <Star className="w-3 h-3 fill-gold-DEFAULT text-gold-DEFAULT" />
              {hero.badge}
              <Star className="w-3 h-3 fill-gold-DEFAULT text-gold-DEFAULT" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="font-display font-bold leading-none tracking-tight mb-4">
            <span className="block text-white text-5xl sm:text-7xl lg:text-8xl">{hero.heading1}</span>
            <span
              className="block text-gold-gradient text-6xl sm:text-8xl lg:text-9xl mt-1"
              style={{
                background: 'linear-gradient(135deg, #C9A24E 0%, #E3C98A 40%, #D4AF37 70%, #C9A24E 100%)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 4s linear infinite',
              }}
            >
              {hero.heading2}
            </span>
          </motion.h1>

          {/* Gold ornament */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 my-6">
            <div className="h-px w-20 sm:w-32" style={{ background: 'linear-gradient(90deg, transparent, #C9A24E)' }} />
            <Sparkles className="w-5 h-5 text-gold-DEFAULT" />
            <div className="h-px w-20 sm:w-32" style={{ background: 'linear-gradient(90deg, #C9A24E, transparent)' }} />
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-white/75 font-body text-lg sm:text-xl lg:text-2xl font-light tracking-wide max-w-2xl mx-auto mb-10"
          >
            {hero.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={waUrl(hero.cta1.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glossy px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 min-w-[200px] justify-center"
            >
              <Sparkles className="w-4 h-4" />
              {hero.cta1.label}
            </a>
            <a
              href={waUrl(hero.cta2.msg)}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-dark-glossy px-8 py-4 rounded-full text-sm inline-flex items-center gap-2 min-w-[200px] justify-center"
            >
              {hero.cta2.label}
            </a>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={item}
            className="grid grid-cols-4 gap-4 mt-16 max-w-2xl mx-auto"
          >
            {hero.stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <div
                  className="text-2xl sm:text-3xl font-display font-bold"
                  style={{
                    background: 'linear-gradient(135deg, #C9A24E, #E3C98A)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  {value}
                </div>
                <div className="text-white/55 text-xs font-sans tracking-wider mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-gold-DEFAULT/60 hover:text-gold-DEFAULT transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  )
}
