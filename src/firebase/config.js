import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBseXp-cITqwncHLJ2wE_4X_fzZqUpSwcI",
  authDomain: "cooking-ninja-2dcf1.firebaseapp.com",
  projectId: "cooking-ninja-2dcf1",
  storageBucket: "cooking-ninja-2dcf1.appspot.com",
  messagingSenderId: "327199580297",
  appId: "1:327199580297:web:e9a3f38b6623c265f1e658"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { db, auth } 