import { Suspense } from 'react'
import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'
import { Header } from '@/components/Header/Header'

export async function generateMetadata(): Promise<MetadataResultTitle> {
  return {
    title: 'RY - TO-DO',
    openGraph: {
      title: 'RY - TO-DO'
    }
  }
}

export default async function Page(): Promise<React.ReactNode> {
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='relative'>
        <div>
          <Suspense fallback={<div>Loading...</div>}>
            <ParentItemsHolder />
          </Suspense>
        </div>
      </main>
      <footer className='hidden' />
    </>
  )
}
