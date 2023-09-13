// Import the functions you need from the SDKs you need
//real
// import {initializeApp} from "firebase/app";
// import {getAuth} from "firebase/auth";
// import {getFirestore} from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";

//try
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDtGODVofE8yS1NAQnHVrmO9VKmWBImb-s",
  authDomain: "skilled-45f58.firebaseapp.com",
  projectId: "skilled-45f58",
  storageBucket: "skilled-45f58.appspot.com",
  messagingSenderId: "278035947866",
  appId: "1:278035947866:web:e7c961690b2aa6204dd363",
  measurementId: "G-F901LF53EK"
};

// Initialize Firebase
//const analytics = getAnalytics(app);

//real
// export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
// export const FIRESTORE_DB = getFirestore(FIREBASE_APP);

//try
if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };