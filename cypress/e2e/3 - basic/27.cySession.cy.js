/// <reference types ="cypress"/>
////before ,beforeEach,after,afterEach

describe('varify login page of OHRM with cy.session in cypress',()=>{
    beforeEach(function(){
        //cy.OHRMlogin('Admin', 'admin123')

        cy.OhrmLoginBySession('Admin','admin123')
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        // cy.visit('/web/index.php/dashboard/index') //baseUrl

    })
    it('test case 1',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')
        
    })
    it('test case 2',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard')

    })
    it('test case 3',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

    })
    it('test case 4',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

    })
    it('test case 5',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')

    })
    it('test case 6',()=>{
        cy.get('.oxd-topbar-header-breadcrumb-module').should('have.text','Dashboard')
    })
})