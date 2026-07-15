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
          light: '#F5F5F7', // Apple-like offwhite
          gold: '#D4AF37', // Pure luxury gold
          goldDark: '#AA8417',
          charcoal: '#0B0B0B', // Core luxury black
          bgDark: '#0B0B0B',
          cardDark: '#121212',
          glowBlue: '#3B82F6',
          glowPurple: '#8B5CF6',
        },
        primary: {
          50: '#f9f6f0',
          100: '#f0e8d9',
          200: '#e1d1b3',
          300: '#D4AF37',
          400: '#b18e5e',
          500: '#9A7B56',
          600: '#7a5f3f',
          700: '#5c452e',
          800: '#3e2e1e',
          900: '#21180f',
        },
      },
      boxShadow: {
        'gold-glow': '0 0 20px rgba(212, 175, 55, 0.15)',
        'gold-glow-hover': '0 0 35px rgba(212, 175, 55, 0.3)',
        'blue-glow': '0 0 25px rgba(59, 130, 246, 0.15)',
        'purple-glow': '0 0 25px rgba(139, 92, 246, 0.15)',
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
