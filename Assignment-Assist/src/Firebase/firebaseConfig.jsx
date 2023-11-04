
import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjg9hH6cT5yZdpjyzCGoJiHJuRODyfW6A",
  authDomain: "assignment-assist.firebaseapp.com",
  projectId: "assignment-assist",
  storageBucket: "assignment-assist.appspot.com",
  messagingSenderId: "276564975960",
  appId: "1:276564975960:web:ae38f594594a836e0ec52d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);