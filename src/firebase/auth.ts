import { auth, db } from "./firebase.config";
import {
  GoogleAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

// SIGN UP (Email + Password)
export const registerUser = async (fullName: string, email: string, password: string) => {
  const userCred = await createUserWithEmailAndPassword(auth, email, password);
  const user = userCred.user;

  await setDoc(doc(db, "Users", user.uid), {
    fullName,
    email,
  });

  return user;
};


// LOGIN (Email + Password)
export const loginUser = async (email: string, password: string) => {
  const userCred = await signInWithEmailAndPassword(auth, email, password);
  return userCred.user;
};


// LOGIN WITH GOOGLE
export const googleSignIn = async () => {
  const provider = new GoogleAuthProvider();
  const userCred = await signInWithPopup(auth, provider);

  const user = userCred.user;

  // store only if first time
  await setDoc(
    doc(db, "Users", user.uid),
    { fullName: user.displayName, email: user.email, photo: user.photoURL },
    { merge: true }
  );

  return user;
};
