module.exports = {
  darkMode: 'class', // "media" or "class"
  purge: ['./pages/**/*.tsx', './components/**/*.tsx'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
