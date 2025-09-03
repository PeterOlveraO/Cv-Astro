// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    base: '/Cv-Astro/', // <--- Añade esta línea
    integrations: [mdx(), sitemap()],
    output: 'static'
});