import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: ["taalomy-website-production.up.railway.app", "taalomy.com"]
  },
  preview: {
    allowedHosts: ["taalomy-website-production.up.railway.app", "taalomy.com"]
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom', 'react-router-dom'],
          'animations': ['framer-motion'],
          'i18n': ['i18next', 'react-i18next', 'i18next-browser-languagedetector'],
          'ui': ['lucide-react']
        }
      }
    }
  }
})
