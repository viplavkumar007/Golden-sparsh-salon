import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Instagram, Heart } from 'lucide-react'
import { brand, nav } from '../data/siteContent'

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-salon-black border-t border-gold-DEFAULT/15">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={brand.logo} alt={brand.fullName} className="h-16 w-auto mb-5" />
            <p className="text-white/55 font-body text-sm leading-relaxed max-w-xs mb-6">
              A premium beauty destination exclusively for women. Professional salon services, bridal makeovers, and certified beauty education programs.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={brand.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-salon-black transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/91${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-salon-black transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`tel:+91${brand.phone}`}
                className="w-10 h-10 rounded-xl flex items-center justify-center border border-gold-DEFAULT/30 text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-salon-black transition-all duration-300"
                aria-label="Call"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm tracking-[0.15em] uppercase mb-5">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2">
              {nav.links.map(({ label, href }) => (
                <li key={label}>
                  <button
                    onClick={() => scrollTo(href)}
                    className="text-white/50 hover:text-gold-DEFAULT text-sm font-sans transition-colors duration-200 text-left group flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-gold-DEFAULT/0 group-hover:bg-gold-DEFAULT transition-colors" />
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans font-semibold text-white text-sm tracking-[0.15em] uppercase mb-5">
              Contact
            </h3>
            <div className="flex flex-col gap-3">
              <a
                href={`tel:+91${brand.phone}`}
                className="flex items-center gap-3 text-white/50 hover:text-gold-DEFAULT transition-colors text-sm font-sans"
              >
                <Phone className="w-3.5 h-3.5 flex-shrink-0 text-gold-DEFAULT/60" />
                +91 {brand.phone}
              </a>
              <a
                href={`https://wa.me/91${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-white/50 hover:text-gold-DEFAULT transition-colors text-sm font-sans"
              >
                <MessageCircle className="w-3.5 h-3.5 flex-shrink-0 text-gold-DEFAULT/60" />
                WhatsApp Us
              </a>
              <div className="flex items-start gap-3 text-white/40 text-xs font-sans leading-relaxed">
                <MapPin className="w-3.5 h-3.5 flex-shrink-0 text-gold-DEFAULT/60 mt-0.5" />
                {brand.addressFull}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Divider */}
      <div className="gold-divider" />

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/35 text-xs font-sans text-center sm:text-left">
            © {year} {brand.fullName}. All Rights Reserved.
          </p>
          <p className="text-white/25 text-xs font-sans flex items-center gap-1">
            Where Beauty Meets Excellence
          </p>
        </div>
      </div>
    </footer>
  )
}
