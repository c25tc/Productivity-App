// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "productivity-app-1f41f.firebaseapp.com",
  databaseURL: "https://productivity-app-1f41f.firebaseio.com",
  projectId: "productivity-app-1f41f",
  storageBucket: "productivity-app-1f41f.appspot.com",
  messagingSenderId: "731052013661",
  appId: "1:731052013661:web:fe0fddea8f3b5fb628b5b4",
  measurementId: "G-GCL0SJ6CXS",
};

// const db = firebaseApp.firestore();
// export default db;

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
