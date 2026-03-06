/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B5F7E',
        'primary-dark': '#1A3D52',
        'bg-warm': '#F5EFE6',
        'bg-light': '#FAFAF8',
        'text-main': '#2D2D2D',
        heading: '#1A2E3B',
        secondary: '#7B9B8A',
        dark: '#1A2E3B',
      },
      fontFamily: {
        serif: ['"Cormorant Garant"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
