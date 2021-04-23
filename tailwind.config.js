const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ["./lib/**/*.js", "./lib/**/*.jsx"],
    options: {
      keyframes: true,
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.warmGray,
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
