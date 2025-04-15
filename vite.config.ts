/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    root: "src",
    reporters: "verbose",
    environment: "jsdom",
    setupFiles: ["setupTests.ts"],
    globals: true,
    coverage: {
      include: ["**/*.{ts,tsx}"],
      exclude: ["main.tsx", "**/types.*", "**/*.d.ts"],
      reportsDirectory: "../coverage",
    },
  },
});
