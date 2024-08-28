import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBLDrxbCdMFRtfOOiCO92rC66K3-b5Fdxs",
    authDomain: "clone-news2.firebaseapp.com",
    projectId: "clone-news2",
    storageBucket: "clone-news2.appspot.com",
    messagingSenderId: "430202351596",
    appId: "1:430202351596:web:c1b1d09248f981b0899ac9"
  };
  
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();