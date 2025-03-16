/// <reference types ="cypress"/>

describe ("varify contact us page ",function(){
    it ("varify contact us page for valid data ",function(){


        cy.visit ('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name = "first_name"]').type('pratiksha')
        cy.get('[name = "last_name"]').type('mohate')
        cy.get('[name ="email"]').type('pratiksham@gmail.com')
        cy.get('[name = "message"]').type('I am learning cypress')

        cy.get(`[name ="submit"]`).click()

        cy.get('h1').should('have.text','Thank you for your massage!')
    })
})