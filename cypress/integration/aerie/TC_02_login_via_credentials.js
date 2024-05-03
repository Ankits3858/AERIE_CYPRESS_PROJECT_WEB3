/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
const login = new login_page
const home = new home_page
describe("testing the login function with credentials",()=>{
  

    it("Testcase1===> check whether user is able to login with username and password inside sandbox environment",()=>{
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
        cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
        cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
        cy.log(home.get_yes_button().click({ force: true })?"user is able to login via credentials testcase pass":"user is not able to login via credentials testcase got failed")
})


it("Testcase2===> check whether user is able to login with username and password inside production environment",()=>{
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
    cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
    cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
    cy.log(home.get_yes_button().click({ force: true })?"user is able to login via credentials testcase pass":"user is not able to login via credentials testcase got failed")
})






    
})