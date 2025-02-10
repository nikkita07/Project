// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3ow5vZoknbA0LLt6SODQeox2PsxU0O8U",
  authDomain: "netflixgpt-b494a.firebaseapp.com",
  projectId: "netflixgpt-b494a",
  storageBucket: "netflixgpt-b494a.firebasestorage.app",
  messagingSenderId: "560368630237",
  appId: "1:560368630237:web:d7cc2bfc2b90c84e481e34",
  measurementId: "G-9HBNCJVLET"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);