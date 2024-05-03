class organization_page
{
get_create_button()
{
    return cy.get(".col-md-7 > .d-flex > .btn")
}
get_organization_name()
{
    return cy.get(":nth-child(2) > .floating-textfield > .form-control") 
}
get_upload()
{
    return cy.xpath("//a[@class='edit-btn d-inline-flex align-items-center justify-content-center avatar-xs m-0']")
}
get_type()
{
    return cy.get('.form-select')
}
get_email()
{
    return cy.xpath("//input[@type='email']")
}
get_phone_no()
{
    return cy.xpath("//input[@class='form-control rounded-end flag-input ng-untouched ng-pristine ng-valid']")
}
get_address()
{
    return cy.xpath('//input[@formcontrolname="address"]')
}
get_tags()
{
    return cy.get(":nth-child(6) > .floating-textfield > .form-control")
}
get_next_button()
{
    return cy.xpath("//button[@type='submit']")
}
get_acl_1()
{
    return cy.xpath("(//input[@id='aiReview'])[1]") 
}
get_acl_2()
{
    return cy.xpath("(//input[@id='aiReview'])[2]") 
}
get_acl_3()
{
    return cy.xpath("(//input[@id='aiReview'])[3]") 
}

get_acl_4()
{
    return cy.xpath("(//input[@id='aiReview'])[4]") 
}
get_acl_5()
{
    return cy.xpath("(//input[@id='aiReview'])[5]") 
}
get_acl_6()
{
    return cy.xpath("(//input[@id='aiReview'])[6]") 
}
get_create_org()
{
    return cy.xpath("//button[normalize-space()='Create']") 
}

get_view_detail()
{
    return cy.get(".success-wrapper > .d-flex > .btn-outline-grey") 
}

get_view_org_profile()
{
    return cy.xpath("//button[normalize-space()='View Organization Profile']") 
}

get_profile_add_client()
{
    return cy.xpath("//button[normalize-space()='+ Add Client']") 
}
get_profile_create_client()
{
    return cy.xpath("//button[normalize-space()='Create Client']") 
}
get_org_name()
{
    return cy.xpath("//input[@id='placeholderInput']") 
}
get_org_type()
{
    return cy.xpath("//select[@class='form-select ng-untouched ng-pristine ng-valid']") 
}
get_org_email()
{
    return cy.xpath("//input[@type='email']") 
}
get_org_phn_no()
{
    return cy.xpath("//div[4]//div[1]//input[1]") 
}
get_org_address()
{
    return cy.xpath("//div[4]//div[1]//input[1]") 
}
get_org_tags()
{
    return cy.xpath("//input[@class='form-control']") 
}
get_update_org()
{
    return cy.xpath("//button[@type='submit']") 
}
get_updated_organization_name()
{
    return cy.xpath("//h5[contains(text(),'updated organization')]") 
}
get_client_window_confirmation()
{
    return cy.xpath("//p[contains(text(),' please enter the info below ')]") 
}
get_close_client_window()
{
    return cy.xpath("//button[contains(text(),'Cancel')]") 
}
get_org_update_success_toast()
{
    return cy.get(".alert") 
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
export default organization_page