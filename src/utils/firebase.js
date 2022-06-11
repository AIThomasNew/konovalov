// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBza7sNKahjQfI5oL3RkrVR6HqJ-OKytgA',
  authDomain: 'konovalov-7df4d.firebaseapp.com',
  projectId: 'konovalov-7df4d',
  storageBucket: 'konovalov-7df4d.appspot.com',
  messagingSenderId: '705440810823',
  appId: '1:705440810823:web:94238a6a8862df65b8ee62',
}

// Initialize Firebase
let app

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig)
} else {
  app = firebase.app()
}

const db = app.firestore()
const auth = firebase.auth()

export { db, auth }
