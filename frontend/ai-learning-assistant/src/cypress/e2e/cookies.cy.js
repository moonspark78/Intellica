describe('Cookies RGPD', () => {

  beforeEach(() => {
    cy.clearLocalStorage()
    cy.visit('/')
  })

  it('la bannière apparaît à la première visite', () => {
    cy.get('[data-testid="cookie-banner"]').should('be.visible')
  })

  it('Accepter → bannière disparaît', () => {
    cy.contains('button', /accepter/i).click()
    cy.get('[data-testid="cookie-banner"]').should('not.exist')
  })

  it('Accepter → localStorage mis à jour', () => {
    cy.contains('button', /accepter/i).click()
    cy.window().then((win) => {
      expect(win.localStorage.getItem('cookie_consent')).to.eq('true')
    })
  })

  it('bannière absente après rechargement si déjà accepté', () => {
    cy.contains('button', /accepter/i).click()
    cy.reload()
    cy.get('[data-testid="cookie-banner"]').should('not.exist')
  })

})