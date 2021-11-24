const colors = require("tailwindcss/colors");

module.exports = {
  purge: {
    preserveHtmlElements: false,
    content: ["./src/**/*.ts", "./src/**/*.tsx"],
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
