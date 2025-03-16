///<reference types="cypress"/>

describe('verify multi-tab abd multi-windo in cypress',()=>{
    it('verify multi-tab in cypress -type 1',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        //type1
        //cy.url().should('contain','/practice')
        //cy.get('#opentab').invoke('removeAttr','target').click()
        //cy.url().should('contain','/courses')

        //type 2
        cy.url().should('contain','/practice')
        cy.get('#opentab').then((ele)=>{
            let url =ele.prop('href')
            cy.visit(url)
            cy.url().should('contain','/courses')
        })
    })
    chromeWebSecurity : false, //for multi tab or multi-window

    it('verify multi-tab in cypress -type 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('contain','AutomationPratices/')
        //cy.get('#opentab').click()
        cy.get('#opentab').first().invoke('removeAttr','target').click()
        cy.url().should('contain','qaclickacademy')
    })

    //muti window
    it.only('verify multi-window in cypress',()=>{
        cy.visit('https://www.letskodeit.com/practice')

        cy.window().then((win)=>{
            cy.stub(win,'open').callsFake((url)=>{
                win.location.href=url
            })
        })

        cy.get('#openwindow').click()
        cy.url().should('contain','/courses')
    })
})