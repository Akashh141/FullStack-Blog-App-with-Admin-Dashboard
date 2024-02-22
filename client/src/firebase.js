// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-39c1e.firebaseapp.com",
    projectId: "mern-blog-39c1e",
    storageBucket: "mern-blog-39c1e.appspot.com",
    messagingSenderId: "1098853404490",
    appId: "1:1098853404490:web:81b8b3141227100228fbb3"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);