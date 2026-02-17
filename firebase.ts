
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyi7do6-JGZPaVJ5877wlMml-C7ER9CG8",
  authDomain: "portal-kabutcraft.firebaseapp.com",
  projectId: "portal-kabutcraft",
  storageBucket: "portal-kabutcraft.firebasestorage.app",
  messagingSenderId: "1022763504988",
  appId: "1:1022763504988:web:eef26f92e7602a3b6e1d99",
  measurementId: "G-C9HVKX1QPT"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
