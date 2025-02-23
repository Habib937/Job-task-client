// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCpfOxUL5qXFdNxGOLqWZGOOZ9vCeMPv58",
  authDomain: "job-task-d1f9b.firebaseapp.com",
  projectId: "job-task-d1f9b",
  storageBucket: "job-task-d1f9b.firebasestorage.app",
  messagingSenderId: "711195635351",
  appId: "1:711195635351:web:f138428abb7a5c4400c3d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth



