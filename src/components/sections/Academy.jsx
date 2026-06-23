import { motion } from 'framer-motion'
import { MessageCircle, Clock, Award } from 'lucide-react'
import { academy, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

const ACADEMY_BG = 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=1400&q=80'

export default function Academy() {
  const waUrl = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(academy.cta.msg)}`

  return (
    <section id="academy" className="section-pad bg-salon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <SectionBadge>{academy.badge}</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 text-salon-black leading-tight">
            {academy.heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/65 font-body text-lg max-w-2xl mx-auto">{academy.subheading}</p>
        </ScrollReveal>

        {/* Course Cards */}
        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 mb-16" staggerChildren={0.07}>
          {academy.courses.map(({ title, duration, icon }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="group service-card-glossy p-6 text-center"
              whileHover={{ y: -8, scale: 1.03 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              {/* Top shine effect already in CSS */}
              <div className="text-4xl mb-3">{icon}</div>
              <h3 className="font-display font-semibold text-salon-black text-sm mb-3 leading-tight">{title}</h3>
              <div className="flex items-center justify-center gap-1.5 text-xs text-gold-dark font-sans font-semibold">
                <Clock className="w-3 h-3" />
                {duration}
              </div>
              <div className="gold-divider mt-4 mb-4 opacity-40" />
              <a
                href={`https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
                  `Hi Golden Sparsh! I am interested in the ${title}. Please share the course fee, schedule, and admission details.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-sans font-semibold text-gold-dark hover:text-gold-DEFAULT transition-colors"
              >
                <MessageCircle className="w-3 h-3" />
                Enquire Now
              </a>
            </motion.div>
          ))}
        </StaggerContainer>

        {/* Features Banner */}
        <ScrollReveal delay={0.1}>
          <div
            className="rounded-3xl p-10 border border-gold-DEFAULT/20 mb-10"
            style={{
              background: 'linear-gradient(135deg, #0A0A0A 0%, #1A1A1A 100%)',
            }}
          >
            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Award className="w-6 h-6 text-gold-DEFAULT" />
                <h3 className="font-display text-2xl font-bold text-white">Academy Features</h3>
                <Award className="w-6 h-6 text-gold-DEFAULT" />
              </div>
              <div className="gold-divider max-w-xs mx-auto mt-4" />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {academy.features.map(({ icon, label }) => (
                <div key={label} className="text-center">
                  <div className="text-3xl mb-2">{icon}</div>
                  <p className="text-white/75 text-xs font-sans font-medium tracking-wide">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal className="text-center">
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-glossy px-10 py-4 rounded-full inline-flex items-center gap-3 text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            {academy.cta.label}
          </a>
          <p className="text-salon-charcoal/50 text-xs font-sans mt-4 tracking-wide">
            Limited seats per batch · Professional certification included
          </p>
        </ScrollReveal>
      </div>
    </section>
  )
}
