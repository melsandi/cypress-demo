import {LoginPage} from '../../pages/loginPage.js'
import {ProductsPage} from '../../pages/productsPage.js'

const login = new LoginPage();
const product = new ProductsPage();

//Example using page object
describe("Login", () =>{
    beforeEach(()=>{
        login.goTo();
    });   
    it("Loads Login Page Succesfully ", () =>{     
        cy.title().should('include', 'Swag Labs');
        assert.isObject(login.getLogo()); //Assert logo is present
    });
    it("Login error: Password is required", () =>{
        login.getPasswordError()
        .should('exist')
        .contains('Epic sadface: Password is required');      
    });
    it("Login error: Username is required", () =>{
        login.getUsernameError()
        .should('exist')
        .contains('Epic sadface: Username is required');      
    });
    it("Log in success", () =>{
        login.login("standard_user", "secret_sauce");
        product.getHeader().should('exist');    
    });
});