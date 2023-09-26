import Image from 'next/image'
import { Nav, FullPage, PageBottom } from '@/common'
import { Hero, Question } from '@/home'

export default function Index() {
  return (
    <main>
      <Nav />
      <FullPage>
        <Hero />
      </FullPage>
      <FullPage>
        <Question />
      </FullPage>
      <PageBottom pageName={'home'} />
    </main>
  )
}
