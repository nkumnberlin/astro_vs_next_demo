import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import aws from "astro-sst/lambda";
import svelte from "@astrojs/svelte";

import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), svelte(), image()],
  output: 'static',
  adapter: aws()
});
