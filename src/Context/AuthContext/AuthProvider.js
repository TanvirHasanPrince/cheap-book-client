import React, { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";

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

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // Auth Start

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //Make a user start
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //Make a user End

  // Sign in the user start
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //Start: Google Sign in
  const provider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // End: Google Sign in

  // Sign in the user end

  // Updating user information start*******************************
  const updateUser = (userInfo) => {
    return updateProfile(auth.currentUser, userInfo);
  };

  // Updating user information End*******************************

  //Log out the user start
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //Log out the user end

  //Cecking if the user is logged in or not--- start

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User status changed");
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  //Cecking if the user is logged in or not--- End

  // Auth End

  const authInfo = {
    createUser,
    signIn,
    handleGoogleSignIn,
    updateUser,
    logOut,
    user,
    loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
