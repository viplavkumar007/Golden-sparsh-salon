import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { serviceCategories, brand } from '../../data/siteContent'
import ScrollReveal, { StaggerContainer, fadeUpItem } from '../ui/ScrollReveal'
import SectionBadge from '../ui/SectionBadge'

function waUrl(msg) {
  return `https://wa.me/91${brand.whatsapp}?text=${encodeURIComponent(msg)}`
}

const SERVICE_IMAGES = {
  'Hair Cut': 'https://thumbs.dreamstime.com/b/female-haircut-scissors-beauty-salon-88570552.jpg',
  'Hair Wash': 'https://img.freepik.com/premium-photo/hairdresser-wash-soap-client-hair-salon-treatment-with-tap-basin-massage-hands-scalp-clean-balayage-hairstyle-happy-female-person-keratin-shampoo-haircare_590464-425211.jpg?w=2000',
  'Hair Spa': 'https://thumbs.dreamstime.com/z/spa-treatment-hair-beautiful-women-beauty-salon-closeup-portrait-spa-treatment-hair-beautiful-woman-119688245.jpg',
  'Hair Styling': 'https://c8.alamy.com/comp/2R7KF5M/salon-blow-dry-professional-hairdresser-with-round-brush-and-hair-dryer-styling-hair-of-female-customer-brunette-woman-with-short-hair-beauty-salon-2R7KF5M.jpg',
  'Hair Coloring': 'https://img.freepik.com/premium-photo/professional-hair-coloring-women-salon-bright-trendy-style_162895-309.jpg?w=1380',
  'Global Hair Color': 'https://img.freepik.com/premium-photo/hairdresser-applying-hair-dye-client-salon_23-2149230946.jpg?w=1380',
  'Root Touch-Up': 'https://wella.bynder.com/transform/bda2740d-c6bb-4b2e-b099-40c733d6dc63/ClairolRetail_FY24_US-RTU_4_DarkBrown_D1C1?io=transform:fill,width:3840&quality=85',
  Highlights: 'https://www.allsalonprices.com/wp-content/uploads/2023/11/Hair-Highlighting-Process.webp',
  'Keratin Treatment': 'https://mississaugahairsalon.ca/wp-content/uploads/2023/04/Keratin-Treatment-Before-and-After-1.jpg',
  'Hair Botox': 'https://salonsuitesboca.com/wp-content/uploads/2025/01/hair-botox-treatment-3.jpg',
  Smoothening: 'https://charlesifergan.com/wp-content/uploads/2023/07/CI_blogpost_2023_July07_allsocial_blogphoto-1184x1184.jpg',
  Straightening: 'https://images.nexusapp.co/assets/cc/87/ea/32493294.jpg',
  Rebonding: 'https://i.pinimg.com/originals/b1/21/b6/b121b67a3a07ff60baafc3e79eb249fa.jpg',
  'Hair Extensions': 'https://img.freepik.com/premium-photo/hairdresser-female-making-hair-extensions-young-woman-with-blonde-hair-beauty-salon-professional-hair-extension_183314-1810.jpg?w=1380',

  Cleanup: 'https://img.freepik.com/premium-photo/asian-woman-getting-facial-cleaning-beauty-salon_878783-20125.jpg?w=2000',
  'Gold Facial': 'https://img.freepik.com/premium-photo/woman-gets-gold-facial-treatment-spa_36682-90154.jpg?w=2000',
  'Diamond Facial': 'https://image7.slideserve.com/12793060/diamond-facial-this-facial-is-a-peel-treatment-l.jpg',
  'Hydra Facial': 'https://img.freepik.com/premium-photo/woman-receiving-hydrafacial-treatment-beauty-salon_175086-4480.jpg',
  'Detan Treatment': 'https://myhomesalon.in/wp-content/uploads/2024/06/image-10.png',
  'Anti-Aging Facial': 'https://img.freepik.com/premium-photo/woman-enjoying-anti-aging-facial-massage-pretty-girl-getting-professional-skin-care-wellness-center-relaxation-beauty-spa-face-treatment-concept-top-view-copy-space_116547-3368.jpg?w=2000',
  'Skin Brightening': 'https://www.immersespaandsalon.com/wp-content/uploads/Skin-Brightening-Facial.webp',
  'Acne Treatment': 'https://m.media-amazon.com/images/I/81+7C-OiybL.jpg',
  'Glow Treatment': 'https://ozmosis.com.my/wp-content/uploads/2024/09/Rose-Glow-web-image-01.jpg',

  Threading: 'https://c8.alamy.com/comp/HWBWX8/eyebrow-threading-of-woman-middle-aged-in-spa-salon-master-corrects-HWBWX8.jpg',
  Waxing: 'https://img.freepik.com/premium-photo/beautiful-woman-having-waxing-hair-removal-services-salon_1218867-356769.jpg',
  'Rica Wax': 'https://i.pinimg.com/originals/8d/4e/d2/8d4ed2331c76a850f535d4c627e8185b.jpg',
  'Full Body Wax': 'https://seemaspa.com/wp-content/uploads/2025/05/beauty-depilation-epilation-hair-removal-people-concept-beautiful-woman-with-applicator-applying-depilatory-wax-her-leg-scaled.jpg',
  Bleach: 'https://richinfinity.in/wp-content/uploads/2018/04/cherlys-facial-on-face.jpg',
  Manicure: 'https://bedazzlednailsandspa.com/images/3.jpg',
  Pedicure: 'https://img.freepik.com/premium-photo/closeup-photo-female-feet-spa-salon-pedicure-procedure_926199-4080290.jpg?w=2000',
  'Body Polishing': 'https://getlabtest-assets-prod.s3.amazonaws.com/media/original_images/body-polish-treatment-spa-oils-exfoliating-12345.webp',

  'Bridal Makeup': 'https://i.pinimg.com/736x/0b/bb/12/0bbb12950b30a870a98117ee3af5a3cf.jpg',
  'HD Makeup': 'https://as2.ftcdn.net/v2/jpg/04/92/44/73/1000_F_492447303_p5YKirpVlE2vdYybFuYM094r5mEnoATk.jpg',
  'Airbrush Makeup': 'https://www.glam.com/img/gallery/your-ultimate-guide-to-airbrush-makeup/how-long-will-airbrush-makeup-last-1681503839.jpg',
  'Engagement Makeup': 'https://i.pinimg.com/originals/02/44/95/02449589da45a0e98ea0c78e1033814b.jpg',
  'Reception Makeup': 'https://i.pinimg.com/originals/58/74/00/587400680811b2e09a1df0c177695df9.jpg',
  'Party Makeup': 'https://thumbs.dreamstime.com/z/sexy-makeup-party-makeup-artist-applies-eye-shadow-hand-visagiste-painting-cosmetics-young-beauty-model-girl-beautiful-277973790.jpg',
  'Pre Bridal Packages': 'https://urbanskinhairclinic.com/wp-content/uploads/2023/08/Process-of-pre-bridal-skin-treatment-1024x1024.webp',
  'Saree Draping': 'https://i.pinimg.com/originals/f3/29/d4/f329d475b9c2fda6b0a8ca1d5ddac83e.png',

  'Nail Extensions': 'https://www.deepaskayakalp.com/nail-extension.jpg',
  'Gel Polish': 'https://thumbs.dreamstime.com/z/woman-getting-professional-manicure-beauty-salon-master-applies-gel-polish-nails-dry-uv-lamp-nail-extension-tools-284171732.jpg',
  'Nail Art': 'https://i.pinimg.com/736x/0d/40/98/0d4098da9e99ffe1018c99013effd23a.jpg',
  'French Nails': 'https://imgix.bustle.com/uploads/image/2024/1/5/dca3933b-b93f-46f2-aa03-d56ab054f779-337133057_587486253416167_1587107762116185781_n.jpg?w=414&h=517&fit=crop&crop=focalpoint&fp-x=0.4874&fp-y=0.5457&dpr=2',
  Refill: 'https://cdn1.treatwell.net/images/view/v2.i7387945.w1280.h800.xE147D304/',
  Removal: 'https://nailicy.com/images/resources/how-do-nail-salons-remove-nail-polish_20250712232251.webp',
  'Luxury Nail Designs': 'https://i.pinimg.com/originals/f9/78/81/f978816250b24300150693d528979c22.jpg',
}

