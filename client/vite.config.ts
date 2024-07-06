/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    federation({
      name: "mfe-testing-tool",
      remotes: {
        // module federation is being handled dynamically. see app.tsx
        // add dummy.js to prevent vite from throwing an error
        dummy: "dummy.js",
      },
      shared: ["react"],
    }),
  ],
  build: {
    target: "esnext",
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./tests/setup.js",
  },
});
