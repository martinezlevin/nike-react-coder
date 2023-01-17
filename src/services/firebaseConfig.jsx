import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAo16AWIasvzgD3JeY7ijyAyS4da1EIpp0",
  authDomain: "nike-react-coder.firebaseapp.com",
  projectId: "nike-react-coder",
  storageBucket: "nike-react-coder.appspot.com",
  messagingSenderId: "951964496672",
  appId: "1:951964496672:web:f86750c83427836a645d45"
};

const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);