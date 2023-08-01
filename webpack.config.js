const { withModuleFederationPlugin, shareAll } = require('@angular-architects/module-federation/webpack').ModuleFederationPlugin;

module.exports = withModuleFederationPlugin({

  name: 'microApp1',

  exposes: {
    // Adjusted line:
    './Module': './src/app/app.module.ts'
  },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});

