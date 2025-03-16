///<reference types="cypress"/>

describe('verify text of element', () => {
    it('to get text of element -method 1',()=>{
        cy.visit('https://www.google.co.in/')
        cy.get('[class="uU7dJb"]').invoke('text').then((txt)=>{
            cy.log(txt)
        })
    })

    it('to get text of element -method 2',()=>{
        cy.visit('https://www.webdriveruniversity.com/')
        cy.get('#contact-us > div > div.caption > h4').then(($txt)=>{
            cy.log($txt.text())
        })
    })

    it.only('to get element rev',()=>{
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[data-uniqid="1621702280245"]').then(($ele)=>{
            //cy.log($ele.text())
            expect($ele.text()).to.eq('Practice Page')

        })
    })
});