import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBhIJ5RqC7Wu3LJCR2O_zLL9EbVkLJrkfQ",
  authDomain: "han-recipes.firebaseapp.com",
  projectId: "han-recipes",
  storageBucket: "han-recipes.appspot.com",
  messagingSenderId: "114053220757",
  appId: "1:114053220757:web:20ee009fd4eb3f362e8e9c"
};

initializeApp(firebaseConfig)

const db = getFirestore()

const auth = getAuth()

export { db, auth } 