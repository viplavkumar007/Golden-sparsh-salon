import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn } from 'lucide-react'
import { gallery } from '../../data/siteContent'
import ScrollReveal from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section id="gallery" className="section-pad bg-salon-ivory overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge>{gallery.badge}</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 text-salon-charcoal leading-tight">
            {gallery.heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/60 font-body text-base max-w-xl mx-auto">
            A warm glimpse inside our salon
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {gallery.items.map((item, index) => (
            item.type === 'video' ? (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="md:col-span-2 rounded-3xl overflow-hidden shadow-card border border-gold-DEFAULT/20 bg-salon-charcoal"
              >
                <video
                  src={item.src}
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  className="w-full max-h-[680px] object-contain"
                  aria-label={item.alt}
                >
                  Your browser does not support video playback.
                </video>
              </motion.div>
            ) : (
              <motion.button
                key={item.id}
                type="button"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="group relative aspect-[4/3] rounded-3xl overflow-hidden text-left shadow-card hover:shadow-card-hover border border-gold-DEFAULT/20 transition-all duration-500 focus-gold"
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-salon-charcoal/55 via-transparent to-white/5" />
                <div className="absolute inset-x-0 bottom-0 p-5 flex items-center justify-between text-white">
                  <span className="font-display text-xl">Salon Interior</span>
                  <span className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
                    <ZoomIn className="w-4 h-4" />
                  </span>
                </div>
              </motion.button>
            )
          ))}
        </div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8 bg-salon-charcoal/95"
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full"
              onClick={(event) => event.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full max-h-[82vh] object-contain rounded-3xl"
              />
              <button
                type="button"
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-salon-charcoal/70 text-white rounded-full flex items-center justify-center hover:bg-salon-charcoal transition-colors"
                aria-label="Close image"
              >
                <X className="w-5 h-5" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
