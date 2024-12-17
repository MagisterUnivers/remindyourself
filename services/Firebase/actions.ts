import { auth, db } from './firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, query, setDoc, where } from 'firebase/firestore'

export const registerUserAction = async (email: string, password: string, fullName: string) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    await setDoc(doc(db, 'users', user.uid), {
      fullName,
      email,
      createdAt: new Date(),
    })

    return { success: true, user }
  } catch (error) {
    console.error('Registration error:', error)
    return { success: false, error }
  }
}

export const loginUserAction = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password)
    const user = userCredential.user

    localStorage.setItem('user', JSON.stringify({
      uid: user.uid,
      email: user.email,
      fullName: user.displayName || '',
    }))

    return { success: true, user }
  } catch (error) {
    console.error('Error during login:', error)
    return { success: false, error }
  }
}

export const logoutUserAction = async (): Promise<void> => {
  try {
    await signOut(auth)
  } catch (error) {
    console.error('Logout error:', error)
  }
}

export const getBoardsAction = async (): Promise<ParentBoards> => {
  const boardsCollection = collection(db, 'boards')
  const boardsSnapshot = await getDocs(boardsCollection)
  const boardsList = boardsSnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      title: data.title,
      createdAt: data.createdAt
        ? new Date(data.createdAt.seconds * 1000 + data.createdAt.nanoseconds / 1e6)
        : null,
      userId: data.userId
    }
  })
  return boardsList
}

export const addBoardAction = async (userId: number | string, title: string) => {
  try {
    const docRef = await addDoc(collection(db, 'boards'), {
      title,
      userId,
      createdAt: new Date(),
    })
    const docSnapshot = await getDoc(doc(db, 'boards', docRef.id))
    const data = docSnapshot.data()

    if (docSnapshot.exists()) {
      const newBoard: ParentBoard = {
        id: docSnapshot.id,
        title: data?.title,
        createdAt: data?.createdAt,
        ...docSnapshot.data()
      }
      return newBoard
    } else {
      //
    }
  } catch (error) {
    console.error('Error adding board: ', error)
  }
}

export const deleteBoardAction = async (boardId: string): Promise<void> => {
  try {
    await deleteDoc(doc(db, 'boards', boardId))
  } catch (error) {
    console.error('Error deleting board: ', error)
  }
}

export const getTasksAction = async (boardId: string) => {
  const tasksCollection = collection(db, 'tasks')
  const tasksQuery = query(tasksCollection, where('boardId', '==', boardId))
  const tasksSnapshot = await getDocs(tasksQuery)
  const tasksList = tasksSnapshot.docs.map(doc => {
    const data = doc.data()
    return {
      id: doc.id,
      title: data.title,
      createdAt: data?.createdAt
        ? new Date(data?.createdAt.seconds * 1000 + data?.createdAt.nanoseconds / 1e6)
        : null,
      boardId: data.boardId
    }
  })
  return tasksList
}

export const addTaskAction = async (boardId: string, title: string) => {
  try {
    const docRef = await addDoc(collection(db, 'tasks'), {
      boardId,
      title,
      createdAt: new Date(),
    })
    console.log('New task added with ID: ', docRef.id)
    const docSnapshot = await getDoc(doc(db, 'tasks', docRef.id))
    const data = docSnapshot.data()

    if (docSnapshot.exists()) {
      const newBoard: ChildrenBoard = {
        id: docSnapshot.id,
        title: data?.title,
        createdAt: data?.createdAt,
        boardId: data?.boardId
      }
      return newBoard
    } else {
      //
    }
  } catch (error) {
    console.error('Error adding task: ', error)
  }
}

export const deleteTaskAction = async (taskId: string) => {
  try {
    await deleteDoc(doc(db, 'tasks', taskId))
    console.log('Task deleted successfully')
  } catch (error) {
    console.error('Error deleting task: ', error)
  }
}
