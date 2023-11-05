const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4mswiq',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://demo.realworld.io/'
  },
});
