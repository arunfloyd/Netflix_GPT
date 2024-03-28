// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZWM1rJDHpOSs9EoMSxdsZ7IA1iFQvbso",
  authDomain: "netflixgbt-8b429.firebaseapp.com",
  projectId: "netflixgbt-8b429",
  storageBucket: "netflixgbt-8b429.appspot.com",
  messagingSenderId: "948051753809",
  appId: "1:948051753809:web:716a61ec71b46735b7f170",
  measurementId: "G-1N9FBSVMN8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
