import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA_9H4k5H3f2fqA66gmhAe_MjK9oyPXHdE",
    authDomain: "taskmate-6b798.firebaseapp.com",
    projectId: "taskmate-6b798",
    storageBucket: "taskmate-6b798.appspot.com",
    messagingSenderId: "679201747738",
    appId: "1:679201747738:web:784abdc60a9869b672b2a3",
    measurementId: "G-S4M2TTNKHJ",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup };
