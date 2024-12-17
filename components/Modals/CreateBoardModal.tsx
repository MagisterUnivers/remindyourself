'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { AddItemButton } from '../Buttons/AddItemButton'
import { addBoardAction, addTaskAction } from '@/services/Firebase/actions'

interface Props {
  onBoardCreate: (board: ParentBoard | ChildrenBoard) => void
  boardId: string
  isChildren: boolean
}

export const CreateBoardModal = ({ onBoardCreate, isChildren, boardId }: Props): React.ReactNode => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    boardTitle: ''
  })

  const handleOpenModal = (): void => {
    setIsOpen(true)
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setLoading(true)
    const userId = JSON.parse((localStorage.getItem('user')) as string).uid

    if (isChildren !== undefined) {
      addTaskAction(boardId, formData.boardTitle).then((res) => {
        onBoardCreate(res as ChildrenBoard)
        setFormData({ boardTitle: '' })
        setLoading(false)
      }).catch((err) => console.error(err))
    } else {
      addBoardAction(userId, formData.boardTitle).then((res) => {
        onBoardCreate(res as ParentBoard)
        setFormData({ boardTitle: '' })
        setLoading(false)
      }).catch((err) => console.error(err))
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <AddItemButton
          title={isChildren ? 'Add Children Board' : 'Add Parent Board'}
          isWithIcon
          onClickF={handleOpenModal}
        />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>{isChildren ? 'Create Children Board' : 'Create  Parent Board'}</DialogTitle>
          <DialogDescription>
            {isChildren
              ? 'You need to enter Children Board Name.'
              : 'You need to enter Parent Board Name.'}
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
