import babel from '@rollup/plugin-babel';
import image from '@rollup/plugin-image';
import resolve from '@rollup/plugin-node-resolve';
import external from 'rollup-plugin-peer-deps-external';
import del from 'rollup-plugin-delete';
import postcss from 'rollup-plugin-postcss';
import url from 'postcss-url';

import pkg from './package.json';

export default {
  input: pkg.source,
  output: { dir: 'dist', format: 'esm' },
  plugins: [
    external(),
    postcss({
      extract: 'spotlight-react.css',
      plugins: [url()],
    }),
    resolve(),
    babel({
      exclude: 'node_modules/**',
    }),
    del({ targets: ['dist/*'] }),
    image({
      include: ['./src/**/*.svg'],
    }),
  ],
};
