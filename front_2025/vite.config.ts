import react from "@vitejs/plugin-react"
import path from 'path';
import { defineConfig } from "vitest/config"
import packageJson from "./package.json" with { type: "json" }
import checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    checker({
      typescript: {
        tsconfigPath: path.resolve(__dirname, './tsconfig.app.json')
      }
    }),
  ],

  server: {
    open: true,
    port: 3002,
  },

  test: {
    root: import.meta.dirname,
    name: packageJson.name,
    environment: "jsdom",

    typecheck: {
      enabled: true,
      tsconfig: path.join(import.meta.dirname, "tsconfig.json"),
    },

    globals: true,
    watch: false,
    setupFiles: ["./src/setupTests.ts"],
  },
})
