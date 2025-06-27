const purgecss = require('@fullhuman/postcss-purgecss');

module.exports = {
  plugins: [
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js'], 
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    }),
    require('autoprefixer'),
    require('cssnano')()
  ]
};
