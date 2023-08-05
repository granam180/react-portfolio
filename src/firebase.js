
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDv9r7hplv05fDk7zJzl6srfJbIY8q1wyM",
  authDomain: "react-portfolio-dashboar-f6b3a.firebaseapp.com",
  projectId: "react-portfolio-dashboar-f6b3a",
  storageBucket: "react-portfolio-dashboar-f6b3a.appspot.com",
  messagingSenderId: "338826539294",
  appId: "1:338826539294:web:d14d46146f307ec09e990f",
  measurementId: "G-3VB908QTCW"
};


const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();  // Google sign-in method
export const auth = getAuth(); // Firebase Authentication, use `export` to use for Sign Out method and others
export const db = getFirestore(app);  // CRUD Firebase db
export const storage = getStorage(app);  // Storage


export const signInWithGoogle = () => signInWithPopup(auth, provider);