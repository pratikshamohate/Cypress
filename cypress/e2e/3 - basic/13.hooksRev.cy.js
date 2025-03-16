//before,beforeEach,after,afterEach
/// <reference types ="cypress"/>

describe('hooks rev',function(){
    before(function(){
        cy.log('i am before block execute only once at first')
    })

    beforeEach(function(){
        cy.log('i am in beforeEach block will execute before every test case')

    })
    after(function(){
        cy.log('i am in afterEach block will execute only once test case')

    })
    afterEach(function(){
        cy.log('i am in afterEach block will execute after every test case ')
    })
    it('test case 1',()=>{
        cy.log('i am in test case 1')
    })
    it('test case 2',()=>{
        cy.log('i am in test case 2')
    })
    it('test case 3',()=>{
        cy.log('i am test case 3')
    })

})