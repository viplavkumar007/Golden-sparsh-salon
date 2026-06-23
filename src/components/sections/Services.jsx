import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle, Sparkles } from 'lucide-react'
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
    <section id="services" className="section-pad bg-salon-blush overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 leading-tight">
            <span className="text-salon-charcoal">Premium </span>
            <span className="text-gold-gradient">Beauty Services</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/65 font-body text-lg max-w-2xl mx-auto">
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
                    : 'text-salon-charcoal/65 border border-gold-DEFAULT/25 hover:border-gold-DEFAULT hover:text-gold-dark bg-white/55'
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
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerChildren={0.05}>
              {activeCategory.services.map((service) => {
                const serviceName = typeof service === 'string' ? service : service.label
                const servicePrice = typeof service === 'string' ? null : service.price
                const serviceNote = typeof service === 'string' ? null : service.note

                return (
                <motion.div
                  key={serviceName}
                  variants={fadeUpItem}
                  className="group relative min-h-[190px] overflow-hidden rounded-[8px] border border-gold-DEFAULT/25 bg-white/85 p-5 shadow-[0_18px_45px_rgba(53,53,53,0.08)] backdrop-blur-sm"
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/70 to-transparent" />
                  <div className="absolute right-4 top-4 text-gold-DEFAULT/20 transition-colors group-hover:text-gold-DEFAULT/40">
                    <Sparkles className="h-5 w-5" />
                  </div>

                  <div className="relative flex h-full flex-col justify-between gap-5">
                    <div className="pr-8">
                      <div className="mb-4 flex items-center gap-2">
                        <span className="h-px w-8 bg-gold-DEFAULT/70" />
                        <span className="font-sans text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-dark">
                          {activeCategory.title}
                        </span>
                      </div>
                      <p className="font-display text-xl font-semibold leading-tight text-salon-charcoal">
                        {serviceName}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div className="border-t border-gold-DEFAULT/15 pt-4">
                        <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.18em] text-salon-charcoal/45">
                          Normal Price
                        </p>
                        <div className="mt-1 flex items-end justify-between gap-3">
                          <p className="font-display text-2xl font-bold text-gold-dark">
                            {servicePrice || 'Enquire'}
                          </p>
                          {serviceNote && (
                            <span className="max-w-[120px] text-right font-sans text-[11px] leading-snug text-salon-charcoal/55">
                              {serviceNote}
                            </span>
                          )}
                        </div>
                        <p className="mt-2 inline-flex rounded-full border border-gold-DEFAULT/25 bg-gold-DEFAULT/10 px-2.5 py-1 font-sans text-[10px] font-semibold uppercase tracking-[0.14em] text-gold-dark">
                          5% discount available
                        </p>
                      </div>

                    <a
                      href={waUrl(`Hi Golden Sparsh! I am interested in booking a ${serviceName} appointment. Please share details and pricing.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                        className="inline-flex w-full items-center justify-between rounded-[6px] border border-gold-DEFAULT/25 px-3 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-salon-charcoal/70 transition-colors hover:border-gold-DEFAULT hover:bg-gold-DEFAULT/10 hover:text-gold-dark group/wa"
                      onClick={(e) => e.stopPropagation()}
                    >
                        <span className="inline-flex items-center gap-2">
                      <MessageCircle className="w-3.5 h-3.5" />
                      Book Now
                        </span>
                      <ArrowRight className="w-3 h-3 group-hover/wa:translate-x-0.5 transition-transform" />
                    </a>
                    </div>
                  </div>
                </motion.div>
                )
              })}
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
                <span className="text-salon-charcoal">Why Choose </span>
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
                  <p className="text-salon-charcoal/75 text-sm font-sans font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
