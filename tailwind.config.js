/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js",
    "./node_modules/vue-tailwind-datepicker/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        "vtd-primary": colors.green
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}

