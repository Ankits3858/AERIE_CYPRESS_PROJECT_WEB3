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
describe("testing the signup page with broken url,images and button",()=>{
    
    it("Testcase1 ==>testing of broken links on signup page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.findAndPrintBrokenLinks()
       
    })

    it("Testcase2 ==>testing of broken links on signup page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.findAndPrintBrokenLinks()
       
    })
    it("Testcase3 ==>testing of broken images on signup page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.findAndPrintBrokenImages()
       
    })

    it("Testcase4 ==>testing of broken images on signup page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.findAndPrintBrokenImages()
       
    })

    it("Testcase5 ==>testing of non executed buttons on signup page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.checkAllButtonsEnabled();
       
    })

    it("Testcase6 ==>testing of non executed buttons on signup page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.checkAllButtonsEnabled();
       
    })
    it("Testcase7 ==>testing of input fields that are not working on signup page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.checkAllInputFieldsEnabled();
       
    })

    it("Testcase8 ==>testing of input fields that are not working on signup page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
        cy.log(login.get_signup().click()?"user landed to signup page successfully":"user unable to land on signup page")
        cy.checkAllInputFieldsEnabled();
       
    })

})