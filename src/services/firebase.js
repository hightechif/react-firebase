import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDigYrUFvvTBxOMiDrQYF4VgFprt10E0b8",
  authDomain: "react-firebase-ch9-8c1a3.firebaseapp.com",
  projectId: "react-firebase-ch9-8c1a3",
  storageBucket: "react-firebase-ch9-8c1a3.appspot.com",
  messagingSenderId: "541842870061",
  appId: "1:541842870061:web:f28b8f40c7e26c68354da4"
};

const app = firebase.initializeApp(firebaseConfig)

export default app;