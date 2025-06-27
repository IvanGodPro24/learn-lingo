import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyADqU2vg3jFNzJogrv9Qe1OnbU0gZSvWVM",
  authDomain: "learn-lingo-5e719.firebaseapp.com",
  projectId: "learn-lingo-5e719",
  storageBucket: "learn-lingo-5e719.firebasestorage.app",
  messagingSenderId: "375382842905",
  appId: "1:375382842905:web:b67a746703399b3c675488",
  measurementId: "G-67TTG260SQ",
};

const app = initializeApp(firebaseConfig);

export const appAuth = getAuth(app);

export const appDB = getDatabase(app);
