import { Suspense } from 'react'
import { checkUserAuth } from '@/utils/check-user-auth'
import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'

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
      <header className='hidden' />
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
