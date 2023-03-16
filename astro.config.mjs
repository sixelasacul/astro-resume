import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import react from '@astrojs/react'

// https://astro.build/config
export default defineConfig({
  // site: '',
  integrations: [
    tailwind({
      config: {
        applyBaseStyles: false
      }
    }),
    react()
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    },
    extendDefaultPlugins: true
  }
})
