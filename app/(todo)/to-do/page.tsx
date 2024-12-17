import { Header } from '@/components/Header/Header'
import { getBoardsAction } from '@/services/Firebase/actions'
import { ParentToDoWrapper } from '@/components/Wrappers/ParentToDoWrapper'

export async function generateMetadata(): Promise<MetadataResultTitle> {
  return {
    title: 'RY - TO-DO',
    openGraph: {
      title: 'RY - TO-DO'
    }
  }
}

export default async function Page(): Promise<React.ReactNode> {
  const parentBoards: ParentBoards = await getBoardsAction()
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='relative'>
        <ParentToDoWrapper parentBoards={parentBoards} />
      </main>
      <footer className='hidden' />
    </>
  )
}
