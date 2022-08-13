/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'public-sans': ['Public Sans', 'sans-serif'],
      },

      boxShadow: {
        0: `0px 8px 24px rgba(149, 157, 165, 0.2)`,
        1: `0px 4px 12px rgba(0, 0, 0, 0.1) `,
        5: `0px 3px 8px rgba(0, 0, 0, 0.24) `,
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
