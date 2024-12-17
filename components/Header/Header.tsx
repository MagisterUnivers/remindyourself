'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { CircleUser, Menu, Package2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { checkUserAuth } from '@/utils/check-user-auth'
import { useEffect } from 'react'
import { logoutUserAction } from '@/services/Firebase/actions'

export const Header = (): React.ReactNode => {
  const router = useRouter()

  const handleLogout = (): void => {
    logoutUserAction().then(() => {
      localStorage.removeItem('user')
      router.push('/login')
    }).catch((err) => console.error(err))
  }

  useEffect(() => {
    const isAuth = checkUserAuth()

    if (isAuth === null) {
      router.push('/login')
    }
  }, [])

  return (
    <header className='sticky top-0 flex h-16 items-center gap-4 border-b bg-background px-4 md:px-6'>
      <nav className='hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6'>
        <Link
          href='#'
          className='flex items-center gap-2 text-lg font-semibold md:text-base'
        >
          <Package2 className='h-6 w-6' />
          <span className='sr-only'>Admin Panel</span>
        </Link>
        <Link
          href='/admin/properties'
          className='text-muted-foreground transition-colors hover:text-foreground'
        >
          Properties
        </Link>
      </nav>
      <Sheet>
        <SheetTrigger asChild>
          <Button
            variant='outline'
            size='icon'
            className='shrink-0 md:hidden'
          >
            <Menu className='h-5 w-5' />
            <span className='sr-only'>Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side='left'>
          <nav className='grid gap-6 text-lg font-medium'>
            <Link
              href='#'
              className='flex items-center gap-2 text-lg font-semibold'
            >
              <Package2 className='h-6 w-6' />
              <span className='sr-only'>Admin Panel</span>
            </Link>
            <Link
              href='/admin/settings'
              className='text-muted-foreground transition-colors hover:text-foreground'
            >
              Settings
            </Link>
          </nav>
        </SheetContent>
      </Sheet>
      <div className='flex justify-end w-full items-center gap-4 md:ml-auto md:gap-2 lg:gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='secondary' size='icon' className='rounded-full'>
              <CircleUser className='h-5 w-5' />
              <span className='sr-only'>Toggle user menu</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => { }}>Settings</DropdownMenuItem>
            <DropdownMenuItem>Support</DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => handleLogout()}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
