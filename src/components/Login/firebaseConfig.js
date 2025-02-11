import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyAT1eGsSsEjiOWz5cE-ewc6EKq5njvkqo4",
    authDomain: "online-education-9c716.firebaseapp.com",
    projectId: "online-education-9c716",
    storageBucket: "online-education-9c716.firebasestorage.app",
    messagingSenderId: "619539205426",
    appId: "1:619539205426:web:5c9ab6adecc2bb5f665b2b",
    measurementId: "G-ZDSH1C51NE"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
