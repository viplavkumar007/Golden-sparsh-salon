import { motion } from 'framer-motion'
import { Sparkles, ChevronDown, Star } from 'lucide-react'
import { hero, brand } from '../../data/siteContent'
import salon1 from '../../assets/salon1.jpeg'

function waUrl(msg) {
  return `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`
}

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
      className="relative min-h-[100svh] overflow-hidden pt-[76px] sm:pt-[80px]"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={salon1}
          alt="Luxury salon interior"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(250,248,245,0.58) 0%, rgba(244,231,231,0.42) 48%, rgba(227,201,138,0.28) 100%)',
          }}
        />
        {/* Gold accent vignette */}
        <div
          className="absolute inset-0 opacity-15"
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
      <div className="relative z-10 min-h-[calc(100svh-80px)] max-w-5xl mx-auto px-4 sm:px-6 py-5 sm:py-7 flex items-center justify-center text-center">
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Badge */}
          <motion.div variants={item} className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full text-[10px] sm:text-xs font-sans font-semibold tracking-[0.12em] sm:tracking-[0.16em] uppercase text-salon-charcoal border border-gold-DEFAULT/40 bg-salon-ivory/90 backdrop-blur-md">
              <Star className="w-3 h-3 fill-gold-DEFAULT text-gold-DEFAULT" />
              {hero.badge}
              <Star className="w-3 h-3 fill-gold-DEFAULT text-gold-DEFAULT" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1 variants={item} className="font-display font-semibold leading-[0.9] tracking-[-0.035em] mb-4">
            <span className="block text-[#292421] text-5xl sm:text-6xl lg:text-[4.5rem] xl:text-[5rem]">{hero.heading1}</span>
            <span
              className="block text-[#A87925] text-6xl sm:text-7xl lg:text-[5.5rem] xl:text-[6.25rem] mt-2"
            >
              {hero.heading2}
            </span>
          </motion.h1>

          {/* Gold ornament */}
          <motion.div variants={item} className="flex items-center justify-center gap-4 my-3">
            <div className="h-px w-20 sm:w-32" style={{ background: 'linear-gradient(90deg, transparent, #C9A24E)' }} />
            <Sparkles className="w-5 h-5 text-gold-DEFAULT" />
            <div className="h-px w-20 sm:w-32" style={{ background: 'linear-gradient(90deg, #C9A24E, transparent)' }} />
          </motion.div>

          {/* Subheading */}
          <motion.p
            variants={item}
            className="text-salon-charcoal/90 font-sans text-sm sm:text-base lg:text-lg font-medium leading-relaxed max-w-2xl mx-auto mb-5 sm:mb-6 px-4 sm:px-6 py-2.5 sm:py-3 rounded-xl bg-salon-ivory/80 border border-white/80 backdrop-blur-md"
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
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 sm:mt-7 max-w-3xl mx-auto"
          >
            {hero.stats.map(({ value, label }) => (
              <div
                key={label}
                className="text-center rounded-xl px-3 py-2.5 bg-salon-ivory/80 border border-white/80 backdrop-blur-md"
              >
                <div className="text-2xl sm:text-3xl font-display font-bold text-[#292421]">
                  {value}
                </div>
                <div className="text-salon-charcoal/75 text-[10px] sm:text-xs font-sans font-medium tracking-wide mt-0.5">{label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.button
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 text-gold-dark/60 hover:text-gold-dark transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-label="Scroll down"
      >
        <ChevronDown className="w-7 h-7" />
      </motion.button>
    </section>
  )
}
