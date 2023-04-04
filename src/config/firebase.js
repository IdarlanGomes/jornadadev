
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';



const firebaseConfig = {
  apiKey: "AIzaSyAUkDBU1X1QJvbpbgLL0f0D9ZLO2A5JKkw",
  authDomain: "tik-tok---jornada---idarlan.firebaseapp.com",
  projectId: "tik-tok---jornada---idarlan",
  storageBucket: "tik-tok---jornada---idarlan.appspot.com",
  messagingSenderId: "631980039664",
  appId: "1:631980039664:web:2c08b97e0b0c11ed741135"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;