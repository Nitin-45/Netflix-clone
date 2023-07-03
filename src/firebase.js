import firebase from "firebase"
export const firebaseConfig = {
    apiKey: "AIzaSyBI3JUd4wiPa6s7HpIByiRgje8OW8kD-Uk",
    authDomain: "netflix-40133.firebaseapp.com",
    projectId: "netflix-40133",
    storageBucket: "netflix-40133.appspot.com",
    messagingSenderId: "968081727902",
    appId: "1:968081727902:web:4948562fb627e7b91f368f",
    measurementId: "G-PC76D5XSB0"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }
export default db;