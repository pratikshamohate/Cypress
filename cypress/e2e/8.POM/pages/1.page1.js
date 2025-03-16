export default class myPage {
    selector = {
        url : "https://www.webdriveruniversity.com/Contact-Us/contactus.html",
        fn : '[name="first_name"]',
        ln : '[name="last_name"]',
        email : '[name="email"]',
        msg : '[name="message"]',
        submitBtn : '[value="SUBMIT"]',
        resetBtn : '[value="RESET"]',
        positiveValid : 'h1',
        validationMsg : "Thank You for your Message!"

    }

    visitUrl(){
        cy.visit(this.selector.url)
    }

    contactUsPage() {
        cy.get(this.selector.fn).type("pratiksha")
        cy.get(this.selector.ln).type("mohate")
        cy.get(this.selector.email).type("pratiksha@gmail.com")
        cy.get(this.selector.msg).type("i m learning pom")
    }

    contactUsPage2(fname,lname,mailId,mg){
        cy.get(this.selector.fn).type(fname)
        cy.get(this.selector.ln).type(lname)
        cy.get(this.selector.email).type(mailId)
        cy.get(this.selector.msg).type(mg)
    }
    contactUsPage3 (user){
        cy.get(this.selector.fn).type(user.name)
        cy.get(this.selector.ln).type(user.lastname)
        cy.get(this.selector.email).type(user.email)
        cy.get(this.selector.msg).type(user.message)
    }

    contactUsPage4 (element){
        cy.get(this.selector.fn).type(element.fn)
        cy.get(this.selector.ln).type(element.ln)
        cy.get(this.selector.email).type(element.email)
        cy.get(this.selector.msg).type(element.msg)
    }
    

    btnClick() {
        cy.get(this.selector.submitBtn).click()
    }

    validation(){
        cy.get(this.selector.positiveValid).should("have.text", this.selector.validationMsg)
    }
}