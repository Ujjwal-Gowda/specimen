import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  { ignores: ['dist', '.legacy', 'public'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: { ecmaVersion: 2023, globals: globals.browser },
    plugins: { 'react-hooks': reactHooks, 'react-refresh': reactRefresh },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    },
  },
  {
    // build tools, tests and config run in Node
    files: ['tools/**/*.ts', 'tests/**/*.{ts,tsx}', '*.config.{js,ts}'],
    languageOptions: { globals: globals.node },
  },
  {
    // the animation demos are imperative DOM code, kept as plain JS behind a typed wrapper
    files: ['src/demos/**/*.js'],
    extends: [js.configs.recommended],
    languageOptions: { ecmaVersion: 2023, sourceType: 'module', globals: globals.browser },
  },
);
