// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZAPrn2AtyDTGuV2V9gMl1lczOk746LEY",
  authDomain: "news-portal-a9aee.firebaseapp.com",
  projectId: "news-portal-a9aee",
  storageBucket: "news-portal-a9aee.appspot.com",
  messagingSenderId: "807318808224",
  appId: "1:807318808224:web:aa383a8ebee7a548418bc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;