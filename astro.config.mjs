// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://alexbaro.com',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
  image: {
    // Use sharp for image processing (default in Astro)
    // Generate responsive images in modern formats
    service: {
      entrypoint: 'astro/assets/services/sharp',
      config: {
        // Limit concurrent image processing to avoid memory issues
        limitInputPixels: false
      }
    }
  },
  build: {
    // Inline small assets for fewer HTTP requests
    inlineStylesheets: 'auto'
  }
});
