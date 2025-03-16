/// <reference types="cypress"/>

describe('traversing DOM element',()=>{
    beforeEach(function(){
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    
    })

    if('Travarsing1',()=>{
        cy.get('.traversal-drinks-list >li').should('have.length',5)
        cy.get('.traversal-drinks-list >li').first().should('have.text','coffee')
        cy.get('.traversal-drinks-list >li').last().should('have.text','sugar')
        cy.get('.traversal-drinks-list >li').eq(2).should('have.text','milk')
        cy.get('.traversal-drinks-list >li:nth-child(1)').should('have.text','coffee')
        cy.get('.traversal-drinks-list >li:nth-child(5)').should('have.text','sugar')
        cy.get('.traversal-drinks-list >li:nth-child(3)').should('have.text','milk')
 
    })
    it ('siblings',()=>{
        cy.get('#veggie').prev().should('have.text','Figs')
        cy.get('#veggie').next().should('have.text','Asparagus')
        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').prevUntil().should('have.length',4)
        cy.get('#veggie').

    })

    
})