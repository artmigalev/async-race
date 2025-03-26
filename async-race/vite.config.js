import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths"; // Плагин для поддержки путей из tsconfig.json
import eslintPlugin from "vite-plugin-eslint"; // Плагин для интеграции ESLint

export default defineConfig({
  root: "./",
  base: "/",
  mode: "development",
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: "./public",
    sourcemap: true,
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [tsconfigPaths(), eslintPlugin()],
});
