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
    "no-nested-ternary": "off",
    "import/no-named-as-default": 0,
    "no-extra-boolean-cast": 0,
    "react/jsx-props-no-spreading": "off",
    "object-shorthand": ["error", "never"],
    "react/destructuring-assignment": ["enabled", "always"],
  }
};
