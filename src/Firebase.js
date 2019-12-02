import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBqdnB6QWutk3c-fRetNJ9TGwD85ADZ9tk",
  authDomain: "bulletin-board-6d24b.firebaseapp.com",
  databaseURL: "https://bulletin-board-6d24b.firebaseio.com",
  projectId: "bulletin-board-6d24b",
  storageBucket: "bulletin-board-6d24b.appspot.com",
  messagingSenderId: "261073442058",
  appId: "1:261073442058:web:eab66046b4b18f8e9496f3"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
