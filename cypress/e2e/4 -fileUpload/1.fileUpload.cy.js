///<reference types ="cypress"/>

describe('verify file upload option in cypress',()=>{
    it('verify single file upload',()=>{
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html')
        cy.get('[id="myFile"]').selectFile('C:/Users/tanis/Desktop/postmanGoRest.docx')

        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain','postmanGoRest.docx')
    })

    it('verify single file upload 2',()=>{
        cy.get('https://www.webdriveruniversity.com/File-Upload/index.html')
        let path = "cypress/e2e/4-fileUpload/postmandata.xlsx"
        cy.get('[id="myFile"]').selectFile(path)

        cy.on('window:alert',function(text){
            expect(text).to.eq('Your file has now been uploaded!')
            return true
        })
        cy.get('[id="submit-button"]').click()
        cy.url().should('contain','postmandata.xlsx')
    })
    it.only('verify multiple file upload',()=>{
        cy.visit('https://www.zoho.com/in/books/accounting-software-demo/#/salesorders/new')
        let path1="cypress/e2e/4-fileUpload/postmandata.xlsx"
        let path2="C:/Users/tanis/Desktop/postmanGoRest.docx"
        cy.get('[id="ember336"]').selectFile([path1,path2])
        cy.get('[id="ember354"]').should('contain','2')
    })
})

