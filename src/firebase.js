import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlnmnfIo_MqH6admSIquxfiH4_Hpoic74",
  authDomain: "netflix-clone-f37e1.firebaseapp.com",
  projectId: "netflix-clone-f37e1",
  storageBucket: "netflix-clone-f37e1.appspot.com",
  messagingSenderId: "469840830421",
  appId: "1:469840830421:web:98800de1fe7827533ca75c",
  measurementId: "G-6MTS66L17X",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
