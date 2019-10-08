import * as admin from 'firebase-admin';
//var GOOGLE_APPLICATION_CREDENTIALS = require("./hope-fcbaf-firebase-adminsdk-ow2fg-1b7b7e216c.json");
var refreshToken;
var GOOGLE_APPLICATION_CREDENTIALS = require("./hope-fcbaf-f72b1775a8d0.json");

const admini = {
    credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS ),
    //credential: admin.credential.refreshToken(refreshToken),
    databaseURL: "https://hope-fcbaf.firebaseio.com",
    //credential: admin.credential.applicationDefault(),
    apiKey: "AIzaSyCFt7N2CPFO55caK9cXnBSWeopTHm9JS0U",
    authDomain: "hope-fcbaf.firebaseapp.com",
    projectId: "hope-fcbaf",
    storageBucket: "hope-fcbaf.appspot.com",
    messagingSenderId: "620975752473",
    appId: "1:620975752473:web:f81dc2a09fd83a9d013188",
    serviceAccountId: "firebase-adminsdk-ow2fg@hope-fcbaf.iam.gserviceaccount.com"
  };

  const administra = admin.initializeApp(admini);

  export default administra;