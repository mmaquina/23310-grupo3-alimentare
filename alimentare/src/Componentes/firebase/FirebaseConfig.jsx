// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: process.env.APIKEY,
//   authDomain: "timetracker-374421.firebaseapp.com",
//   projectId: "timetracker-374421",
//   storageBucket: "timetracker-374421.appspot.com",
//   messagingSenderId: process.env.MESSAGING_SENDER_ID,
//   appId: process.env.APPID,
//   measurementId: process.env.MEASUREMENTID
// };

//Configuración de base de datos para rama de Camilo
const firebaseConfig = { apiKey: "AIzaSyAJHFbhmsNOtyGlRqK0nKq48HGXXHjnGDE",
  authDomain: "fb-crud-react-a1b57.firebaseapp.com",
  projectId: "fb-crud-react-a1b57",
  storageBucket: "fb-crud-react-a1b57.appspot.com",
  messagingSenderId: "504423365656",
  appId: "1:504423365656:web:4ef3b2074eb29d5dcdd76d"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();


export default db;