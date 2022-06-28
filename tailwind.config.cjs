/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      spacing: {
        '68': '17rem',
        '104': '26rem'
      },
    },
  },
  plugins: [require("daisyui")],
}
