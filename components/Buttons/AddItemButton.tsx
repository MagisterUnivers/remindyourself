'use client'

import { CirclePlus } from "lucide-react"

interface Props {
  title: string
  isWithIcon: boolean
}

export const AddItemButton = ({ title, isWithIcon, ...props }: Props): React.ReactNode => {
  return (
    <button
      type="button"
      title={title}
      className="border-[3px] border-gray-300 flex items-center gap-2 px-6 py-2 rounded-lg font-semibold text-black bg-white hover:bg-green-300  hover:font-semibold hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 duration-300 ease-in-out"
      {...props}
    >
      {title}
      {isWithIcon && (
        <CirclePlus className='h-3.5 w-3.5' />
      )}
    </button>
  )
}
