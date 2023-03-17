module.exports = {
  plugins: [require.resolve('prettier-plugin-astro')],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro'
      }
    }
  ],
  "arrowParens": "avoid",
  "semi": false,
  "tabWidth": 2,
  "printWidth": 80,
  "singleQuote": true,
  "jsxSingleQuote": true,
  "trailingComma": "none",
  "bracketSpacing": true,
  "endOfLine": "lf"
}
