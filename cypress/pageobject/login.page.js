class LoginPage {
    elements = {
        loginForm: () => cy.get('[ng-disabled="$ctrl.isSubmitting"]'),
        emailInput: () => cy.get('[placeholder="Email"]'),
        passwordInput: () => cy.get('[placeholder="Password"]'),
        submitButton: () => cy.get('[type="submit"]'),
        errorMessage: () => cy.get('div.ng-scope > .ng-binding'),
    }

    getErrorMessage(){
        return this.elements.errorMessage();
    }

    validate(){
        this.elements.loginForm().should('be.visible');
    }

    login(email, password){
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.submitButton().click();
    }

    open(){
        cy.visit('/#/login')
    }
}
module.exports = new LoginPage();

