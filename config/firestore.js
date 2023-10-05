// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlOAt0Cmx-YFKNme71xzygI0uAE7KwsNA",
  authDomain: "e-c-shop-14e97.firebaseapp.com",
  projectId: "e-c-shop-14e97",
  storageBucket: "e-c-shop-14e97.appspot.com",
  messagingSenderId: "235429424774",
  appId: "1:235429424774:web:68f257a6fe3e399e72eb07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
