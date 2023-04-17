// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAEFfnLi8PzePkMKfzjazXqvgUVRRQ5KZs",
    authDomain: "ema-zone-vite.firebaseapp.com",
    projectId: "ema-zone-vite",
    storageBucket: "ema-zone-vite.appspot.com",
    messagingSenderId: "687437005806",
    appId: "1:687437005806:web:ed1e37a46cbc217c52c4ff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app