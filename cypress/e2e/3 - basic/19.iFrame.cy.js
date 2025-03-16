/// <reference types ="cypress"/>

describe('verify iFrame in cypress', () => {
    it.only('exmple 1', () => {

        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        //cy.get('#div-main-nav > div > ul > li.active > a').should('have.text','Home')
        //cy.get('[href="index.html"]').should('have.text','Home'

        cy.get('#frame').then(function ($frame) {
            cy.log($frame)
            let iFrameBody = $frame.contents().find('body')

            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')

        })

    })

    it('exmple 2', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        cy.get('#frame').then(function ($frame) {
            let iFrameBody = frame[0].cotentDocument.body
            cy.wrap(iFrameBody).as('iframe')
            cy.get('@iframe').find('[href="index.html"]').should('have.text', 'Home')

        })

    })

    it('exmple 3', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')
        let iFrameBody = cy.get('#frame').its('0.contentDocument.body').then(cy.wrap)
        iFrameBody.find('[href="index.html"]').should('have.text', 'html')

    })
    it('exmple 4', () => {
        cy.visit('https://www.webdriveruniversity.com/IFrame/index.html')

        cy.getFrameBody('#frame').find('[href="index.html"]').should('have.text', 'Home')

    })
    it('exmple 5', () => {
        cy.visit('https://www.letskodeit.com/practice')
        cy.getiFrameBody('#courses-iframe').find('[class="dynamic-heading margin-bottom-20"]').should('have.text', 'All Courses')

    })


})