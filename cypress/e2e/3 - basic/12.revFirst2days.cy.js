/// <reference types ="cypress"/>

describe('rev of first day (verify contact us page with valid and invalid data)',()=>{
    it("verify contact us page with valid data",()=>{
    /// AAA
    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('[name="first_name"]').type('pratiksha')
    cy.get('[name="last_name"]').type('mohate')
    cy.get('[name="email"]').type('pratiksham01@gmail.com')
    cy.get('[name="message"]').type('hi,how are you?')

    cy.get('[type="submit"]').click()

    cy.get('h1').should('have.text','Thank You for your Message!')
})

it("verify Contact Us page with invaild data",()=>{
    ///AAA

    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.get('[name="first_name"]').type('pratiksha')
    cy.get('[name="last_name"]').type('mohate')
    cy.get('[name="email"]').type('pratikshagmil.com')
    cy.get('[name="message"]').type('hi,how are you?')

    cy.get('[type="submit"]').click()

    cy.contains('Error: Invalid email address').should('be.visible')
})

it.only("verify contact us page with valid data with custom command",()=>{

    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.contactUs('pratiksha','mohate','pratiksham01@gmail.com','i am learning cypress')
    cy.get('h1').should('have.text','Thank You for your Message!')
})

it.only("verify Contact Us page with invalid data",()=>{
    ///AAA

    cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

    cy.contactUs('Pratiksha','Mohate','pratikshamgmil.com','I am learning cypress')

    
    cy.contains('Error: Invalid email address').should('be.visible')
})
})