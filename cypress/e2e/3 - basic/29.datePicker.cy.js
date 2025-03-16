///<reference types="cypress"/>

describe("verify date picker functionality in cypress",()=>{
    it("verify date picker for current amd future date",()=>{
        let currentDate =new Date()
        cy.log(`current date is ${currentDate}`)

        let todayDate=currentDate.getDate()
        cy.log(`current date is ${todayDate}`)

        let todayMonth=currentDate.getMonth() // starts with 0 as jan
        cy.log(`current date is ${todayMonth + 1}`)

        let todayMonthNsh=currentDate.toLocaleDateString("default",{month:"short"})
        cy.log(`current month is ${todayMonthNsh}`)

        let todayMonthLong=currentDate.toLocaleDateString("default",{moth:"long"})
        cy.log(`current month is ${todayMonthLong}`)

        //future date 
        let dateF =new Date()

        dateF.setDate(dateF.getDate()+31)
        cy.log(`current date is ${dateF}`)

        let fDate = dateF.getDate()
        cy.log(`current date is ${fDate}`)

        let fMonth=dateF.getMonth() // starts with 0 as jan
        cy.log(`current month is ${fMonth + 1}`)

        let fMonthNsh = dateF.toLocaleDateString("default",{month:"short"})
        cy.log(`current month is ${fMonthNsh}`)

        let fMonthLong=dateF.toLocaleDateString("default",{month:"long"})
        cy.log(`current month is ${fMonthLong}`)

    })
    it('verify future date functionality',()=>{
        
        //future date
        let dateF=new Date()

        dateF.setDate(dateF.getDate()+396)
        cy.log(`future date is ${dateF}`)

        let fDate = dateF.getDate()
        cy.log(`future date is ${fDate}`)

        let fMonth= dateF.getMonth() // starts with 0 as jan
        cy.log(`future month is ${fMonth + 1}`)

        let fMonthNsh= dateF.toLocaleDateString("default",{month:"short"})
        cy.log(`future month is ${fMonthNsh}`)

        let fMonthLong=dateF.toLocaleString("default",{month:"long"})
        cy.log(`future month is ${fMonthLong}`)

        let fyear =dateF.getFullYear()
        cy.log(`future year is ${fyear}`)

        cy.visit('https://www.webdriveruniversity.com/Datepicker/index.html')
        cy.get('.input-group-addon').click()

        function selectYearMonth(){

            cy.get('.datepicker-switch').first().then(function(currentDate){
                //cy.log(currentDate.text())
                if(!currentDate.text().includes(dateF.getFullYear())){
                    cy.get('.next').first().click()
                    selectYearMonth()
                }
            }).then(function(){
                cy.get('.datepicker-switch').first().then(function(currentDate){
                    if(!currentDate.text().includes(fMonthLong)){
                        cy.get('.next').first().click()
                        selectYearMonth()
                    }

                })
            })
        }

        function selectDate(){
            cy.get ('[class ="day"]').contains(fDate).click()
        }

        selectYearMonth()
        selectDate()
    })

    // it.only('TC002 verify past date picker', function () {
    //     let Cdate = new Date()
    //     // cy.log(current date:${Cdate})

    //     Cdate.setDate(Cdate.getDate() - 1000)
    //     cy.log(`get past date:${Cdate}`)

    //     let pdate = Cdate.getDate()
    //     cy.log(`get past date:${pdate}`)

    //     let pMonth = Cdate.toLocaleString("default", { month: "long" })
    //     cy.log(`get past month:${pMonth}`)

    //     let pYear = Cdate.getFullYear()
    //     cy.log(`get past year:${pYear}`)

    //     cy.visit("https://www.webdriveruniversity.com/Datepicker/index.html")

    //     cy.get('.form-control').click()

    //     function selectYearMonth() {
    //         cy.get('.datepicker-switch').first().then(function (Cdate) {
    //             // cy.log(Tdate.text())
    //             if (!Cdate.text().includes(pYear)) {
    //                 cy.get('.prev').first().click()
    //                 selectYearMonth()
    //             }

    //         }).then(function () {
    //             cy.get('.datepicker-switch').first().then((Cdate) => {
    //                 if (!Cdate.text().includes(pMonth)) {
    //                     cy.get('.prev').first().click()
    //                     selectYearMonth()
    //                 }
    //             })
    //         })
    //     }

    //     function selectDate() {
    //         cy.get("[class='day']").contains(pdate).click()
    //     }
    //     selectYearMonth()
    //     selectDate()
    //     cy.get('.form-control').should('have.value', '05-13-2022')
    // })
})


