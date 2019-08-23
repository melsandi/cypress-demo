export class Checkout {
    goToOverview(){
        cy.visit('/checkout-step-two.html')
    }
    goToInformation(){
        cy.visit('/checkout-step-one.html')
    }
    getPaymentInformation(){
        return cy.get('.summary_info > :nth-child(2)')
    }
    getShippingInformation(){
        return cy.get('.summary_info > :nth-child(4)')
    }
    getNameInput(){
        return cy.get('[data-test=firstName]')
    }
    getLastnameInput(){
        return cy.get('[data-test=lastName]')
    }
    getZipInput(){
        return cy.get('[data-test=postalCode]')
    }
    getContinueButton(){
        return cy.get('.btn_primary')
    }

    getFormError(){
       return cy.get('[data-test=error]')
    }
}