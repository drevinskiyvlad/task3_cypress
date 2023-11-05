class RegistrationPage {
    elements = {
        registrationForm: () => cy.get('[ng-disabled="$ctrl.isSubmitting"]'),
        usernameInput: () => cy.get('[placeholder="Username"]'),
        emailInput: () => cy.get('[placeholder="Email"]'),
        passwordInput: () => cy.get('[placeholder="Password"]'),
        submitButton: () => cy.get('[type="submit"]'),
        errorMessage: () => cy.get('div.ng-scope > .ng-binding'),
    }

    getErrorMessage() {
        return this.elements.errorMessage();
    }

    getRegistrationForm() {
        return this.elements.registrationForm();
    }

    clickSubmitButton() {
        this.elements.submitButton().click();
    }

    validate() {
        this.elements.registrationForm().should('be.visible');
    }

    register(username, email, password) {
        this.elements.usernameInput().type(username);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
        this.elements.submitButton().click();
    }

    open() {
        cy.visit('/#/register')
    }
}

module.exports = new RegistrationPage();

