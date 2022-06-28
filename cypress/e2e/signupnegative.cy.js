describe('App Component', () => {
    beforeEach(()=>{
      cy.visit('http://localhost:3000/')
    });
  
    it('adds text into state and toggle visibility', () => {
      cy.get('#user').type('vinod1@test.com')
      cy.get('#psw').type('vinod435243')
      cy.get('#signup').click()
      cy.get('#emailerror').should('contains.text','The email address is already in use by another account. (auth/email-already-in-use).')
    })

    it('adds text into state and toggle visibility', () => {
      cy.get('#user').type('siva@test.com')
      cy.get('#psw').type('siva')
      cy.get('#signup').click()
      cy.get('#pswerror').should('contains.text','Password should be at least 6 characters (auth/weak-password).')
    })
  })