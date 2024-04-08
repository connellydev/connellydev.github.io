import { defineConfig } from 'astro/config';

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  output: 'static',
  site: 'https://connelly.dev',
  build: {
    assets: 'astro'
  },
  integrations: [sitemap()]
});