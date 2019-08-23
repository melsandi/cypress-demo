
Cypress.Commands.add("addToCart", ()=> {
     cy.get(':nth-child(1) > .pricebar > .btn_primary').click()
      
});

Cypress.Commands.add("logout", () => {
    cy.get('.bm-burger-button > button').click()
    cy.get('#logout_sidebar_link').click()
})

Cypress.Commands.add("resetStatus", () =>{
    cy.get('.bm-burger-button > button').click()
    cy.get('#reset_sidebar_link').click()
    cy.get('.bm-cross-button > button').click()
});

Cypress.Commands.add("checkoutProduct", ({name, lastname, zip}) => {
    cy.get('.btn_action').click()
    cy.get('[data-test=firstName]').type(name)
    cy.get('[data-test=lastName]').type(lastname)
    cy.get('[data-test=postalCode]').type(zip)
    cy.get('.btn_primary').click()
    cy.get('.btn_action').click()
});