import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import { resolve } from 'node:path';

import { environment } from './src/global/configuration/environment';

const dirname = resolve();

const { BASE_URL, PORT } = environment;

export default defineConfig({
  build: {
    assetsPrefix: BASE_URL,
    inlineStylesheets: 'never'
  },
  integrations: [sitemap({ lastmod: new Date() }), partytown({ config: { forward: ['dataLayer.push'] } })],
  output: 'static',
  server: {
    host: true,
    open: true,
    port: PORT
  },
  site: BASE_URL,
  trailingSlash: 'never',
  vite: {
    envDir: './src/global/env',
    css: {
      preprocessorOptions: {
        scss: { loadPaths: [resolve(dirname, 'src')] }
      }
    }
  }
});