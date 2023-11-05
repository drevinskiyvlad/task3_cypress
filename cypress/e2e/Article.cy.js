import data from '/cypress/fixtures/data.json';
import alerts from '/cypress/fixtures/alerts.json';
import LoginPage from '/cypress/pageobject/login.page.js'
import MainPage from '/cypress/pageobject/main.page.js'
import EditorPage from '/cypress/pageobject/editor.page.js'

const {Faker} = require('/cypress/helper/faker.js');

describe('Article', () => {
    it('Write new article', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = data.password;

        LoginPage.login(email, password);
        MainPage.validate();
        MainPage.clickNewArticleButton();
        EditorPage.validate();

        const Title = Faker.generateRandomString(8);
        const Description = Faker.generateRandomString(8);
        const Body = Faker.generateRandomString(8);

        EditorPage.writeArticle(Title, Description, Body);
        EditorPage.getTitle().should('contain.text', Title);
        EditorPage.clickDeleteArticleButton();
        MainPage.validate();
    })

    it('Writing new article with empty fields', () => {
        LoginPage.open();

        const email = data.valid_email;
        const password = data.password;

        LoginPage.login(email, password);
        MainPage.validate();
        MainPage.clickNewArticleButton();
        EditorPage.validate();

        EditorPage.clickPublishButton();
        EditorPage.getErrorMessage().should('contain.text', alerts.blank_title);
    })
})