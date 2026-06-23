import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Phone, Instagram } from 'lucide-react'
import { brand } from '../data/siteContent'

const WA_URL = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
  'Hi Golden Sparsh! I would like to get more information.'
)}`

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">

      {/* Instagram */}
      <motion.a
        href={brand.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Instagram"
        className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        style={{
          background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
        }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8 }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Instagram className="w-4.5 h-4.5" />
      </motion.a>

      {/* Call */}
      <motion.a
        href={`tel:+91${brand.phone}`}
        aria-label="Call Golden Sparsh"
        className="w-11 h-11 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
        style={{
          background: 'linear-gradient(135deg, #1565C0, #1976D2)',
        }}
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6 }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        <Phone className="w-4.5 h-4.5" />
      </motion.a>

      {/* WhatsApp - primary */}
      <motion.a
        href={WA_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="w-14 h-14 rounded-full flex items-center justify-center text-white shadow-2xl relative"
        style={{
          background: 'linear-gradient(135deg, #25D366, #128C7E)',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
        }}
        initial={{ opacity: 0, scale: 0, x: 40 }}
        animate={{ opacity: 1, scale: 1, x: 0 }}
        transition={{ delay: 0.4, type: 'spring', stiffness: 300 }}
        whileHover={{ scale: 1.12, y: -2 }}
        whileTap={{ scale: 0.95 }}
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full animate-ping opacity-25" style={{ background: '#25D366' }} />
        <MessageCircle className="w-6 h-6 relative z-10" />
      </motion.a>
    </div>
  )
}
