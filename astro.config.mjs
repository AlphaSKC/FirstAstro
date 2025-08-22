import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

export default defineConfig({
  site: "https://firstprojectastro.netlify.app",
  integrations: [preact()]
});