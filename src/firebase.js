import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBuRdgTUWPt6Uqv_N_fCN3xApFgTaEf6Dw",
  authDomain: "rak-chat.firebaseapp.com",
  projectId: "rak-chat",
  storageBucket: "rak-chat.appspot.com",
  messagingSenderId: "962508895954",
  appId: "1:962508895954:web:638da08f3bc8a2aae41f0b"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();