/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        gold: {
          100: '#FFF7D6',
          300: '#FFE680',
          400: '#F5D061',
          500: '#D4AF37', // Metallic Gold Base
          600: '#AA820A',
          700: '#856100',
          light: '#FFF0A5',
        },
        darkbg: '#07090e',
        darkcard: 'rgba(15, 18, 25, 0.75)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
      },
      boxShadow: {
        'gold-glow': '0 0 25px -5px rgba(212, 175, 55, 0.3)',
        'gold-glow-lg': '0 0 50px 0px rgba(212, 175, 55, 0.4)',
        'phone-shadow': '0 25px 50px -15px rgba(212, 175, 55, 0.25)',
      },
    },
  },
  plugins: [],
};
