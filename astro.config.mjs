// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
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
