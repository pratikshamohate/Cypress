// JS alarts we cant inspect
//window:alart
//window:confirm
//window:prompt

/// <reference types="cypress"/>

describe('verify window:alart',()=>{
    it('verify window:alart',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.removeAllListeners('window:alert',function(text){
            expect(text).to.eq('I am a JS Alert')
            return true
        })

        cy.get('[onclick="jsAlert()"]').click()//event
        cy.get('#result').should('have.text','You successfully clicked an alert')

    })

    it('verify window:confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS confirm')
            return true
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked:ok')

    })
     it('verify window:confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm',function(text){
            expect(text).to.eq('I am a JS confirm')
            return false
        })

        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked:Cancel')
     })

     it.only('verify window:confirm',()=>{
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function(win){
            cy.stub(win,'prompt').returns('hi,how are you?')

        })
        it.only('verify window:confirm',()=>{
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.window().then(function(win){
                cy.stub(win,'prompt').returns(null)
            })
            cy.get('[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text','You entered:null')
        })
     })

    })