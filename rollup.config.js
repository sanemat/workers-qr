// rollup.config.js
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";
import pkg from "./package.json";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "./src/index.ts",
  output: [
    {
      file: pkg.main,
      format: "es",
      exports: "named",
      sourcemap: false,
    },
  ],
  plugins: [
    typescript(/*{ plugin options }*/),
    commonjs({
      include: "node_modules/**",
    }),
    nodeResolve(),
    terser(),
  ],
};
