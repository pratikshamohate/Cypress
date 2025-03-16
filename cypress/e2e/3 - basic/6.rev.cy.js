///<reference types='cypress' />

describe('TS001 : verify contact us page', function () { //suite

    beforeEach(function () {
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
    })

    it('TC001 - verify contact us page for valid data', function () { //test case1
        //AAA

        cy.contactUsCmd('pratiksha', 'mohate', 'pratiksha01@gamil.com', 'hi')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text', 'Thank You for your Message!')

    })

    it('TC002 varify contact us page for invalid emailid', function () {

        cy.contactUsCmd('ketan', 'mohate', 'ketan', 'hi')
        cy.get('[type="submit"]').click()

        cy.contains(' Error: Invalid email address').should('be.visible')
    })


    it('TC003 varify contact us page for reset button', function () {

        cy.contactUsCmd('ketan', 'mohate', 'ketan', 'hi')

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")


    })
})