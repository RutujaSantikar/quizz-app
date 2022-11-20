// import firebase from 'firebase/app';
// import 'firebase/auth';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDg2X4caqYJHG370-JHkntZISk3QQXOcXw",
  authDomain: "quiz-app-33859.firebaseapp.com",
  projectId: "quiz-app-33859",
  storageBucket: "quiz-app-33859.appspot.com",
  messagingSenderId: "463328593734",
  appId: "1:463328593734:web:7f4d4b6a6c6fe706448747"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);