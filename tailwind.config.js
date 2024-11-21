/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js}',
    './node_modules/flowbite/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        'text': '#06080a',
        'background': '#f7f8fb',
        'primary': '#4d75b3',
        'secondary': '#a0b8de',
        'accent': '#7199d9',
        customBlue: '#D9E8EF',
      }

    }
  },
  plugins: [
    require('flowbite/plugin')
  ]
}
