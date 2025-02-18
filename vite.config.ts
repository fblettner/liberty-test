import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/liberty-core/',
  plugins: [react()],
  server: {
    open: true,
    cors: { origin: "*" },
    proxy: {
      '/api': {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
      '/socket.io': {
        target: "ws://localhost:8000",
        changeOrigin: true,
      },
      '/socket': {
        target: "http://localhost:8000",
        changeOrigin: true,
      },
    }
  },
  build: {
    outDir: "build",
    emptyOutDir: true,
    sourcemap: true
  },
})
