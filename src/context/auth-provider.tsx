"use client";

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { useAuth, useFirebase } from '@/firebase';

export function useAuthActions() {
  const { auth } = useFirebase();

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google: ", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };

  return { signInWithGoogle, logout };
}
