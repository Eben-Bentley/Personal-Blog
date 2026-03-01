import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://ebenbentley.dev',
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    remotePatterns: [
      { hostname: 'img.icons8.com' },
      { hostname: 'icon.icepanel.io' },
    ],
  },
  integrations: [tailwind(), sitemap()],
});
