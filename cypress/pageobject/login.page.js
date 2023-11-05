class loginPage {


    elements = {
        usernameDropDown: () => cy.get('#userSelect'),
        selectUser: () => cy.get('option[value="1"]')
    }

    open(){
        cy.visit('/#')
    }


}


module.exports = new loginPage();

