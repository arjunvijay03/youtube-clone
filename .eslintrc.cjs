// eslint-disable-next-line no-undef
module.exports = {
  env: {
    browser: true, // Enables browser globals
    es2021: true, // Allows ES2021 features
  },
  extends: [
    'eslint:recommended', // Use recommended ESLint rules
    'plugin:react/recommended', // Use recommended rules from @eslint-plugin-react
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Enable JSX
    },
    ecmaVersion: 12, // Use the latest ECMAScript standard
    sourceType: 'module', // Allow the use of imports
  },
  plugins: ['react', 'react-hooks'], // Include React and React Hooks plugins
  rules: {
    // Customize your rules here
    'react/react-in-jsx-scope': 'off', // Not needed with React 17+
    'react/prop-types': 'off', // Disable prop-types as we use TypeScript
    // Add other custom rules as needed
    'no-unused-vars': ['warn'],
  },
  settings: {
    react: {
      version: 'detect', // Automatically detect the React version
    },
  },
};
