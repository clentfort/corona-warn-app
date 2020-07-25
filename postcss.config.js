module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require('cssnano'),
    require('@fullhuman/postcss-purgecss')({
      content: ['./index.html'],
    }),
  ],
};
