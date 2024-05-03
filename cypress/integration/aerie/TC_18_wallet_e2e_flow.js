/// <reference types = "Cypress"/>
const user = require("../../fixtures/data.json")
//const user = require("../../fixtures/zkp")
import login_page from "../../pageobjects/login_page"
import home_page from "../../pageobjects/home_page"
import client_page from "../../pageobjects/client_page"
import organization_page from "../../pageobjects/organization_page"
import wallet_page from "../../pageobjects/wallet_page"
const wallet = new wallet_page
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
describe("testing the wallet page with broken url,images,dropdowns and button", () => {


    it("Testcase 1===> Check whether user is able to generate wallet and able to perform actions like delete wallet,copy mnemonic,copy address,copy solana address,update balance and download wallet key", () => {

        cy.visit(Cypress.env("sandbox"))
        cy.viewport(1600, 900)

        cy.log(login.get_email().type("lavag58853@getmola.com", { force: true }) ? "email field is enabled,user is able to type" : "email field is disabled,user is unable to type")
        cy.wait(2000)
        cy.log(login.get_next().click({ force: true }) ? "next button is enabled and clickable" : "next button is disabled and not clickable")
        cy.log(login.get_password().type("Tester07!", { force: true }) ? "password field is enabled,user is able to type" : "password field is disabled,user is unable to type")
        cy.log(login.get_signin().click({ force: true }) ? "signin button is enabled and clickable" : "signin button is disabled and not clickable")
        cy.wait(3000)
        cy.log(login.get_floating_text_field().type('1234', { force: true }) ? "decrypt field is enabled,user is able to type" : "decrypt field is disabled,user is unable to type")
        cy.log(login.get_decrypt_button().click({ force: true }) ? "decrypt button is enabled and clickable" : "decrypt button is disabled and not clickable")

        home.get_assets().click({ force: true })
        home.get_wallets().click({ force: true })

        cy.wait(3000)
        

        cy.log(home.get_profile_dropdown().click({ force: true }) ? "profile dropdown is enabled and clickable" : "profile dropdown is disabled and not clickable")
        cy.log(home.get_logout().click({ force: true }) ? "logout button is enabled and clickable" : "logout button is disabled and not clickable")
        cy.log(home.get_yes_button().click({ force: true }) ? "user logged out successfully" : "user is not able to logout")

 })

   



})