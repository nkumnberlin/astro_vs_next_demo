import { defineConfig } from 'astro/config';
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";
import svelte from "@astrojs/svelte";

import image from "@astrojs/image";

export default defineConfig({
  integrations: [react(), svelte(), image()],
  output: 'server',
  adapter: vercel()
});
