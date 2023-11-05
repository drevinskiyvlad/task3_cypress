const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4mswiq',
  reporter: 'cypress-mochawesome-reporter',
  video: false,
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Cypress Inline Reporter',
    embeddedScreenshots: true,
    inlineAssets: true, //Adds the asserts inline

  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },

    baseUrl: 'https://demo.realworld.io/',
    defaultCommandTimeout: 10000,
  },
});
