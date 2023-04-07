describe('Signup Feature', () => {
  it('Signup with valid data ', () => {

    const requestobj = {
      "fname": "test",
      "lname": "Last",
      "username": "charaka12@3rivetech.com",
      "password": "asd@123"
    }

   
    cy.request("POST","https://bev2-qa-pricingtool.azurewebsites.net/pricing-api/v1/pricing/user/partner/register", requestobj)
    
    .then(response =>{
          expect(response.status).to.eq(200)
          expect(response.body.data.status).to.equal("PENDING")

    })



  })
})