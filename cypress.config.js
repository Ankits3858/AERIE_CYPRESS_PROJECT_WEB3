const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    "video": true,
    "screenshotsFolder": "images",
    reporterOptions: {
      charts: true,
      reportPageTitle: 'aerie_3.0',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/aerie/*.js"
  },
  env:
  {
    sandbox: "https://aerie.sandbox.volary.tech/login",
    production:"https://app.aerie.onl/login"
  },
});
