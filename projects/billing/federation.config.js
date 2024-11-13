const { withNativeFederation, shareAll } = require('@angular-architects/native-federation/config');

module.exports = withNativeFederation({

  name: 'billing',

  exposes: {
    "./routes": "./projects/billing/src/app/app.routes.ts",
  },

  // exposes: {
  //   './Component': './projects/billing/src/app/app.component.ts',
  // },

  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  skip: [
    'rxjs/ajax',
    'rxjs/fetch',
    'rxjs/testing',
    'rxjs/webSocket',
  ]
});
