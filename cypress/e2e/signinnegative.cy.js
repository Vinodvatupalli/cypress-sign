describe('App Component', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:3000/')
    });
  
    it('adds text into state and toggle visibility', () => {
      cy.get('#user').type('vinod1@test.com')
      cy.get('#psw').type('vinod')
      cy.get('#signinlink').click()
      cy.get('#signin').click()
      cy.get('#pswerror').should('contains.text','The password is invalid or the user does not have a password. (auth/wrong-password).')
    })
  })