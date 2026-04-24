import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  test: {
    environment: 'jsdom',          // simule le navigateur
    globals: true,                // permet d'utiliser test(), expect() sans import
    setupFiles: './src/setupTests.js' // config jest-dom
  }
})