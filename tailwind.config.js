module.exports = {
  darkMode: 'class', // "media" or "class"
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    mode: 'all',
    content: ['./pages/**/*.js', './components/**/*.js'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
