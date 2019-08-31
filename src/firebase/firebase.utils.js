import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/firestore';


const firebaseConfig = {
    
    
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_MESSAGING_SENDER_ID

}

export const createUserProfileDocument = async (userAuth, ...additionalData) => {
    if (!userAuth) return

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get()
    

    if(!snapShot.exists) {
        const {displayName, email} = userAuth
        const createdAt = new Date()

        await userRef.set({
            displayName,
            email,
            createdAt,
            additionalData
        });
    }

    return userRef;
}


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore(); 

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});

export const signInWithGoogle = ()=> auth.signInWithPopup(provider);

export default firebase;