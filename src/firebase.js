// import { initializeApp } from 'firebase/app';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDqi49sb-BnB-hOT9CCGO0OZ7cboJmWfuw',
  authDomain: 'konovalov-app.firebaseapp.com',
  projectId: 'konovalov-app',
  storageBucket: 'konovalov-app.appspot.com',
  messagingSenderId: '734912819730',
  appId: '1:734912819730:web:768e50226ac0f32c24decb',
};

let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}
const db = app.firestore();
const auth = firebase.auth();
export { db, auth };

// const app = initializeApp(firebaseConfig);
// const firestore = app.firestore();
// const auth = firebase.auth();
// export { firestore, auth };
