import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";
import tailwind from "@astrojs/tailwind";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  integrations: [tailwind(), vue({ appEntrypoint: '/src/pages/_app' })],
});