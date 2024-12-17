import { Suspense } from 'react'
import { AuthForm } from '@/components/Forms/AuthForm'

export const generateMetadata = async (): Promise<MetadataResultTitle> => {
  return {
    title: 'RY - Login',
    openGraph: {
      title: 'RY - Login'
    }
  }
}

const Page = async (): Promise<React.ReactNode> => {
  return (
    <>
      <header className='hidden' />
      <main className='relative'>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthForm isLogin />
          </Suspense>
        </div>
      </main>
      <footer className='hidden' />
    </>
  )
}

export default Page
