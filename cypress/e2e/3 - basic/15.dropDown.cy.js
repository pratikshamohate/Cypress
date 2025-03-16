///<reference types="cypress"/>

describe('verify drop down option',()=>{
    it('verify static drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
        cy.get('#dropdowm-menu-1').select('Python')

        cy.get('#dropdowm-menu-2').select('TestNG')
    })

    it('verify dynamic drop option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('ca')
        cy.get('#myInputautocomplete-list >div').each(function(el){
            //cy.log(el.text())

            if(el.text() =='carrots'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain','carrots')
            }
        })
    })
    it.only('verify dynamic drop down option',()=>{
        cy.visit('https://www.webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html')
        cy.get('#myInput').type('a')
        cy.get('#myInputautocomplete-list >div').each(function(el){
            // cy.log(el.text())

            if(el.text()=='Artichoke'){
                cy.wrap(el).click()
                cy.get('#submit-button').click()
                cy.url().should('contain','Artichoke')
            }
        })
    })


})