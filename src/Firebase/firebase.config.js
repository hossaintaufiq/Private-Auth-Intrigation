// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_ZvXa1eicwt5g13tch9EeS3YOPzIak1s",
  authDomain: "react-auth-integretion.firebaseapp.com",
  projectId: "react-auth-integretion",
  storageBucket: "react-auth-integretion.appspot.com",
  messagingSenderId: "711574388150",
  appId: "1:711574388150:web:5cc863bdff065742cb5517"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;