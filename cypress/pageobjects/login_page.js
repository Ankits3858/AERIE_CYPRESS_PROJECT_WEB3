class login_page
{
get_email()
{
    return cy.xpath("//input[@id='email']")
}
get_password()
{
    return cy.xpath("//input[@id='password-input']")
}
get_signup()
{
    return cy.xpath("//a[contains(text(),'Signup')]")
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
    return cy.xpath("//button[contains(text(),'ZKP Login ')]")
}
get_floating_text_field()
{
    return cy.get(".floating-textfield > .form-control") 
}
get_decrypt_button()
{
    return cy.get(".modal-footer > .btn") 
}
get_zkp_upload()
{
    return cy.xpath('//input[@class="file-input"]')
}

get_upload_zkp_button()
{
    return cy.xpath("//button[normalize-space()='Upload']")
}
get_forgot_password_link()
{
    return cy.xpath("//a[contains(text(),'Forgot Password?')]")
}

}
export default login_page