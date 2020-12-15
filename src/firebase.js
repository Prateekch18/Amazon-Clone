// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAYa-DDA5DK5lufMyOESRPfq0q_Tci9UBY",
    authDomain: "clone-7176e.firebaseapp.com",
    projectId: "clone-7176e",
    storageBucket: "clone-7176e.appspot.com",
    messagingSenderId: "625141432586",
    appId: "1:625141432586:web:8ad7daeda63f9596a6baf3",
    measurementId: "G-71JLZ7K2HG"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };