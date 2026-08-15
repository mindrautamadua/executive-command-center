import { dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { FlatCompat } from "@eslint/eslintrc";

const compat = new FlatCompat({
  baseDirectory: dirname(fileURLToPath(import.meta.url)),
});

const config = [
  {
    // next-env.d.ts digenerate ulang tiap build, jadi tidak bisa diperbaiki di sini.
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "node_modules/**",
      "public/sw.js",
      "next-env.d.ts",
    ],
  },
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    rules: {
      // Recharts memberi tipe `any` pada callback formatter/activeShape/tick, jadi
      // anotasi eksplisit di sana tidak bisa dihindari tanpa wrapper tambahan.
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
];

export default config;
