'use client'

import { Eraser, Pencil } from "lucide-react"
// import { useRouter } from "next/navigation"

interface Props {
  //
}

export const ParentBoard = ({ }: Props): React.ReactNode => {
  // const router = useRouter()
  return (
    <li className="w-44 h-44 p-5 flex flex-col cursor-pointer justify-between bg-gray-800 text-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">
      <h2>Title</h2>
      <div className="flex gap-5 justify-center items-center">
        <button
          type="button"
          title="Edit board"
          className="cursor-pointer"
        >
          <Pencil />
        </button>
        <button
          type="button"
          title="Delete board"
        >
          <Eraser />
        </button>
      </div>
    </li>
  )
}
