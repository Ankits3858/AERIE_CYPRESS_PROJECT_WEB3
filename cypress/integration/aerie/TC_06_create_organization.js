/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
import client_page from "../../pageobjects/client_page"
import organization_page from "../../pageobjects/organization_page"
const client = new client_page
const login = new login_page
const home = new home_page
const org = new organization_page
const image = "cypress/fixtures/Car-Images-Hd-For-Mobiles-Desktop-1920X1080-Car-Wallpaper-4k-HD-3D-7.jpg"
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
describe("Testing organization creation process in sandbox and production environement",()=>{
  

    it("Testcase 1===> check whether user is able to create organization in sandbox environment",()=>{

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
       cy.log(home.get_organization().click({ force: true})?"user clicked on organization link under operations successfully":"user unable to clicked on organization link under operations")
       cy.log(org.get_create_button().click({ force: true })?"user landed on organization details page successfully":"user unable to land on organization details page successfully")
       cy.log(org.get_email().type(generateRandomString(8)+"@gmail.com")?"user is able to enter inside email field":"user unable to enter inside email field")
       cy.log(org.get_phone_no().type('1234567245')?"user is able to enter inside phone number field":"user unable to enter inside phone number field")
       cy.log(org.get_type().select(1)?"type dropdown is working":"type dropdown is not working")
       
       
      
       
       
       
       
       
       //org.get_address().type(generateRandomString(17))
       cy.generateRandomName().then((randomName) => {
        org.get_organization_name().type(randomName);
        org.get_address().type(randomName);


        org.get_tags().type(randomName,"{enter}");
    }
        )
        
        org.get_next_button().click()
        cy.wait(3000)
        cy.log(org.get_acl_1().dblclick()?"user is able to enable and disable acl 1":"user is not able to enable and disable acl 1")
        cy.log(org.get_acl_2().dblclick()?"user is able to enable and disable acl 2":"user is not able to enable and disable acl 2")
        cy.log(org.get_acl_3().dblclick()?"user is able to enable and disable acl 3":"user is not able to enable and disable acl 3")
        cy.log(org.get_acl_4().dblclick()?"user is able to enable and disable acl 4":"user is not able to enable and disable acl 4")
        cy.log(org.get_acl_5().dblclick()?"user is able to enable and disable acl 5":"user is not able to enable and disable acl 5")
        cy.log(org.get_acl_6().dblclick()?"user is able to enable and disable acl 6":"user is not able to enable and disable acl 6")
        cy.log(org.get_create_org().click({ force: true })?"user is able to click on create organization button":"user unable to click on create organization")
        
        cy.wait(3000)
        cy.log(org.get_view_detail().click()?"organization created successfully,testcase got passed":"organization is not created,testcase got failed")
        
        cy.wait(3000)


       

      
       
       //cy.log(?"":"")
       
       home.get_profile_dropdown().click({ force: true })
       cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
       cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
       cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
       




        






    })

    it("Testcase 2===> check whether user is able to create organization in production environment",()=>{

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
       cy.log(home.get_organization().click({ force: true})?"user clicked on organization link under operations successfully":"user unable to clicked on organization link under operations")
       cy.log(org.get_create_button().click({ force: true })?"user landed on organization details page successfully":"user unable to land on organization details page successfully")
       cy.log(org.get_email().type(generateRandomString(8)+"@gmail.com")?"user is able to enter inside email field":"user unable to enter inside email field")
       cy.log(org.get_phone_no().type('1234567245')?"user is able to enter inside phone number field":"user unable to enter inside phone number field")
       cy.log(org.get_type().select(1)?"type dropdown is working":"type dropdown is not working")
       
       
      
       
       
       
       
       
       org.get_address().type(generateRandomString(17))
       cy.generateRandomName().then((randomName) => {
        org.get_organization_name().type(randomName);
        org.get_tags().type(randomName,"{enter}");
    }
        )
        
        org.get_next_button().click()
        cy.wait(3000)
        cy.log(org.get_acl_1().dblclick()?"user is able to enable and disable acl 1":"user is not able to enable and disable acl 1")
        cy.log(org.get_acl_2().dblclick()?"user is able to enable and disable acl 2":"user is not able to enable and disable acl 2")
        cy.log(org.get_acl_3().dblclick()?"user is able to enable and disable acl 3":"user is not able to enable and disable acl 3")
        cy.log(org.get_acl_4().dblclick()?"user is able to enable and disable acl 4":"user is not able to enable and disable acl 4")
        cy.log(org.get_acl_5().dblclick()?"user is able to enable and disable acl 5":"user is not able to enable and disable acl 5")
        cy.log(org.get_acl_6().dblclick()?"user is able to enable and disable acl 6":"user is not able to enable and disable acl 6")
        cy.log(org.get_create_org().click({ force: true })?"user is able to click on create organization button":"user unable to click on create organization")
        
        cy.wait(3000)
        cy.log(org.get_view_detail().click()?"organization created successfully,testcase got passed":"organization is not created,testcase got failed")
        
        cy.wait(3000)

       

      
       
       //cy.log(?"":"")
       
       home.get_profile_dropdown().click({ force: true })
       cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
       cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
       cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
       




        






    })



    
})