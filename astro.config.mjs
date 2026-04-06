// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://thenumberone.com.pe",
  vite: {
      plugins: [tailwindcss()],
  },
  integrations: [icon(), sitemap()],
  output: "static",
  compressHTML: true,
  build: {
    inlineStylesheets: "auto"
  },
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});