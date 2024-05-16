import { GoogleAuthProvider, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, updatePassword } from "firebase/auth"
import {auth } from "./firebase"
import { doc, setDoc } from 'firebase/firestore';
import { db } from './firebase';
import { getDoc } from 'firebase/firestore'


export const doCreateUserWithEmailAndPassword = async(email,password,displayName)=> {

    return await createUserWithEmailAndPassword(auth, email, password,displayName);
};

export const doSignInWithEmailAndPassword = async(email, password) => {
    
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        let token = await userCredential.user.getIdToken();
        localStorage.setItem('firebaseToken', token);
        console.log('Stored token:', localStorage.getItem('firebaseToken'));

        if (token) {
            token = await refreshToken();
            localStorage.setItem('firebaseToken', token);
          }
          return token;
    } catch (error) {
        console.error("error", error);
        throw error;
    }
};

export const signupAndSaveUserData = async (email, password, displayName) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      const { uid, email: userEmail } = user;
  
      const userDocRef = doc(db, 'users', uid);
  
      await setDoc(userDocRef, {
        displayName,
        email: userEmail,
      });
  
      return user;
    } catch (error) {
      console.error('Error signing up and saving user data:', error);
      throw error;
    }
  };
  export const fetchUserData = async (userId) => {
    try {
      const userDocRef = doc(db, 'users', userId);
      const userDocSnapshot = await getDoc(userDocRef);
      if (userDocSnapshot.exists()) {
        const userData = userDocSnapshot.data();
        return userData;
      } else {
        console.log('User document does not exist');
        return null;
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  };

export const doSignInWithGoogle = async() => {
    const provider = GoogleAuthProvider();
    const result = await doSignInWithPopup(auth, provider);
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
}

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (password) => {
    return updatePassword(auth.updateCurrentUser, password);
}

export const doSendEmailVarification = () => {
    return sendEmailVerification(auth.currentUser, {
        url: `${window.location.origin}/home`,
    });
}