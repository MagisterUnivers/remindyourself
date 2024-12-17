'use client'

import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  classNames?: string
}

export const Section = ({ children, classNames }: Props): React.ReactNode => {
  return (
    <section className={cn('p-20 h-full w-full', classNames)}>
      {children}
    </section>
  )
}
