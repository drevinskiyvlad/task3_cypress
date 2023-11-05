class AccountPage {
    elements = {
        favouriteArticlesButton: () => cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link'),
        favouriteArticle: () => cy.get('article-preview.ng-scope > .article-preview'),
        likeButton: () => cy.get('.pull-xs-right > .btn'),
        userImg: () => cy.get('.user-img'),
    }

    getFavouriteArticle() {
        return this.elements.favouriteArticle();
    }

    clickFavouriteArticlesButton() {
        this.elements.favouriteArticlesButton().click();
    }

    clickLikeButton() {
        this.elements.likeButton().click();
    }

    validate() {
        this.elements.userImg().should('be.visible');
    }
}
module.exports = new AccountPage();

