module.exports = {
    plugins: [
      require('autoprefixer'),
      require('@fullhuman/postcss-purgecss')({
        content: ['./**/*.html', './**/*.js'], // adjust paths as needed
        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
      }),
      require('cssnano')({
        preset: 'default',
      }),
    ],
  }
  