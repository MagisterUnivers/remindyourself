import { Suspense } from 'react'
import { LoginForm } from '@/components/Forms/LoginForm'

export async function generateMetadata(): Promise<MetadataResultTitle> {
  return {
    title: 'RY - Login',
    openGraph: {
      title: 'RY - Login'
    }
  }
}

export default async function Page(): Promise<React.ReactNode> {
  // const session: SessionType | null = await getServerSession(authOptions)
  // const lastPropertyData = await getLastProperty()

  // if (lastPropertyData === null) return null

  // if (session !== null) {
  //   redirect('/admin/properties')
  // }

  return (
    <>
      <header className='hidden' />
      <main className='relative'>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <LoginForm />
          </Suspense>
        </div>
      </main>
      <footer className='hidden' />
    </>
  )
}
