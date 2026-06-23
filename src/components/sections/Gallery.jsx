import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Images } from 'lucide-react'
import { gallery } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, scaleItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

const GALLERY_EXTRAS = [
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80',
    alt: 'Hair Styling Service',
    category: 'Hair',
    tag: 'Hair',
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1560066984-138dadb4c035?w=800&q=80',
    alt: 'Premium Salon Interior',
    category: 'Salon Interior',
    tag: 'Interior',
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=800&q=80',
    alt: 'Bridal Makeup',
    category: 'Bridal',
    tag: 'Bridal',
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    alt: 'Skin Care Treatment',
    category: 'Skin',
    tag: 'Skin',
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80',
    alt: 'Nail Art Design',
    category: 'Nails',
    tag: 'Nails',
  },
]

const ALL_ITEMS = [...gallery.items, ...GALLERY_EXTRAS]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered =
    activeFilter === 'All'
      ? ALL_ITEMS
      : ALL_ITEMS.filter((i) => i.category === activeFilter)

  return (
    <section id="gallery" className="section-pad bg-salon-cream overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal className="text-center mb-12">
          <SectionBadge>{gallery.badge}</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 text-salon-black leading-tight">
            {gallery.heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/60 font-body text-lg max-w-xl mx-auto">
            A glimpse into the Golden Sparsh experience
          </p>
        </ScrollReveal>

        {/* Filter Tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-2.5 mb-10">
            {gallery.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-sans font-semibold tracking-wider uppercase transition-all duration-300 focus-gold ${
                  activeFilter === cat
                    ? 'btn-gold-glossy'
                    : 'bg-white border border-gold-DEFAULT/30 text-salon-charcoal/70 hover:border-gold-DEFAULT hover:text-gold-dark shadow-sm'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Gallery Grid */}
        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          <AnimatePresence mode="popLayout">
            {filtered.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="group relative rounded-2xl overflow-hidden cursor-pointer shadow-card hover:shadow-card-hover transition-shadow duration-300"
                style={{ aspectRatio: '3/4' }}
                onClick={() => setLightbox(item)}
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <ZoomIn className="w-6 h-6 text-white mx-auto mb-2" />
                  <span className="badge-gold mx-auto">{item.tag}</span>
                </div>
                {/* Always visible tag */}
                <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="badge-gold">{item.tag}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <div className="text-center py-16 text-salon-charcoal/40 font-body text-lg">
            <Images className="w-12 h-12 mx-auto mb-4 opacity-30" />
            More photos coming soon
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center p-4 sm:p-8"
            style={{ background: 'rgba(0,0,0,0.95)' }}
            onClick={() => setLightbox(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-3xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
              />
              <button
                onClick={() => setLightbox(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-colors"
                aria-label="Close lightbox"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="text-center mt-4">
                <span className="badge-gold">{lightbox.tag}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
