/// <reference types ="cypress" />

describe('traversing DOM element', () => {

    beforeEach(function () {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
    })

    it('Tarvarsing1', () => {
        cy.get('.traversal-drinks-list >li').should('have.length',5)
        cy.get('.traversal-drinks-list >li').first().should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list >li').last().should('have.text', 'Sugar')
        cy.get('.traversal-drinks-list >li').eq(2).should('have.text', 'Milk')
        cy.get('.traversal-drinks-list >li:nth-child(1)').should('have.text', 'Coffee')
        cy.get('.traversal-drinks-list >li:nth-child(5)').should('have.text', 'Sugar')
        cy.get('.traversal-drinks-list >li:nth-child(3)').should('have.text', 'Milk')
    })

    it('siblings',()=>{
        cy.get('#veggie').prev().should('have.text','Figs')
        cy.get('#veggie').next().should('have.text','Asparagus')
        cy.get('#veggie').prevAll().should('have.length',6)
        cy.get('#veggie').nextAll().should('have.length',4)
        cy.get('#espresso').prevUntil('#coffee').should('have.length',2)
        cy.get('#coffee').nextUntil('#sugar').should('have.length',3)
    })

    it('find',()=>{
        cy.get('#form-textfield').find('[name="firstname"]').type('pratiksha')
        cy.get('#form-textfield').find('[name="lastname"]').type('mohate')
        cy.get('#form-textfield').find('textarea').type('hi')
    })

    it('contains',()=>{
        cy.get('.traversal-buttons').contains('Link').click()
    })

    it('contains2',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.contains('CONTACT US').click()
    })

    it('parent,parents,parentsUntil',()=>{
        // cy.get('#milk').parent().should('have.attr',"class","traversal-drinks-list")
        // cy.get('#milk').parents()
        // cy.get('#milk').parents().should('have.length',6)
        // cy.get('#milk').parents().should('match','[class="col-sm-12"]')
        // cy.get('#milk').parents().should('match','[class="container"]')
        cy.get('#milk').should('have.text','Milk')
        cy.get('#milk').parent()
        cy.get('#milk').parent().should('have.attr',"class","traversal-drinks-list")
        cy.get('#milk').parents()
        cy.get('#milk').parents().should('have.length',6)
        cy.get('#milk').parents().should('match','[class="thumbnail"]')

    })

    it('children',()=>{
        cy.get('.traversal-drinks-list').children().should('have.length',5)

        cy.get('.traversal-button-states').children().filter('.disabled').should('have.text','Warning')
        cy.get('.traversal-button-states').children().not('.disabled').should('have.length',3)
        cy.get('.traversal-button-states').children().not('.disabled').first().should('have.text','Danger')
        cy.get('.traversal-button-states').children().not('.disabled').last().should('have.text','Alert')
        cy.get('.traversal-button-states').children().not('.disabled').eq(1).should('have.text','Info')
    })

    it('closest',()=>{
        cy.get('[name="firstname"]').closest('div').should('have.attr',"id","thumbnail-1")

    })

    
})