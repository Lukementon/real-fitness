import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBzQIsVaQoIAVBA09JC1UAJ6C4tIihsSK4",
  authDomain: "real-fitness-c7b34.firebaseapp.com",
  projectId: "real-fitness-c7b34",
  storageBucket: "real-fitness-c7b34.appspot.com",
  messagingSenderId: "1033226572779",
  appId: "1:1033226572779:web:b30fcb5f325330979c7fae",
  measurementId: "G-9PF8EW48D5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;
