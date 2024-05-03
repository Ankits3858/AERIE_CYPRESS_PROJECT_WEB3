class members_page
{
get_invite_button1()
{
    return cy.xpath("//button[normalize-space()='+ Invite']")
}
get_email()
{
    return cy.xpath("//input[@id='invitedMemberEmail']") 
}
get_name()
{
    return cy.xpath("//input[@id='name']")
}
get_next_button()
{
    return cy.xpath("(//button)[14]")
}
get_invite_button2()
{
    return cy.xpath("//button[normalize-space()='Invite']")
}
get_success_message()
{
    return cy.xpath("//p[contains(text(),'They will receive an email to confirm and accept.')]")
}

get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
get_()
{
    return cy.xpath("") 
}
}
export default members_page