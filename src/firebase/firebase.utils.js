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

export const createUserProfileDocument = async (
  userAuth,
  additionalData
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(
    `users/${userAuth.uid}`
  );

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log(
        "error creating user",
        error.message
      );
    }
  }
  return userRef;
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
