// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB58LHUhdRDgweE-sYiElvkMR8in_1ow9g",
  authDomain: "gro-test-aa040.firebaseapp.com",
  projectId: "gro-test-aa040",
  storageBucket: "gro-test-aa040.appspot.com",
  messagingSenderId: "1017799171476",
  appId: "1:1017799171476:web:c259c985d38e9f49f04381",
  measurementId: "G-WTVDR8L3GJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);