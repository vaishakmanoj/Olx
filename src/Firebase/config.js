import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'  
import 'firebase/storage'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6-0FiuZZI32um3oyeKJhC1BmR3ORMgPE",
  authDomain: "olx-clone-7c0d9.firebaseapp.com",
  projectId: "olx-clone-7c0d9",
  storageBucket: "olx-clone-7c0d9.appspot.com",
  messagingSenderId: "959366573380",
  appId: "1:959366573380:web:258919874b80570a1b7b11",
  measurementId: "G-DSEQ169J8H"
};
 export default firebase.initializeApp(firebaseConfig)