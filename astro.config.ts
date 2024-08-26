import tutorialkit from "@tutorialkit/astro";
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  output: "server",
  devToolbar: {
    enabled: false,
  },
  integrations: [tutorialkit()],
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
