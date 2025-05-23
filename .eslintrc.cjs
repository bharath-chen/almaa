module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react-hooks/recommended",
  ],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    "no-unused-vars": "off",
    "ban-ts-comment": "off",
    "ban-types": "off",
    "no-explicit-any": "off",
    "no-extra-boolean-cast": "off",
    "@typescript-eslint/no-extra-boolean-cast": ["off"],
    "@typescript-eslint/ban-types": ["off"],
    "@typescript-eslint/no-unused-vars": ["off"],
    "@typescript-eslint/ban-ts-comment": ["off"],
    "@typescript-eslint/no-explicit-any": ["off"],
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react-hooks/exhaustive-deps": "off",
  },
};
