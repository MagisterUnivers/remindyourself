'use client'

import { useState } from 'react'
import { ChildrenBoard } from '../Boards/ChildrenBoard'
import { ChangeChildrenTitleModal } from '../Modals/ChangeChildrenTitleModal'

interface Props {
  childrenBoards: ChildrenBoards | null
  onBoardDelete: (board: ChildrenBoard) => void
  onBoardSelect: (board: ChildrenBoard) => void
  onBoardUpdate: (board: ChildrenBoard) => void
}

export const ChildItemsHolder = ({ childrenBoards, onBoardDelete, onBoardSelect, onBoardUpdate }: Props): React.ReactNode => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const [selectedBoard, setSelectedBoard] = useState<ChildrenBoard | null>(null)

  const openModal = (board: ChildrenBoard): void => {
    setSelectedBoard(board)
    setIsModalOpen(true)
  }

  const closeModal = (): void => {
    setIsModalOpen(false)
    setSelectedBoard(null)
  }

  return (
    childrenBoards?.length === 0 ? (
      <h2 className='font-semibold'>No boards was founded.</h2>
    ) : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {childrenBoards?.map(board => (
          <ChildrenBoard
            key={board.id}
            childrenBoard={board}
            onBoardDelete={onBoardDelete}
            onBoardSelect={onBoardSelect}
            onModalOpen={openModal}
          />
        ))}
        <ChangeChildrenTitleModal
          onBoardUpdate={onBoardUpdate}
          onModalClose={closeModal}
          isModalOpen={isModalOpen}
          selectedBoard={selectedBoard}
        />
      </ul>
    )
  )
}
