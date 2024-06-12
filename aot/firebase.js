
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjQhjH9R6MvNNaLxFIblwrInFz-P0V8Cw",
  authDomain: "aces-of-thunder.firebaseapp.com",
  projectId: "aces-of-thunder",
  storageBucket: "aces-of-thunder.appspot.com",
  messagingSenderId: "471384691353",
  appId: "1:471384691353:web:fc8852c356fbd5121d9e08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const db = getFirestore(app)