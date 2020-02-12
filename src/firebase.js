import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/firebase-auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfM0byadtN0hT5NHZic-iIXuNByceebBM",
  authDomain: "housing-meter.firebaseapp.com",
  databaseURL: "https://housing-meter.firebaseio.com",
  projectId: "housing-meter",
  storageBucket: "housing-meter.appspot.com",
  messagingSenderId: "1004021485217",
  appId: "1:1004021485217:web:d6d4d3057749769353eae0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;

export const firestore = firebase.firestore();
export const fireauth= firebase.auth();
