describe('Conformité HTML — Balisage structurant', () => {

  it('page login a les champs email et password', () => {
    cy.visit('/login')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
  })

  it('page login a un bouton avec texte visible', () => {
    cy.visit('/login')
    cy.contains('button', 'Sign In').should('exist')
  })

  it('page login a des labels pour les champs (accessibilité)', () => {
    cy.visit('/login')
    cy.contains('label', /email/i).should('exist')
    cy.contains('label', /password/i).should('exist')
  })

  it('page login a un lien Sign Up', () => {
    cy.visit('/login')
    cy.contains('a', /sign up/i).should('exist')
  })

  it('page login a un titre de bienvenue', () => {
    cy.visit('/login')
    cy.contains(/welcome/i).should('exist')
  })

  it('page register est accessible via le lien Sign Up', () => {
    cy.visit('/login')
    cy.contains('a', /sign up/i).click()
    cy.url().should('include', '/register')
  })

  it('page register a les champs nécessaires', () => {
    cy.visit('/register')
    cy.get('input[type="email"]').should('exist')
    cy.get('input[type="password"]').should('exist')
  })

})