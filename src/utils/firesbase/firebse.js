// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA4MhiYUu1JnrgPJghqfd1pmH9wCYWcJ2k",
  authDomain: "clone-d6357.firebaseapp.com",
  projectId: "clone-d6357",
  storageBucket: "clone-d6357.appspot.com",
  messagingSenderId: "619394028338",
  appId: "1:619394028338:web:fa79e685ae2e79706d3d2b",
  measurementId: "G-RS79KFBS54",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebaseApp);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
