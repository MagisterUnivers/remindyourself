import { Suspense } from 'react'
import { AuthForm } from '@/components/Forms/AuthForm'

export async function generateMetadata(): Promise<MetadataResultTitle> {
  return {
    title: 'RY - Login',
    openGraph: {
      title: 'RY - Login'
    }
  }
}

export default async function Page(): Promise<React.ReactNode> {
  return (
    <>
      <header className='hidden' />
      <main className='relative'>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <AuthForm isLogin={false} />
          </Suspense>
        </div>
      </main>
      <footer className='hidden' />
    </>
  )
}
