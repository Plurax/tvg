import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://tv-geislar.de',
  output: 'static',
  integrations: [tailwind()],
});
