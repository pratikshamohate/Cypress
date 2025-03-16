/// <reference types ="cypress"/>

//dev,SIT,UAT,pre-prod,prod

describe('environments in cypress', () => {
    it('environments in cypress', () => {
        cy.visit('https://practice.automationtesting.in/my-account/')
        cy.get('[id="username"]').type('testingStage@gmail.com')
        cy.get('[id="password"]').type('dipanshu@123')
        cy.get('[name="login"]').click()

        cy.get('strong').should('have.text','testingStage')
        let uid ='testingStage@gmail.com'
        let un =uid.split('@')
        cy.log(un[0])
        cy.get('strong').should('have.text',un[0])

    })

    it.only('environments in cypress -2', () => {
        cy.visit('/my-account/')
        cy.get('[id="username"]').type(Cypress.env('uid'))
        cy.get('[id="password"]').type(Cypress.env('pw'))
        cy.get('[name="login"]').click()
        let uid =Cypress.env('uid')
        let un =uid.split('@')
        cy.log(un[0])
        cy.get('strong').should('have.text',un[0])
    })
})






// //testingStage@gmail.com
// dipanshu@123
// testingProd@gmail.com
// Chawde@123


// firstway using npx cypress open
// npx cypress open --config-file production.config.js
// npx cypress open --config-file stagging.config.js

//second way using npx cypress run
//  npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser chrome --headed --config-file prod.config.js
// npx cypress run --spec "cypress\e2e\3-basics\28.environments.cy.js" --browser edge --headed --config-file stage.config.js

//third way to create short cut command
// create below script command in package.json
// "stage-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser edge --headed --config-file stage.config.js ",
// "prod-test" : "npx cypress run --spec 'cypress/e2e/3-basics/28.environments.cy.js' --browser chrome --headed --config-file prod.config.js"
// then run following command on cli
// npm run prod-test
// npm run stage-test