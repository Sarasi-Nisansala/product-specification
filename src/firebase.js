// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyALuDw3_S5JXL788b-WWTpdrDCNHlOzQpM",
    authDomain: "product-specification-96341.firebaseapp.com",
    projectId: "product-specification-96341",
    storageBucket: "product-specification-96341.firebasestorage.app",
    messagingSenderId: "475205356462",
    appId: "1:475205356462:web:c6ca0c27ab35ffad97d63f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);