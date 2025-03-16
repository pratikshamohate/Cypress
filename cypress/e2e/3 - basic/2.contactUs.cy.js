///<reference types='cypress' />

describe('TS001 : verify contact us page',function(){ //suite 
    it('TC001 - verify contact us page for valid data',function(){ //test case1
        //AAA

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('pratiksha')
        cy.get('[name="last_name"]').type('mphate')
        cy.get('[name="email"]').type('pratiksham01@gamil.com')
        cy.get('[name="message"]').type('hi')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')
        
    })

    it.skip('varify contact us page for invalid emailid', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('ketan')
        cy.get('[name="last_name"]').type('mohate')
        cy.get('[name="email"]').type('ketan')
        cy.get('[name="message"]').type('hi')

        cy.get('[type="submit"]').click()

        cy.contains(' Error: Invalid email address').should('be.visible')
    })

    it.only('varify contact us page for skip field', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('ketan')
        
        cy.get('[name="email"]').type('ketanm@gmail.com')
        cy.get('[name="message"]').type('hi')

        cy.get('[type="submit"]').click()

        cy.contains(' Error: all fields are required').should('be.visible')
    })

    it.only('varify contact us page for reset button', function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name="first_name"]').type('ketan')
        cy.get('[name="last_name"]').type('mohate')
        cy.get('[name="email"]').type('ketan')
        cy.get('[name="message"]').type('hi')

        cy.get('[type="reset"]').click()

        cy.get('[name="first_name"]').should('have.text',"")
        cy.get('[name="last_name"]').should('have.text',"")
        cy.get('[name="email"]').should('have.text',"")
        cy.get('[name="message"]').should('have.text',"")


    })
})