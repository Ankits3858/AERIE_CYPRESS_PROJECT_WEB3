/// <reference types = "Cypress"/>
//const user = require("../../fixtures/data.json")
const zkp1 = "cypress/fixtures/AERIE-ankit+4@nes.tech (2).key"
const zkp2 = "cypress/fixtures/AERIE-wegoj67833@ubinert.com (1).key"
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"

const login = new login_page
const home = new home_page
describe("testing the zkp login",()=>{
    
    it("Testcase1 ===> check whether user is able to login via zkp key inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
       
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.log(login.get_zkp_upload().selectFile(zkp1)?"user uploaded zkp key successfully":"user is not allowed to upload zkp key")
        cy.log(login.get_upload_zkp_button().click()?"zkp upload button is enabled and clickable":"zkp upload button is disabled and not clickable")
        cy.wait(5000)
        cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
        cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
        cy.log(home.get_yes_button().click({ force: true })?"user is able to login via credentials testcase pass":"user is not able to login via credentials testcase got failed")





    })
    it("Testcase1 ===> check whether user is able to login via zkp key inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
       
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.log(login.get_zkp_upload().selectFile(zkp2)?"user uploaded zkp key successfully":"user is not allowed to upload zkp key")
        cy.log(login.get_upload_zkp_button().click()?"zkp upload button is enabled and clickable":"zkp upload button is disabled and not clickable")
        cy.wait(5000)
        cy.log(home.get_profile_dropdown().click({ force: true })?"profile dropdown is enabled and clickable":"profile dropdown is disabled and not clickable")
        cy.log(home.get_logout().click({ force: true })?"logout button is enabled and clickable":"logout button is disabled and not clickable")
        cy.log(home.get_yes_button().click({ force: true })?"user is able to login via credentials testcase pass":"user is not able to login via credentials testcase got failed")





    })

})