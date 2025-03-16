/// <reference types ="cypress"/>

describe('verify cy.task ',()=>{
    it('task1',()=>{
        cy.task('myTask1')

        cy.task('myTask2','pratiksha')

        cy.task('addition',{a:2,b:3}).then((res)=>{
            cy.log(res)
        })
      
    })
})