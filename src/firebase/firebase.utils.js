import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyDLollzsCVtAzcW17KSrCSRDFVosVKrxls",
  authDomain: "crwn-db-65adb.firebaseapp.com",
  projectId: "crwn-db-65adb",
  storageBucket: "crwn-db-65adb.appspot.com",
  messagingSenderId: "456002719368",
  appId: "1:456002719368:web:307536e857d6e73401593d",
  measurementId: "G-JSE84WRGTH",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const SignInWithGoogle = () =>
  auth.signInWithPopup(provider);

export default firebase;
