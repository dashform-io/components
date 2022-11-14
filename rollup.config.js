/* eslint-disable import/no-anonymous-default-export */
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import { terser } from "rollup-plugin-terser";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import dts from "rollup-plugin-dts";
import json from "@rollup/plugin-json";
import scss from "rollup-plugin-scss";
import styles from "rollup-plugin-styles";
import image from "@rollup/plugin-image";

const packageJson = require("./package.json");

export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: packageJson.main,
        format: "cjs",
        sourcemap: true,
      },
      {
        file: packageJson.module,
        format: "esm",
        sourcemap: true,
      },
    ],
    plugins: [
      peerDepsExternal(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: "./tsconfig.json",
        exclude: ["**/*.stories.tsx"],
      }),
      json(),
      terser(),
      styles(),
      image(),
    ],
    external: ["react", "react-dom"],
  },
  {
    input: "dist/esm/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "esm" }],
    external: [/\.scss$/],
    plugins: [dts()],
  },
];