const CATEGORY_FALLBACK_IMAGES = {
  hair: SERVICE_IMAGES['Hair Styling'],
  skin: SERVICE_IMAGES['Hydra Facial'],
  beauty: SERVICE_IMAGES.Manicure,
  bridal: SERVICE_IMAGES['Bridal Makeup'],
  nails: SERVICE_IMAGES['Nail Art'],
}

function getServiceImage(serviceName, categoryId) {
  return SERVICE_IMAGES[serviceName] || CATEGORY_FALLBACK_IMAGES[categoryId] || SERVICE_IMAGES.Manicure
}

const CATEGORY_STYLES = {
  hair: {
    card: 'from-cyan-50 via-white to-teal-50 border-cyan-200',
    badge: 'from-cyan-500 to-teal-500',
    button: 'from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600',
    glow: 'shadow-cyan-200/60',
    icon: 'H',
  },
  skin: {
    card: 'from-pink-50 via-white to-fuchsia-50 border-pink-200',
    badge: 'from-pink-500 to-fuchsia-500',
    button: 'from-pink-500 to-fuchsia-500 hover:from-pink-600 hover:to-fuchsia-600',
    glow: 'shadow-pink-200/60',
    icon: 'S',
  },
  beauty: {
    card: 'from-rose-50 via-white to-orange-50 border-rose-200',
    badge: 'from-rose-500 to-orange-400',
    button: 'from-rose-500 to-orange-400 hover:from-rose-600 hover:to-orange-500',
    glow: 'shadow-rose-200/60',
    icon: 'B',
  },
  bridal: {
    card: 'from-amber-50 via-white to-yellow-50 border-amber-200',
    badge: 'from-amber-400 to-yellow-500',
    button: 'from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600',
    glow: 'shadow-amber-200/60',
    icon: 'M',
  },
  nails: {
    card: 'from-purple-50 via-white to-pink-50 border-purple-200',
    badge: 'from-purple-500 to-pink-500',
    button: 'from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    glow: 'shadow-purple-200/60',
    icon: 'N',
  },
}

