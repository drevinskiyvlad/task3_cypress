
class MainPage {


    elements = {
        signUpButton: () => cy.get('[show-authed="false"] > :nth-child(3) > .nav-link'),
        signInButton: () => cy.get('[show-authed="false"] > :nth-child(2) > .nav-link'),
        accountName: () => cy.get(':nth-child(4) > .nav-link'),
        likeButton: () => cy.get(':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'),
    }

    clickSignUpButton(){
        this.elements.signUpButton().click();
    }

    getAccountName(){
        return this.elements.accountName();
    }

    open(){
        cy.visit('/#')
    }
}

module.exports = new MainPage();

