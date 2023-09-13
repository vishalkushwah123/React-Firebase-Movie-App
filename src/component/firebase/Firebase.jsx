import { initializeApp } from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBTXV4GQXA2gc8hH5L-sMdNOiCJ5zc7Wxc",
    authDomain: "filmyverse-849ed.firebaseapp.com",
    projectId: "filmyverse-849ed",
    storageBucket: "filmyverse-849ed.appspot.com",
    messagingSenderId: "250695803242",
    appId: "1:250695803242:web:97887dcc8f6ba8a0e7c513"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const movieRef = collection(db, "movie")

export default app