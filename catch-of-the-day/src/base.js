import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyD-TcUb22Do_Ho4P2B62im8KO3jUcmT1Ek",
    authDomain: "catch-of-the-day-8fa33.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-8fa33-default-rtdb.europe-west1.firebasedatabase.app",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// This is a default export
export default base;