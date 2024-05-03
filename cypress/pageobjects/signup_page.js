class signup_page
{
get_email()
{
    return cy.xpath("//input[@id='useremail']")
}
get_firstname()
{
    return cy.xpath("//input[@id='firstName']")
}
get_lastname()
{
    return cy.xpath("//input[@id='lastName']")
}
get_password()
{
    return cy.xpath("//input[@id='password-input']")
}
get_confirm_password()
{
    return cy.xpath("//input[@id='confirm-password-input']")
}
get_signup_button()
{
    return cy.xpath("//button[contains(text(),'Signup')]")
}
get_success_toast()
{
    return cy.get(".alert")
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

}
export default signup_page