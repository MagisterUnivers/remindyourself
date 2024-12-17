import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, doc, getDocs, setDoc } from 'firebase/firestore';

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

export const getBoards = async (userId: number | string) => {
  const boardsCollection = collection(db, "boards");
  const boardsSnapshot = await getDocs(boardsCollection);
  const boardsList = boardsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  return boardsList;
};

export const addBoard = async (userId: number | string, title: string) => {
  try {
    const docRef = await addDoc(collection(db, "boards"), {
      title,
      userId,
      createdAt: new Date(),
    });
    console.log("New board added with ID: ", docRef.id);
  } catch (error) {
    console.error("Error adding board: ", error);
  }
};
