import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAvfnua0RHS7f6orSnW8_L6qYaehyL9Y60",
  authDomain: "facebook-clone-react-85256.firebaseapp.com",
  projectId: "facebook-clone-react-85256",
  storageBucket: "facebook-clone-react-85256.appspot.com",
  messagingSenderId: "319583998966",
  appId: "1:319583998966:web:fe40b132ddcf8093772dd7",
  measurementId: "G-7WD6328VX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
export default db;

// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyAvfnua0RHS7f6orSnW8_L6qYaehyL9Y60",
//   authDomain: "facebook-clone-react-85256.firebaseapp.com",
//   projectId: "facebook-clone-react-85256",
//   storageBucket: "facebook-clone-react-85256.appspot.com",
//   messagingSenderId: "319583998966",
//   appId: "1:319583998966:web:fe40b132ddcf8093772dd7",
//   measurementId: "G-7WD6328VX5"
// };

// // connect frontend app with firebase
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// // access to the database
// const db = firebaseApp.firestore();
// const auth = firebase.auth();
// const provider = new firebase.auth.GoogleAuthProvider();

// export { auth, provider };
// export default db;
