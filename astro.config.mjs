// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: "https://at946.github.io",
  base: "/foooo",

  vite: {
    plugins: [tailwindcss()],
  },
});