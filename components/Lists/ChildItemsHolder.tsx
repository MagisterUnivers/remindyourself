'use client'

import { ChildrenBoard } from '../Boards/ChildrenBoard'

interface Props {
  childrenBoards: ChildrenBoards | null
  onBoardDelete: (board: ChildrenBoard) => void
  onBoardSelect: (board: ChildrenBoard) => void
}

export const ChildItemsHolder = ({ childrenBoards, onBoardDelete, onBoardSelect }: Props): React.ReactNode => {
  return (
    childrenBoards === undefined ? (
      <h2>No boards was founded.</h2>
    ) : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {childrenBoards?.map(board => (
          <ChildrenBoard
            key={board.id}
            childrenBoards={board}
            onBoardDelete={onBoardDelete}
            onBoardSelect={onBoardSelect}
          />
        ))}
      </ul>
    )
  )
}
