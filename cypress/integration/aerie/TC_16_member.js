/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
import client_page from "../../pageobjects/client_page"
import members_page from "../../pageobjects/members_page"
const member = new members_page
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
describe("Testing member invitation in sandbox and production environement",()=>{
  

    it("Testcase 1===> check whether user is able to send inviation in sandbox environment",()=>{

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
       home.get_members().click({ force: true})
       member.get_invite_button1().click({ force: true })
       cy.wait(3000)
       member.get_email().type(generateRandomString(8)+"@gmail.com")
       member.get_name().type(generateRandomString(8)+"@gmail.com")
       member.get_next_button().click({ force: true })
       member.get_invite_button2().click({ force: true })
       cy.wait(5000)
      
       cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
       
  
       home.get_profile_dropdown().click({ force: true })
       cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
       cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
       cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
       
 })

 it("Testcase 2===> check whether user is able to send inviation in production environment",()=>{

    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)

    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   

   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
})
it("Testcase 3===> check broken url present on member page in sandbox environment",()=>{

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
   home.get_members().click({ force: true})
   cy.findAndPrintBrokenLinks()
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.findAndPrintBrokenLinks()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })

   cy.wait(5000)
   cy.findAndPrintBrokenLinks()
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   

   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
})
it("Testcase 4===> check broken url present on member page in production environment",()=>{

    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)

    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
   cy.findAndPrintBrokenLinks()
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.findAndPrintBrokenLinks()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   
   cy.wait(5000)
   cy.findAndPrintBrokenLinks()
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   

   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
})  

it("Testcase 5===> check broken images present on member page in sandbox environment",()=>{

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
   home.get_members().click({ force: true})
   cy.findAndPrintBrokenImages()
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.findAndPrintBrokenImages()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
   cy.findAndPrintBrokenImages()
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })
  it("Testcase 6===> check broken images present on member page in production environment",()=>{
  
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
  
    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
   cy.findAndPrintBrokenImages()
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.findAndPrintBrokenImages()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
   cy.findAndPrintBrokenImages()
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })  

  it("Testcase 7===> testing of non executed buttons on member page in sandbox environment",()=>{

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
   home.get_members().click({ force: true})
  cy.checkAllButtonsEnabled();
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
  cy.checkAllButtonsEnabled();
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  cy.checkAllButtonsEnabled();
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })
  it("Testcase 8===> testing of non executed buttons on member page in production environment",()=>{
  
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
  
    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
  cy.checkAllButtonsEnabled();
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
  cy.checkAllButtonsEnabled();
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  cy.checkAllButtonsEnabled();
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })  

  it("Testcase 9===> testing of  toggle acl buttons on member page in sandbox environment",()=>{

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
   home.get_members().click({ force: true})
  //
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
  //
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   cy.verifyToggleButtons()
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  //
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })
  it("Testcase 10===> testing of  toggle acl buttons on member page in production environment",()=>{
  
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
  
    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
  //
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
  //
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   cy.verifyToggleButtons()
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  //
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })  
  
  it("Testcase 11===> testing of  all input fields on member page in sandbox environment",()=>{

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
   home.get_members().click({ force: true})
  //
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.checkAllInputFieldsEnabled()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   cy.verifyToggleButtons()
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  //
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })
  it("Testcase 12===> testing of  all input fields on member page in production environment",()=>{
  
    cy.visit(Cypress.env("production"))
    cy.viewport(1600, 900)
  
    cy.log(login.get_email().type("wegoj67833@ubinert.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
    cy.wait(2000)
    cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
    cy.log(login.get_password().type("Tester07!",{ force: true })?"password field is enabled,user is able to type":"password field is disabled,user is unable to type")
    cy.log(login.get_signin().click({ force: true })?"signin button is enabled and clickable":"signin button is disabled and not clickable")
    cy.wait(3000)
    cy.log(login.get_floating_text_field().type('1234',{ force: true })?"decrypt field is enabled,user is able to type":"decrypt field is disabled,user is unable to type")
    cy.log(login.get_decrypt_button().click({ force: true })?"decrypt button is enabled and clickable":"decrypt button is disabled and not clickable")
   
   home.get_operations().click({ force: true })
   home.get_members().click({ force: true})
  //
   member.get_invite_button1().click({ force: true })
   cy.wait(3000)
   cy.wait(3000)
   cy.checkAllInputFieldsEnabled()
   member.get_email().type(generateRandomString(8)+"@gmail.com")
   member.get_name().type(generateRandomString(8)+"@gmail.com")
   member.get_next_button().click({ force: true })
   cy.verifyToggleButtons()
   member.get_invite_button2().click({ force: true })
   cy.wait(5000)
  //
   cy.log(member.get_success_message().should('be.visible')?"user is able to sent inviation to client,testcase got passed":"user is not allowed to send inviation to client,testcase got failed")
   
  
   home.get_profile_dropdown().click({ force: true })
   cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
   cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
   cy.log(home.get_yes_button().click({ force: true })?"user logged out successfully":"user is not able to logout")
   
  })  
  

})