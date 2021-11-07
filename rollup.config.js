import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import dts from "rollup-plugin-dts";

import pkg from "./package.json";

export default [
  {
    input: pkg.source,
    output: { dir: "dist", format: "esm" },
    plugins: [
      external(),
      postcss({
        extract: "spotlight-react.css",
        plugins: [url()],
      }),
      resolve(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      del({ targets: ["dist/*"] }),
      image({
        include: ["./src/**/*.svg"],
      }),
    ],
  },
  {
    // path to your declaration files root
    input: "./dist/dts/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
