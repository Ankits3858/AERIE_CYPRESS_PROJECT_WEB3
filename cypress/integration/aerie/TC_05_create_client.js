/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
import client_page from "../../pageobjects/client_page"
const client = new client_page
const login = new login_page
const home = new home_page
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
  }
describe("Testing client creation process in sandbox and production environement",()=>{
  

    it("Testcase 1===> check whether user is able to create client with gender as female in sandbox environment",()=>{

        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
        cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
        cy.wait(3000)
        cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
        cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
       
       home.get_operations().click({ force: true })
       home.get_clients().click({ force: true})
       client.get_create_client_button().click({ force: true })
       cy.wait(5000)
     
       cy.generateRandomName().then((randomName) => {
        client.get_firstname().type(randomName);
        client.get_lastname().type(randomName);
      }
      )
      client.get_next_button1().click()
      cy.generateRandomName().then((randomName) => {
        client.get_address().type(randomName);
        client.get_country().type(randomName);
        client.get_city().type(randomName);
       

      })
      client.get_gender().select(2)
        
        
  

       client.get_zipcode().type('1213123')
       client.get_dob().type('1999-05-07')

       client.get_next_button2().click()
       cy.wait(13000)
       
       //cy.log(?"":"")
       cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
       home.get_profile_dropdown().click({ force: true })
       cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
       cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
       cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
       
 })


    it("Testcase 2===> check whether user is able to create client in production environment",()=>{

        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
        cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
        cy.wait(3000)
        cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
        cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
       
       home.get_operations().click({ force: true })
       home.get_clients().click({ force: true})
       client.get_create_client_button().click({ force: true })
       cy.wait(5000)
     
       cy.generateRandomName().then((randomName) => {
        client.get_firstname().type(randomName);
        client.get_lastname().type(randomName);
      }
      )
      client.get_next_button1().click()
      cy.generateRandomName().then((randomName) => {
        client.get_address().type(randomName);
        client.get_country().type(randomName);
        client.get_city().type(randomName);
       

      })
      client.get_gender().select(2)
        
        
  

       client.get_zipcode().type('1213123')
       client.get_dob().type('1999-05-07')

       client.get_next_button2().click()
       cy.wait(13000)
       
       //cy.log(?"":"")
       cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
       home.get_profile_dropdown().click({ force: true })
       cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
       cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
       cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
       




        






    })



    it("Testcase 3===> check whether user is able to create client with gender as male with gender as mail in sandbox environment",()=>{

      cy.visit(Cypress.env("sandbox"))
      cy.viewport(1600,900)
    
      cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
      cy.wait(2000)
      cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
      cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
      cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
      cy.wait(3000)
      cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
      cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
     
     home.get_operations().click({ force: true })
     home.get_clients().click({ force: true})
     client.get_create_client_button().click({ force: true })
     cy.wait(5000)
    
     cy.generateRandomName().then((randomName) => {
      client.get_firstname().type(randomName);
      client.get_lastname().type(randomName);
    }
    )
    client.get_next_button1().click()
    cy.generateRandomName().then((randomName) => {
      client.get_address().type(randomName);
      client.get_country().type(randomName);
      client.get_city().type(randomName);
     
    
    })
    client.get_gender().select(1)
      
      
    
    
     client.get_zipcode().type('1213123')
     client.get_dob().type('1999-05-07')
    
     client.get_next_button2().click()
     cy.wait(13000)
     
     //cy.log(?"":"")
     cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
     home.get_profile_dropdown().click({ force: true })
     cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
     cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
     cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
     
    })
    
    
    it("Testcase 4===> check whether user is able to create client with gender as male with gender as mail in production environment",()=>{
    
      cy.visit(Cypress.env("production"))
      cy.viewport(1600,900)
    
      cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
      cy.wait(2000)
      cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
      cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
      cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
      cy.wait(3000)
      cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
      cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
     
     home.get_operations().click({ force: true })
     home.get_clients().click({ force: true})
     client.get_create_client_button().click({ force: true })
     cy.wait(5000)
    
     cy.generateRandomName().then((randomName) => {
      client.get_firstname().type(randomName);
      client.get_lastname().type(randomName);
    }
    )
    client.get_next_button1().click()
    cy.generateRandomName().then((randomName) => {
      client.get_address().type(randomName);
      client.get_country().type(randomName);
      client.get_city().type(randomName);
     
    
    })
    client.get_gender().select(1)
      
      
    
    
     client.get_zipcode().type('1213123')
     client.get_dob().type('1999-05-07')
    
     client.get_next_button2().click()
     cy.wait(13000)
     
     //cy.log(?"":"")
     cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
     home.get_profile_dropdown().click({ force: true })
     cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
     cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
     cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
     
    
    
    
    
      
    
    
    
    
    
    
    })


    it("Testcase 5===> check whether user is able to create client with gender as other with gender as mail in sandbox environment",()=>{

      cy.visit(Cypress.env("sandbox"))
      cy.viewport(1600,900)
    
      cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
      cy.wait(2000)
      cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
      cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
      cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
      cy.wait(3000)
      cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
      cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
     
     home.get_operations().click({ force: true })
     home.get_clients().click({ force: true})
     client.get_create_client_button().click({ force: true })
     cy.wait(5000)
    
     cy.generateRandomName().then((randomName) => {
      client.get_firstname().type(randomName);
      client.get_lastname().type(randomName);
    }
    )
    client.get_next_button1().click()
    cy.generateRandomName().then((randomName) => {
      client.get_address().type(randomName);
      client.get_country().type(randomName);
      client.get_city().type(randomName);
     
    
    })
    client.get_gender().select(3)
      
      
    
    
     client.get_zipcode().type('1213123')
     client.get_dob().type('1999-05-07')
    
     client.get_next_button2().click()
     cy.wait(13000)
     
     //cy.log(?"":"")
     cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
     home.get_profile_dropdown().click({ force: true })
     cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
     cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
     cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
     
    })
    
    
    it("Testcase 6===> check whether user is able to create client with gender as other with gender as mail in production environment",()=>{
    
      cy.visit(Cypress.env("production"))
      cy.viewport(1600,900)
    
      cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
      cy.wait(2000)
      cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
      cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
      cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
      cy.wait(3000)
      cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
      cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
     
     home.get_operations().click({ force: true })
     home.get_clients().click({ force: true})
     client.get_create_client_button().click({ force: true })
     cy.wait(5000)
    
     cy.generateRandomName().then((randomName) => {
      client.get_firstname().type(randomName);
      client.get_lastname().type(randomName);
    }
    )
    client.get_next_button1().click()
    cy.generateRandomName().then((randomName) => {
      client.get_address().type(randomName);
      client.get_country().type(randomName);
      client.get_city().type(randomName);
     
    
    })
    client.get_gender().select(3)
      
      
    
    
     client.get_zipcode().type('1213123')
     client.get_dob().type('1999-05-07')
    
     client.get_next_button2().click()
     cy.wait(13000)
     
     //cy.log(?"":"")
     cy.log(client.get_client_success_message().should('have.text',' Client Created ')?"testcase passed,client created successfully":"testcase failed,client not created")
     home.get_profile_dropdown().click({ force: true })
     cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
     cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
     cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
     
    
    
    
    
      
    
    
    
    
    
    
    })

    
})