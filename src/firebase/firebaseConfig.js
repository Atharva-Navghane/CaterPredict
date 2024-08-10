// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyB1RzHi-P5Bjj53oirPros2pWT8izJLLnU",
  authDomain: "caterpredict-22aed.firebaseapp.com",
  projectId: "caterpredict-22aed",
  storageBucket: "caterpredict-22aed.appspot.com",
  messagingSenderId: "1064908597156",
  appId: "1:1064908597156:web:5fb41b12e8921dea660331"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app