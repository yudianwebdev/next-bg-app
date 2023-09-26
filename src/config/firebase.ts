import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCDKPU6yIIwTp92u40o3mL3UPQjUBBy4L4",
  authDomain: "bg-app-prj.firebaseapp.com",
  projectId: "bg-app-prj",
  storageBucket: "bg-app-prj.appspot.com",
  messagingSenderId: "320513907973",
  appId: "1:320513907973:web:a9039021fecc390e8aab6c",
  measurementId: "G-W5Z078MDXD",
};

const init = initializeApp(firebaseConfig);
export const authfb = init;
export const googleProvider = new GoogleAuthProvider();
