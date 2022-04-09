// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHrkEQZhSVGBiGjNSiSoCId-IRKsjAQ2o",
  authDomain: "ema-jon-auth-88593.firebaseapp.com",
  projectId: "ema-jon-auth-88593",
  storageBucket: "ema-jon-auth-88593.appspot.com",
  messagingSenderId: "922340721481",
  appId: "1:922340721481:web:c0411de803d5c0185fd098"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;