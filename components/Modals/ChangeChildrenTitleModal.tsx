'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { updateTaskTitleAction } from '@/services/Firebase/actions'

interface Props {
  onBoardUpdate: (board: ChildrenBoard) => void
  onModalClose: () => void
  boardId: string
  isModalOpen: boolean
  selectedBoard: ChildrenBoard | null
}

export const ChangeChildrenTitleModal = ({ onBoardUpdate, onModalClose, selectedBoard, isModalOpen, boardId }: Props): React.ReactNode => {
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    boardTitle: ''
  })

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setLoading(true)

    updateTaskTitleAction(boardId, formData.boardTitle).then(() => {
      onBoardUpdate({
        createdAt: selectedBoard?.createdAt as Date,
        id: selectedBoard?.id as string,
        boardId: selectedBoard?.boardId as string,
        title: formData.boardTitle
      })
      setFormData({ boardTitle: '' })
      setLoading(false)
    }).catch((err) => console.error(err))
  }

  useEffect(() => {
    if (selectedBoard !== null) {
      setFormData({ boardTitle: selectedBoard.title })
    } else setFormData({ boardTitle: '' })
  }, [selectedBoard])

  return (
    <Dialog open={isModalOpen} onOpenChange={onModalClose}>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Enter new name for the board</DialogTitle>
          <DialogDescription>
            You need to enter new name for board title.
          </DialogDescription>
        </DialogHeader>
        <form className='grid gap-4 py-4' onSubmit={handleSubmit}>
          <div className='grid grid-cols-4 items-center gap-4'>
            <Label htmlFor='boardTitle' className='text-right'>
              Board Name
            </Label>
            <Input
              id='boardTitle'
              name='boardTitle'
              placeholder='Test board'
              value={formData.boardTitle}
              onChange={(e) => onChange(e)}
              className='col-span-3'
              required
              maxLength={25}
            />
          </div>
          <div className='flex justify-end'>
            <Button disabled={loading}>Save changes</Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  )
}
