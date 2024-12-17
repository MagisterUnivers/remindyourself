'use client'

import { cn } from "@/lib/utils"
import { checkUserAuth } from "@/utils/check-user-auth"
import { useRouter } from "next/navigation"
import { useEffect } from "react"

interface Props {
  children: React.ReactNode
  classNames?: string
}

export const Section = ({ children, classNames }: Props): React.ReactNode => {
  const router = useRouter()

  useEffect(() => {
    const isAuth = checkUserAuth()

    if (isAuth === null) {
      router.push('/login')
    }
  }, [])

  return (
    <section className={cn("p-20 h-full w-full", classNames)}>
      {children}
    </section>
  )
}
