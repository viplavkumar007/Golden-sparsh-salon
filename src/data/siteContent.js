import logo from '../assets/logo.png'
import salon1 from '../assets/salon1.jpeg'
import salon2 from '../assets/salon2.jpeg'
import salonTour from '../assets/salon-tour.mp4'
import salonVideo2 from '../assets/salon-video-2.mp4'
import salonVideo3 from '../assets/salon-video-3.mp4'

export const brand = {
  name: 'Golden Sparsh',
  fullName: 'Golden Sparsh Salon',
  tagline: 'Where Beauty Meets Excellence',
  tagline2: 'Premium Ladies Salon',
  logo,
  phone: '7775924144',
  whatsapp: '7775924144',
  email: '', // To be Updated Later
  address: {
    line1: 'Hari Om Hights, Navhra Fata Road',
    line2: 'Near Dnyanganga International School, Baburao Nagar',
    city: 'Shirur',
    pin: '412210',
    state: 'Maharashtra',
  },
  addressFull: 'Hari Om Hights, Navhra Fata Road, near Dnyanganga International School, Baburao Nagar, Shirur, Maharashtra 412210',
  instagram: 'https://www.instagram.com/goldensparsh_beautysalon?igsh=b29oM2E1ZXU1MWc0&utm_source=qr',
  facebook: 'https://www.facebook.com/share/1Cy75V8oCN/?mibextid=wwXIfr',
  mapEmbedUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.4929!2d74.3665!3d18.8393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTjCsDUwJzIxLjUiTiA3NMKwMjEnNTkuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin',
}

export const nav = {
  links: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel: 'Book Appointment',
}

export const hero = {
  badge: 'Premium Ladies Salon • Shirur, Pune',
  heading1: 'Beauty With',
  heading2: 'Elegance',
  subheading: 'Premium Ladies Salon — Where Beauty Meets Excellence',
  cta1: { label: 'Book Appointment', msg: 'Hi Golden Sparsh! I would like to book an appointment. Please let me know the available slots.' },
  cta2: { label: 'Explore Services', msg: 'Hi Golden Sparsh! I would like to know more about your salon services.' },
  stats: [
    { value: '500+', label: 'Happy Clients' },
    { value: '30+', label: 'Beauty Services' },
    { value: '5★', label: 'Rating' },
    { value: '100%', label: 'Hygiene' },
  ],
}

export const about = {
  badge: 'About Us',
  heading: 'Welcome To Golden Sparsh',
  subheading: 'Your Premium Beauty Destination in Shirur, Pune',
  description1:
    'Golden Sparsh Salon is a premium beauty destination exclusively for women. We specialize in professional salon services, bridal makeovers, advanced hair care, skin treatments, and nail artistry.',
  description2:
    'Our mission is to enhance beauty with personalized care, premium products, and a relaxing salon experience. We believe every woman deserves to feel extraordinary.',
  features: [
    { icon: '✦', label: 'Certified Professionals' },
    { icon: '✦', label: 'Premium Products' },
    { icon: '✦', label: '100% Hygiene' },
    { icon: '✦', label: 'Latest Techniques' },
    { icon: '✦', label: 'Personalized Care' },
    { icon: '✦', label: 'Modern Infrastructure' },
  ],
  images: [salon1, salon2],
}

