describe('List Users', () => {

  var token = ""

  before(()=>{

    const requestobj = {
      "username": "Isuru@3rivetech.com",
      "password": "Asd@1234",
      "grant_type": "password"
    }

    cy.request("POST", "https://bev2-qa-pricingtool.azurewebsites.net/pricing-api/v1/pricing/user/partner/login", requestobj)

      .then(response => {
        expect(response.status).to.eq(200)
        token = response.body.data.access_token


      })
    



  })


  it('List users with a valid token', () => {

   
    cy.request({
      url:"https://bev2-qa-pricingtool.azurewebsites.net/pricing-api/v1/pricing/user/all",
      method:"GET",
      headers: {
        "key": "Content-Type",
        "value": "application/json",
        "Authorization":"Bearer " + token
        
   }}).then(response => {
        expect(response.status).to.eq(200)
        cy.log(JSON.stringify(response.body))

      })



  })

  it('List users with a Invalid token', () => {
    cy.request({
      url: "https://bev2-qa-pricingtool.azurewebsites.net/pricing-api/v1/pricing/user/all",
      method: "GET",
      headers: {
        "key": "Content-Type",
        "value": "application/json",
        "Authorization": "Bearer " + ""

      },
      failOnStatusCode : false
    }).then(response => {
      expect(response.status).to.eq(401)
      cy.log(JSON.stringify(response.body))

    })



  
  })


})
