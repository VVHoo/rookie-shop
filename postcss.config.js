module.exports = {
  plugins: {
    autoprefixer: {},
    'postcss-px-to-viewport': {
      viewportWidth: 375,
      viewportHeight: 667,
      unitPrecision: 2,
      viewportUnit: 'vw',
      minPixelValue: 1,
      mediaQuery: false
    }
  }
}
