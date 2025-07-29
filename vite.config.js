import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api/sheets': {
        target: 'https://script.google.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/sheets/, '/macros/s/AKfycbz55Lsh8x-uEgjwc54h5o4iwS-0v1L5wUC1kwWj5LiMZY2vqWI6cW-JAipIiYCzy0OG/exec'),
        secure: true
      }
    }
  }
})
