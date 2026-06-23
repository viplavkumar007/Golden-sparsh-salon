import { motion } from 'framer-motion'
import { whyUs } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

export default function WhyUs() {
  return (
    <section className="section-pad bg-salon-black overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-14">
          <SectionBadge dark>Why Choose Us</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3">
            <span className="text-white">The Golden Sparsh </span>
            <span className="text-gold-gradient">Difference</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-white/55 font-body text-lg max-w-xl mx-auto">
            Every detail crafted for an extraordinary beauty experience.
          </p>
        </ScrollReveal>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerChildren={0.08}>
          {whyUs.map(({ icon, title, desc }) => (
            <motion.div
              key={title}
              variants={fadeUpItem}
              className="group card-dark-glossy p-7 text-center"
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{icon}</div>
              <div
                className="h-px mb-4 mx-auto w-10"
                style={{ background: 'linear-gradient(90deg, transparent, #C9A24E, transparent)' }}
              />
              <h3 className="font-display font-semibold text-white mb-2 text-base">{title}</h3>
              <p className="text-white/50 text-xs font-body leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
