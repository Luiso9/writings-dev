/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    fontFamily: {
      'recursive': ['Recursive', 'sans-serif'],
      'poppins': ['Poppins', 'sans-serif'],
    }
  },
  plugins: [],
}

