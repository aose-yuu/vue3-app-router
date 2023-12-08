import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      'vue3-app-router': `${process.cwd()}/../../packages`,
    },
  },
});
