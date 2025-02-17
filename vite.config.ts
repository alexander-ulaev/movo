import react from "@vitejs/plugin-react";

import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
import path from "path";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    TanStackRouterVite({
      routesDirectory: "src/app/routes",
      quoteStyle: "double",
      autoCodeSplitting: true,
      generatedRouteTree: "src/app/router-tree.gen.ts",
    }),
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: false,

      pwaAssets: {
        disabled: false,
        config: true,
      },

      manifest: {
        name: "movo",
        short_name: "movo",
        description: "movo",
        theme_color: "#ffffff",
      },

      workbox: {
        globPatterns: ["**/*.{js,css,html,svg,png,ico}"],
        cleanupOutdatedCaches: true,
        clientsClaim: true,
      },

      devOptions: {
        enabled: true,
        navigateFallback: "index.html",
        suppressWarnings: true,
        type: "module",
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
  server: {
    allowedHosts: true,
  },
});
