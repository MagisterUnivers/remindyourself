'use client'

import { ParentBoard } from '../Boards/ParentBoard'
// import { useRouter } from "next/navigation"

interface Props {
  parentBoards: ParentBoards | null
  onBoardDelete: (board: ParentBoard) => void
}

export const ParentItemsHolder = ({ parentBoards, onBoardDelete }: Props): React.ReactNode => {
  // const router = useRouter()
  return (
    parentBoards === undefined ? (
      <h2>No boards was founded.</h2>
    ) : (
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {parentBoards?.map(board => (
          <ParentBoard key={board.id} parentBoard={board} onBoardDelete={onBoardDelete} />
        ))}
      </ul>
    )
  )
}
