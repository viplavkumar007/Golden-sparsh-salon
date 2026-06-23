import { motion } from 'framer-motion'
import { Sparkles, MessageCircle } from 'lucide-react'
import { bridal, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

const BRIDAL_BG = 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1400&q=80'

export default function Bridal() {
  const waUrl = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(bridal.cta.msg)}`

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={BRIDAL_BG} alt="Bridal Makeup" className="w-full h-full object-cover opacity-20" loading="lazy" />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(135deg, rgba(250,248,245,0.97) 0%, rgba(227,201,138,0.72) 50%, rgba(244,231,231,0.96) 100%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(201,162,78,0.1) 0%, transparent 65%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-14">
          <SectionBadge>{bridal.badge}</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 text-salon-charcoal leading-tight">
            {bridal.heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/65 font-body text-lg max-w-2xl mx-auto">{bridal.subheading}</p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5" staggerChildren={0.1}>
          {bridal.services.map(({ title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="group relative rounded-2xl p-6 border border-gold-DEFAULT/20 text-center overflow-hidden cursor-default"
              style={{
                background:
                  'linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(244,231,231,0.72) 100%)',
              }}
              whileHover={{ y: -5, borderColor: 'rgba(201,162,78,0.5)' }}
            >
              {/* Shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0) 100%)',
                }}
              />
              <Sparkles className="w-6 h-6 text-gold-DEFAULT mx-auto mb-3" />
              <h3 className="font-display font-semibold text-salon-charcoal text-base mb-2">{title}</h3>
              <p className="text-salon-charcoal/60 text-xs font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>

        <ScrollReveal delay={0.3} className="text-center mt-12">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glossy px-10 py-4 rounded-full inline-flex items-center gap-3 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            {bridal.cta.label}
          </a>
        </ScrollReveal>
      </div>
    </section>
  )
}
