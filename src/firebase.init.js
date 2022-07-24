// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDiNhu4jFUyFq8fYpMoN51ohNBSMYoryFo",
    authDomain: "knot-849b7.firebaseapp.com",
    projectId: "knot-849b7",
    storageBucket: "knot-849b7.appspot.com",
    messagingSenderId: "162498725423",
    appId: "1:162498725423:web:9280dddb6a09bbc5a3e8da",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export const storage = getStorage(app);

export default auth;
