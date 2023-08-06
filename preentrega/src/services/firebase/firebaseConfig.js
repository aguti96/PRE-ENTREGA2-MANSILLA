import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMLUya89BcG1rXfPZoDPG70KjSuNUlhyA",
  authDomain: "proyectofinal-78292.firebaseapp.com",
  projectId: "proyectofinal-78292",
  storageBucket: "proyectofinal-78292.appspot.com",
  messagingSenderId: "1091317837945",
  appId: "1:1091317837945:web:b8f5136bc938d85d44e4a8",
  measurementId: "G-4EMB871QQ4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