const CARD_PALETTES = [
  {
    card: 'from-cyan-50 via-white to-teal-50 border-cyan-200',
    badge: 'from-cyan-500 to-teal-500',
    button: 'from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600',
    glow: 'shadow-cyan-200/60',
  },
  {
    card: 'from-pink-50 via-white to-rose-50 border-pink-200',
    badge: 'from-pink-500 to-rose-500',
    button: 'from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600',
    glow: 'shadow-pink-200/60',
  },
  {
    card: 'from-amber-50 via-white to-yellow-50 border-amber-200',
    badge: 'from-amber-400 to-yellow-500',
    button: 'from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600',
    glow: 'shadow-amber-200/60',
  },
  {
    card: 'from-violet-50 via-white to-purple-50 border-violet-200',
    badge: 'from-violet-500 to-purple-500',
    button: 'from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600',
    glow: 'shadow-violet-200/60',
  },
  {
    card: 'from-emerald-50 via-white to-lime-50 border-emerald-200',
    badge: 'from-emerald-500 to-lime-500',
    button: 'from-emerald-500 to-lime-500 hover:from-emerald-600 hover:to-lime-600',
    glow: 'shadow-emerald-200/60',
  },
  {
    card: 'from-orange-50 via-white to-red-50 border-orange-200',
    badge: 'from-orange-500 to-red-500',
    button: 'from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600',
    glow: 'shadow-orange-200/60',
  },
  {
    card: 'from-blue-50 via-white to-indigo-50 border-blue-200',
    badge: 'from-blue-500 to-indigo-500',
    button: 'from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600',
    glow: 'shadow-blue-200/60',
  },
  {
    card: 'from-fuchsia-50 via-white to-pink-50 border-fuchsia-200',
    badge: 'from-fuchsia-500 to-pink-500',
    button: 'from-fuchsia-500 to-pink-500 hover:from-fuchsia-600 hover:to-pink-600',
    glow: 'shadow-fuchsia-200/60',
  },
]

