const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ["./src/**/*.js", "./src/**/*.jsx"],
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
