import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCtyNT7BWLbuueA35fSDJbU0HkI5SiyXkY",
    authDomain: "image-gallery-7ad5f.firebaseapp.com",
    projectId: "image-gallery-7ad5f",
    storageBucket: "image-gallery-7ad5f.appspot.com",
    messagingSenderId: "98326411671",
    appId: "1:98326411671:web:0ace191caf9762106a2cd2"
};
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };

