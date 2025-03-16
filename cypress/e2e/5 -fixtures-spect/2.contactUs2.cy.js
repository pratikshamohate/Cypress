///<reference types="cypress"/>

import data1 from "../../fixtures/1.contactUsPayload.json"
import data2 from "../../fixtures/2.CUPload.json"

describe('TS001 : verify contact us page with payload',()=>{
    it('TC001 - verify contact us page for valid data',function(){
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.get('[name="first_name"]').type(data1.fn)
        cy.get('[name="last_name"]').type(data1.ln)
        cy.get('[name="email"]').type(data1.email)
        cy.get('[name="message"]').type(data1.msg)

        cy.get('[type="submit"]').click()

        cy.get('h1').should('have.text','Thank You for your Message!')

    })
    it.only('TC002 - verify contact us page for valid data',()=>{
        data2.forEach(function(el){
            cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
            cy.get('[name="first_name"]').type(el.fn)
            cy.get('[name="last_name"]').type(el.ln)
            cy.get('[name="email"]').type(el.email)
            cy.get('[name="message"]').type(el.msg)

            cy.get('[type="submit"]').click()

            cy.get('h1').should('have.text','Thank You for your Message!')
        })

    })
    data2.forEach(function(el,index){
        it.only(`TC003 - verify contact us page for valid dataset of ${index +1} and ${el.fn}`,function(){
            data2.forEach(function(el){
                cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
                cy.get('[name="first_name"]').type(el.fn)
                cy.get('[name="last_name"]').type(el.ln)
                cy.get('[name="email"]').type(el.email)
                cy.get('[name="message"]').type(el.msg)

                cy.get('[type="submit"]').click()

                cy.get('h1').should('have.text','Thank You for your Message!')
            })

        })
        
    })

})

