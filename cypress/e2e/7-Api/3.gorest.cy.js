// ///<reference types="cypress"/>

// import postD from "../../fixtures/1.Api/gorPostData"
// import putD from "../../fixtures/1.Api/gorPutData"

// describe('TS001 :verify reqres Api for gorest', function () {
//     postD.forEach((el, index) => {
//         it('TC001 - verify reqres Api-post Get put delete method', function () {
//             const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e'
//             cy.request({
//                 url: 'https://gorest.co.in/public/v2/users',
//                 method: 'POST',
//                 body: el,
//                 // {
//                 //     "name": "pratiksha mohate",
//                 //     "gender": "female",
//                 //     "email": "pratiksha@gmail.com",
//                 //     "status": "active"
//                 // },
//                 headers: {
//                     Authorization: `Bearer ${token}`

//                 }
//             }).then((resPost) => {
//                 //cy.log(resPost.body.id)
//                 expect(resPost.body.name).to.eq(el.name)
//                 return resPost.body.id
//             }).then((userId) => {
//                 cy.request({
//                     url: `https://gorest.co.in/public/v2/users/${userId}`,
//                     method: 'PUT',
//                     body: putD[index]
//                 })
//             })
//         })
//     })
// })

///<reference types="cypress"/>

import postD from "../../fixtures/1.Api/gorPostData";
import putD from "../../fixtures/1.Api/gorPutData";

describe('TS001: Verify GoRest API', function () {
    const token = '2e5d6a76c6c9f78db8669486a0bc356d8c5acaa7a0adac87796e8eaef1619f8e';

    postD.forEach((el, index) => {
        it(`TC001-${index + 1}: Verify POST, GET, PUT, and DELETE`, function () {
            cy.request({
                url: 'https://gorest.co.in/public/v2/users',
                method: 'POST',
                body: el,
                headers: { Authorization: `Bearer ${token}` }
            }).then((resPost) => {
                expect(resPost.status).to.eq(201);
                expect(resPost.body.name).to.eq(el.name);
                
                const userId = resPost.body.id;
                
                // PUT request - update user details
                return cy.request({
                    url: `https://gorest.co.in/public/v2/users/${userId}`,
                    method: 'PUT',
                    body: putD[index],
                    headers: { Authorization: `Bearer ${token}` }
                }).then((resPut) => {
                    expect(resPut.status).to.eq(200);
                    expect(resPut.body.name).to.eq(putD[index].name);

                    // GET request - verify updated data
                    return cy.request({
                        url: `https://gorest.co.in/public/v2/users/${userId}`,
                        method: 'GET',
                        headers: { Authorization: `Bearer ${token}` }
                    });
                }).then((resGet) => {
                    expect(resGet.status).to.eq(200);
                    expect(resGet.body.name).to.eq(putD[index].name);

                    // DELETE request - cleanup
                    return cy.request({
                        url: `https://gorest.co.in/public/v2/users/${userId}`,
                        method: 'DELETE',
                        headers: { Authorization: `Bearer ${token}` }
                    });
                }).then((resDelete) => {
                    expect(resDelete.status).to.eq(204);
                });
            });
        });
    });
});

