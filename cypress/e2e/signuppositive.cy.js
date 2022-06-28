describe('App Component', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:3000/')
    });
  
    it('adds text into state and toggle visibility', () => {
      cy.get('#user').type('ram3@test.com')
      cy.get('#psw').type('ram2356')
      cy.get('#signup').click()
      cy.get('#welcome').should('contains.text','Welcome User')
    })
  })