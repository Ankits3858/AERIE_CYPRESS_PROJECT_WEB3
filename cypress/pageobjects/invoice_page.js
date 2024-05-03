class invoice_page
{
get_profile_dropdown()
{
    return cy.get("#page-header-user-dropdown")
}
get_logout()
{
    return cy.xpath("//span[contains(text(),'Logout')]")
}
get_yes_button()
{
    return cy.xpath("//button[contains(text(),'Yes')]")
}
get_next()
{
    return cy.xpath("//button[contains(text(),'Next')]")
}
get_valid_toast()
{
    return cy.get("div[aria-label='Success']")
}
get_invalid_toast2()
{
    return cy.get("div[aria-label='Please enter the password.']")
}
get_signin()
{
    return cy.xpath("//button[contains(text(),'Sign In')]")
}
get_zkp_login()
{
    return cy.get("//button[contains(text(),'ZKP Login ')]")
}
get_clients()
{
    return cy.xpath("//a[normalize-space()='Clients']") 
}
get_operations()
{
    return cy.xpath("//span[normalize-space()='Operations']") 
}

get_organization()
{
    return cy.xpath("//a[@class='nav-link'][normalize-space()='Organizations']") 
}
get_assets()
{
    return cy.get(":nth-child(8) > .is-parent") 
}

get_wallets()
{
    return cy.get(":nth-child(8) > .collapse > .nav > :nth-child(4) > .nav-link") 
}

get_profile_page()
{
    return cy.xpath("//span[normalize-space()='Profile']")
}
}
export default invoice_page