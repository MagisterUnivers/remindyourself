import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'
import { Header } from '@/components/Header/Header'
import { Section } from '@/components/Section/Section'
import { AddItemButton } from '@/components/Buttons/AddItemButton'

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
        <Section classNames='p-[25px]'>
          <AddItemButton title='Add Parent Board' />
        </Section>
        <Section>
          <ParentItemsHolder />
        </Section>
      </main>
      <footer className='hidden' />
    </>
  )
}
