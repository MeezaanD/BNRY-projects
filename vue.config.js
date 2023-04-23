const { defineConfig } = require('@vue/cli-service');

module.exports = {
  ...defineConfig({
    transpileDependencies: true,
    configureWebpack: {
      resolve: {
        fallback: { querystring: false }
      }
    }
  }),
  // add any other configurations here
};