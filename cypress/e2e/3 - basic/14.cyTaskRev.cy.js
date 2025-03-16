///<reference types="cypress"/>

describe('cy.task rev',function(){
    it('cy.task exmple 1',()=>{
        cy.task('msgPrint')
    })
    it('cy.task exmple 2',()=>{
        cy.task('msgwithPara','pratiksha')
    })
    it('cy.task exmple 3',()=>{
        cy.task('addition',{a:2,b:3}).then(function(res){
            cy.log(res)
        })
    })
})