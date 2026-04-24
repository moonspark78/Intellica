import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:5173',
    specPattern: 'src/cypress/e2e/**/*.cy.{js,jsx}',
    supportFile: 'src/cypress/support/e2e.js',
    video: false,
  },
})