const SERVICE_COPY = {
  'Hair Cut': 'Precision cuts shaped to suit your face, lifestyle, and personal style.',
  'Hair Wash': 'A refreshing cleanse and scalp massage that leaves hair soft and light.',
  'Hair Spa': 'Nourishing hair therapy for dry, tired, or damaged strands.',
  'Hair Styling': 'Polished styling for events, parties, photoshoots, and everyday glam.',
  'Hair Coloring': 'Fresh color accents and creative tones for a confident new look.',
  'Global Hair Color': 'Full-head color transformation with a smooth, even finish.',
  'Root Touch-Up': 'Seamless root coverage to keep your color looking fresh.',
  Highlights: 'Dimensional highlights that brighten your hair with natural movement.',
  'Keratin Treatment': 'Smoothing care to reduce frizz and improve shine.',
  'Hair Botox': 'Deep repair treatment for smoother, healthier-looking hair.',
  Smoothening: 'Sleek, manageable hair with a soft and polished finish.',
  Straightening: 'Long-lasting straight style for a clean, refined look.',
  Rebonding: 'Intensive texture transformation for straighter, smoother hair.',
  'Hair Extensions': 'Add length, fullness, and volume with a natural blend.',
  Cleanup: 'Quick skin refresh to cleanse pores and revive dullness.',
  'Gold Facial': 'Radiance-boosting facial care for a warm, healthy glow.',
  'Diamond Facial': 'Premium facial treatment for luminous, pampered skin.',
  'Hydra Facial': 'Deep hydration and glow therapy for soft, refreshed skin.',
  'Detan Treatment': 'Targeted care to reduce tanning and brighten skin tone.',
  'Anti-Aging Facial': 'Restorative facial focused on firmness, texture, and glow.',
  'Skin Brightening': 'Brightening care to improve clarity and evenness.',
  'Acne Treatment': 'Calming skin support for clearer, balanced-looking skin.',
  'Glow Treatment': 'Instant radiance treatment before events and special days.',
  Threading: 'Clean eyebrow and facial hair shaping with a precise finish.',
  Waxing: 'Smooth hair removal service for soft, touchable skin.',
  'Rica Wax': 'Gentle premium waxing for sensitive, smooth results.',
  'Full Body Wax': 'Complete waxing care for long-lasting smoothness.',
  Bleach: 'Subtle brightening care for a cleaner, more even appearance.',
  Manicure: 'Hand and nail care finished with a neat, polished look.',
  Pedicure: 'Relaxing foot care for clean, soft, beautifully finished feet.',
  'Body Polishing': 'Full-body exfoliation care for smoother, glowing skin.',
  'Bridal Makeup': 'Elegant bridal glam crafted to last through your special day.',
  'HD Makeup': 'Camera-ready makeup with refined texture and flawless finish.',
  'Airbrush Makeup': 'Lightweight, smooth glam for long-wear special occasions.',
  'Engagement Makeup': 'Soft, radiant makeup for engagement celebrations.',
  'Reception Makeup': 'Evening-ready glam with a polished, photo-friendly finish.',
  'Party Makeup': 'Fresh glam for parties, functions, and festive moments.',
  'Pre Bridal Packages': 'Beauty prep designed to help you glow before the wedding.',
  'Saree Draping': 'Clean, graceful draping for a confident traditional look.',
  'Nail Extensions': 'Length and shape enhancement for statement-ready nails.',
  'Gel Polish': 'Glossy, chip-resistant color with a clean salon finish.',
  'Nail Art': 'Creative nail detailing for playful, elegant, or bold styles.',
  'French Nails': 'Classic French finish with a refined, timeless look.',
  Refill: 'Refresh your extensions and keep your nails looking neat.',
  Removal: 'Careful product removal to protect your natural nails.',
  'Luxury Nail Designs': 'Premium nail artistry with elevated detailing and shine.',
}

