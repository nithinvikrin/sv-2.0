/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#F2EEE7', // Soft Beige / Secondary Background
          gold: '#C28A46', // Primary Accent / Warm Gold
          goldLight: '#D9B67A', // Secondary Accent / Light Gold
          goldDark: '#B77732', // Hover Accent / Copper Gold
          charcoal: '#2F3138', // Primary Text / Dark Charcoal
          bgDark: '#F8F6F2', // Primary Background / Warm Ivory
          cardDark: '#FFFFFF', // Card Background
          secondaryText: '#6F737A', // Secondary Text
          border: '#E5DFD4', // Neutral Border
          glowBlue: '#3B82F6',
          glowPurple: '#8B5CF6',
        },
        primary: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(182, 141, 64, 0.12)',
        'gold-glow-hover': '0 0 35px rgba(182, 141, 64, 0.25)',
        'soft-card': '0 10px 30px -10px rgba(43, 43, 43, 0.06)',
        'soft-card-hover': '0 15px 35px -5px rgba(182, 141, 64, 0.12)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.1)',
        'purple-glow': '0 0 25px rgba(139, 92, 246, 0.1)',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2.5s infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
