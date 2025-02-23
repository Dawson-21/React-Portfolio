const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'regal-blue': '#0047ff',
        'bright-orange': '#ff4500',
        'light': '#f3f4f6',
        'dark': '#020617'
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'gradient-45': 'linear-gradient(45deg, var(--tw-gradient-stops))'
      },
      fontFamily: {
        sans: ['Arial', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        myFont: ['Adani', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

