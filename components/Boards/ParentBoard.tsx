'use client'

import { deleteBoardAction } from '@/services/Firebase/actions'
import { Eraser, Pencil } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'

interface Props {
  parentBoard: ParentBoard
  onBoardDelete: (board: ParentBoard) => void
}

export const ParentBoard = ({ parentBoard, onBoardDelete }: Props): React.ReactNode => {
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const handleBoardDelete = (): void => {
    setIsLoading(true)
    deleteBoardAction(parentBoard.id).then(() => {
      onBoardDelete(parentBoard)
      setIsLoading(false)
    }).catch((err) => console.error(err))
  }

  return (
    <Link className='w-auto h-auto' href={`/to-do/${parentBoard.id}`} title={`link to details page, board #${parentBoard.id}`}>
      <li className="w-44 h-44 p-5 flex flex-col cursor-pointer justify-between bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
        <h2>{parentBoard.title}</h2>
        <div className="flex gap-5 justify-center items-center">
          <button
            type="button"
            title="Edit board"
            className="cursor-pointer"
          >
            <Pencil />
          </button>
          <button
            type="button"
            title="Delete board"
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
    </Link>
  )
}
