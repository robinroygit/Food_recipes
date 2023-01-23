import { createContext, useContext } from "react";

import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import { useEffect, useState } from "react";

const firebaseConfig = {
  apiKey: "AIzaSyDOeDbityJAxWtbENJD78eppRvPjBcG53I",
  authDomain: "robin-webapp.firebaseapp.com",
  projectId: "robin-webapp",
  storageBucket: "robin-webapp.appspot.com",
  messagingSenderId: "335927310525",
  appId: "1:335927310525:web:884075d41b0d668faddfd4",
  databaseURL:
    "https://robin-webapp-default-rtdb.asia-southeast1.firebasedatabase.app",
};

const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const firebasedb = getDatabase(firebaseApp);

const FirebaseContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [loading, setLoading] = useState(true);
  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  //signing in with email password
  const signinwithempw = async (email, password, username) => {
    const auth = getAuth();

    await createUserWithEmailAndPassword(firebaseAuth, email, password);
    //updating profile
    await updateProfile(auth.currentUser, { displayName: username });

    const user = auth.currentUser;
    setCurrentUser({
      ...user,
    });
  };

  //putdata
  const putData = (key, data) => {
    set(ref(firebasedb, key), data);
  };

  const signinwithgoogle = () => {
    signInWithPopup(firebaseAuth, googleProvider);
  };
  function logout() {
    const auth = getAuth();
    return signOut(auth);
  }

  function login(email, password) {
    const auth = getAuth();
    return signInWithEmailAndPassword(auth, email, password);
  }

  return (
    <FirebaseContext.Provider
      value={{
        currentUser,
        signinwithempw,
        putData,
        signinwithgoogle,
        logout,
        login,
      }}
    >
      {!loading && props.children}
    </FirebaseContext.Provider>
  );
};
