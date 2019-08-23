import {ProductsPage} from '../../pages/productsPage.js'
import {Cart} from '../../pages/cart.js'
import {Checkout} from '../../pages/checkout.js'

const product = new ProductsPage();
const cart = new Cart();
const checkout = new Checkout();

context("Checkout workfloes and validations",() => {
    describe('Checkout Workflow:', ()=> {
        before(() => {
            /* //Add items to the cart to be able to perform a checkout
            product.goTo();
            cy.addToCart(); */
            cart.goTo();
        })
        it('User checks out product succesfully', () => {
            cy.checkoutProduct({name:'tester', lastname: "Dumbledor", zip: "1212"})
            cy.get('.pony_express').should('exist');     
        })
        afterEach(()=>{
            cy.logout(); // requires logout for a clean status on buttons :(
        })
    })

    describe('Checkout Customer Information Form:', () => {
        it('Validates name is not empty', () => {
            checkout.goToInformation()
            checkout.getNameInput().clear()
            checkout.getContinueButton().click();
            checkout.getFormError().should('contain', 'Error: First Name is required')
        })

        it('Validates lastname is not empty', () => {
            checkout.goToInformation()
            checkout.getNameInput().type('test')
            checkout.getLastnameInput().clear()
            checkout.getContinueButton().click();
            checkout.getFormError().should('contain', 'Error: Last Name is required')
        })

        it('Validates zip is not empty', () => {
            checkout.goToInformation()
            checkout.getNameInput().type('test')
            checkout.getLastnameInput().type('test')
            checkout.getZipInput().clear()
            checkout.getContinueButton().click();
            checkout.getFormError().should('contain', 'Error: Postal Code is required')
        })
    })
    describe('Checkout Overview:', () => {
        it('Validades Checkout Information', () => {
            checkout.goToOverview()
            checkout.getPaymentInformation().should('contain', 'SauceCard #31337' )
            checkout.getShippingInformation().should('contain', 'FREE PONY EXPRESS DELIVERY!')
        })

    })

})

