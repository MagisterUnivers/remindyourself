'use client'

import { checkUserAuth } from "@/utils/check-user-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface Props {
  //
}

export const ParentItemsHolder = ({ }: Props): React.ReactNode => {
  const router = useRouter()

  useEffect(() => {
    const isAuth = checkUserAuth()

    if (isAuth === null) {
      router.push('/login')
    }
  }, [])

  return (
    <div>Hello</div>
  )
}
