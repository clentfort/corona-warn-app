module.exports = {
  purge: {mode: 'all', content: ['./public/index.html']},
  theme: {
    extend: {},
  },
  variants: {
    typography: [],
  },
  corePlugins: ['display', 'margin', 'padding', 'preflight', 'textAlign'],
  plugins: [
    require('@tailwindcss/typography')({
      modifiers: [],
    }),
  ],
};
