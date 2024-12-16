import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

export const registerUserAction = async (email: string, password: string, fullName: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    await setDoc(doc(db, 'users', user.uid), {
      fullName,
      email,
      createdAt: new Date(),
    });

    return { success: true, user };
  } catch (error) {
    console.error('Registration error:', error);
    return { success: false, error };
  }
};

export const loginUserAction = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      fullName: user.displayName || '',
    }));

    console.log("User logged in:", user.uid);
    return { success: true, user };
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, error };
  }
};

export const logoutUserAction = async (): Promise<void> => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error('Logout error:', error);
  }
};
