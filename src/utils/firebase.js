// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDqi49sb-BnB-hOT9CCGO0OZ7cboJmWfuw',
  authDomain: 'konovalov-app.firebaseapp.com',
  projectId: 'konovalov-app',
  storageBucket: 'konovalov-app.appspot.com',
  messagingSenderId: '734912819730',
  appId: '1:734912819730:web:768e50226ac0f32c24decb',
};

// Initialize Firebase
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}

const db = app.firestore();
const auth = firebase.auth();

export { db, auth };
