import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import swal from 'sweetalert';

const firebaseConfig = {
  apiKey: "AIzaSyD4JSrhXgxI7y9WAlXmtVOqjW7H4JsdZ04",
  authDomain: "reactcrud-3c5f7.firebaseapp.com",
  databaseURL:
    "https://reactcrud-3c5f7-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "reactcrud-3c5f7",
  storageBucket: "reactcrud-3c5f7.appspot.com",
  messagingSenderId: "573485827248",
  appId: "1:573485827248:web:d554bc48f4be5b72026775",
  measurementId: "G-8P7JET5TNV",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async (result) => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);

    localStorage.setItem("name", user.displayName)
    localStorage.setItem("email", user.email)
    localStorage.setItem("profilePic", user.photoURL)
    localStorage.setItem("phoneNumber", user.phoneNumber)
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
        profilePic: user.photoURL,
         
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    swal({
      title: "Error",
      text: "invalid-email",
      icon: "error",
    }); 
  }
};
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    swal({
      title: "Success",
      text: "Password reacovery link sent your mail",
      icon: "success",
    });
  } catch (err) {
    swal({
      title: "Error",
      text: "invalid-email",
      icon: "error",
    }); 
  }
};
const logout = () => {
  signOut(auth);
};
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};
