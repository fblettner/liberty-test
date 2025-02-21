import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/liberty-core/',
  plugins: [react()],
  server: {
    open: true,
    cors: { origin: "*" },
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: true
  },
})
