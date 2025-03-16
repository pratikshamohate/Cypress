///<reference types="cypress"/>

describe('verify multi-tab and and multi-window in cypress',()=>{
    it('verify multi-tab in cypress',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain','/practice')
        //cy.get('#opentab).click()
        cy.get('#opentab').invoke('removeAttr','target').click()
        cy.url().should('contain','/courses')

    })
    it('verify multi-tab in cypress - type 2 for rahul shetty',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.url().should('contain','/pratice')

        cy.get('#opentab').then((ele)=>{
            let url=ele.prop('href')
            cy.visit(url)
            cy.url().should('contain','/courses')
        })

    })
     // rahul shetty
     // chromeWebSecurity : false, //for multi tab or multi-window in config.js
      it('verify multi-tab in cypress -type 1',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.url().should('contain','AutomationPratice/')
        //cy.get('#opentab').click()
        cy.get('#opentab').first().invoke('removeAttr','target').click()
        cy.url().should('contain','qaclickacademy')
      })

      it('verify multi-tab in cypress -type 2 for rahul shetty',()=>{

      })

    // new window option

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

// cy.window().then(function (win) {
//     cy.window() provides access to the browser's window object.
//     then ensures the test interacts with the window object after it is fully available.
//         cy.stub(win, 'open').callsFake((url) => { win.location.href = url; })
// Stub the window.open method:
//     cy.stub(win, 'open') replaces the default window.open method with a Cypress - controlled stub.
// callsFake modifies its behavior to redirect the current window(win.location.href = url) instead of opening a new tab or window.
// This is done because Cypress does not natively support multi - window or new- tab functionality. 
// By redirecting, the test can proceed seamlessly within the same context
