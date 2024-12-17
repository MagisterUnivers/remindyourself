'use client'

// import { useRouter } from "next/navigation"
import { ParentBoard } from "../Boards/ParentBoard"

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
