// ///<reference types="cypress"/>

// describe('verify tables in cypress',()=>{
//     it('verify table 1',()=>{
//         cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

//         let sum =0
//         cy.get('#t01').find('tr').not(':first').each((row)=>{
//             // cy.log(typeof(row.find('td').last()))
//             // cy.log(row.find('td:nth-last-child(1)').text())

//             sum+=Number(row.find('td').last().text())
//         }).then(()=>{
//             // cy.log(sum)
//             expect(sum).to.eq(159)
//         })
//     })

//     it.only('verify table 2',()=>{
//         cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
//         let sum=0
//         cy.get('#t02').find('tr').not(':first').each((row)=>{
//             //cy.log(typeof(row.find('td').last().text()))

//             sum +=Number(row.find('td').last().text())
//         }).then(()=>{
//             // cy.log(sum)
//             expect(sum).to.eq(163)
//         })
//     })

// })

// practice=https://www.letskodeit.com/practice


/// <reference types="cypress" />
describe('verify tables in cypress ', () => {
    function calculateAge(tableId,finalSum) {
        let sum = 0
        cy.get(tableId).find('tr').not(':first').each((row) => {
            //cy.log(typeof(row.find('td').last().text()))
            // cy.log(row.find('td:nth-last-child(1)').text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(finalSum)
        })
    }



    it('verify table 1', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')

        let sum = 0
        cy.get('#t01').find('tr').not(':first').each((row) => {
            //cy.log(typeof(row.find('td').last().text()))
            // cy.log(row.find('td:nth-last-child(1)').text())
            sum += Number(row.find('td').last().text())
        }).then(() => {
            //cy.log(sum)
            expect(sum).to.eq(159)
        })
    })

    it('verify table 2', () => {
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        let sum = 0
        cy.get('#t02').find('tr').not(':first').each((row) => {
            //cy.log(typeof(row.find('td').last().text()))
            sum += Number(row.find('td').last().text())
        }).then(() => {
            // cy.log(sum)
            expect(sum).to.eq(163)
        })
    })

    it.only('verify table with function',()=>{
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        calculateAge('#t01',159)
    })

    it.only('verify table with function',()=>{
        cy.visit('https://www.webdriveruniversity.com/Data-Table/index.html')
        calculateAge('#t02',163)
    })
})
//https://www.letskodeit.com/practice