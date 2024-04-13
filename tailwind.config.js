/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,njk,md,11ty.js}"],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      display: ['responsive'],
    },
  },
  plugins: [],
}