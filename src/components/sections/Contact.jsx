import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { MapPin, Phone, MessageCircle, Clock, Send, Loader2, Mail } from 'lucide-react'
import { contact, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'
import Toast from '../ui/Toast'

const INITIAL = { name: '', phone: '', service: '', message: '' }
const SERVICES_LIST = [
  'Hair Services', 'Skin Care', 'Beauty Services',
  'Bridal Makeup', 'Nail Studio', 'Academy Admission', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [loading, setLoading] = useState(false)
  const [toast, setToast] = useState(null)

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Please enter your name'
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone.trim())) e.phone = 'Enter a valid 10-digit mobile number'
    if (!form.service) e.service = 'Please select a service'
    return e
  }

  const handleChange = useCallback((e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    setErrors((er) => ({ ...er, [name]: '' }))
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      const msg = `Hi Golden Sparsh! I am ${form.name}. My number is ${form.phone}. I am interested in: ${form.service}.${form.message ? ` Additional info: ${form.message}` : ''} Please get back to me.`
      window.open(`https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
      setToast({ id: Date.now(), type: 'success', message: 'Redirecting to WhatsApp! We will respond shortly.' })
      setForm(INITIAL)
    }, 900)
  }

  return (
    <section id="contact" className="section-pad bg-salon-blush overflow-hidden">
      <Toast toast={toast} onDismiss={() => setToast(null)} />
      <div className="max-w-7xl mx-auto">

        <ScrollReveal className="text-center mb-14">
          <SectionBadge>{contact.badge}</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 text-salon-black leading-tight">
            {contact.heading}
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/60 font-body text-lg max-w-xl mx-auto">{contact.subheading}</p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info Panel */}
          <StaggerContainer className="lg:col-span-2 flex flex-col gap-5" staggerChildren={0.1}>
            {/* Info Card */}
            <motion.div
              variants={fadeUpItem}
              className="rounded-3xl p-7 border border-gold-DEFAULT/20"
              style={{ background: 'linear-gradient(145deg, #353535, #222222)' }}
            >
              <h3 className="font-display font-bold text-xl text-white mb-5">Get In Touch</h3>
              <div className="flex flex-col gap-4">
                <a
                  href={`tel:+91${contact.phone}`}
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                    style={{ background: 'linear-gradient(135deg, #C9A24E, #E3C98A)' }}>
                    <Phone className="w-4 h-4 text-salon-black" />
                  </span>
                  <div>
                    <p className="text-white/40 text-xs font-sans tracking-wider">CALL US</p>
                    <p className="text-white font-sans font-semibold text-sm">+91 {contact.phone}</p>
                  </div>
                </a>

                <a
                  href={`https://wa.me/91${contact.whatsapp}?text=${encodeURIComponent(contact.waDefaultMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 bg-green-600 group-hover:scale-110 transition-transform">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </span>
                  <div>
                    <p className="text-white/40 text-xs font-sans tracking-wider">WHATSAPP</p>
                    <p className="text-white font-sans font-semibold text-sm">+91 {contact.whatsapp}</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: 'rgba(201,162,78,0.15)' }}>
                    <MapPin className="w-4 h-4 text-gold-DEFAULT" />
                  </span>
                  <div>
                    <p className="text-white/40 text-xs font-sans tracking-wider">ADDRESS</p>
                    <p className="text-white/80 font-sans text-sm leading-relaxed">{contact.address}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hours */}
            <motion.div
              variants={fadeUpItem}
              className="rounded-3xl p-6 border border-gold-DEFAULT/20"
              style={{ background: 'linear-gradient(145deg, #353535, #222222)' }}
            >
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-4 h-4 text-gold-DEFAULT" />
                <h3 className="font-sans font-semibold text-white text-sm tracking-wide">WORKING HOURS</h3>
              </div>
              {contact.hours.map(({ day, time }) => (
                <div key={day} className="flex justify-between items-center py-2.5 border-b border-white/10 last:border-0">
                  <span className="text-white/60 text-xs font-sans">{day}</span>
                  <span className="text-gold-DEFAULT text-xs font-sans font-semibold">{time}</span>
                </div>
              ))}
            </motion.div>

            {/* Map */}
            <motion.div variants={fadeUpItem} className="rounded-3xl overflow-hidden border border-gold-DEFAULT/20" style={{ height: 200 }}>
              <iframe
                src={brand.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'saturate(0.8)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Golden Sparsh Location"
              />
            </motion.div>
          </StaggerContainer>

          {/* Contact Form */}
          <ScrollReveal delay={0.2} className="lg:col-span-3">
            <div
              className="rounded-3xl p-8 sm:p-10 border border-gold-DEFAULT/15 h-full"
              style={{ background: 'linear-gradient(145deg, #ffffff, #faf7f0)' }}
            >
              <h3 className="font-display font-bold text-2xl text-salon-black mb-2">Book An Appointment</h3>
              <p className="text-salon-charcoal/55 font-body text-sm mb-7">Fill in the form and we'll connect via WhatsApp instantly.</p>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-sans font-semibold text-salon-charcoal/70 tracking-wider uppercase mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-salon-charcoal font-sans text-sm outline-none transition-all ${
                      errors.name
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                        : 'border-salon-charcoal/15 focus:border-gold-DEFAULT focus:ring-2 focus:ring-gold-DEFAULT/20'
                    }`}
                    style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)' }}
                  />
                  {errors.name && <p className="text-red-500 text-xs mt-1 font-sans">{errors.name}</p>}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-sans font-semibold text-salon-charcoal/70 tracking-wider uppercase mb-2">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="10-digit mobile number"
                    maxLength={10}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-salon-charcoal font-sans text-sm outline-none transition-all ${
                      errors.phone
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                        : 'border-salon-charcoal/15 focus:border-gold-DEFAULT focus:ring-2 focus:ring-gold-DEFAULT/20'
                    }`}
                    style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)' }}
                  />
                  {errors.phone && <p className="text-red-500 text-xs mt-1 font-sans">{errors.phone}</p>}
                </div>

                {/* Service */}
                <div>
                  <label className="block text-xs font-sans font-semibold text-salon-charcoal/70 tracking-wider uppercase mb-2">
                    Service Interested In *
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-white border text-salon-charcoal font-sans text-sm outline-none transition-all appearance-none ${
                      errors.service
                        ? 'border-red-400 focus:ring-2 focus:ring-red-400/30'
                        : 'border-salon-charcoal/15 focus:border-gold-DEFAULT focus:ring-2 focus:ring-gold-DEFAULT/20'
                    }`}
                    style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)' }}
                  >
                    <option value="">Select a service...</option>
                    {SERVICES_LIST.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.service && <p className="text-red-500 text-xs mt-1 font-sans">{errors.service}</p>}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-sans font-semibold text-salon-charcoal/70 tracking-wider uppercase mb-2">
                    Additional Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Any specific requirements, preferred date/time..."
                    className="w-full px-4 py-3.5 rounded-2xl bg-white border border-salon-charcoal/15 text-salon-charcoal font-sans text-sm outline-none focus:border-gold-DEFAULT focus:ring-2 focus:ring-gold-DEFAULT/20 transition-all resize-none"
                    style={{ boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.05)' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold-glossy w-full py-4 rounded-full inline-flex items-center justify-center gap-2 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Connecting to WhatsApp...
                    </>
                  ) : (
                    <>
                      <MessageCircle className="w-4 h-4" />
                      Send via WhatsApp
                    </>
                  )}
                </button>

                <p className="text-center text-xs text-salon-charcoal/40 font-sans">
                  ✦ Your enquiry will be sent directly to our WhatsApp
                </p>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
