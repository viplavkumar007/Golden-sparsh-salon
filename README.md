# Golden Sparsh Salon & Academy — Website

> Premium Ladies Salon & Professional Beauty Academy · Shirur, Pune

## Tech Stack

- **React 18** (JavaScript only, no TypeScript)
- **Vite 5** — build tool
- **Tailwind CSS 3** — all styling
- **Framer Motion 11** — all animations
- **Lucide React** — icons

---

## Folder Structure

```
golden-sparsh/
├── public/
├── src/
│   ├── assets/
│   │   ├── logo.png          ← Brand logo
│   │   ├── salon1.jpeg       ← Salon interior photo 1
│   │   └── salon2.jpeg       ← Salon interior photo 2
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Bridal.jsx
│   │   │   ├── Academy.jsx
│   │   │   ├── WhyUs.jsx
│   │   │   ├── Gallery.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTAStrip.jsx
│   │   │   └── Contact.jsx
│   │   ├── ui/
│   │   │   ├── ScrollReveal.jsx
│   │   │   ├── SectionBadge.jsx
│   │   │   └── Toast.jsx
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   └── FloatingButtons.jsx
│   ├── data/
│   │   └── siteContent.js    ← ALL content lives here
│   ├── hooks/
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## Local Development

```bash
# 1. Install dependencies
npm install

# 2. Start dev server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

---

## Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deploy
vercel --prod
```

Or: Push to GitHub → Import on [vercel.com](https://vercel.com) → Auto-detects Vite → Deploy.

---

## Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

Or: Push to GitHub → Connect on [app.netlify.com](https://app.netlify.com) → Build command: `npm run build` → Publish dir: `dist`.

---

## Content Customization

All website content is in **`src/data/siteContent.js`**.

To update:
- Business info, phone, WhatsApp → `brand` object
- Hero text & CTAs → `hero` object
- Services → `serviceCategories` array
- Academy courses → `academy.courses`
- Testimonials → `testimonials` array
- FAQs → `faqs` array
- Gallery images → add to `gallery.items`

---

## WhatsApp Integration

Every CTA button and form submission opens WhatsApp with pre-typed messages.
All messages route to: **+91 7775924144**

To change the number, update `brand.whatsapp` in `siteContent.js`.

---

© 2026 Golden Sparsh Salon & Academy
