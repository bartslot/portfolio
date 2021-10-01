module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  mode: 'jit',
  darkMode: false, // or 'media' or 'class'
  theme: {
    maxHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
    maxWidth: {
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
    },
    extend: {},
  },
  transitionTimingFunction: {
    'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
    'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      border: ['hover'],
      borderColor: ['hover'],
      boxShadow: ['hover'],
    },
  },
  plugins: [],
}
