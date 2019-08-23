import {ProductsPage} from '../../pages/productsPage.js'
import {Cart} from '../../pages/cart.js'

const product = new ProductsPage();
const cart = new Cart();

describe("Products", () =>{
    beforeEach(()=>{
        product.goTo();   
    });   
    it("Loads Products Page Succesfully ", () =>{     
        product.getHeader().should('exist');
    });
     it("Adds a product to the Cart", () => {
        cy.addToCart();
        cart.getCartCounter().should('exist');
    }); 
  afterEach(()=>{
        cy.logout(); // requires logout for a clean status on buttons :(
    }); 
});