import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import * as admin from 'firebase-admin';
var GOOGLE_APPLICATION_CREDENTIALS = require("./hope-fcbaf-firebase-adminsdk-ow2fg-1b7b7e216c.json");

const Config = {
  //credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
  //credential: admin.credential.refreshToken(GOOGLE_APPLICATION_CREDENTIALS),
  //credential: admin.credential.applicationDefault(),
  serviceAccountId: "firebase-adminsdk-ow2fg@hope-fcbaf.iam.gserviceaccount.com",
  apiKey: "AIzaSyCFt7N2CPFO55caK9cXnBSWeopTHm9JS0U",
  authDomain: "hope-fcbaf.firebaseapp.com",
  databaseURL: "https://hope-fcbaf.firebaseio.com",
  projectId: "hope-fcbaf",
  storageBucket: "hope-fcbaf.appspot.com",
  messagingSenderId: "620975752473",
  appId: "1:620975752473:web:f81dc2a09fd83a9d013188"

  };

  const fire = firebase.initializeApp(Config)
  
  export default fire;