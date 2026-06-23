import { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react'
import { serviceCategories, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

function waUrl(msg) {
  return `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`
}

const CATEGORY_ICONS_BG = {
  hair: 'from-amber-50 to-yellow-50',
  skin: 'from-pink-50 to-rose-50',
  beauty: 'from-fuchsia-50 to-pink-50',
  bridal: 'from-yellow-50 to-amber-50',
  nails: 'from-amber-50 to-orange-50',
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('hair')
  const activeCategory = serviceCategories.find((c) => c.id === activeTab)

  return (
    <section id="services" className="section-pad bg-salon-black overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <SectionBadge dark>Our Services</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 leading-tight">
            <span className="text-white">Premium </span>
            <span className="text-gold-gradient">Beauty Services</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-white/55 font-body text-lg max-w-2xl mx-auto">
            From everyday beauty rituals to transformative treatments — we deliver luxury at every visit.
          </p>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-semibold tracking-wide transition-all duration-300 focus-gold ${
                  activeTab === cat.id
                    ? 'btn-gold-glossy'
                    : 'text-white/60 border border-white/15 hover:border-gold-DEFAULT/40 hover:text-gold-light bg-transparent'
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Category */}
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Header */}
            <div className="text-center mb-10">
              <div className="text-5xl mb-3">{activeCategory.icon}</div>
              <h3 className="font-display text-2xl font-bold text-gold-DEFAULT">{activeCategory.title}</h3>
            </div>

            {/* Service Cards Grid */}
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4" staggerChildren={0.05}>
              {activeCategory.services.map((service) => (
                <motion.div
                  key={service}
                  variants={fadeUpItem}
                  className="group card-dark-glossy p-5 cursor-pointer"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="flex flex-col h-full justify-between gap-4">
                    <div>
                      <div className="w-2 h-2 rounded-full bg-gold-DEFAULT mb-3 group-hover:scale-150 transition-transform" />
                      <p className="text-white text-sm font-sans font-medium leading-snug">{service}</p>
                    </div>
                    <a
                      href={waUrl(`Hi Golden Sparsh! I am interested in booking a ${service} appointment. Please share details and pricing.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-gold-DEFAULT/70 hover:text-gold-DEFAULT font-sans font-medium transition-colors group/wa"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Book Now
                      <ArrowRight className="w-3 h-3 group-hover/wa:translate-x-0.5 transition-transform" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </StaggerContainer>

            {/* Category CTA */}
            <div className="text-center mt-10">
              <a
                href={waUrl(activeCategory.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy px-8 py-3.5 rounded-full inline-flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire About {activeCategory.title}
              </a>
            </div>
          </motion.div>
        )}

        {/* Why Us Strip */}
        <ScrollReveal delay={0.1} className="mt-20">
          <div
            className="rounded-3xl p-8 sm:p-10 border border-gold-DEFAULT/20"
            style={{
              background: 'linear-gradient(135deg, rgba(201,162,78,0.08) 0%, rgba(212,175,55,0.05) 100%)',
            }}
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold">
                <span className="text-white">Why Choose </span>
                <span className="text-gold-gradient">Golden Sparsh?</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: '👑', title: 'Premium Experience' },
                { icon: '🏅', title: 'Certified Professionals' },
                { icon: '🧼', title: '100% Hygiene' },
                { icon: '💎', title: 'Luxury Products' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-white/75 text-sm font-sans font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
