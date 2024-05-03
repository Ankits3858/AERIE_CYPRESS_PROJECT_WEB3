/// <reference types = "Cypress"/>
//const user = require("../../fixtures/data.json")
const zkp1 = "cypress/fixtures/AERIE-ankit+4@nes.tech (2).key"
const zkp2 = "cypress/fixtures/AERIE-wegoj67833@ubinert.com (1).key"
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"

const login = new login_page
const home = new home_page
describe("testing the login page with broken url,images and button",()=>{
    
    it("Testcase1 ===> testing of broken links on login page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.findAndPrintBrokenLinks()
        




    })
    it("Testcase2 ===> testing of broken links on login page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
       
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.findAndPrintBrokenLinks()



    })


    it("Testcase3 ===> testing of broken images on login page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.findAndPrintBrokenImages()
        




    })
    it("Testcase4 ===> testing of broken images on login page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
       
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        cy.findAndPrintBrokenImages()



    })

    it("Testcase5 ===> testing of non executed button on login page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        //cy.verifyAllButtonsEnabledAndVisible();
        cy.checkAllButtonsEnabled();
        




    })
    it("Testcase6 ===> testing of non executed button on login page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
       
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        //cy.verifyAllButtonsEnabledAndVisible();
        cy.checkAllButtonsEnabled();



    })

    it("Testcase7 ===> testing of input fields that are not working on login page inside sandbox environment",()=>{
        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600,900)
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        //cy.verifyAllButtonsEnabledAndVisible();
        cy.checkAllInputFieldsEnabled();
        




    })
    it("Testcase8 ===> testing of input fields that are not working on login page inside production environment",()=>{
        cy.visit(Cypress.env("production"))
        cy.viewport(1600,900)
       
        cy.findAndPrintBrokenLinks()
        cy.log( login.get_zkp_login().click()?"zkp login button is enabled and clickable":"zkp login button is disabled and not clickable")
        //cy.verifyAllButtonsEnabledAndVisible();
        cy.checkAllInputFieldsEnabled();



    })

})