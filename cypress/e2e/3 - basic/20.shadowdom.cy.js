/// <reference types ="cypress"/>

describe('verify shadowdom in cypress',()=>{
    it('exmple 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com')

        cy.get('span[class="info"]',{includeShadowDom:true}).should('have.text','Mobiles')
        cy.get('[id="nested_shadow_content"] > div', { includeShadowDom: true }).should('have.text', 'Laptops')
        cy.get('input[type=text]:nth-child(5)',{includeShadowDom:true}).type('pratiksha')
        
    })

    it('example 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('span[class="info"]').should('have.text','Moblies')
        cy.get('[id="nested_shadow_content"]>div').should('have.text','Laptops')
        cy.get('input[type=text]:nth-child(5)').type('pratiksha')

        //in config.js do setting "includeShadowDom:true" outside e2e

    })

    it.only('example 1',()=>{
        cy.visit('https://testautomationpractice.blogspot.com/')

        cy.get('[id="shadow_host"]').shadow().find('span[class="info"]').should('have.text', 'Mobiles')
        cy.get('[id="shadow_host"]').shadow().find('[id="nested_shadow_content"] > div').should('have.text', 'Laptops')
        cy.get('[id="shadow_host"]').shadow().find('input[type=text]:nth-child(5)').type('Pratiksha')

    
    })
})


