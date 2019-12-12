import * as firebase from 'firebase';

var firebaseConfig = {
  apiKey: "AIzaSyASpr_TZx7HDqSWDMkVUhLAipjg904vC7U",
  authDomain: "students-1a814.firebaseapp.com",
  databaseURL: "https://students-1a814.firebaseio.com",
  projectId: "students-1a814",
  storageBucket: "students-1a814.appspot.com",
  messagingSenderId: "784356054946",
  appId: "1:784356054946:web:d653af573b5a9090e704fb",
  measurementId: "G-H748SPLBT2"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
