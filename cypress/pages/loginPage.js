export class LoginPage {
    goTo(){
        cy.visit('/index.html')
    }

    getLogo(){
        return cy.get('.login_logo');
    }

    getPasswordError(){
        this.fillUser('Random User');
        this.clickLogin();
        return cy.get('[data-test=error]');
    }
    getUsernameError(){
        this.clickLogin();
        return cy.get('[data-test=error]');
    }

    fillUser(userName){
        cy.get('[data-test=username]').type(userName);
        return this;
    }

    fillPassword(password){
        cy.get('[data-test=password]').type(password);
        return this;
    }

    clickLogin(){
        return cy.get('.btn_action').click();
    }

    login(user,password){
        this.fillUser(user);
        this.fillPassword(password);
        return this.clickLogin();
    }

}