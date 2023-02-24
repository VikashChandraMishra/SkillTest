/// <reference types="vitest" />

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const CI_MODE = process.env.CI == "true";

export default defineConfig({
  plugins: [react()],
  test: {
    watch: !CI_MODE,
    globals: true,
    environment: "happy-dom",
    coverage: {
      enabled: true,
      reporter: CI_MODE
        ? ["text-summary", "json-summary"]
        : ["text", "json", "html"],
    },
    setupFiles: [],
    include: ["./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    exclude: ["./test/e2e/*"],
    watchExclude: [".*\\/node_modules\\/.*", ".*\\/build\\/.*"],
  },
});
