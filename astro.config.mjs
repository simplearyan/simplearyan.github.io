// @ts-check
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// https://astro.build/config
export default defineConfig({
  site: 'https://simplearyan.github.io/',
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap()],
  vite: {
    plugins: [
      VitePWA({
        registerType: 'autoUpdate',
        manifest: {
          name: 'SimpleAryan',
          short_name: 'SimpleAryan',
          description: 'A minimal, modern blog.',
          theme_color: '#ffffff',
          icons: [
            {
              src: 'favicon-dark.svg',
              sizes: '192x192',
              type: 'image/svg+xml'
            },
            {
              src: 'favicon-dark.svg',
              sizes: '512x512',
              type: 'image/svg+xml'
            },
            {
              src: 'favicon-dark.svg',
              sizes: 'any',
              type: 'image/svg+xml'
            }
          ]
        },
        workbox: {
          globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
          maximumFileSizeToCacheInBytes: 5000000
        }
      })
    ]
  }
});