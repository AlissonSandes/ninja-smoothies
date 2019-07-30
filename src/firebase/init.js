import firebase from 'firebase'
import firestore from 'firebase/firestore'
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCoVTDiaXPzCZBqvmu-UIsbBL_SGShlubA",
    authDomain: "sanson-ninja-smoothies.firebaseapp.com",
    databaseURL: "https://sanson-ninja-smoothies.firebaseio.com",
    projectId: "sanson-ninja-smoothies",
    storageBucket: "sanson-ninja-smoothies.appspot.com",
    messagingSenderId: "458110403527",
    appId: "1:458110403527:web:dfa88d6f6ccd17cf"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({timestampsInSnapshots : true})

  export default firebaseApp.firestore()