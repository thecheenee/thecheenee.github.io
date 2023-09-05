import Image from 'next/image'
import { FullPage, Hero, Question, Work } from '@/components'

export default function Home() {
  return (
    <main className="flex bg-slate-100 dark:bg-slate-950 min-h-screen max-w-full flex-col items-center">
      <FullPage>
        <Hero />
      </FullPage>
      <FullPage>
        <Question />
      </FullPage>
      <FullPage>
        <Work />
      </FullPage>
    </main>
  )
}
