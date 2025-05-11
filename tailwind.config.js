/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      animation: {
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
      colors: {
        primary: '#0284c7',
        secondary: '#64748b',
      },
      screens: {
        '2xl': '1320px',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        }
      },
       fontFamily: {
        'fira': ['Fira Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

