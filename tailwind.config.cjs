const plugin = require('tailwindcss/plugin')
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Mona Sans"', ...defaultTheme.fontFamily.sans],
        headline: ['"Hubot Sans"', ...defaultTheme.fontFamily.sans],
        mono: ['"Fira Code"', ...defaultTheme.fontFamily.mono],
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(({ addUtilities }) => {
      // To fix the "italic" issue on Firefox for Mona and Hubot Sans
      // https://github.com/github/mona-sans/issues/42
      addUtilities({
        '.oblique': {
          'font-variation-settings': '"ital" 10'
        }
      })
    })
  ],
};
