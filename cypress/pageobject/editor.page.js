class EditorPage {

    blancTitleError = 'title can\'t be blank';

    elements = {
        editorForm: () => cy.get('.editor-page'),
        titleInput: () => cy.get(':nth-child(1) > .form-control'),
        descriptionInput: () => cy.get(':nth-child(2) > .form-control'),
        bodyInput: () => cy.get(':nth-child(3) > .form-control'),
        publishButton: () => cy.get('.btn'),
        title: () => cy.get('h1.ng-binding'),
        deleteArticleButton: () => cy.get('.article-actions .btn-outline-danger'),
        errorMessage: () => cy.get('div.ng-scope > .ng-binding'),
    }

    getErrorMessage() {
        return this.elements.errorMessage();
    }

    getTitle() {
        return this.elements.title();
    }

    clickDeleteArticleButton() {
        this.elements.deleteArticleButton().click();
    }

    clickPublishButton() {
        this.elements.publishButton().click();
    }

    validate() {
        this.elements.editorForm().should('be.visible');
    }

    writeArticle(title, description, body) {
        this.elements.titleInput().type(title);
        this.elements.descriptionInput().type(description);
        this.elements.bodyInput().type(body);
        this.clickPublishButton();
    }
}

module.exports = new EditorPage();

