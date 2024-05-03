/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import forgot_password_page from "../../pageobjects/forgot_password_page"
import home_page from "../../pageobjects/home_page"
const login = new login_page
const home = new home_page
const fp = new forgot_password_page
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
  
    return result;
  }
describe("testing the forgot password page with broken url,images and button",()=>{
  

    it("Testcase 1===> testing of broken links on forgot password page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.findAndPrintBrokenLinks()
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.findAndPrintBrokenLinks()
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
        })
    it("Testcase 2===> testing of broken links on forgot password page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.findAndPrintBrokenLinks()
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.findAndPrintBrokenLinks()
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
       })

       it("Testcase 3===> testing of broken images on forgot password page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.findAndPrintBrokenImages()
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.findAndPrintBrokenImages()
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
        })
    it("Testcase 4===> testing of broken images on forgot password page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.findAndPrintBrokenImages()
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.findAndPrintBrokenImages()
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
       })

       it("Testcase 5===> testing of non executed buttons on forgot password page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.checkAllButtonsEnabled();
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.checkAllButtonsEnabled();
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
        })
    it("Testcase 6===> testing of non executed buttons on forgot password page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.checkAllButtonsEnabled();
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.checkAllButtonsEnabled();
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
       })

       it("Testcase 7===> testing of input fields that are not working on forgot password page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("lavag58853@getmola.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.checkAllInputFieldsEnabled();
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.checkAllInputFieldsEnabled();
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
        })
    it("Testcase 8===> testing of input fields that are not working on forgot password page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)

        cy.log(login.get_email().type("wegoj67833@ubinert.com",{ force: true })?"email field is enabled,user is able to type":"email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true })?"next button is enabled and clickable":"next button is disabled and not clickable")
        //cy.log(?"":"")
        cy.log(login.get_forgot_password_link().click({ force: true })?"user landed on forgot password page successfully":"user unable to land on forgot password page")
        cy.checkAllInputFieldsEnabled();
        cy.log(fp.get_email().type("ankit@nes.tech")?"user entered the mail successfully":"user is not able to enter the mail")
        cy.log(fp.get_send_reset_link().click()?"user clicked on send reset password link successfully":"user is not able to send reset password link")
        //cy.wait(3000)
        cy.checkAllInputFieldsEnabled();
        //cy.log(fp.get_success_toast().should('be.visible')?"success toast message displayed,testcase got passed":"testcase got failed")
       })


    
})