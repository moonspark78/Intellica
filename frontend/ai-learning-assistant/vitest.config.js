// vitest.config.js — À placer à la RACINE du projet (même niveau que vite.config.js)
import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
 
export default defineConfig({
  plugins: [react()],
  test: {
    environment: 'jsdom',         // simule le DOM du navigateur
    globals: true,                // permet d'utiliser describe/it/expect sans import
    setupFiles: './src/setupTests.js', // fichier d'init (jest-dom)
    css: true,                    // parse les fichiers CSS importés
  },
})
 