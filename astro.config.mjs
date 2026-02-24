import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// GitHub Pages deployment:
// https://jarvix-dev.github.io/jarvix-promo-website/
export default defineConfig({
  site: 'https://jarvix-dev.github.io/jarvix-promo-website',
  base: '/jarvix-promo-website',
  integrations: [sitemap()],
});
