import alerts from '/cypress/fixtures/alerts.json';
import data from '/cypress/fixtures/data.json';
import LoginPage from '/cypress/pageobject/login.page.js'
import SettingsPage from '/cypress/pageobject/settings.page.js'
import RegistrationPage from '/cypress/pageobject/registration.page.js'
import MainPage from '/cypress/pageobject/main.page.js'

const {Faker} = require('/cypress/helper/faker.js');

describe('Login', () => {
    it('Registration with valid credentials', () => {
        MainPage.open();
        MainPage.clickSignUpButton();
        RegistrationPage.validate();

        const username = Faker.generateRandomString(8);
        const email = Faker.generateValidEmail();
        const password = Faker.generateRandomString(8);

        RegistrationPage.register(username, email, password);

        MainPage.getAccountName().should('contain.text', username);
    })

    it('Registration with empty fields', () => {
        RegistrationPage.open();

        RegistrationPage.clickSubmitButton();
        RegistrationPage.getErrorMessage().should('contain.text', alerts.blank_email);
    })

    it('Registration with invalid credentials', () => {
        RegistrationPage.open();

        const username = data.username; //he is already registered
        const email = Faker.generateValidEmail();
        const password = Faker.generateRandomString(8);

        RegistrationPage.register(username, email, password);
        RegistrationPage.getErrorMessage().should('contain.text', alerts.username_taken);
    })

    it('Login with valid credentials', () => {
        MainPage.open();
        MainPage.clickSignInButton();
        LoginPage.validate();


        MainPage.getAccountName().should('contain.text', data.valid_username);
    })

    it('Login with invalid password', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = Faker.generateRandomString(4);

        LoginPage.login(email, password);
        LoginPage.getErrorMessage().should('contain.text', alerts.invalid_login);
    })

    it('Logout', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = data.password;

        LoginPage.login(email, password);
        MainPage.clickSettingsButton();
        SettingsPage.clickLogoutButton();
        MainPage.getSighInButton().should('be.visible');
    })
})