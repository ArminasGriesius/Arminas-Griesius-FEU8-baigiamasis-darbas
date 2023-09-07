// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAawZCoRh1LZrhc3iGEpiXWqHuzSgmmRQY",
  authDomain: "ag-feu8-baigiamasis-darbas.firebaseapp.com",
  projectId: "ag-feu8-baigiamasis-darbas",
  storageBucket: "ag-feu8-baigiamasis-darbas.appspot.com",
  messagingSenderId: "259647379613",
  appId: "1:259647379613:web:95dac1104fbb01fdbddc74",
  measurementId: "G-9RF3S8QR82",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
