// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://antostarwars.xyz',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
  redirects: {
    '/': '/en',
  },
  vite: {
    plugins: [tailwindcss()]
  }
});