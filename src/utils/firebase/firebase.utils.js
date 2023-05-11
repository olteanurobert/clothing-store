// Initialize  Firebase App
import { initializeApp } from "firebase/app";

// Firebase Authentication
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// Firestore Database
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Web app Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDDoDQKYKsPcbFCan_0PCRqkNEn-HZ9lw",
  authDomain: "clothing-store-db-a0044.firebaseapp.com",
  projectId: "clothing-store-db-a0044",
  storageBucket: "clothing-store-db-a0044.appspot.com",
  messagingSenderId: "522925558689",
  appId: "1:522925558689:web:31e6d5f57f8ac95a38d9e0",
};

// Initialize Firebase
// eslint-disable-next-line
const firebaseApp = initializeApp(firebaseConfig);

// Firebase Authentication
const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

// Get data from Firestore Database
export const db = getFirestore();

//Get user authentication data from Firestore Database
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  const userDocRef = doc(db, "users", userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  // IF user data does not exist
  if (!userSnapshot.exists()) {
    // create / set the document with the data from userAuth in my collection
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating user in db", error.message);
    }
  }

  // IF user data exists

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
