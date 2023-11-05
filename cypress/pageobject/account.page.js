class AccountPage {


    elements = {
        favouriteArticlesButton: () => cy.get('.articles-toggle > .nav > :nth-child(2) > .nav-link'),
        favouriteArticle: () => cy.get('article-preview.ng-scope > .article-preview'),
        likeButton: () => cy.get('.pull-xs-right > .btn')
    }

    clickFavouriteArticlesButton() {
        this.elements.favouriteArticlesButton().click();
    }

    clickLikeButton() {
        this.elements.likeButton().click();
    }

    getFavouriteArticle() {
        return this.elements.favouriteArticle();
    }

    open() {
        cy.visit('/#')
    }


}


module.exports = new AccountPage();

