import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import { brand } from '../data/siteContent'

const WA_URL = `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(
  'Hi Golden Sparsh! I would like to get more information.'
)}`

function WhatsAppIcon({ className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      className={className}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M16.04 3C8.86 3 3.02 8.8 3.02 15.93c0 2.28.6 4.5 1.74 6.45L3 29l6.83-1.79a13.07 13.07 0 0 0 6.2 1.58h.01c7.18 0 13.02-5.8 13.02-12.93C29.06 8.8 23.22 3 16.04 3Zm0 23.6a10.86 10.86 0 0 1-5.55-1.52l-.4-.24-4.05 1.06 1.08-3.93-.26-.4a10.69 10.69 0 0 1-1.66-5.64c0-5.93 4.86-10.75 10.84-10.75 5.98 0 10.84 4.82 10.84 10.75S22.02 26.6 16.04 26.6Zm5.95-8.04c-.33-.16-1.93-.95-2.23-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.6a9.78 9.78 0 0 1-1.82-2.25c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.49 5.57 4.89.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.93-.78 2.2-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  )
}

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-4 z-50 flex flex-col gap-3 items-end">

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
        <WhatsAppIcon className="w-8 h-8 relative z-10 text-white" />
      </motion.a>
    </div>
  )
}
