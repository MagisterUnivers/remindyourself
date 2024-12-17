import { ParentItemsHolder } from '@/components/Lists/ParentItemsHolder'
import { Header } from '@/components/Header/Header'
import { Section } from '@/components/Section/Section'

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
        <Section>
          <ParentItemsHolder />
        </Section>
      </main>
      <footer className='hidden' />
    </>
  )
}
