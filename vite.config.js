import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  // Otimizações de build
  build: {
    target: 'es2020', // Compatibilidade com Node 20
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          animations: ['framer-motion', 'gsap'],
          audio: ['howler']
        }
      }
    },
    chunkSizeWarningLimit: 1000
  },

  // Otimizações de desenvolvimento
  server: {
    port: 5173,
    open: true,
    cors: true
  },

  // Otimizações de CSS
  css: {
    postcss: './postcss.config.js'
  },

  // Otimizações de assets
  assetsInclude: ['**/*.mp4', '**/*.webm', '**/*.jpg', '**/*.png', '**/*.webp'],

  // Configurações de preview
  preview: {
    port: 4173,
    open: true
  }
})
