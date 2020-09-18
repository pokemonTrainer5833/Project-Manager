import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDRgZvA6C7qf0KwOvrE7277BgrONmjpEcE",
  authDomain: "project-manager-dcc76.firebaseapp.com",
  databaseURL: "https://project-manager-dcc76.firebaseio.com",
  projectId: "project-manager-dcc76",
  storageBucket: "project-manager-dcc76.appspot.com",
  messagingSenderId: "277399902848",
  appId: "1:277399902848:web:78ddf65ccadffd42232465",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
