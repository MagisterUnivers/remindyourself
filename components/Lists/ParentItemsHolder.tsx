'use client'

import { ParentBoard } from "../Boards/ParentBoard"
// import { useRouter } from "next/navigation"

interface Props {
  //
}

export const ParentItemsHolder = ({ }: Props): React.ReactNode => {
  // const router = useRouter()
  return (
    <ul>
      <ParentBoard />
    </ul>
  )
}
