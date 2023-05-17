import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: "0.0.0.0",
    port: 11013,
    cors: {
      origin: '*',
      credentials: true,
    },
    proxy: {
      '/api': 'http://localhost:11011'
    },
  },
  build: {
    sourcemap: true,
    outDir: '../backend/public',
    emptyOutDir: true
  }
})
