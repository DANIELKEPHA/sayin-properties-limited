// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "sayin-project.firebaseapp.com",
  projectId: "sayin-project",
  storageBucket: "sayin-project.firebasestorage.app",
  messagingSenderId: "884666018743",
  appId: "1:884666018743:web:edf7eb3d1128f7cc6c5632",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
