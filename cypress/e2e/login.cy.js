const {Faker} = require('/cypress/helper/faker.js');

import alerts from '/cypress/fixtures/alerts.json';
import data from '/cypress/fixtures/data.json';
import LoginPage from '/cypress/pageobject/login.page.js'
import RegistrationPage from '/cypress/pageobject/registration.page.js'
import MainPage from '/cypress/pageobject/main.page.js'

describe('Login', () => {
    it.skip('Registration with valid credentials', () => {
        MainPage.open();
        MainPage.clickSignUpButton();
        RegistrationPage.validate();

        const username = Faker.generateRandomString(8);
        const email = Faker.generateValidEmail();
        const password = Faker.generateRandomString(8);

        RegistrationPage.register(username, email, password);

        MainPage.getAccountName().should('contain.text', username);
    })

    it.skip('Registration with empty fields', () => {
        RegistrationPage.open();

        RegistrationPage.clickSubmitButton();
        RegistrationPage.getErrorMessage().should('contain.text', alerts.blank_email);
    })

    it.skip('Registration with invalid credentials', () => {
        RegistrationPage.open();

        const username = "Test";
        const email = Faker.generateValidEmail();
        const password = Faker.generateRandomString(8);

        RegistrationPage.register(username, email, password);
        RegistrationPage.getErrorMessage().should('contain.text', alerts.username_taken);
    })

    it('Login with valid credentials', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = data.password;
    })
})