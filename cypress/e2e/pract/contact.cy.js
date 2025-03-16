
/// <reference types ="cypress"/>

describe("varify contact us page ",function (){//suite
    it ("varify contact us page for valid data",function() {
        
    //test case
    //AAA
      //Arrangements ,Actions, Assertions

      //Arrangements

    cy.visit ('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('[name ="first_name"]').type('pratiksha')
    cy.get('[name = "last_name"]').type('mohate')
    cy.get('[name = "email"]').type('pratiksham@gmail.com')
    cy.get('[name = "message" ]').type('I am learing cypress')

    cy.get('[type = "submit"]').click()

    cy.get('h1').should('have.text','Thank you for your massage')

}) 
})