export const serviceCategories = [
  {
    id: 'hair',
    icon: '💇‍♀️',
    title: 'Hair Services',
    accent: '#C9A24E',
    services: [
      { label: 'Hair Cut' },
      { label: 'Hair Wash' },
      { label: 'Hair Spa' },
      { label: 'Hair Styling' },
      { label: 'Hair Coloring' },
      { label: 'Global Hair Color' },
      { label: 'Root Touch-Up' },
      { label: 'Highlights' },
      { label: 'Keratin Treatment' },
      { label: 'Hair Botox' },
      { label: 'Smoothening' },
      { label: 'Straightening' },
      { label: 'Rebonding' },
      { label: 'Hair Extensions' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Hair Services. Please share more details.',
  },
  {
    id: 'skin',
    icon: '✨',
    title: 'Skin Care',
    accent: '#E3C98A',
    services: [
      { label: 'Cleanup' },
      { label: 'Gold Facial' },
      { label: 'Diamond Facial' },
      { label: 'Hydra Facial' },
      { label: 'Detan Treatment' },
      { label: 'Anti-Aging Facial' },
      { label: 'Skin Brightening' },
      { label: 'Acne Treatment' },
      { label: 'Glow Treatment' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Skin Care Services. Please share more details.',
  },
  {
    id: 'beauty',
    icon: '💅',
    title: 'Beauty Services',
    accent: '#F6ECEC',
    services: [
      { label: 'Threading' },
      { label: 'Waxing' },
      { label: 'Rica Wax' },
      { label: 'Full Body Wax' },
      { label: 'Bleach' },
      { label: 'Manicure' },
      { label: 'Pedicure' },
      { label: 'Body Polishing' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Beauty Services. Please share more details.',
  },
  {
    id: 'bridal',
    icon: '👰',
    title: 'Bridal Services',
    accent: '#D4AF37',
    services: [
      { label: 'Bridal Makeup' },
      { label: 'HD Makeup' },
      { label: 'Airbrush Makeup' },
      { label: 'Engagement Makeup' },
      { label: 'Reception Makeup' },
      { label: 'Party Makeup' },
      { label: 'Pre Bridal Packages' },
      { label: 'Saree Draping' },
      { label: 'Hair Styling' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Bridal Services. Please share package details.',
  },
  {
    id: 'nails',
    icon: '💎',
    title: 'Nail Studio',
    accent: '#C9A24E',
    services: [
      { label: 'Nail Extensions' }, { label: 'Gel Polish' }, { label: 'Nail Art' }, { label: 'French Nails' },
      { label: 'Refill' }, { label: 'Removal' }, { label: 'Luxury Nail Designs' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Nail Studio Services. Please share more details.',
  },
]

export const bridal = {
  badge: 'Bridal Makeover',
  heading: 'Your Dream Bridal Look',
  subheading: 'Every bride deserves to look flawless on her most special day',
  services: [
    { title: 'Bridal Makeup', desc: 'Traditional to contemporary bridal looks crafted with precision' },
    { title: 'Engagement Makeup', desc: 'Elegant and radiant looks for your special occasion' },
    { title: 'Reception Makeup', desc: 'Glamorous evening looks that last through the night' },
    { title: 'HD Makeup', desc: 'High-definition perfection for photos and videos' },
    { title: 'Airbrush Makeup', desc: 'Flawless, lightweight finish for all-day wear' },
  ],
  cta: { label: 'Enquire About Bridal Package', msg: 'Hi Golden Sparsh! I am interested in your Bridal Makeup packages. Please share the complete bridal package details.' },
}

export const whyUs = [
  { icon: '👑', title: 'Premium Experience', desc: 'Luxury salon environment designed exclusively for women.' },
  { icon: '🏅', title: 'Certified Professionals', desc: 'Trained and certified beauty experts with years of experience.' },
  { icon: '🏛️', title: 'Modern Infrastructure', desc: 'State-of-the-art facilities with the latest beauty equipment.' },
  { icon: '🧼', title: '100% Hygiene', desc: 'Strict hygiene protocols and sanitized tools for every client.' },
  { icon: '✨', title: 'Latest Techniques', desc: 'Stay ahead with cutting-edge beauty treatments and styles.' },
  { icon: '💎', title: 'Luxury Products', desc: 'Only premium, skin-safe beauty products from trusted brands.' },
  { icon: '💝', title: 'Personalized Care', desc: 'Customized beauty solutions tailored to your unique needs.' },
]

export const gallery = {
  badge: 'Our Gallery',
  heading: 'Inside Golden Sparsh',
  items: [
    { id: 1, type: 'image', src: salon1, alt: 'Golden Sparsh Salon Interior - Styling Station', tag: 'Interior' },
    { id: 2, type: 'image', src: salon2, alt: 'Golden Sparsh Salon - Premium Hair Wash Station', tag: 'Interior' },
    { id: 3, type: 'video', src: salonTour, alt: 'Golden Sparsh Salon Video Tour', tag: 'Salon Tour' },
    { id: 4, type: 'video', src: salonVideo2, alt: 'Golden Sparsh Salon Experience Video', tag: 'Salon Video' },
    { id: 5, type: 'video', src: salonVideo3, alt: 'Golden Sparsh Salon Services Video', tag: 'Salon Video' },
  ],
}

export const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    role: 'Bride – December 2025',
    review: 'My bridal makeup was absolutely stunning! The team at Golden Sparsh understood my vision perfectly. I felt like a queen on my wedding day. Highly recommend for all brides!',
    rating: 5,
    initials: 'PS',
  },
  {
    id: 2,
    name: 'Sneha Patil',
    role: 'Regular Client',
    review: 'I have been coming here for my hair treatments for over a year now. The Keratin treatment was amazing – my hair has never felt this smooth and silky. The staff is so professional.',
    rating: 5,
    initials: 'SP',
  },
  {
    id: 4,
    name: 'Meghna Kulkarni',
    role: 'Regular Client',
    review: 'The Gold Facial and Hydra Facial services here are incredible. My skin has never looked better! The ambiance is so peaceful and luxurious. Worth every rupee.',
    rating: 5,
    initials: 'MK',
  },
  {
    id: 5,
    name: 'Rutuja Jadhav',
    role: 'Nail Art Client',
    review: 'Got my nail extensions done for my sister\'s wedding. The designs were absolutely gorgeous! The Nail Studio at Golden Sparsh is top-notch. Everyone was complimenting my nails!',
    rating: 5,
    initials: 'RJ',
  },
  {
    id: 6,
    name: 'Ananya More',
    role: 'Engagement Client',
    review: 'Got HD Makeup done for my engagement. I was glowing the entire day! The makeup artist is highly skilled and really listened to what I wanted. Thank you Golden Sparsh!',
    rating: 5,
    initials: 'AM',
  },
]

export const faqs = [
  {
    q: 'Do I need an appointment or can I walk in?',
    a: 'While walk-ins are welcome, we highly recommend booking an appointment to ensure availability and avoid waiting time. You can book directly via WhatsApp for quick confirmation.',
  },
  {
    q: 'Do you provide bridal makeup packages?',
    a: 'Yes! We offer comprehensive bridal packages including Bridal Makeup, Pre-Bridal Treatments, Engagement Makeup, Reception Makeup, Saree Draping, and Hair Styling. Please WhatsApp us for customized package details.',
  },
  {
    q: 'Which beauty products do you use for services?',
    a: 'We exclusively use premium, skin-safe beauty products from trusted professional brands like Mavon, L\'Oreal, Wella, and other certified brands. Your skin\'s safety and results are our priority.',
  },
]

export const contact = {
  badge: 'Get In Touch',
  heading: 'Visit Golden Sparsh',
  subheading: 'We\'d love to welcome you. Book your appointment or enquire today.',
  phone: '7775924144',
  whatsapp: '7775924144',
  email: '',
  address: 'Hari Om Hights, Navhra Fata Road, near Dnyanganga International School, Baburao Nagar, Shirur, Maharashtra 412210',
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  waDefaultMsg: 'Hi Golden Sparsh! I would like to get more information about your services.',
}
