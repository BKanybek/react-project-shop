// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvt82OEYCaYVNHqkJGsfUpJVXM2bqjrCs",
  authDomain: "begi-project.firebaseapp.com",
  projectId: "begi-project",
  storageBucket: "begi-project.appspot.com",
  messagingSenderId: "431853935601",
  appId: "1:431853935601:web:c9332b6160df3f007c8250"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
// export const firestore = getFirestore(app)