module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ['./src/**/*.js', './src/**/*.jsx'],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
