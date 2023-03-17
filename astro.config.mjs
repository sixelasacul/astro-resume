import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  // site: '',
  integrations: [
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    tailwind({
      config: {
        applyBaseStyles: false
      }
    })
  ],
  markdown: {
    shikiConfig: {
      theme: 'one-dark-pro',
      wrap: true
    },
    extendDefaultPlugins: true
  }
})
