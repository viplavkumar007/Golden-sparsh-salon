import { MapPin, Phone } from 'lucide-react'
import { brand, nav } from '../data/siteContent'

function WhatsAppIcon({ className = '' }) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.04 3C8.86 3 3.02 8.8 3.02 15.93c0 2.28.6 4.5 1.74 6.45L3 29l6.83-1.79a13.07 13.07 0 0 0 6.2 1.58h.01c7.18 0 13.02-5.8 13.02-12.93C29.06 8.8 23.22 3 16.04 3Zm0 23.6a10.86 10.86 0 0 1-5.55-1.52l-.4-.24-4.05 1.06 1.08-3.93-.26-.4a10.69 10.69 0 0 1-1.66-5.64c0-5.93 4.86-10.75 10.84-10.75 5.98 0 10.84 4.82 10.84 10.75S22.02 26.6 16.04 26.6Zm5.95-8.04c-.33-.16-1.93-.95-2.23-1.05-.3-.11-.52-.16-.74.16-.22.32-.85 1.05-1.04 1.27-.19.22-.38.24-.71.08-.33-.16-1.38-.5-2.63-1.6a9.78 9.78 0 0 1-1.82-2.25c-.19-.32-.02-.5.14-.66.15-.14.33-.38.49-.57.16-.19.22-.32.33-.54.11-.22.05-.41-.03-.57-.08-.16-.74-1.77-1.01-2.43-.27-.64-.54-.55-.74-.56h-.63c-.22 0-.57.08-.87.41-.3.32-1.14 1.11-1.14 2.7s1.17 3.13 1.33 3.35c.16.22 2.3 3.49 5.57 4.89.78.33 1.39.53 1.86.68.78.25 1.49.21 2.05.13.63-.09 1.93-.78 2.2-1.54.27-.76.27-1.41.19-1.54-.08-.14-.3-.22-.63-.38Z" />
    </svg>
  )
}

export default function Footer() {
  const year = new Date().getFullYear()

  const scrollTo = (id) => {
    document.getElementById(id.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-gold-DEFAULT/15" style={{ background: 'linear-gradient(135deg, #222222, #353535)' }}>
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand Column */}
          <div className="lg:col-span-2">
            <img src={brand.logo} alt={brand.fullName} className="h-16 w-auto mb-5" />
            <p className="text-white/55 font-body text-sm leading-relaxed max-w-xs mb-6">
              A premium beauty destination exclusively for women. Professional salon services, bridal makeovers, and certified beauty education programs.
            </p>
            {/* Contact shortcuts */}
            <div className="flex gap-3">
              <a
                href={`https://wa.me/91${brand.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#25D366] text-white shadow-lg hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="w-6 h-6" />
              </a>
              <a
                href={`tel:+91${brand.phone}`}
                className="w-11 h-11 rounded-xl flex items-center justify-center bg-[#1976D2] text-white shadow-lg hover:bg-[#1565C0] hover:-translate-y-1 transition-all duration-300"
                aria-label="Call"
              >
                <Phone className="w-5 h-5" strokeWidth={2.4} />
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
                <WhatsAppIcon className="w-4 h-4 flex-shrink-0 text-[#25D366]" />
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
