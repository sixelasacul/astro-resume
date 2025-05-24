export default {
  plugins: ['prettier-plugin-astro'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  arrowParens: 'always',
  semi: false,
  tabWidth: 2,
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: true,
  trailingComma: 'none',
  bracketSpacing: true,
  endOfLine: 'lf'
}
