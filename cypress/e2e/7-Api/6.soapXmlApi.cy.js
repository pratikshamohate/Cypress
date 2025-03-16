// install following plugin
// npm install xml2js

/// <reference types = "cypress" />

const xmltojs = require("xml2js")
const parser = new xmltojs.Parser({ explicitArray: false })
describe("verify SOAP api in cypress", () => {
    it("verify FahrenheitToCelsius conversionn", () => {
        const newData = '<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>75</Fahrenheit></FahrenheitToCelsius></soap12:Body></soap12:Envelope>'
        cy.request({
            url: 'https://www.w3schools.com/xml/tempconvert.asmx',
            method: "POST",
            body: newData,
            headers: {
                "Content-Type": "text/xml",
                "accept": "*/*"
            },

        }).then((xmlResponse) => {
            cy.log(xmlResponse)
            parser.parseString(xmlResponse.allRequestResponses[0]['Response Body'], (err, resRes) => {
                if (err) {
                    cy.log(err)
                }
                else {
                    cy.log(resRes)
                    cy.log(resRes['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult'])
                    expect(resRes['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult']).to.eq('23.8888888888889')
                }
            })

        })
    })
})