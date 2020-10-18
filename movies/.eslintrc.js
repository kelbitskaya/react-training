module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["airbnb", "plugin:react/recommended", "prettier", "prettier/react", "react-app"],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "react/button-has-type": "off",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warning",
  }
};
