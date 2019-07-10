// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyBpwYHtJ9ftc4LfM6YSAm0iclg1KBB8D1M",
    authDomain: "amrcud.firebaseapp.com",
    databaseURL: "https://amrcud.firebaseio.com",
    projectId: "amrcud",
    storageBucket: "",
    messagingSenderId: "412525195217",
    appId: "1:412525195217:web:030c6aaf4dcb9703"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.