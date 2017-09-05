// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDDf2GFvefMV4rxYKGcUVkOhYpSYiU3HEU',
    authDomain: 'weather-pwa-b3d77.firebaseapp.com',
    databaseURL: 'https://weather-pwa-b3d77.firebaseio.com',
    projectId: 'weather-pwa-b3d77',
    storageBucket: 'weather-pwa-b3d77.appspot.com',
    messagingSenderId: '591266948074'
  }
};
