import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { about, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

export default function About() {
  return (
    <section id="about" className="section-pad bg-salon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Images */}
          <ScrollReveal>
            <div className="relative">
              {/* Primary image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src={about.images[0]}
                  alt="Golden Sparsh Salon Interior"
                  className="w-full h-[500px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-3xl ring-1 ring-gold-DEFAULT/20" />
              </div>

              {/* Secondary image overlay */}
              <motion.div
                initial={{ opacity: 0, x: 40, y: 40 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.7 }}
                className="absolute -bottom-8 -right-8 w-48 sm:w-64 rounded-2xl overflow-hidden shadow-gold-lg border-4 border-salon-cream"
              >
                <img
                  src={about.images[1]}
                  alt="Golden Sparsh Premium Hair Station"
                  className="w-full h-40 sm:h-48 object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-gold-DEFAULT/30" />
              </motion.div>

              {/* Gold accent badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8, x: -20 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -top-5 -left-5 rounded-2xl p-4 shadow-gold"
                style={{ background: 'linear-gradient(135deg, #C9A24E, #D4AF37)' }}
              >
                <div className="text-salon-black font-display font-bold text-xl">5★</div>
                <div className="text-salon-black/70 text-xs font-sans font-semibold">Rating</div>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Content */}
          <StaggerContainer staggerChildren={0.1}>
            <motion.div variants={fadeUpItem}>
              <SectionBadge>{about.badge}</SectionBadge>
            </motion.div>

            <motion.h2
              variants={fadeUpItem}
              className="font-display font-bold text-4xl sm:text-5xl text-salon-black mt-2 mb-2 leading-tight"
            >
              {about.heading}
            </motion.h2>

            <motion.div variants={fadeUpItem} className="gold-divider my-5" />

            <motion.p variants={fadeUpItem} className="text-salon-charcoal/80 text-lg font-body leading-relaxed mb-4">
              {about.description1}
            </motion.p>

            <motion.p variants={fadeUpItem} className="text-salon-charcoal/70 font-body leading-relaxed mb-8">
              {about.description2}
            </motion.p>

            {/* Features grid */}
            <motion.div variants={fadeUpItem} className="grid grid-cols-2 gap-3 mb-8">
              {about.features.map(({ icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{ background: 'linear-gradient(135deg, #C9A24E, #E3C98A)' }}>
                    <Check className="w-3 h-3 text-salon-black" strokeWidth={3} />
                  </span>
                  <span className="text-sm font-sans font-medium text-salon-charcoal">{label}</span>
                </div>
              ))}
            </motion.div>

            <motion.div variants={fadeUpItem}>
              <a
                href={`https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent('Hi Golden Sparsh! I would like to know more about your salon services.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy px-7 py-3.5 rounded-full inline-flex items-center gap-2 text-sm"
              >
                Explore Our Services
              </a>
            </motion.div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
