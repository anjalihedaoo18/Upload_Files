import { getStorage } from "firebase/storage";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyCOLUqFzglbDAwyGd-rojkhDgQsimc5Y04",
  authDomain: "files-b07b3.firebaseapp.com",
  projectId: "files-b07b3",
  storageBucket: "files-b07b3.appspot.com",
  messagingSenderId: "833550219659",
  appId: "1:833550219659:web:ab3981e625dafbebed578e",
  measurementId: "G-Q5B56WP590"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);