export default function Services() {
  const [activeTab, setActiveTab] = useState('hair')
  const activeCategory = serviceCategories.find((c) => c.id === activeTab)

  return (
    <section id="services" className="section-pad bg-salon-blush overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <ScrollReveal className="text-center mb-14">
          <SectionBadge>Our Services</SectionBadge>
          <h2 className="font-display font-bold text-4xl sm:text-5xl mt-3 mb-3 leading-tight">
            <span className="text-salon-charcoal">Premium </span>
            <span className="text-gold-gradient">Beauty Services</span>
          </h2>
          <div className="gold-divider max-w-xs mx-auto my-5" />
          <p className="text-salon-charcoal/65 font-body text-lg max-w-2xl mx-auto">
            From everyday beauty rituals to transformative treatments — we deliver luxury at every visit.
          </p>
        </ScrollReveal>

        {/* Tab Navigation */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-2.5 rounded-full text-sm font-sans font-semibold tracking-wide transition-all duration-300 focus-gold ${
                  activeTab === cat.id
                    ? 'btn-gold-glossy'
                    : 'text-salon-charcoal/65 border border-gold-DEFAULT/25 hover:border-gold-DEFAULT hover:text-gold-dark bg-white/55'
                }`}
              >
                <span className="mr-1.5">{cat.icon}</span>
                {cat.title}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Active Category */}
        {activeCategory && (
          <motion.div
            key={activeCategory.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Header */}
            <div className="text-center mb-10">
              <div className="text-5xl mb-3">{activeCategory.icon}</div>
              <h3 className="font-display text-2xl font-bold text-gold-DEFAULT">{activeCategory.title}</h3>
            </div>

            {/* Service Cards Grid */}
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5" staggerChildren={0.05}>
              {activeCategory.services.map((service, index) => {
                const serviceName = typeof service === 'string' ? service : service.label
                const serviceImage = getServiceImage(serviceName, activeCategory.id)
                const serviceDescription = SERVICE_COPY[serviceName] || `Premium ${serviceName.toLowerCase()} care delivered with attention to comfort, hygiene, and finish.`
                const categoryStyle = CATEGORY_STYLES[activeCategory.id] || CATEGORY_STYLES.beauty
                const palette = CARD_PALETTES[(index + activeCategory.id.length) % CARD_PALETTES.length]
                const style = { ...categoryStyle, ...palette }

                return (
                <motion.div
                  key={serviceName}
                  variants={fadeUpItem}
                  className={`group relative min-h-[360px] overflow-hidden rounded-[14px] border bg-gradient-to-br ${style.card} shadow-[0_18px_38px_rgba(53,53,53,0.08)] transition-shadow duration-300 hover:shadow-2xl ${style.glow}`}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="relative flex h-full flex-col">
                    <div className="relative h-40 overflow-hidden">
                      <img
                        src={serviceImage}
                        alt={`${serviceName} at ${brand.name}`}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-salon-charcoal/35 via-transparent to-white/5" />
                      <span className={`absolute left-3 top-3 rounded-full bg-gradient-to-r ${style.badge} px-3 py-1 font-sans text-[10px] font-bold text-white shadow-lg`}>
                        {activeCategory.title.replace(' Services', '').replace(' Care', ' Skin')}
                      </span>
                      <span className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 font-display text-base font-bold text-salon-charcoal shadow-lg ring-1 ring-white/80">
                        {style.icon}
                      </span>
                    </div>

                    <div className="flex flex-1 flex-col justify-between gap-5 p-5">
                    <div>
                      <p className="font-display text-xl font-bold leading-tight text-salon-charcoal">
                        {serviceName}
                      </p>
                      <p className="mt-3 min-h-[66px] font-sans text-sm leading-relaxed text-salon-charcoal/70">
                        {serviceDescription}
                      </p>
                    </div>

                    <a
                      href={waUrl(`Hi Golden Sparsh! I am interested in booking a ${serviceName} appointment. Please share the details.`)}
                      target="_blank"
                      rel="noopener noreferrer"
                        className={`inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r ${style.button} px-4 py-3 font-sans text-xs font-bold uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl group/wa`}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Book Now
                      <ArrowRight className="w-3.5 h-3.5 group-hover/wa:translate-x-0.5 transition-transform" />
                    </a>
                    </div>
                  </div>
                </motion.div>
                )
              })}
            </StaggerContainer>

            {/* Category CTA */}
            <div className="text-center mt-10">
              <a
                href={waUrl(activeCategory.waMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-glossy px-8 py-3.5 rounded-full inline-flex items-center gap-2 text-sm"
              >
                <MessageCircle className="w-4 h-4" />
                Enquire About {activeCategory.title}
              </a>
            </div>
          </motion.div>
        )}

        {/* Why Us Strip */}
        <ScrollReveal delay={0.1} className="mt-20">
          <div
            className="rounded-3xl p-8 sm:p-10 border border-gold-DEFAULT/20"
            style={{
              background: 'linear-gradient(135deg, rgba(201,162,78,0.08) 0%, rgba(212,175,55,0.05) 100%)',
            }}
          >
            <div className="text-center mb-8">
              <h3 className="font-display text-2xl font-bold">
                <span className="text-salon-charcoal">Why Choose </span>
                <span className="text-gold-gradient">Golden Sparsh?</span>
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { icon: '👑', title: 'Premium Experience' },
                { icon: '🏅', title: 'Certified Professionals' },
                { icon: '🧼', title: '100% Hygiene' },
                { icon: '💎', title: 'Luxury Products' },
              ].map((item) => (
                <div key={item.title} className="text-center">
                  <div className="text-3xl mb-2">{item.icon}</div>
                  <p className="text-salon-charcoal/75 text-sm font-sans font-medium">{item.title}</p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
