'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
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

interface Props {
  //
}

export function CreateParentBoardModal({ }: Props): React.ReactNode {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    boardTitle: ''
  })

  function onChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>): void {
    e.preventDefault()
    setLoading(true)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <AddItemButton title='Add Parent Board' isWithIcon />
      </DialogTrigger>
      <DialogContent className='sm:max-w-[425px]'>
        <DialogHeader>
          <DialogTitle>Create Parent Board</DialogTitle>
          <DialogDescription>
            You need to enter Parent Board Name.
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
