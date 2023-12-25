// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCS8M23cfrZro37vpAjD3AHOnTh8INTELc",
  authDomain: "netflix-gpt-776b4.firebaseapp.com",
  projectId: "netflix-gpt-776b4",
  storageBucket: "netflix-gpt-776b4.appspot.com",
  messagingSenderId: "454714130858",
  appId: "1:454714130858:web:40e07249f0a7c15dd26bd3",
  measurementId: "G-S1TW7E8SHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();