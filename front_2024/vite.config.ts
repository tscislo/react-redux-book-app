import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"
import checker from "vite-plugin-checker"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), checker({
    typescript: true
  })],
  server: {
    open: true,
    port: 3000,
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "src/setupTests",
    mockReset: true,
  },
})
