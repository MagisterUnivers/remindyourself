import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'
import { Header } from '@/components/Header/Header'
import { Section } from '@/components/Section/Section'
import { CreateParentBoardModal } from '@/components/Modals/CreateParentBoardModal'
import { getBoardsAction } from '@/services/Firebase/actions'

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
        <Section classNames='p-[25px]'>
          <CreateParentBoardModal />
        </Section>
        <Section>
          <ParentItemsHolder parentBoards={parentBoards} />
        </Section>
      </main>
      <footer className='hidden' />
    </>
  )
}
