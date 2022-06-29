import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite';


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmiPnbORY3ltTc54URHtjcZ2_Ie2svIYU",
    authDomain: "journal-app-f1afb.firebaseapp.com",
    projectId: "journal-app-f1afb",
    storageBucket: "journal-app-f1afb.appspot.com",
    messagingSenderId: "955416182568",
    appId: "1:955416182568:web:eb175ac44f7437f0005a1d"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);