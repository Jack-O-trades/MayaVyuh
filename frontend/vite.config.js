import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // Use VITE_BASE env var to set the base path.
  // On Vercel: set VITE_BASE=/ in environment variables.
  // On GitHub Pages: keep default '/MayaVyuh/'
  base: process.env.VITE_BASE || '/MayaVyuh/',

  resolve: {
    alias: {
      // Lets you import '@/useSync' instead of '../../useSync' from anywhere
      '@': resolve(__dirname, './src'),
    },
  },

  build: {
    // Increase warning limit — our single-file approach is intentional
    chunkSizeWarningLimit: 1200,
  },

  // Dev server tweaks
  server: {
    port: 5173,
    open: true,
  },
})