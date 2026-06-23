import { motion } from 'framer-motion'
import { MessageCircle, Phone, Sparkles } from 'lucide-react'
import { brand } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'

export default function CTAStrip() {
  const waUrl = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
    'Hi Golden Sparsh! I would like to book an appointment. Please let me know the available slots.'
  )}`

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'linear-gradient(135deg, #FAF8F5 0%, #F4E7E7 50%, #E3C98A 100%)',
            'linear-gradient(135deg, #F4E7E7 0%, #FAF8F5 50%, #E3C98A 100%)',
            'linear-gradient(135deg, #FAF8F5 0%, #F4E7E7 50%, #E3C98A 100%)',
          ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Gold pulse orb */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background:
              'radial-gradient(circle, rgba(201,162,78,0.15) 0%, transparent 65%)',
          }}
        />
      </motion.div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <ScrollReveal>
          <Sparkles className="w-8 h-8 text-gold-DEFAULT mx-auto mb-5 animate-pulse" />
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-salon-charcoal mb-4 leading-tight">
            Ready for Your{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #C9A24E, #E3C98A, #C9A24E)',
                backgroundSize: '200% auto',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                animation: 'shimmer 3s linear infinite',
              }}
            >
              Golden Transformation?
            </span>
          </h2>
          <p className="text-salon-charcoal/65 font-body text-lg mb-10 max-w-xl mx-auto">
            Book your appointment today and experience the luxury of Golden Sparsh Salon & Academy.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold-glossy px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <MessageCircle className="w-4 h-4" />
              Book on WhatsApp
            </motion.a>
            <motion.a
              href={`tel:+91${brand.phone}`}
              className="btn-dark-glossy px-8 py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Phone className="w-4 h-4" />
              Call Now
            </motion.a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
