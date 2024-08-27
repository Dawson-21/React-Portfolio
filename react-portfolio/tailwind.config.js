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
        'bright-orange': '#ff4500'
      },
      backgroundImage: {
        'gradient-135': 'linear-gradient(135deg, var(--tw-gradient-stops))'
      },
    },
  },
  plugins: [],
}

