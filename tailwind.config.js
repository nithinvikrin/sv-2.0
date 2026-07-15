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
          light: '#E5D3B3',
          gold: '#C5A880',
          darkGold: '#9A7B56',
          charcoal: '#111111',
          bgDark: '#0A0A0A',
          cardDark: '#161616',
        },
        primary: {
          50: '#f9f6f0',
          100: '#f0e8d9',
          200: '#e1d1b3',
          300: '#C5A880',
          400: '#b18e5e',
          500: '#9A7B56',
          600: '#7a5f3f',
          700: '#5c452e',
          800: '#3e2e1e',
          900: '#21180f',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Cinzel', 'Playfair Display', 'Georgia', 'serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2.5s infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
} 
