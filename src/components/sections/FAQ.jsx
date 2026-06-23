import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, HelpCircle } from 'lucide-react'
import { faqs } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

function FAQItem({ q, a, index, isOpen, onToggle }) {
  return (
    <motion.div
      variants={fadeUpItem}
      className={`rounded-2xl border overflow-hidden transition-all duration-300 ${
        isOpen
          ? 'border-gold-DEFAULT/50 shadow-gold'
          : 'border-gold-DEFAULT/15 hover:border-gold-DEFAULT/30'
      }`}
      style={{
        background: isOpen
          ? 'linear-gradient(135deg, #FFFFFF 0%, #F4E7E7 100%)'
          : 'linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(250,248,245,0.9) 100%)',
      }}
    >
      <button
        className="w-full flex items-start justify-between gap-4 p-6 text-left focus-gold"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <div className="flex items-start gap-3">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-sans font-bold text-salon-black flex-shrink-0 mt-0.5"
            style={{ background: 'linear-gradient(135deg, #C9A24E, #E3C98A)' }}
          >
            {index + 1}
          </span>
          <span className="font-sans font-semibold text-salon-charcoal text-sm leading-relaxed">{q}</span>
        </div>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-gold-DEFAULT flex-shrink-0 mt-0.5"
        >
          <ChevronDown className="w-5 h-5" />
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pl-[60px]">
              <div className="gold-divider mb-4 opacity-30" />
              <p className="text-salon-charcoal/65 font-body text-sm leading-relaxed">{a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section className="section-pad bg-salon-blush overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge>FAQ</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3">
            <span className="text-salon-charcoal">Common </span>
            <span className="text-gold-gradient">Questions</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/60 font-body text-lg max-w-xl mx-auto">
            Everything you need to know about Golden Sparsh
          </p>
        </ScrollReveal>

        <StaggerContainer className="flex flex-col gap-3" staggerChildren={0.08}>
          {faqs.map(({ q, a }, i) => (
            <FAQItem
              key={i}
              q={q}
              a={a}
              index={i}
              isOpen={openIdx === i}
              onToggle={() => setOpenIdx(openIdx === i ? -1 : i)}
            />
          ))}
        </StaggerContainer>
      </div>
    </section>
  )
}
