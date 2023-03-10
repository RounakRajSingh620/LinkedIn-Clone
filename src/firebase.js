import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBBgOEV8h-rFOeWE1Phjh3HV_jkHR6PyXo",
  authDomain: "linkedin-clone-a09ff.firebaseapp.com",
  projectId: "linkedin-clone-a09ff",
  storageBucket: "linkedin-clone-a09ff.appspot.com",
  messagingSenderId: "504671310231",
  appId: "1:504671310231:web:893fd7c6655805343db4d2",
  measurementId: "G-0WWKGX84JH"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };