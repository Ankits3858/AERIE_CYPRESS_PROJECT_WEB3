/// <reference types = "Cypress"/>
//const user = require("../../fixtures/data.json")

const zkp = "cypress/fixtures/AERIE-ankit+4@nes.tech (2).key"
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
import signup_page from "../../pageobjects/signup_page"
const signup = new signup_page

const login = new login_page
const home = new home_page
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
describe("Testing signup functionality",()=>{
    
    it("Testcase1 ==>check whether user is able to signup with success toast message inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
       
        cy.log(signup.get_firstname().type(generateRandomString(8))?"user entered firstname successfully":"user unable to enter inside firstname field")
        cy.log(signup.get_lastname().type(generateRandomString(9))?"user entered lastname successfully":"user unable to enter inside lastname field")
        cy.log(signup.get_email().type(generateRandomString(8)+"@gmail.com")?"user entered email successfully":"user unable to enter inside email field")
        cy.log(signup.get_password().type("Password07!")?"user entered password successfully":"user unable to enter inside password field")
        cy.log(signup.get_confirm_password().type("Password07!")?"user entered confirm password successfully":"user unable to enter inside confirm password field")
        cy.log(signup.get_signup_button().click()?"user clicked signup button successfully":"user unable to click on signup button")
        cy.wait(3000)
        
        cy.log(signup.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
    })

    it("Testcase1 ==>check whether user is able to signup with success toast message inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
       
        cy.log(signup.get_firstname().type(generateRandomString(8))?"user entered firstname successfully":"user unable to enter inside firstname field")
        cy.log(signup.get_lastname().type(generateRandomString(9))?"user entered lastname successfully":"user unable to enter inside lastname field")
        cy.log(signup.get_email().type(generateRandomString(8)+"@gmail.com")?"user entered email successfully":"user unable to enter inside email field")
        cy.log(signup.get_password().type("Password07!")?"user entered password successfully":"user unable to enter inside password field")
        cy.log(signup.get_confirm_password().type("Password07!")?"user entered confirm password successfully":"user unable to enter inside confirm password field")
        cy.log(signup.get_signup_button().click()?"user clicked signup button successfully":"user unable to click on signup button")
        cy.wait(3000)
        
        cy.log(signup.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
    })

})