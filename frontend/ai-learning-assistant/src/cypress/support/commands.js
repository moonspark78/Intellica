Cypress.Commands.add('login', (email = 'TON_VRAI_EMAIL', password = 'TON_VRAI_MOT_DE_PASSE') => {
  cy.visit('/login')
  cy.get('input[type="email"]').type(email)
  cy.get('input[type="password"]').type(password)
  cy.contains('button', 'Sign In').click()
  cy.url().should('include', '/dashboard')
})