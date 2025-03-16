// install following plugin
// npm install xml2js

/// <reference types = "cypress" />

const xml2js =require("xml2js");
const parser = new xml2js.Parser({explicitArray: false});

describe("verify soap api in cypress",()=>{
    it("f to c api",()=>{
        //const xmlData = '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"> <soap12:Body> <FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"> <Fahrenheit>75</Fahrenheit> </FahrenheitToCelsius> </soap12:Body>'
//const xmlData = '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/"><soap:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>75</Fahrenheit></FahrenheitToCelsius></soap:Body></soap:Envelope>'
const xmlPayload ='<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>75</Fahrenheit></FahrenheitToCelsius></soap12:Body></soap12:Envelope>'        
cy.request({
            url : "https://www.w3schools.com/xml/tempconvert.asmx",
            method : "POST",
            body : xmlPayload,
            headers : {
                "Content-Type" : "text/xml",
                "accept" : "*/*",
            },
           // failOnStatusCode: false
        }).then((xmlRes)=>{
            cy.log(xmlRes)
            cy.log(xmlRes.allRequestResponses[0]['Response Status'])
            cy.log(xmlRes.allRequestResponses[0]['Response Body'])

            expect(xmlRes.allRequestResponses[0]['Response Status']).to.eq(200)
            expect(xmlRes['statusText']).to.eq("OK")
            parser.parseString(xmlRes.allRequestResponses[0]['Response Body'],(err,res)=>{
                if(err) {
                    cy.log(err)
                }
                else {
                    //cy.log(res)
                    cy.log(res['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult'])
                }
            })
        })
    })
})

// /// <reference types="cypress" />

// const xml2js = require("xml2js");
// const parser = new xml2js.Parser({ explicitArray: false });

// describe("verify soap api in cypress", () => {
//     it("f to c api", () => {
//         const xmlPayload = '<soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><FahrenheitToCelsius xmlns="https://www.w3schools.com/xml/"><Fahrenheit>75</Fahrenheit></FahrenheitToCelsius></soap12:Body></soap12:Envelope>';

//         cy.request({
//             url: "https://www.w3schools.com/xml/tempconvert.asmx",
//             method: "POST",
//             body: xmlPayload,
//             headers: {
//                 "Content-Type": "text/xml",
//                 "accept": "*/*",
//             },
//         }).then((xmlRes) => {
//             // Log the response status and body
//             cy.log(xmlRes.status);
//             cy.log(xmlRes.body);

//             // Assert the response status
//             expect(xmlRes.status).to.eq(200);
//             expect(xmlRes.statusText).to.eq("OK");

//             // Parse the XML response
//             parser.parseString(xmlRes.body, (err, res) => {
//                 if (err) {
//                     cy.log("Error parsing XML response:", err);
//                 } else {
//                     // Log the parsed result
//                     cy.log(res['soap:Envelope']['soap:Body']['FahrenheitToCelsiusResponse']['FahrenheitToCelsiusResult']);
//                 }
//             });
//         });
//     });
// });