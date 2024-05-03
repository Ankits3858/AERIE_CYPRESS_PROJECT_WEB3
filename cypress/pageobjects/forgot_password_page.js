class forgot_password_page
{
get_email()
{
    return cy.xpath("//input[@id='email']")
}
get_send_reset_link()
{
    return cy.xpath("//button[contains(text(),'Send Reset Link')]")
}
get_lastname()
{
    return cy.xpath("//input[@id='lastName']")
}
get_success_toast()
{
    return cy.get(".alert")
}

}



export default forgot_password_page