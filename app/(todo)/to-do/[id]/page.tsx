import { Header } from '@/components/Header/Header'
import { ChildToDoWrapper } from '@/components/Wrappers/ChildToDoWrapper'
import { getTasksAction } from '@/services/Firebase/actions'

export const dynamic = 'force-dynamic'

export async function generateMetadata({ params }: PageParams): Promise<MetadataResultTitle> {
  const paramsData = await params
  return {
    title: `RY - PBoard: ${paramsData.id as string}`,
    openGraph: {
      title: `RY - PBoard: ${paramsData.id as string}`
    }
  }
}

const Page = async ({ params }: PageParams): Promise<React.ReactNode> => {
  const paramsData = await params
  const childrenBoards: ChildrenBoards = await getTasksAction(paramsData.id)
  return (
    <>
      <header>
        <Header />
      </header>
      <main className='relative'>
        <ChildToDoWrapper childrenBoards={childrenBoards} parentBoardId={paramsData.id} />
      </main>
      <footer className='hidden' />
    </>
  )
}

export default Page
