/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#C9A24E',
          light: '#E3C98A',
          bright: '#D4AF37',
          pale: '#F0DFA0',
          dark: '#A07830',
        },
        salon: {
          black: '#222222',
          charcoal: '#353535',
          dark: '#222222',
          ivory: '#FAF8F5',
          blush: '#F4E7E7',
          cream: '#FAF8F5',
          pink: '#F4E7E7',
          sage: '#6F7D63',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        body: ['Poppins', 'system-ui', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        accent: ['Cinzel', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A24E 0%, #E3C98A 50%, #C9A24E 100%)',
        'gold-gradient-v': 'linear-gradient(180deg, #D4AF37 0%, #C9A24E 50%, #A07830 100%)',
        'dark-gradient': 'linear-gradient(135deg, #222222 0%, #353535 50%, #222222 100%)',
        'hero-overlay': 'linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(10,10,10,0.7) 50%, rgba(0,0,0,0.9) 100%)',
        'card-shine': 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 50%, rgba(255,255,255,0) 100%)',
        'gold-shimmer': 'linear-gradient(90deg, transparent 0%, rgba(201,162,78,0.3) 50%, transparent 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201,162,78,0.4)',
        'gold-lg': '0 8px 40px rgba(201,162,78,0.5)',
        'gold-glow': '0 0 30px rgba(201,162,78,0.6), 0 0 60px rgba(201,162,78,0.2)',
        'card': '0 8px 32px rgba(0,0,0,0.12), 0 2px 8px rgba(0,0,0,0.08)',
        'card-hover': '0 20px 60px rgba(0,0,0,0.15), 0 8px 24px rgba(201,162,78,0.2)',
        'glass': '0 8px 32px rgba(0,0,0,0.1), inset 0 1px 0 rgba(255,255,255,0.2)',
        'btn-gold': '0 4px 15px rgba(201,162,78,0.5), 0 2px 4px rgba(0,0,0,0.2)',
        'btn-gold-hover': '0 8px 25px rgba(201,162,78,0.7), 0 4px 8px rgba(0,0,0,0.2)',
      },
      animation: {
        'shimmer': 'shimmer 3s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGold: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(201,162,78,0.4)' },
          '50%': { boxShadow: '0 0 40px rgba(201,162,78,0.8), 0 0 80px rgba(201,162,78,0.3)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        glow: {
          '0%': { textShadow: '0 0 10px rgba(201,162,78,0.5)' },
          '100%': { textShadow: '0 0 20px rgba(201,162,78,0.9), 0 0 40px rgba(201,162,78,0.4)' },
        },
      },
    },
  },
  plugins: [],
}
