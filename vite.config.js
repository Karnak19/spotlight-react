const path = require("path");
import reactRefresh from "@vitejs/plugin-react-refresh";

module.exports = {
  plugins: [reactRefresh()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/index.js"),
      name: "SpotlightReact",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react-dom", "react-router-dom"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          react: "React",
          "react-dom": "react-dom",
          "react-router-dom": "react-router-dom",
        },
      },
    },
  },
};
