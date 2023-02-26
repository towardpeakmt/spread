import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { ViteAliases } from "vite-aliases";
export default defineConfig({
  server: {
    proxy: {
      "/api": "http://78.47.219.154",
    },
  },

  plugins: [
    react(),
    ViteAliases({
      dir: "src",
      prefix: "@",
      deep: true,
      createGlobalAlias: true,
      useConfig: true,
      useTypescript: true,
    }),
  ],
});
