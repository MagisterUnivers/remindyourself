'use client'

import { Eraser, Pencil } from 'lucide-react'
// import { useRouter } from 'next/navigation'


export const ChildrenBoard = (): React.ReactNode => {
  // const router = useRouter()
  return (
    <li className='w-28 h-28 p-2 bg-gray-700 flex flex-col justify-between cursor-pointer text-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 ease-in-out'>
      <h2>Title child</h2>
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
        >
          <Eraser />
        </button>
      </div>
    </li>
  )
}
