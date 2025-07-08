/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",       // html file gulo
    "./**/*.js"       // jodi js file use koro
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}
