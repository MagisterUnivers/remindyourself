'use client'

import { deleteTaskAction } from '@/services/Firebase/actions'
import { Eraser, Pencil } from 'lucide-react'
import { useState } from 'react'

interface Props {
  childrenBoards: ChildrenBoard
  onBoardDelete: (board: ChildrenBoard) => void
  onBoardSelect: (board: ChildrenBoard) => void
}

export const ChildrenBoard = ({ childrenBoards, onBoardDelete, onBoardSelect }: Props): React.ReactNode => {
  void onBoardSelect // for future releases
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleBoardDelete = (): void => {
    setIsLoading(true)
    deleteTaskAction(childrenBoards.id).then(() => {
      onBoardDelete(childrenBoards)
      setIsLoading(false)
    }).catch((err) => console.error(err))
  }

  return (
    <li className='w-28 h-28 p-2 bg-gray-700 flex flex-col justify-between cursor-not-allowed text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out'>
      <h2>{childrenBoards.title}</h2>
      <div className='flex gap-5 justify-center items-center'>
        <button
          type='button'
          title='Edit board'
          className='cursor-pointer'
        >
          <Pencil />
        </button>
        <button
          type='button'
          title='Delete board'
          disabled={isLoading}
          onClick={() => {
            const isConfirmed = window.confirm('Are you sure, you want to delete that board?')
            if (isConfirmed) {
              handleBoardDelete()
            }
          }}
        >
          <Eraser />
        </button>
      </div>
    </li>
  )
}
