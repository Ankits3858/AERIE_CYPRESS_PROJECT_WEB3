class profile_page
{
get_change_pw()
{
    return cy.get("#ngb-nav-15")
}
get_passkey()
{
    return cy.get("#ngb-nav-12")
}
get_organizations()
{
    return cy.get("#ngb-nav-5")
}
get_clients()
{
    return cy.get("#ngb-nav-6")
}
get_wallets()
{
    return cy.get("#ngb-nav-10")
}
get_assets()
{
    return cy.get("#ngb-nav-7")
}
get_issuer()
{
    return cy.get("#ngb-nav-8")
}
get_credentials()
{
    return cy.get("#ngb-nav-9")
}


}
export default profile_page