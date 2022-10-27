import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyCsfHqfOCLnPe6J5S7wav-fh59gXfTOETg",
  authDomain: "react-contact-3ee34.firebaseapp.com",
  projectId: "react-contact-3ee34",
  storageBucket: "react-contact-3ee34.appspot.com",
  messagingSenderId: "860099248239",
  appId: "1:860099248239:web:cc141668a59893e6e2cd9a",
  measurementId: "G-SVN20KJNV8",
};

const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
