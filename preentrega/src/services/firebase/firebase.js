import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBWxpKvtet5j-0AlyRMwKx9NQ_HdxS92Yw",
  authDomain: "proyectofinal-fca86.firebaseapp.com",
  projectId: "proyectofinal-fca86",
  storageBucket: "proyectofinal-fca86.appspot.com",
  messagingSenderId: "28283820973",
  appId: "1:28283820973:web:39e09219ef76edd47c5f24",
  measurementId: "G-Z99E4JNHZR"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
