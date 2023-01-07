import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: import.meta.env.API_KEY,
    authDomain: "greydive-challenge-1.firebaseapp.com",
    projectId: "greydive-challenge-1",
    storageBucket: "greydive-challenge-1.appspot.com",
    messagingSenderId: "854779579062",
    appId: "1:854779579062:web:80a736f2380f4fccc6f417",
    measurementId: "G-SD3XJZ5QE0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)