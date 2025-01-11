/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#1a5f7a',
        secondary: '#2d8bac',
      },
      backgroundImage: {
        'pattern': "url('../images/pattern.svg')",
      },
    },
  },
  plugins: [],
}

