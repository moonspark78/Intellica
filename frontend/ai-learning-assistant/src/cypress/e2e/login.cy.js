describe('Login', () => {

  beforeEach(() => cy.visit('/login'))

  it('affiche les champs email et password', () => {
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="password"]').should('be.visible')
  })

  it('affiche le bouton Sign In', () => {
    cy.contains('button', 'Sign In').should('be.visible')
  })

  it('connexion réussie → dashboard', () => {
    cy.get('input[type="email"]').type('alice@example.com')
    cy.get('input[type="password"]').type('motdepasse123')
    cy.contains('button', 'Sign In').click()
    cy.url().should('include', '/dashboard')
  })

  it('mauvais identifiants → message d\'erreur', () => {
    cy.get('input[type="email"]').type('faux@test.com')
    cy.get('input[type="password"]').type('mauvaismdp')
    cy.contains('button', 'Sign In').click()
    cy.contains(/failed|invalid|credentials/i).should('be.visible')
  })

})