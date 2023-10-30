// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBh6-jhOAFb-bWqLAKO0huOtavcAzGSkyQ",
  authDomain: "restaurant-533d6.firebaseapp.com",
  projectId: "restaurant-533d6",
  storageBucket: "restaurant-533d6.appspot.com",
  messagingSenderId: "1071809309284",
  appId: "1:1071809309284:web:340d4b63996774adaf0d71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore() 