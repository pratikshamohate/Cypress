///<reference types="cypress"/>

import data from "../../fixtures/4.interceptPayload.json"

describe('TS001 : verify intercept concept in cypress',function(){

    it('TC001 : verify intercept concept in cypress',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url:'https://jsonplaceholder.cypress.io/comments/1',
            method :'GET'
        },{
            body:data
            // {
            //     "postId":1,
            //     "id":1,
            //     "name":"pratiksha@gmail.com",
            //     "body":"i am learning cypress"
            // }

        }).as('getComment')

        cy.contains('Get Comment').click()
        cy.wait('@getComment').then((res)=>{
            cy.log(res)
        })
        cy.get('[class="network-comment"]').should('contain','i am learning')


    })
    it('TC001 : verify intercept concept in cypress',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url :'https://jsonplaceholder.cypress.io/comments',
            method:'POST'
        }).as('postComment')

        cy.contains('Post Comment').click()
        cy.wait('@postComment').then((resp)=>{
            //cy.log(res.response.statusCode)
            expect(resp.response.statusCode).to.eq(201)
            expect(resp.response.body.email).to.eq("hello@cypress.io")

        })
        cy.get('[class="network-post-comment"]').should('have.text','POST successful!')

    })
    it.only('TC001 -verify intercept concept in cypress',function(){
        cy.visit('https://example.cypress.io/commands/network-requests')

        cy.intercept({
            url :'https://jsonplaceholder.cypress.io/comments/1',
            method:'PUT'
        }).as('updateComment')

        cy.contains('Update Comment').click()
        cy.wait('@updateComment').then((resU)=>{
            //cy.log(resU.response.statusCode)
            expect(resU.response.statusCode).to.eq(200)
        })
    })

})