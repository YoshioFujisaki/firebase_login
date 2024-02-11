import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvNKe4Nv_V34dBb97eekC8ECWWEKYD_N4",
    authDomain: "fir-login-e24bf.firebaseapp.com",
    projectId: "fir-login-e24bf",
    storageBucket: "fir-login-e24bf.appspot.com",
    messagingSenderId: "915215058495",
    appId: "1:915215058495:web:9892b991cb66b47bb39a8a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
