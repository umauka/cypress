const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '4zcbeg',
  chromeWebSecurity: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 50000,
  pageLoadTimeout: 60000,
  experimentalStudio: true,
  includeShadowDom: true,
  viewportWidth: 1600,
  viewportHeight: 990,
  
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-localstorage-commands/plugin")(on, config);
      return config;
      // implement node event listeners here
    },
  },
});
