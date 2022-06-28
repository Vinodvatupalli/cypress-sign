describe('App Component', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:3000/')
  });

  it('adds text into state and toggle visibility', () => {
    cy.get('#user').type('vinod1@test.com')
    cy.get('#psw').type('vinod1')
    cy.get('#signinlink').click()
    cy.get('#signin').click()
    cy.get('#welcome').should('contains.text','Welcome User')
  })
})
