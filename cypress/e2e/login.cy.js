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

        const validUsername = Faker.generateRandomString(8);
        const validEmail = Faker.generateValidEmail();
        const validPassword = Faker.generateRandomString(8);

        RegistrationPage.register(validUsername, validEmail, validPassword);

        MainPage.getAccountName().should('contain.text', validUsername);
    })

    it('Registration with empty fields', () => {
        RegistrationPage.open();

        RegistrationPage.clickSubmitButton();
        RegistrationPage.getErrorMessage().should('contain.text', RegistrationPage.getBlankEmailError());
    })

    it('Registration with taken login', () => {
        RegistrationPage.open();

        const takenUsername = data.username; //he is already registered
        const validEmail = Faker.generateValidEmail();
        const validPassword = Faker.generateRandomString(8);

        RegistrationPage.register(takenUsername, validEmail, validPassword);
        RegistrationPage.getErrorMessage().should('contain.text', RegistrationPage.getUsernameTakenError());
    })

    it('Login with valid credentials', () => {
        MainPage.open();
        MainPage.clickSignInButton();
        LoginPage.validate();

        const validEmail = data.valid_email;
        const validPassword = data.password;

        LoginPage.login(validEmail, validPassword);
        MainPage.getAccountName().should('contain.text', data.username);
    })

    it('Login with invalid password', () => {
        LoginPage.open();

        const validEmail = data.valid_email;
        const invalidPassword = Faker.generateRandomString(4);

        LoginPage.login(validEmail, invalidPassword);
        LoginPage.getErrorMessage().should('contain.text', LoginPage.getInvalidLoginError());
    })

    it('Logout', () => {
        LoginPage.open();

        const validEmail = data.valid_email;
        const validPassword = data.password;

        LoginPage.login(validEmail, validPassword);
        MainPage.clickSettingsButton();
        SettingsPage.clickLogoutButton();
        MainPage.getSighInButton().should('be.visible');
    })
})