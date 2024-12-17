'use client'

import { Section } from '@/components/Section/Section'
import { CreateBoardModal } from '@/components/Modals/CreateBoardModal'
import { useState } from 'react'
import { ChildItemsHolder } from '../Lists/ChildItemsHolder'

interface Props {
  childrenBoards: ChildrenBoards
  parentBoardId: string
}

export const ChildToDoWrapper = ({ childrenBoards, parentBoardId }: Props): React.ReactNode => {
  const [allChildrenBoards, setAllChildrenBoards] = useState<ChildrenBoards | null>(childrenBoards)
  const [selectedBoardId, setSelectedBoardId] = useState<string>('')

  const handleAddChildrenBoard = (board: ChildrenBoard | ParentBoard): void => {
    setAllChildrenBoards([board, ...allChildrenBoards as ChildrenBoards])
  }

  const handleDeleteChildrenBoard = (board: ChildrenBoard): void => {
    setAllChildrenBoards(allChildrenBoards?.filter(it => it.id !== board.id) as ChildrenBoards)
  }

  const handleUpdateChildrenBoard = (board: ChildrenBoard): void => {
    console.log(board)
  }

  const handleChangeSelectedBoardId = (board: ChildrenBoard): void => {
    setSelectedBoardId(board.id)
    void selectedBoardId // temp for eslint
  }

  return (
    <>
      <Section classNames='p-[25px]'>
        <CreateBoardModal
          onBoardCreate={handleAddChildrenBoard}
          isChildren
          boardId={parentBoardId}
        />
      </Section>
      <Section>
        <ChildItemsHolder
          childrenBoards={allChildrenBoards}
          boardId={parentBoardId}
          onBoardDelete={handleDeleteChildrenBoard}
          onBoardSelect={handleChangeSelectedBoardId}
          onBoardUpdate={handleUpdateChildrenBoard}
        />
      </Section>
    </>
  )
}
