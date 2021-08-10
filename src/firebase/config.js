import firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

var firebaseConfig = {
    apiKey: "AIzaSyDON0JXFap9ygisPFCPNN9OsiETskU4u6g",
    authDomain: "photo-gallery-54dc8.firebaseapp.com",
    projectId: "photo-gallery-54dc8",
    storageBucket: "photo-gallery-54dc8.appspot.com",
    messagingSenderId: "801059477305",
    appId: "1:801059477305:web:57959a5847654383a47ae8"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };