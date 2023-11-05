class SettingsPage {
    elements = {
        logoutButton: () => cy.get('.btn-outline-danger'),
    }

    clickLogoutButton(){
        this.elements.logoutButton().click();
    }
}
module.exports = new SettingsPage();

