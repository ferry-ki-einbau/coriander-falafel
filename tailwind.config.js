import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    resolve(__dirname, 'index.html'),
    resolve(__dirname, 'src/**/*.{js,ts,jsx,tsx}'),
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          // Cream base (wärmer als PDF, edler)
          cream: '#F5E6B8',
          'cream-soft': '#FAF1D3',
          'cream-dark': '#E8D9A0',
          // Forest / Herb — vom Logo-Grün
          forest: '#1F4A2C',
          'forest-deep': '#143220',
          herb: '#6B8E4E',
          // Rust — vom Logo-Banner-Rot
          rust: '#B8412E',
          'rust-dark': '#8E2F1F',
          // Text / Base
          ink: '#1A1209',
          charcoal: '#3D2E1F',
          sesame: '#E8D9A0',
          // Zubehör
          'warm-white': '#FDFAF2',
          sand: '#D9C586',
        },
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        script: ['Caveat', 'cursive'],
      },
      maxWidth: {
        content: '1280px',
        prose: '68ch',
      },
      animation: {
        'marquee': 'marquee 40s linear infinite',
        'fade-up': 'fadeUp 0.8s ease-out forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
