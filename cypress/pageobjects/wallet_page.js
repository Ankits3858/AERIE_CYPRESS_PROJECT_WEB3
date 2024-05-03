class wallet_page
{
get_copy_solana_address_button()
{
    return cy.xpath("//div[@class='text-end custom-align']//i[@class='mdi mdi-content-copy']") 
}
get_copy_address_button()
{
    return cy.xpath("//div[@class='d-flex align-items-center justify-content-between custom-flex']//div[1]//div[1]//p[2]//i[1]") 
}
get_download_wallet_key_button()
{
    return cy.xpath("//i[@class='bx bx-cloud-download']") 
}
get_copy_mnemonic_button()
{
    return cy.xpath("//button[normalize-space()='Copy Mnemonic']") 
}
get_view_mnemonic()
{
    return cy.xpath("//a[@class='btn btn-outline-grey text-body']") 
}
get_save_import_wallet_button()
{
    return cy.xpath("//button[normalize-space()='Save']") 
}
get_mnemonic_field()
{
    return cy.xpath("//div[@class='form-group']//input[@id='placeholderInput']") 
}
get_delete_wallet()
{
    return cy.xpath("//i[@class='ri-delete-bin-line']") 
}
get_primary_2_wallet()
{
    return cy.xpath("//p[contains(text(),'Primary 2')]") 
}
get_generate_button()
{
    return cy.xpath("//button[normalize-space()='Generate']") 
}
get_generate_wallet_name()
{
    return cy.xpath("//input[@id='placeholderInput']") 
}
get_import_button()
{
    return cy.xpath("//a[@class='btn btn-outline-grey d-inline-flex align-items-center justify-content-center d-flex ms-3']") 
}
get_create_button()
{
    return cy.xpath("//a[@class='btn btn-outline-grey d-inline-flex align-items-center justify-content-center']") 
}
get_plus_button()
{
    return cy.xpath("//i[@class='bx bx-plus display-5 mb-3']") 
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
export default wallet_page