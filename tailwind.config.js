/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'mf-bg': '#09090b',
        'mf-surface': '#121212',
        'mf-surface-light': '#1e1e1e',
        'mf-primary': '#FF5722',
        'mf-primary-hover': '#F4511E',
        'mf-accent': '#32CD32',
        'mf-text-main': '#f8fafc',
        'mf-text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Outfit', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
