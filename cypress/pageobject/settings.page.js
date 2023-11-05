class SettingsPage {


    elements = {
        logoutButton: () => cy.get('.btn-outline-danger'),
    }

    clickLogoutButton(){
        this.elements.logoutButton().click();
    }

    open(){
        cy.visit('/#/settings')
    }


}


module.exports = new SettingsPage();

