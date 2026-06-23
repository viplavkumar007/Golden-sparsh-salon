import logo from '../assets/logo.png'
import salon1 from '../assets/salon1.jpeg'
import salon2 from '../assets/salon2.jpeg'
import salonTour from '../assets/salon-tour.mp4'

export const brand = {
  name: 'Golden Sparsh',
  fullName: 'Golden Sparsh Salon & Academy',
  tagline: 'Where Beauty Meets Excellence',
  tagline2: 'Premium Ladies Salon & Professional Beauty Academy',
  logo,
  phone: '7775924144',
  whatsapp: '7775924144',
  email: '', // To be Updated Later
  address: {
    line1: 'Near Lavanya Sadi Center',
    line2: 'Nagar Road, Shirur',
    city: 'Pune',
    pin: '412210',
    state: 'Maharashtra',
  },
  addressFull: 'Near Lavanya Sadi Center, Nagar Road, Shirur, Pune - 412210, Maharashtra',
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
    { label: 'Academy', href: '#academy' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
  ctaLabel: 'Book Appointment',
}

export const hero = {
  badge: 'Premium Ladies Salon & Academy • Shirur, Pune',
  heading1: 'BEAUTY WITH',
  heading2: 'ELEGANCE',
  subheading: 'Premium Ladies Salon & Professional Beauty Academy — Where Beauty Meets Excellence',
  cta1: { label: 'Book Appointment', msg: 'Hi Golden Sparsh! I would like to book an appointment. Please let me know the available slots.' },
  cta2: { label: 'Join Academy', msg: 'Hi Golden Sparsh! I am interested in joining your beauty academy. Please share details about the courses and admission process.' },
  stats: [
    { value: '500+', label: 'Happy Clients' },
    { value: '10+', label: 'Beauty Courses' },
    { value: '5★', label: 'Rating' },
    { value: '100%', label: 'Hygiene' },
  ],
}

export const about = {
  badge: 'About Us',
  heading: 'Welcome To Golden Sparsh',
  subheading: 'Your Premium Beauty Destination in Shirur, Pune',
  description1:
    'Golden Sparsh Salon & Academy is a premium beauty destination exclusively for women. We specialize in professional salon services, bridal makeovers, advanced hair care, skin treatments, nail artistry, and certified beauty education programs.',
  description2:
    'Our mission is to enhance beauty while empowering women with professional beauty skills and career opportunities. We believe every woman deserves to feel extraordinary.',
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
      { label: 'Hair Cut', price: 'From Rs. 150', note: 'Women cuts' },
      { label: 'Hair Wash', price: 'From Rs. 199', note: 'Wash & blow dry' },
      { label: 'Hair Spa', price: 'From Rs. 799', note: 'Normal price' },
      { label: 'Hair Styling', price: 'From Rs. 399', note: 'Blow dry / setup' },
      { label: 'Hair Coloring', price: 'From Rs. 249', note: 'Per streak' },
      { label: 'Global Hair Color', price: 'From Rs. 1,400', note: 'Short length' },
      { label: 'Root Touch-Up', price: 'From Rs. 999', note: 'Normal price' },
      { label: 'Highlights', price: 'From Rs. 249', note: 'Per streak' },
      { label: 'Keratin Treatment', price: 'From Rs. 4,999', note: 'Short length' },
      { label: 'Hair Botox', price: 'From Rs. 4,499', note: 'Short length' },
      { label: 'Smoothening', price: 'From Rs. 3,999', note: 'Short length' },
      { label: 'Straightening', price: 'From Rs. 3,999', note: 'Short length' },
      { label: 'Rebonding' },
      { label: 'Hair Extensions' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Hair Services. Please share more details and pricing.',
  },
  {
    id: 'skin',
    icon: '✨',
    title: 'Skin Care',
    accent: '#E3C98A',
    services: [
      { label: 'Cleanup', price: 'From Rs. 350', note: 'Normal price' },
      { label: 'Gold Facial', price: 'From Rs. 800', note: 'Normal price' },
      { label: 'Diamond Facial', price: 'From Rs. 1,100', note: 'Normal price' },
      { label: 'Hydra Facial', price: 'From Rs. 2,000', note: 'Normal price' },
      { label: 'Detan Treatment', price: 'From Rs. 350', note: 'Normal price' },
      { label: 'Anti-Aging Facial' },
      { label: 'Skin Brightening', price: 'From Rs. 1,200', note: 'Normal price' },
      { label: 'Acne Treatment' },
      { label: 'Glow Treatment', price: 'From Rs. 999', note: 'Gold glow facial' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Skin Care Services. Please share more details and pricing.',
  },
  {
    id: 'beauty',
    icon: '💅',
    title: 'Beauty Services',
    accent: '#F6ECEC',
    services: [
      { label: 'Threading', price: 'From Rs. 20', note: 'Upper lip / chin' },
      { label: 'Waxing', price: 'From Rs. 70', note: 'Honey wax' },
      { label: 'Rica Wax', price: 'From Rs. 120', note: 'Under arm' },
      { label: 'Full Body Wax' },
      { label: 'Bleach', price: 'From Rs. 150', note: 'Neck bleach' },
      { label: 'Manicure', price: 'From Rs. 400', note: 'Normal price' },
      { label: 'Pedicure', price: 'From Rs. 500', note: 'Normal price' },
      { label: 'Body Polishing' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Beauty Services. Please share more details and pricing.',
  },
  {
    id: 'bridal',
    icon: '👰',
    title: 'Bridal Services',
    accent: '#D4AF37',
    services: [
      { label: 'Bridal Makeup', price: 'From Rs. 4,000', note: 'HD bridal' },
      { label: 'HD Makeup', price: 'Rs. 4,000 - 5,000', note: 'Normal price' },
      { label: 'Airbrush Makeup' },
      { label: 'Engagement Makeup', price: 'From Rs. 1,500', note: 'Light makeup' },
      { label: 'Reception Makeup', price: 'From Rs. 1,500', note: 'Light makeup' },
      { label: 'Party Makeup', price: 'From Rs. 1,500', note: 'Light makeup' },
      { label: 'Pre Bridal Packages' },
      { label: 'Saree Draping', price: 'Rs. 500', note: 'Normal price' },
      { label: 'Hair Styling', price: 'From Rs. 399', note: 'Blow dry / setup' },
    ],
    waMsg: 'Hi Golden Sparsh! I am interested in your Bridal Services. Please share packages and pricing.',
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
    waMsg: 'Hi Golden Sparsh! I am interested in your Nail Studio Services. Please share more details and pricing.',
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
  cta: { label: 'Enquire About Bridal Package', msg: 'Hi Golden Sparsh! I am interested in your Bridal Makeup packages. Please share the complete bridal package details and pricing.' },
}

export const academy = {
  badge: 'Beauty Academy',
  heading: 'Build Your Career In Beauty Industry',
  subheading: 'Professional training programs designed to transform beginners into certified beauty professionals.',
  courses: [
    { title: 'Basic Beautician Course', duration: '1 Month', icon: '🌸' },
    { title: 'Advanced Beautician Course', duration: '3 Months', icon: '💄' },
    { title: 'Professional Makeup Course', duration: '2 Months', icon: '✨' },
    { title: 'Bridal Makeup Course', duration: '1 Month', icon: '👰' },
    { title: 'Hair Styling Course', duration: '2 Months', icon: '💇‍♀️' },
    { title: 'Hair Chemical Course', duration: '1 Month', icon: '🧴' },
    { title: 'Skin Therapy Course', duration: '2 Months', icon: '🌿' },
    { title: 'Nail Art Course', duration: '3 Weeks', icon: '💅' },
    { title: 'Nail Extension Course', duration: '1 Month', icon: '💎' },
    { title: 'Salon Management Course', duration: '3 Months', icon: '🏆' },
  ],
  features: [
    { icon: '🎓', label: 'Professional Trainers' },
    { icon: '🔬', label: 'Practical Sessions' },
    { icon: '👥', label: 'Live Client Practice' },
    { icon: '📜', label: 'Certification' },
    { icon: '🧭', label: 'Career Guidance' },
    { icon: '💼', label: 'Placement Assistance' },
    { icon: '🎯', label: 'Small Batch Training' },
    { icon: '🏭', label: 'Industry-Oriented' },
  ],
  cta: { label: 'Join Academy', msg: 'Hi Golden Sparsh! I want to join your Beauty Academy. Please share the course details, fee structure, and admission process.' },
}

export const whyUs = [
  { icon: '👑', title: 'Premium Experience', desc: 'Luxury salon environment designed exclusively for women.' },
  { icon: '🏅', title: 'Certified Professionals', desc: 'Trained and certified beauty experts with years of experience.' },
  { icon: '🏛️', title: 'Modern Infrastructure', desc: 'State-of-the-art facilities with the latest beauty equipment.' },
  { icon: '🧼', title: '100% Hygiene', desc: 'Strict hygiene protocols and sanitized tools for every client.' },
  { icon: '✨', title: 'Latest Techniques', desc: 'Stay ahead with cutting-edge beauty treatments and styles.' },
  { icon: '💎', title: 'Luxury Products', desc: 'Only premium, skin-safe beauty products from trusted brands.' },
  { icon: '💝', title: 'Personalized Care', desc: 'Customized beauty solutions tailored to your unique needs.' },
  { icon: '🎓', title: 'Professional Training', desc: 'Industry-standard beauty education with practical learning.' },
]

export const gallery = {
  badge: 'Our Gallery',
  heading: 'Inside Golden Sparsh',
  items: [
    { id: 1, type: 'image', src: salon1, alt: 'Golden Sparsh Salon Interior - Styling Station', tag: 'Interior' },
    { id: 2, type: 'image', src: salon2, alt: 'Golden Sparsh Salon - Premium Hair Wash Station', tag: 'Interior' },
    { id: 3, type: 'video', src: salonTour, alt: 'Golden Sparsh Salon Video Tour', tag: 'Salon Tour' },
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
    id: 3,
    name: 'Kavya Desai',
    role: 'Academy Student',
    review: 'I completed my Professional Makeup Course here and it completely changed my career. The trainers are experienced, practical sessions are excellent, and I got placement support too!',
    rating: 5,
    initials: 'KD',
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
    a: 'Yes! We offer comprehensive bridal packages including Bridal Makeup, Pre-Bridal Treatments, Engagement Makeup, Reception Makeup, Saree Draping, and Hair Styling. Please WhatsApp us for customized package pricing.',
  },
  {
    q: 'What beauty courses are available at the academy?',
    a: 'We offer 10 professional courses: Basic Beautician, Advanced Beautician, Professional Makeup, Bridal Makeup, Hair Styling, Hair Chemical, Skin Therapy, Nail Art, Nail Extension, and Salon Management.',
  },
  {
    q: 'Will I receive a certification after completing a course?',
    a: 'Absolutely! All our courses come with professional certification upon completion. Our certifications are industry-recognized and help you launch your beauty career with credibility.',
  },
  {
    q: 'Do you provide placement assistance for academy students?',
    a: 'Yes, we provide career guidance and placement assistance to our students. We have industry connections and help students find opportunities in salons, as freelancers, or start their own ventures.',
  },
  {
    q: 'Which beauty products do you use for services?',
    a: 'We exclusively use premium, skin-safe beauty products from trusted professional brands like Mavon, L\'Oreal, Wella, and other certified brands. Your skin\'s safety and results are our priority.',
  },
  {
    q: 'How can I join the beauty academy?',
    a: 'Simply WhatsApp us at 7775924144 or visit our salon. We will walk you through the course options, fee structure, batch timing, and guide you through the admission process.',
  },
]

export const contact = {
  badge: 'Get In Touch',
  heading: 'Visit Golden Sparsh',
  subheading: 'We\'d love to welcome you. Book your appointment or enquire today.',
  phone: '7775924144',
  whatsapp: '7775924144',
  email: '',
  address: 'Near Lavanya Sadi Center, Nagar Road, Shirur, Pune – 412210, Maharashtra',
  hours: [
    { day: 'Monday – Saturday', time: '10:00 AM – 8:00 PM' },
    { day: 'Sunday', time: '10:00 AM – 6:00 PM' },
  ],
  waDefaultMsg: 'Hi Golden Sparsh! I would like to get more information about your services.',
}
