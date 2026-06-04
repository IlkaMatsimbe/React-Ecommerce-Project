import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,jsx}"],

    languageOptions: {
      ecmaVersion: "latest",

      sourceType: "module",

      globals: globals.browser,

      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    plugins: {
      react,
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },

    rules: {
      ...js.configs.recommended.rules,

      ...react.configs.flat.recommended.rules,

      ...reactHooks.configs.recommended.rules,

      "react/react-in-jsx-scope": "off",

      "no-unused-vars": "warn",

      "no-undef": "error",
    },

    settings: {
      react: {
        version: "detect",
      },
    },
  },
]);