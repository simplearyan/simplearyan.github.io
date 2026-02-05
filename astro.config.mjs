// @ts-check
import { defineConfig } from 'astro/config';
import { VitePWA } from 'vite-plugin-pwa';

import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://simplearyan.github.io/',
  integrations: [mdx({
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  }), sitemap(), react()],
  vite: {
    plugins: [VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'SimpleAryan',
        short_name: 'SimpleAryan',
        description: 'A minimal, modern blog.',
        theme_color: '#ffffff', // Default for light mode
        background_color: '#ffffff', // Default for light mode
        // For dynamic theme colors based on preferred color scheme,
        // it's common to use meta tags in the HTML for dark mode overrides:
        // <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#000000">
        // <meta name="background-color" media="(prefers-color-scheme: dark)" content="#000000">
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
    }), tailwindcss()]
  }
});