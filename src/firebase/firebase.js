import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDXoXcnCI7Rj9wP42L01SfNLsPakJxW_34",
  authDomain: "budget-app-a40cf.firebaseapp.com",
  databaseURL: "https://budget-app-a40cf.firebaseio.com",
  projectId: "budget-app-a40cf",
  storageBucket: "budget-app-a40cf.appspot.com",
  messagingSenderId: "410362401953",
  appId: "1:410362401953:web:ea6184977edd4aaf"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();


