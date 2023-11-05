import data from '/cypress/fixtures/data.json';
import LoginPage from '/cypress/pageobject/login.page.js'
import RegistrationPage from '/cypress/pageobject/registration.page.js'
import MainPage from '/cypress/pageobject/main.page.js'
import AccountPage from '/cypress/pageobject/account.page.js'

describe('Feed', () => {
    it('Check like function', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = data.password;

        LoginPage.login(email, password);
        MainPage.validate();
        MainPage.clickGlobalFeedButton();
        MainPage.clickLikeButton();
        MainPage.getLikeButton().should('have.css', 'background-color', 'rgb(92, 184, 92)');
        MainPage.clickAccountName();
        AccountPage.clickFavouriteArticlesButton();
        AccountPage.getFavouriteArticle().should('be.visible');
        AccountPage.clickLikeButton();
    })

    it('Check like function with unauthorized user', () => {
        MainPage.open();
        MainPage.validate();
        MainPage.clickLikeButton();
        RegistrationPage.getRegistrationForm().should('be.visible');
    })
})