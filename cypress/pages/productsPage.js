import {Header} from './header.js';
import {LoginPage} from './loginPage.js';

export class ProductsPage {
    constructor(){
        this.login = new LoginPage()
        this.header = new Header()
    }
    goTo(){
        cy.visit("/inventory.html")       
    }
    getHeader(){
        return cy.get('.product_label').contains('Products');
    }
}