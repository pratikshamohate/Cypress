///<reference types="cypress"/>

describe('verify iframe in cypress',()=>{
    it('exmple 1',()=>{
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function($frame){
            cy.log($frame)
            let iframeBody=$frame.contents().find('body')
            cy.wrap(iframeBody).as('iframe')
            cy.get('@iframe').find('a[href="index.html"]').should('have.text','Home')

        })
        it.only('exmple 3',()=>{
            cy.visit('//www.webdriveruniversity.com/IFrame/index.html')
            cy.getiiFrameBody('#frame').find('a[href="index.html"]').should('have.text','Home')
        })
    })
})