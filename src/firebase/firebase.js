// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyByFH6wlHnBmpWw280ZO0C3dxDIjl3qI-A",
  authDomain: "ieee-aot.firebaseapp.com",
  projectId: "ieee-aot",
  storageBucket: "ieee-aot.appspot.com",
  messagingSenderId: "376217837510",
  appId: "1:376217837510:web:f0bdf23ca0b5289df25cc7",
  measurementId: "G-Y6C1SQK7HY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app)

export { app, auth };