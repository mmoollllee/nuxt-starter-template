module.exports = {
  inputDir: './assets/icons', // (required)
  outputDir: './static/fonts', // (required)
  name: 'icon-font',
  fontTypes: ['ttf', 'woff', 'woff2', 'eot', 'svg'],
  assetTypes: ['css', 'json'],
  fontsUrl: '../static/fonts',
  templates: {
    css: './helpers/icon-font-template.hbs',
  },
  normalize: true,
  descent: 45,
  fontHeight: 1000,
  pathOptions: {
    json: './helpers/icons.json',
    css: './css/_icons.scss',
  },
  codepoints: {
    'angle-down': 97,
    'angle-left': 98,
    'angle-right': 99,
    'angle-up': 100,
    bars: 101,
    check: 102,
    'cookie-bite': 103,
    envelope: 104,
    'facebook-square': 105,
    fax: 106,
    'phone-alt': 107,
    phone: 108,
    times: 109,
    'sliders-h': 110,
  },
}
