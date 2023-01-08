describe('Landing Page Module', () => {
  before("Open Url", ()=>{
    cy.openUrl()
  })
  it('To verify that user can view landing page', () => {
    cy.url().should('include', 'magento')
    cy.get('a.logo').should('be.visible').and('have.attr', 'href')
  })
})