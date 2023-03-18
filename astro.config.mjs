import { defineConfig } from 'astro/config'
import image from '@astrojs/image'
import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  site:
    // Use `astro preview` locally to build and serve like on prod, and generate PDF
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000'
      : 'https://alexis-lucas.vercel.app/',
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
