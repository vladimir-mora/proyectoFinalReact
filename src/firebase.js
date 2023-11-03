import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCGHZfdLlB1gwDsI66q1TdpmCeMg_drmyA",
  authDomain: "sneakerworld-9acee.firebaseapp.com",
  projectId: "sneakerworld-9acee",
  storageBucket: "sneakerworld-9acee.appspot.com",
  messagingSenderId: "435800027422",
  appId: "1:435800027422:web:73512a2e457e17f384990f",
};

const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app);
