/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        opensans: ['Open Sans', 'sans-serif'],
      },
    },
  },
  extend: {
    animation: {
      'fade-in': 'fadeIn 0.5s ease-out'
    },
    keyframes: {
      fadeIn: {
        '0%': { opacity: 0 },
        '100%': { opacity: 1 }
      }
    }
  },
  plugins: [],
}
