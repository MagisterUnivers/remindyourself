import { auth, db } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, setDoc } from 'firebase/firestore';

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

export const getBoardsAction = async (): Promise<ParentBoards> => {
  const boardsCollection = collection(db, "boards");
  const boardsSnapshot = await getDocs(boardsCollection);
  const boardsList = boardsSnapshot.docs.map(doc => {
    const data = doc.data();
    return {
      id: doc.id,
      title: data.title,
      ...data,
      createdAt: data.createdAt ? new Date(data.createdAt.seconds * 1000) : null,
    };
  });
  return boardsList;
};

export const addBoardAction = async (userId: number | string, title: string) => {
  try {
    const docRef = await addDoc(collection(db, "boards"), {
      title,
      userId,
      createdAt: new Date(),
    });
    const docSnapshot = await getDoc(doc(db, "boards", docRef.id));
    const data = docSnapshot.data()

    if (docSnapshot.exists()) {
      const newBoard: ParentBoard = { id: docSnapshot.id, title: data?.title, createdAt: data?.createdAt, ...docSnapshot.data() };
      return newBoard;
    } else {
      //
    }
  } catch (error) {
    console.error("Error adding board: ", error);
  }
};

export const deleteBoardAction = async (boardId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, "boards", boardId));
  } catch (error) {
    console.error("Error deleting board: ", error);
  }
};
