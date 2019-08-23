export class Cart {
    goTo(){
        cy.visit('/cart.html')
    }
    getCartCounter(){
        return cy.get('.fa-layers-counter')
    }
    getQuantity(){
        return cy.get('.cart_quantity');
    }

    getCheckout(){
       return cy.get('.btn_primary')
    }

    getContinueShopping(){
        cy.get('.cart_cancel_link')
    }

}