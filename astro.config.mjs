import { defineConfig } from 'astro/config'
import tailwind from '@tailwindcss/vite'

// https://astro.build/config
export default defineConfig({
  site:
    // Use `astro preview` locally to build and serve like on prod, and generate PDF
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:4321'
      : 'https://sixe.la/',
  vite: {
    plugins: [tailwind()]
  },
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    },
    extendDefaultPlugins: true
  }
})
