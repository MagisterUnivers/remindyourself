'use client'

import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'
import { Section } from '@/components/Section/Section'
import { CreateBoardModal } from '@/components/Modals/CreateBoardModal'
import { useState } from 'react'

interface Props {
  parentBoards: ParentBoards
}

export const ParentToDoWrapper = ({ parentBoards }: Props): React.ReactNode => {
  const [allParentBoards, setAllParentBoards] = useState<ParentBoards | null>(parentBoards)

  const handleAddParentBoard = (board: ParentBoard): void => {
    setAllParentBoards([board, ...allParentBoards as ParentBoards])
  }

  const handleDeleteParentBoard = (board: ParentBoard): void => {
    setAllParentBoards(allParentBoards?.filter(it => it.id !== board.id) as ParentBoards)
  }

  return (
    <>
      <Section classNames='p-[25px]'>
        <CreateBoardModal onBoardCreate={handleAddParentBoard} isChildren={false} boardId='' />
      </Section>
      <Section>
        <ParentItemsHolder parentBoards={allParentBoards} onBoardDelete={handleDeleteParentBoard} />
      </Section>
    </>
  )
}
