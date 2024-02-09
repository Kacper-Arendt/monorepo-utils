const { resolve } = require("node:path");

const project = resolve(process.cwd(), "tsconfig.json");

/*
 * This is a custom ESLint configuration for use with
 * internal (bundled by their consumer) libraries
 * that utilize React.
 *
 * This config extends the Vercel Engineering Style Guide.
 * For more information, see https://github.com/vercel/style-guide
 *
 */

/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: ["eslint-config-turbo", "airbnb", "airbnb-typescript", "prettier"],
  plugins: ["prettier"],
  globals: {
    React: true,
    JSX: true,
    document: true,
    window: true,
  },
  env: {
    browser: true,
  },
  settings: {
    "import/resolver": {
      typescript: {
        project,
      },
    },
  },
  ignorePatterns: [".*.js", "node_modules/", "dist/", "vite.config.ts"],

  overrides: [
    // Force ESLint to detect .tsx files
    { files: ["*.js?(x)", "*.ts?(x)"] },
  ],
  rules: {
    // =========================
    // --> turn the rule off <--
    // =========================
    "react/react-in-jsx-scope": 0,
    "react/require-default-props": 0,
    "import/prefer-default-export": 0,
    "react/jsx-no-useless-fragment": 0,
    "no-param-reassign": 0,
    "react/no-danger": 0,
    "consistent-return": 0,
    // =====================================
    // --> turn the rule on as a warning <--
    // =====================================
    "react/jsx-filename-extension": [
      1,
      {
        extensions: [".ts", ".tsx"],
      },
    ],
    // ====================================
    // --> turn the rule on as an error <--
    // ====================================

    "react/function-component-definition": [
      2,
      {
        namedComponents: "arrow-function",
      },
    ],
    "prettier/prettier": [
      2,
      {
        endOfLine: "auto",
      },
    ],
    "react/no-unstable-nested-components": [
      2,
      {
        allowAsProps: true,
      },
    ],
    "react/jsx-props-no-spreading": [
      2,
      {
        html: "ignore",
        custom: "ignore",
        explicitSpread: "ignore",
        exceptions: [""],
      },
    ],
    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "test/**", // tape, common npm pattern
          "tests/**", // also common npm pattern
          "**/__tests__/**", // jest pattern
          "**/__mocks__/**", // jest pattern
          "test.{ts,tsx}", // repos with a single test file
          "test-*.{ts,tsx}", // repos with multiple top-level test files
          "**/*{.,_}{test,spec}.{ts,tsx}", // tests where the extension or filename suffix denotes that it is a test
          "**/jest.config.ts", // jest config
          "**/jest.setup.ts", // jest setup
        ],
        optionalDependencies: false,
      },
    ],
  },
};
