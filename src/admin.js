import * as admin from 'firebase-admin';
import GOOGLE_APPLICATION_CREDENTIALS from './hope-fcbaf-firebase-adminsdk-ow2fg-f1f1a26719.json';

const admini = {
    credential: admin.credential.cert(GOOGLE_APPLICATION_CREDENTIALS),
    apiKey: "AIzaSyCFt7N2CPFO55caK9cXnBSWeopTHm9JS0U",
    authDomain: "hope-fcbaf.firebaseapp.com",
    databaseURL: "https://hope-fcbaf.firebaseio.com",
    projectId: "hope-fcbaf",
    storageBucket: "",
    messagingSenderId: "620975752473",
    appId: "1:620975752473:web:f81dc2a09fd83a9d013188",
    //credential: admin.credential.applicationDefault(),
    databaseURL: "https://hope-fcbaf.firebaseio.com",
    serviceAccountId: "firebase-adminsdk-ow2fg@hope-fcbaf.iam.gserviceaccount.com"

  };

  const administra = admin.initializeApp(admini);

  export default administra;