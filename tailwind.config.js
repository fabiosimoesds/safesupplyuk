/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#16a34a',
        secondary: '#4338ca',
      },
      backgroundImage: {
        'pattern': "url('../images/pattern.svg')",
      },
    },
  },
  plugins: [],
}

