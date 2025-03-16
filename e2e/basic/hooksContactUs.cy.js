/// <reference types='cypress'/>

describe('TS001 : verify contact us page',function(){
    beforeEach(function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
       
    })
    it ('TC001 - verify contact us page for valid data ',function(){
        //AAA

        cy.contactUsCmd('pratiksha','mohate','pratiksham01@gmail.com','hii')

        cy.get('[type ="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your message!')


    })

    it('TC002 verify contact us page for invaild emailid',function(){

        cy.contactUsCmd('ketan','mohate','ketan','hi')
        cy.get('[type="submit"]').click()

        cy.contains('error  :invaild emailid').should('be.visible')

    
    })
    it('TC003 varify contact us page for reset button', function () {

        cy.contactUsCmd('Neel', 'chawde', 'neel', 'hi')

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text', "")
        cy.get('[name="last_name"]').should('have.text', "")
        cy.get('[name="email"]').should('have.text', "")
        cy.get('[name="message"]').should('have.text', "")


    })

})
