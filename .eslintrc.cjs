module.exports = {
  env: { browser: true, es2020: true, node: true, amd: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:import/recommended",
  ],
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".json"],
      },
    },
  },
  plugins: ["react", "react-hooks", "react-refresh", "jsx-a11y", "import"],
  ignorePatterns: ["dist"],
  rules: {
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "warn",
    "no-unused-vars": "warn",
    "import/default": "off",
    "jsx-a11y/alt-text": "warn",
    "jsx-a11y/no-autofocus": "warn",
    "jsx-a11y/anchor-is-valid": "warn",
    "jsx-a11y/iframe-has-title": "warn",
    "jsx-a11y/media-has-caption": "warn",
    "jsx-a11y/anchor-has-content": "warn",
    "jsx-a11y/heading-has-content": "warn",
    "jsx-a11y/label-has-associated-control": "warn",
    "react-refresh/only-export-components": "warn",
  },
};
