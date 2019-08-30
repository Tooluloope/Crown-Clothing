import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyCCa1mv586gDwB26BDudY2iTSTeovlohGU",
    authDomain: "crwn-db-39acb.firebaseapp.com",
    databaseURL: "https://crwn-db-39acb.firebaseio.com",
    projectId: "crwn-db-39acb",
    storageBucket: "",
    messagingSenderId: "623272366154",
    appId: "1:623272366154:web:e6448032eddbac0e"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;