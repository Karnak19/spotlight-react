import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import url from "postcss-url";
import dts from "rollup-plugin-dts";
import { terser } from "rollup-plugin-terser";

import pkg from "./package.json";

export default [
  {
    input: pkg.source,
    output: { dir: "dist", format: "esm", sourcemap: true },
    plugins: [
      resolve(),
      external(),
      typescript({
        tsconfig: "./tsconfig.json",
      }),
      postcss({
        extract: "spotlight-react.css",
        plugins: [url()],
      }),
      terser(),
    ],
  },
  {
    // path to your declaration files root
    input: "./dist/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    external: [/\.css$/],
    plugins: [dts()],
  },
];
