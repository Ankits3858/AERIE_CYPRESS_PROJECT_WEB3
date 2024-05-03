class client_page
{
get_gender()
{
    return cy.get(".form-select")
}
get_dob()
{
    return cy.get(":nth-child(1) > .floating-textfield > #placeholderInput")
}
get_next_button1()
{
    return cy.xpath("//button[@type='submit']")
}
get_country()
{
    return cy.xpath("//div[5]//div[1]//input[1]")
}
get_city()
{
    return cy.xpath("//div[4]//div[1]//input[1]")
}
get_address()
{
    return cy.xpath("/html[1]/body[1]/div[1]/div[2]/div[1]/mat-dialog-container[1]/div[1]/div[1]/app-create[1]/div[1]/div[1]/form[1]/div[1]/div[1]/div[3]/div[1]/input[1]")
}
get_lastname()
{
    return cy.get(':nth-child(3) > .floating-textfield > #placeholderInput')
}
get_firstname()
{
    return cy.get(':nth-child(2) > .floating-textfield > #placeholderInput')
}
get_clients()
{
    return cy.xpath("//a[normalize-space()='Clients']") 
}
get_operations()
{
    return cy.xpath("//span[normalize-space()='Operations']") 
}

get_next_button2()
{
    return cy.get(".modal-footer > .btn-filled-outline")
}

get_create_client_button()
{
    return cy.get(".col-md-7 > .btn")
}

get_zipcode()
{
    return cy.get(":nth-child(6) > .floating-textfield > #placeholderInput")
}

get_client_success_message()
{
    return cy.xpath("//h2[contains(text(),'Client Created')]")
}

}
export default client_page