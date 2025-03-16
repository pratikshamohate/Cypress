//JS alarts -we cant inspect
//window:alart
//window:confirm
//window:prompt

/// <reference types="cypress"/>

describe('verify JS alarts in cypress', () => {
    it('verify window:alart', () => {

        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:alert', function (msg) {
            expect(msg).to.eq('I am a JS Alert')
            return true
        })
        cy.get('[onclick="jsAlert()"]').click()
        cy.get('#result').should('have.text', 'You successfully clicked an alert')

    })

    it('verify window:confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm', function (msg) {
            expect(msg).to.eq('I am a JS Confirm')
            return true//ok
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Ok')

    })
    it('verify window:confirm', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.on('window:confirm', function (msg) {
            expect(msg).to.eq('I am a JS Confirm')
            return false //cancle
        })
        cy.get('[onclick="jsConfirm()"]').click()
        cy.get('#result').should('have.text','You clicked: Cancel')

    })
    it('window:promt', () => {
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

        cy.window().then(function (win) {
            cy.window().then(function (win) {
                cy.stub(win, 'prompt').returns('hi,how are you?')

            })
            cy.get('[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text','You entered: hi,how are you?')

        })
        it('window:prompt', () => {
            cy.visit('https://the-internet.herokuapp.com/javascript_alerts')

            cy.visit().then(function (win) {
                cy.stub(win, 'prompt').returns(null)
            })
            cy.get('[onclick="jsPrompt()"]').click()
            cy.get('#result').should('have.text', 'You entered:null')

        })
        it.only('table', () => {
            cy.visit('https://webdriveruniversity.com/Data-Table/index.html')
            let sum = 0
            cy.get('[id="t01"]').find('tr>td').not(':first').each(function (row) {
                //cy.log(typeof(row.find('td').last().text()))
                sum += Number(row.find('td').last().text())

            }).then(function () {
                //cy.log(sum)
                expect(sum).to.eq(159)
            })

        })

    })

})

