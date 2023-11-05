
class MainPage {


    elements = {
        mainContent: () => cy.get('.home-page'),
        signInButton: () => cy.get('[show-authed="false"] > :nth-child(2) > .nav-link'),
        signUpButton: () => cy.get('[show-authed="false"] > :nth-child(3) > .nav-link'),
        newArticleButton: () => cy.get('[show-authed="true"] > :nth-child(2) > .nav-link'),
        settingsButton: () => cy.get('[show-authed="true"] > :nth-child(3) > .nav-link'),
        accountName: () => cy.get(':nth-child(4) > .nav-link'),
        globalFeedButton: () => cy.get('.feed-toggle > .nav > :nth-child(2) > .nav-link'),
        likeButton: () => cy.get(':nth-child(1) > .article-preview > article-meta.ng-isolate-scope > .article-meta > :nth-child(3) > .pull-xs-right > .btn'),
    }

    clickSignUpButton(){
        this.elements.signUpButton().click();
    }

    clickSignInButton(){
        this.elements.signInButton().click();
    }

    clickSettingsButton(){
        this.elements.settingsButton().click();
    }

    clickGlobalFeedButton(){
        this.elements.globalFeedButton().click();
    }

    clickLikeButton(){
        this.elements.likeButton().click();
    }

    clickAccountName(){
        this.elements.accountName().click();
    }

    clickNewArticleButton(){
        this.elements.newArticleButton().click();
    }

    getLikeButton(){
        return this.elements.likeButton();
    }

    getSighInButton(){
        return this.elements.signInButton();
    }

    getAccountName(){
        return this.elements.accountName();
    }

    validate(){
        this.elements.mainContent().should('be.visible');
    }

    open(){
        cy.visit('/#')
    }
}

module.exports = new MainPage();

