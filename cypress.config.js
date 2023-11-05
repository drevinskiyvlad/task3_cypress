const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4mswiq',
  e2e: {
    baseUrl: 'https://demo.realworld.io/',
    defaultCommandTimeout: 10000,
  },
});
