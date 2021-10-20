const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['lexend', ...defaultTheme.fontFamily.sans],
    },
    extend: {
      colors: {
        'primaryContent': 'rgba(51, 51, 51, 1)',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
