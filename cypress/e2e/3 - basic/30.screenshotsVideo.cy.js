///<reference types ="cypress"/>

describe('TS001 :verify contact us page',function(){
    it('capture screenshot and video',()=>{
        cy.visit('https://automationexercise.com/')
        cy.get('[src="/static/images/home/logo.png"]').screenshot("logo")

    })
    it('TC001 -verify contact us page for valid data',function(){
        ///AAA 

        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')

        cy.get('[name ="first_name"]').type('pratiksha')
        cy.get('[name ="last_name"]').type('mohate')
        cy.get('[name ="email"]').type('pratiksha@gmail.com')
        cy.get('[name ="message"]').type('hi')

        //cy.screenshot('contactUs')

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')

    })
    
})