// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCle_KYjrfXkzkLmdPbsup0lCalLx5_8wk",
  authDomain: "retweet-app-registration-form.firebaseapp.com",
  databaseURL: "https://retweet-app-registration-form-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "retweet-app-registration-form",
  storageBucket: "retweet-app-registration-form.appspot.com",
  messagingSenderId: "927973525785",
  appId: "1:927973525785:web:1ca613ee48c5f4bc2e5d88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);