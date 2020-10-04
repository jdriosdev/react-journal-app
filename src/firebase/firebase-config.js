import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDozWRkvG4kmc-RkAviIb468AVFvEtjz_Q",
  authDomain: "journal-app-react-97b8d.firebaseapp.com",
  databaseURL: "https://journal-app-react-97b8d.firebaseio.com",
  projectId: "journal-app-react-97b8d",
  storageBucket: "journal-app-react-97b8d.appspot.com",
  messagingSenderId: "628113352005",
  appId: "1:628113352005:web:79ea62560432947a864a2c"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
  db,
  googleAuthProvider,
  firebase
}